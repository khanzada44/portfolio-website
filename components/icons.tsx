import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";

export default function Intro() {
  return (
    <div className="flex items-center gap-2 mb-[15px] p-1">
      <a className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        href="https://www.linkedin.com/in/minham-khanzada"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin className="text-3xl" />
      </a>

      <a className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        href="https://github.com/khanzada44"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithubSquare className="text-3xl" />
      </a>
      <a className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        href="https://www.reddit.com/user/Crazy_Advance8087/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaReddit className="text-3xl" />
      </a>
    </div>
  );
}