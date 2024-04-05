import { FaRegFileAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({ info, reference }) => {
  console.log(info);
  return (
    <motion.div
      drag
      dragSnapToOrigin={true}
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }}
      className="relative card h-[192px] w-[192px] rounded-3xl bg-zinc-900/90 text-white p-5 overflow-hidden "
    >
      <FaRegFileAlt />
      <p className="text-[0.75rem] leading-tight tracking-tight my-5">
        {info.description}
      </p>
      <div className="footer absolute bottom-0 left-0 w-full text-white ">
        <div className="flex justify-between items-center px-6 text-[0.75rem] py-2 ">
          <p>{info.download_size}</p>
          <span className="bg-zinc-800 text-white p-1 rounded-full cursor-pointer">
            {info.close ? <IoMdClose /> : <IoMdDownload />}
          </span>
        </div>
        {info.tag.isOpen ? (
          <div className="bg-white text-black flex justify-center items-center text-[0.75rem] h-[2rem] cursor-pointer">
            {info.tag.tagTitle}
          </div>
        ) : null}
      </div>
    </motion.div>
  );
};

export default Card;
