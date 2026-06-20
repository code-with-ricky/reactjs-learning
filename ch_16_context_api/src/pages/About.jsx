import React from "react";

const About = () => {
  return (
    <div className="px-8 py-3 flex-1 bg-[#eee] dark:bg-[#333] flex flex-col items-center justify-center gap-y-3">
      <h1 className="text-4xl font-bold text-[#333] dark:text-white">About</h1>
      <Button buttonText="Toggle Theme" />
    </div>
  );
};

export default About;
