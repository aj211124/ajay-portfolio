import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-gray-800 shadow-md z-50">
      <nav className="container mx-auto px-6 py-3 overflow-x-auto scrollbar-hide">
        <ul className="flex space-x-6 min-w-max md:justify-center">
          <li>
            <Link
              href="#about"
              className="hover:text-blue-400 transition-colors whitespace-nowrap"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#experience"
              className="hover:text-blue-400 transition-colors whitespace-nowrap"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="hover:text-blue-400 transition-colors whitespace-nowrap"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#skills"
              className="hover:text-blue-400 transition-colors whitespace-nowrap"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="#education"
              className="hover:text-blue-400 transition-colors whitespace-nowrap"
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="hover:text-blue-400 transition-colors whitespace-nowrap"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
