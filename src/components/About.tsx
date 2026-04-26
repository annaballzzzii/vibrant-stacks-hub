import { Heart, Sparkles, Target } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Our Story",
    text: "Stacks is a fresh new chapter for Libraries NI, created to make libraries feel more modern, welcoming, and accessible.",
  },
  {
    icon: Sparkles,
    title: "Our Culture",
    text: "At Stacks, we believe libraries should be open, inclusive spaces for everyone. Our culture is built around community, learning, and accessibility.\nWe want every visitor to feel supported, welcomed, and inspired.",
  },
  {
    icon: Target,
    title: "Our Goals",
    text: "Our goal is to modernise the library experience while keeping the heart of Libraries NI the same. We focus on accessibility, discovery, and stronger community connections, while creating a cleaner and more consistent brand that feels relevant for both current users and future generations.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground font-body text-sm font-semibold mb-4">
            About Us
          </span>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground mb-5">
            Way more than books . . .
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Stacks is the new friendly face of LibrariesNI: a place to read, learn, gather and grow.
            Discover the people, purpose and passion behind every shelf.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((v) => (
            <div
              key={v.title}
              className="group p-8 rounded-2xl bg-card border border-border shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-smooth"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-purple flex items-center justify-center mb-5 group-hover:scale-110 transition-smooth">
                <v.icon className="text-primary-foreground" size={26} />
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-3">{v.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed whitespace-pre-line">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
