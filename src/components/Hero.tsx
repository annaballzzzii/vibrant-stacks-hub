import { BookOpen, MapPin, Users } from "lucide-react";
import bookshelf from "@/assets/bookshelf.png";

const highlights = [
  { icon: BookOpen, label: "Endless Stories", desc: "Thousands of titles to discover", gradient: "bg-gradient-rose" },
  { icon: Users, label: "Community Hub", desc: "Events, clubs & workshops", gradient: "bg-gradient-teal" },
  { icon: MapPin, label: "Across NI", desc: "Branches throughout the region", gradient: "bg-gradient-warm" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 bg-gradient-hero"
    >
      {/* Decorative blurred shapes */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-teal/20 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-warm/20 rounded-full blur-3xl -z-0" />

      <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: copy */}
        <div className="text-primary-foreground animate-fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full backdrop-blur-sm text-foreground border border-secondary/40 font-body text-sm font-semibold mb-6 bg-background">
            ✨ Welcome to LibrariesNI
          </span>
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
            Where every<br />
            <span className="text-warm">story</span> finds<br />
            its reader.
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl">
            Stacks is your community library — a place to discover, learn, and connect.
            Free books, events, and ideas across Northern Ireland.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#finder"
              className="inline-flex items-center px-7 py-3.5 rounded-full bg-background text-primary font-body font-semibold shadow-elegant hover:shadow-glow hover:scale-105 transition-smooth"
            >
              Find Your Stacks
            </a>
            <a
              href="#about"
              className="inline-flex items-center px-7 py-3.5 rounded-full bg-transparent border-2 border-primary-foreground/60 text-primary-foreground font-body font-semibold hover:bg-primary-foreground/10 transition-smooth"
            >
              Visit Us Today
            </a>
          </div>
        </div>

        {/* Right: logo + highlights */}
        <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/40 blur-3xl rounded-full" />
              <img
                src={bookshelf}
                alt="Bookshelf illustration"
                width={500}
                height={300}
                className="relative w-72 md:w-96 lg:w-[28rem] h-auto animate-float drop-shadow-2xl"
              />
            </div>
          </div>

          <div className="grid gap-3 md:gap-4">
            {highlights.map((h, i) => (
              <div
                key={h.label}
                className="flex items-center gap-4 p-4 rounded-2xl bg-background/95 backdrop-blur-sm shadow-elegant hover:translate-x-2 transition-smooth"
                style={{ marginLeft: `${i * 1.25}rem` }}
              >
                <div className={`shrink-0 w-12 h-12 rounded-xl ${h.gradient} flex items-center justify-center shadow-soft`}>
                  <h.icon className="text-white" size={22} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-foreground">{h.label}</h3>
                  <p className="font-body text-xs text-muted-foreground">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
