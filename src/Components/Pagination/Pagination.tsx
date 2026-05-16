import ReactPaginate from "react-paginate";

const Paginate =
  (ReactPaginate as unknown as { default: typeof ReactPaginate }).default ??
  ReactPaginate;

interface PaginationProps {
  totalPages: number;
  page: number;
  setPage: (selected: number) => void;
}

export default function Pagination({
  totalPages,
  page,
  setPage,
}: PaginationProps) {
  return (
    <Paginate
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      pageCount={totalPages}
      forcePage={page - 1}
      onPageChange={(e) => setPage(e.selected + 1)}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
    />
  );
}
