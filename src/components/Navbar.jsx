import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Experience", "#experience"],
    ["Contact", "#contact"],
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-2xl font-bold">
          Fawad<span className="text-violet-500">.</span>
        </a>

        <div className="hidden gap-7 md:flex">
          {links.map(([name, link]) => (
            <a
              key={name}
              href={link}
              className="text-sm text-gray-300 transition hover:text-violet-400"
            >
              {name}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#050816] px-6 py-5 md:hidden">
          {links.map(([name, link]) => (
            <a
              key={name}
              href={link}
              onClick={() => setOpen(false)}
              className="block py-3 text-gray-300 hover:text-violet-400"
            >
              {name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;