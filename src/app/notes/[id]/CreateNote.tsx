"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./CreateNote.module.css";

function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  const create = async () => {
    await fetch("http://127.0.0.1:8090/api/collections/notes/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });

    setContent(" ");
    setTitle(" ");

    router.refresh();
  };

  return (
    <form onSubmit={create} className={styles.CreateNote}>
      <h3>Add a new note</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default CreateNote;
