export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-neutral-900 text-gray-200 shadow-md z-10">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold tracking-wide text-white">
          Joy Oghogho Omorogiuwa<span className="text-pink-400"> QA Engineer</span>
        </h1>
        <ul className="flex space-x-6 text-sm font-medium">
          <li><a href="#about" className="hover:text-pink-400">About</a></li>
          <li><a href="#projects" className="hover:text-pink-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-pink-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
