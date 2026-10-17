import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const router = useRouter();

  const isActive = (href) => {
    if (href === "/") {
      return router.pathname === "/";
    }

    if (href.startsWith("/#")) {
      return false;
    }

    return router.pathname === href;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#0c0b18]/80 px-5 py-4 text-white shadow-lg shadow-purple-950/10 backdrop-blur-xl md:px-8">
        <Link
          href="/"
          onClick={() => setNavOpen(false)}
          className="group flex items-center gap-3"
          aria-label="Katia Ghezali - Home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#7764EA]/40 bg-[#7764EA]/10 font-bold text-[#a99cff] transition duration-300 group-hover:border-[#7764EA] group-hover:bg-[#7764EA]/20">
            KG
          </span>

          <span className="hidden text-sm font-semibold tracking-wide sm:block">
            KATIA GHEZALI
            <span className="mt-1 block text-xs font-normal tracking-widest text-gray-400">
              SOFTWARE ENGINEER
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className={`relative block rounded-xl px-3 py-2 text-sm transition duration-300 ${
                  isActive(href)
                    ? "bg-[#7764EA]/15 text-[#b6aaff]"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {label}
                {isActive(href) && (
                  <span className="absolute inset-x-3 -bottom-px h-px bg-[#7764EA]" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setNavOpen(!navOpen)}
          className="rounded-lg border border-white/10 p-2 text-gray-200 transition hover:border-[#7764EA]/50 hover:text-[#b6aaff] lg:hidden"
          aria-label={
            navOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={navOpen}
        >
          {navOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        {navOpen && (
          <div className="absolute left-0 right-0 top-[calc(100%+0.75rem)] rounded-2xl border border-white/10 bg-[#0c0b18]/95 p-3 shadow-2xl shadow-purple-950/30 backdrop-blur-xl lg:hidden">
            <ul className="flex flex-col gap-1">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    onClick={() => setNavOpen(false)}
                    className={`block rounded-xl px-4 py-3 transition ${
                      isActive(href)
                        ? "bg-[#7764EA]/15 text-[#b6aaff]"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
