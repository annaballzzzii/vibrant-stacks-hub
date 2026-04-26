import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-10">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-purple flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold">S</span>
          </div>
          <span className="font-heading font-bold text-lg">Stacks · LibrariesNI</span>
        </div>

        <p className="font-body text-sm opacity-70 text-center">
          © {new Date().getFullYear()} LibrariesNI. All rights reserved.
        </p>

        <div className="flex gap-3">
          <a href="https://www.instagram.com/librariesni" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-smooth">
            <Instagram size={16} />
          </a>
          <a href="https://www.facebook.com/LibrariesNI" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-smooth">
            <Facebook size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
