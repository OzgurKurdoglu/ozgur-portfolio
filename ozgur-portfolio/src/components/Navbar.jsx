import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

  }, [menuOpen])

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop:blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          <a href="#home" className="font-mono text-xl font-bold">
            <span className="bg-gradient-to-r from-blue-500 to-purple-100 bg-clip-text text-transparent">ozgur</span>
            <span className="bg-gradient-to-r from-purple-100 to-indigo-500 bg-clip-text text-transparent">.kurdoglu</span>
          </a>

          <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-6 text-xl">
            {[
              { label: "Home", href: "#home" },
              { label: "About", href: "#about" },
              { label: "Projects", href: "#projects" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-white px-4 py-1 rounded-xl transition-all duration-300 transform hover:scale-105 hover:bg-indigo-500"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>

  );
};
