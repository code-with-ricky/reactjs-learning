import { useState } from "react";
import NewNote from "./NewNote";
import NoteList from "./NoteList";

const NoteBox = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "React Fundamentals",
      content:
        "Learned about components, props, and state management. JSX syntax makes it easy to write UI. React hooks like useState and useEffect simplify component logic.",
      createdAt: Date.now() - 3600000, // 1 hour ago
    },
    {
      id: 2,
      title: "CSS Grid Layout",
      content:
        "CSS Grid is powerful for creating complex layouts. Grid template areas make positioning intuitive. Learned about auto-fit and minmax for responsive designs.",
      createdAt: Date.now() - 86400000, // 1 day ago
    },
    {
      id: 3,
      title: "JavaScript Async",
      content:
        "Promises and async/await patterns simplify asynchronous operations. Try-catch blocks handle errors cleanly. Learned the difference between callbacks and promises.",
      createdAt: Date.now() - 172800000, // 2 days ago
    },
    {
      id: 4,
      title: "Tailwind CSS Tips",
      content:
        "Utility-first CSS approach is very productive. Responsive prefixes like md: and lg: make mobile-first design easier. Custom configuration extends Tailwind capabilities.",
      createdAt: Date.now() - 259200000, // 3 days ago
    },
    {
      id: 5,
      title: "Git Workflow",
      content:
        "Master and development branches keep the codebase stable. Feature branches allow parallel development. Commit messages should be clear and descriptive.",
      createdAt: Date.now() - 345600000, // 4 days ago
    },
    {
      id: 6,
      title: "API Integration",
      content:
        "RESTful APIs use standard HTTP methods. Error handling is crucial for robust applications. JWT tokens provide secure authentication mechanisms.",
      createdAt: Date.now() - 432000000, // 5 days ago
    },
    {
      id: 7,
      title: "Component Architecture",
      content:
        "Breaking UI into smaller components improves reusability. Props pass data down, callbacks pass events up. Context API helps avoid prop drilling.",
      createdAt: Date.now() - 518400000, // 6 days ago
    },
    {
      id: 8,
      title: "Database Design",
      content:
        "Normalization reduces data redundancy. Indexes speed up queries. Foreign keys maintain referential integrity across tables.",
      createdAt: Date.now() - 604800000, // 7 days ago
    },
  ]);

  return (
    <section className="notes-container mt-4 flex gap-x-4 flex-1 w-full">
      <NewNote notes={notes} setNotes={setNotes} />
      <NoteList notes={notes} />
    </section>
  );
};

export default NoteBox;
