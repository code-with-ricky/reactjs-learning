const NoteCard = ({ title, createdAt, content, isExpanded, onToggle }) => {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffSecs = Math.floor(diffMs / 1000);
    const diffMins = Math.floor(diffSecs / 60);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffSecs < 60) return "just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;

    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: date.getFullYear() !== now.getFullYear() ? "numeric" : undefined,
    });
  };

  return (
    <div className="note-card bg-[#444] border border-[#5c5c5c] rounded-lg p-4 cursor-pointer hover:border-[#00a6fb] hover:bg-[#4a4a4a] transition-all ease-linear">
      <div className="flex justify-between items-start" onClick={onToggle}>
        <div className="flex-1">
          <h3 className="text-white font-semibold text-lg truncate">{title}</h3>
          <p className="text-[#999] text-sm mt-1">{formatDate(createdAt)}</p>
        </div>
        <span className="text-[#00a6fb] ml-2 text-xl">
          {isExpanded ? "−" : "+"}
        </span>
      </div>

      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-[#5c5c5c]">
          <p className="text-[#ddd] text-sm leading-relaxed line-clamp-4">
            {content}
          </p>
        </div>
      )}
    </div>
  );
};

export default NoteCard;
