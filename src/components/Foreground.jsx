import { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  const ref = useRef(null);
  const data = [
    {
      description:
        "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quos laudantium quaerat hdfh ihfdh kfdfhd khfdfd hfd hf ldffdhfdhfdfdh .",
      download_size: "0.6MB",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "blue",
      },
    },
    {
      description: "Hello there, this is nibbi's card.",
      download_size: "1.2MB",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "white",
      },
    },
    {
      description: "Hello there, this is nibbi's card.",
      download_size: "1.2MB",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "white",
      },
    },
    {
      description: "Hello there, this is nibbi's card.",
      download_size: "1.2MB",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "white",
      },
    },
  ];

  return (
    <div
      ref={ref}
      className="foreground absolute z-[4] w-full h-screen py-[1rem] px-[1rem] flex flex-wrap gap-5"
    >
      {data.map((item, index) => (
        <Card key={index} info={item} reference={ref} />
      ))}
    </div>
  );
};

export default Foreground;
