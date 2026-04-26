import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/stacks-logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Find Your Stacks", href: "#finder" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-background/85 backdrop-blur-lg shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Stacks logo" className="w-9 h-9 object-contain" />
          <span className="font-heading font-bold text-xl text-foreground">
            Stacks<span className="text-primary">.</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body font-medium text-foreground/80 hover:text-primary transition-smooth"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#finder"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-purple text-primary-foreground font-body font-semibold shadow-soft hover:shadow-elegant transition-smooth"
        >
          Find Your Stacks
        </a>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border shadow-soft">
          <ul className="flex flex-col p-6 gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block font-body font-medium text-foreground/80 hover:text-primary transition-smooth"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#finder"
                onClick={() => setOpen(false)}
                className="inline-flex w-full justify-center items-center px-5 py-3 rounded-full bg-gradient-purple text-primary-foreground font-body font-semibold shadow-soft"
              >
                Find Your Stacks
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
