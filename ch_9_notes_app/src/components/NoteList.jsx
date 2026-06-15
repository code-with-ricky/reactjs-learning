import React from "react";
import NoteCard from "./NoteCard";
import { useState } from "react";
import { useMemo } from "react";

const NoteList = ({ notes }) => {
  const [searchItem, setSearchItem] = useState("");
  const [sortBy, setSortBy] = useState("latest");
  const [expandedNotes, setExpandedNotes] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  // toggle expansion to notes to read the content
  const toggleNoteExpand = (noteId) => {
    setExpandedNotes((prev) => ({
      ...prev,
      [noteId]: !prev[noteId],
    }));
  };

  // filter the notes based on the search field content and sort by 
  const filteredAndSortedNotes = useMemo(() => {
    // filter based on search bar content
    let filtered = notes.filter(
      (note) =>
        note.title.toLowerCase().includes(searchItem.toLowerCase()) ||
        note.content.toLowerCase().includes(searchItem.toLowerCase()),
    );

    // filter by sort by
    if (sortBy === "latest") {
      filtered.sort((a, b) => b.createdAt - a.createdAt);
    } else if (sortBy === "oldest") {
      filtered.sort((a, b) => a.createdAt - b.createdAt);
    } else if (sortBy === "a-z") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    // return final filtered records
    return filtered;
  }, [searchItem, sortBy, notes]); // this runs whenever searchItem or sortBy or notes value changes

  // Pagination
  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredAndSortedNotes.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedNotes = filteredAndSortedNotes.slice(
    startIdx,
    startIdx + itemsPerPage,
  );

  return (
    <div className="note-lists w-2/3 border-b-6 border-x border-[#5c5c5c] rounded-xl flex flex-col h-full">
      {/* Header */}
      <header className="px-5 py-4 bg-[#5c5c5c] rounded-t-xl flex gap-x-4 items-center">
        <h2 className="text-white text-xl font-semibold shrink-0">All Notes</h2>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search notes..."
          className="flex-1 px-3 py-2 bg-[#444] border border-[#5c5c5c] rounded-lg text-[#ddd] placeholder:text-[#999] outline-none focus:border-[#00a6fb]"
          value={searchItem}
          onChange={(e) => {
            setSearchItem(e.target.value);
            setCurrentPage(1);
          }}
        />

        {/* Sort Dropdown */}
        <select
          className="px-3 py-2 bg-[#444] border border-[#5c5c5c] rounded-lg text-[#ddd] outline-none focus:border-[#00a6fb]"
          onChange={(e) => {
            setSortBy(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
          <option value="a-z">A-Z</option>
        </select>
      </header>

      {/* Notes List */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
        {paginatedNotes.length > 0 ? (
          paginatedNotes.map((note) => (
            <NoteCard
              key={note.id}
              title={note.title}
              createdAt={note.createdAt}
              content={note.content}
              isExpanded={expandedNotes[note.id] || false}
              onToggle={() => toggleNoteExpand(note.id)}
            />
          ))
        ) : (
          <p className="text-center text-[#999] py-8">No notes found.</p>
        )}
      </div>

      {/* Footer */}
      <footer className="px-5 py-4 bg-[#444] border-t border-[#5c5c5c] rounded-b-xl flex items-center justify-between">
        <p className="text-[#999] text-sm">
          {filteredAndSortedNotes.length > 0
            ? `${startIdx + 1} - ${Math.min(
                startIdx + itemsPerPage,
                filteredAndSortedNotes.length,
              )} of ${filteredAndSortedNotes.length}`
            : "No notes"}
        </p>

        <div className="flex gap-x-2">
          <button
            onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
            disabled={currentPage === 1}
            className="px-3 py-2 bg-[#5c5c5c] text-[#ddd] rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#6c6c6c] transition-all ease-linear"
          >
            Prev
          </button>

          <div className="flex items-center gap-x-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 rounded-lg transition-all ease-linear ${
                  currentPage === page
                    ? "bg-[#00a6fb] text-white font-semibold"
                    : "bg-[#5c5c5c] text-[#ddd] hover:bg-[#6c6c6c]"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-2 bg-[#5c5c5c] text-[#ddd] rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#6c6c6c] transition-all ease-linear"
          >
            Next
          </button>
        </div>
      </footer>
    </div>
  );
};

export default NoteList;
