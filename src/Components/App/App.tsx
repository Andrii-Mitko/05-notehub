import { useEffect } from "react";
import NoteList from "../NoteList/NoteList";
import { fetchNotes } from "../../services/noteService";

import css from "./App.module.css";

export default function App() {
  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className={css.app}>
      <header className={css.toolbar}>{/* SearchBox */}</header>

      <NoteList />
    </div>
  );
}
