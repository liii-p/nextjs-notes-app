import React from "react";
import Note from "./Note";
import CreateNote from "./[id]/CreateNote";
import styles from "./page.module.css";

async function getNotes() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30",
    { cache: "no-store" }
  );
  const data = await res.json();
  return data?.items as any[];
}

async function NotesPage() {
  const notes = await getNotes();
  return (
    <div className={styles.NotesPage}>
      <h1>Notes</h1>
      <div>
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>

      <CreateNote />
    </div>
  );
}

export default NotesPage;
