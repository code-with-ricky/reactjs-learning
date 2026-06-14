const TargetAudienceGroup = ({
    groupNumber,
    groupText,
    groupImage,
    buttonText,
    buttonColor
}) => {
  const color = buttonColor || "bg-[#bff04a]";
  const label = buttonText || "Underbanked";

  return (
    <div className="relative h-full rounded-4xl overflow-hidden">
      <img
        src={groupImage}
        alt="Target audience"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60 px-10 py-8 flex flex-col justify-between gap-y-4">
        <div className="group-number h-10 w-10 rounded-full bg-white flex items-center justify-center">
          <p className="text-xl font-semibold">{groupNumber}</p>
        </div>

        <div className="group-content flex flex-col gap-y-6">
          <p className="text-lg font-medium text-white">
            {groupText}
          </p>

          <button
            type="button"
            className="inline-flex items-center bg-transparent cursor-pointer"
            aria-label={label}
          >
            <span className={`rounded-full text-black font-medium px-5 py-2 flex items-center shadow-md ${color}`}>
              {label}
            </span>

            <span className={`-ml-3 w-3 h-3 rounded-full ${color}`} aria-hidden></span>

            <span className={`-ml-3 w-10 h-10 rounded-full flex items-center justify-center shadow-md ${color}`} aria-hidden>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 6l6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TargetAudienceGroup;
