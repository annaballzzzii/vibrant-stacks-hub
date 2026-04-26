import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-purple text-primary-foreground relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-0" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/30 text-secondary border border-secondary/40 font-body text-sm font-semibold mb-4">
              Get In Touch
            </span>
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl mb-5">
              Let's start a new<br />chapter together.
            </h2>
            <p className="font-body text-lg text-primary-foreground/90 mb-8">
              Questions, suggestions or just want to say hello? We'd love to hear from you.
            </p>

            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/librariesni"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-12 h-12 rounded-full bg-background/15 hover:bg-background hover:text-primary border border-primary-foreground/30 flex items-center justify-center transition-smooth"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/LibrariesNI"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-12 h-12 rounded-full bg-background/15 hover:bg-background hover:text-primary border border-primary-foreground/30 flex items-center justify-center transition-smooth"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <a
              href="tel:08451255800"
              className="flex items-center gap-5 p-6 rounded-2xl bg-background/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-background hover:text-primary transition-smooth group"
            >
              <div className="shrink-0 w-14 h-14 rounded-xl bg-secondary text-primary flex items-center justify-center group-hover:scale-110 transition-smooth">
                <Phone size={24} />
              </div>
              <div>
                <p className="font-body text-sm opacity-80">Call us</p>
                <p className="font-heading font-bold text-xl">0345 4 583 583</p>
              </div>
            </a>

            <a
              href="mailto:enquiries@librariesni.org.uk"
              className="flex items-center gap-5 p-6 rounded-2xl bg-background/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-background hover:text-primary transition-smooth group"
            >
              <div className="shrink-0 w-14 h-14 rounded-xl bg-secondary text-primary flex items-center justify-center group-hover:scale-110 transition-smooth">
                <Mail size={24} />
              </div>
              <div>
                <p className="font-body text-sm opacity-80">Email us</p>
                <p className="font-heading font-bold text-lg break-all">enquiries@librariesni.org.uk</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
