import React from "react";

const Background = () => {
  return (
    <div className="w-full h-screen fixed z-[2]">
      <div className="text-center py-[2rem] text-zinc-600 w-full absolute top-[5%]">
        Documents.
      </div>
      <h1 className="text-zinc-500 text-[10rem] tracking-tighter leading-none absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] opacity-60">
        Docs.
      </h1>
    </div>
  );
};

export default Background;
