import { useState } from "react";
import ReactPaginate from "react-paginate";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

interface ItemsProps {
  currentItems: number[];
}

function Items({ currentItems }: ItemsProps) {
  return (
    <>
      {currentItems.map((item) => (
        <div key={item}>
          <h3>Item #{item}</h3>
        </div>
      ))}
    </>
  );
}

export default function PaginatedItems() {
  const itemsPerPage = 4;

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = items.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        previousLabel="< previous"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        pageRangeDisplayed={5}
        renderOnZeroPageCount={null}
      />
    </>
  );
}
