import Link from "next/link";
import { Nabla } from "next/font/google";
import { FaGithub } from "react-icons/fa";

const nabla = Nabla({
  weight: "400",
  subsets: ["latin"],
});

export default function Nav() {
  return (
    <nav className="flex justify-between items-center px-4 py-3 bg-zinc-900 shadow-zinc-800 shadow sticky top-0 z-10">
      <Link href="/" className={`text-2xl ${nabla.className}`}>
        Where&apos;s Wally?
      </Link>
      <Link
        href="https://github.com/Kwiasek"
        target="_blank"
        rel="noreferrer"
        className="hidden md:flex items-center gap-1 text-lg text-gray-400 hover:text-current transition-colors"
      >
        <FaGithub />
        Kwiasek
      </Link>
      <Link
        href="/scoreboard"
        className="text-lg text-gray-400 hover:text-current transition-colors"
      >
        Scoreboard
      </Link>
    </nav>
  );
}
