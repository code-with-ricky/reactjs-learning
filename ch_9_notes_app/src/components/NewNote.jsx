import FormField from "./FormField";
import TextAreaField from "./TextAreaField";
import Button from "./Button";
import { useState } from "react";

const NewNote = ({ notes, setNotes }) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    setNote((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!note.title.trim() || !note.content.trim()) {
      return;
    }

    const newNote = {
      ...note,
      id: notes.length + 1,
      createdAt: Date.now(),
    };

    setNotes((prev) => [...prev, newNote]);
    handleClear();
  };

  const handleClear = () => {
    setNote({
      title: "",
      content: "",
    });
  };

  return (
    <div className="new-note w-1/3 border-b-6 border-x border-[#5c5c5c] rounded-xl flex flex-col">
      <header className="bg-[#5c5c5c] rounded-t-xl px-5 py-4 text-white text-xl font-semibold">
        New Note
      </header>
      <div className="px-5 py-4 flex flex-col gap-y-4 flex-1">
        <FormField
          label="Title"
          isRequired={true}
          name="title"
          id="title"
          type="text"
          placeholder="Enter Title"
          value={note.title}
          handleChange={handleChange}
        />
        <TextAreaField
          label="Content"
          name="content"
          id="content"
          placeholder="Enter content"
          value={note.content}
          handleChange={handleChange}
        />
        <div className="flex gap-x-3 mt-auto">
          <Button variant="primary" action={handleSubmit}>
            Submit
          </Button>
          <Button variant="secondary" action={handleClear}>
            Clear
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewNote;
