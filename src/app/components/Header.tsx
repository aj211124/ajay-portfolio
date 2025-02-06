import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-gray-800 shadow-md z-50">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link
              href="#about"
              className="hover:text-blue-400 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#experience"
              className="hover:text-blue-400 transition-colors"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="hover:text-blue-400 transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#skills"
              className="hover:text-blue-400 transition-colors"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="#education"
              className="hover:text-blue-400 transition-colors"
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
