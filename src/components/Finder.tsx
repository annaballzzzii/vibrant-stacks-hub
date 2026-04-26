import { MapPin, Phone, Search } from "lucide-react";
import { useMemo, useState } from "react";

// Sample LibrariesNI branches — easy to extend with the full Google list later
const libraries = [
  { name: "Belfast Central Library", address: "Royal Avenue, Belfast BT1 1EA", phone: "028 9050 9150", region: "Belfast" },
  { name: "Lisburn City Library", address: "Linenhall Street, Lisburn BT28 1FJ", phone: "028 9266 9345", region: "Lisburn" },
  { name: "Derry Central Library", address: "35 Foyle Street, Derry BT48 6AL", phone: "028 7127 2300", region: "Derry" },
  { name: "Bangor Carnegie Library", address: "Hamilton Road, Bangor BT20 4LH", phone: "028 9127 0591", region: "Bangor" },
  { name: "Armagh City Library", address: "39 Market Street, Armagh BT61 7BU", phone: "028 3752 4072", region: "Armagh" },
  { name: "Newry City Library", address: "79 Hill Street, Newry BT34 1DG", phone: "028 3026 4683", region: "Newry" },
  { name: "Coleraine Library", address: "Queen Street, Coleraine BT52 1BE", phone: "028 7034 2561", region: "Coleraine" },
  { name: "Omagh Library", address: "1 Spillars Place, Omagh BT78 1HL", phone: "028 8224 4821", region: "Omagh" },
];

const Finder = () => {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return libraries;
    return libraries.filter(
      (l) =>
        l.name.toLowerCase().includes(q) ||
        l.address.toLowerCase().includes(q) ||
        l.region.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <section id="finder" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground font-body text-sm font-semibold mb-4">
            Library Finder
          </span>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground mb-5">
            Find Your Stacks
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Search by town, postcode or branch name to find your nearest LibrariesNI location.
          </p>
        </div>

        {/* Search bar */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try 'Belfast' or 'BT1'..."
              className="w-full pl-14 pr-5 py-4 rounded-full border-2 border-border bg-card font-body text-foreground shadow-soft focus:outline-none focus:border-primary focus:shadow-elegant transition-smooth"
            />
          </div>
        </div>

        {/* Results grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {filtered.map((lib) => (
            <a
              key={lib.name}
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(lib.name + " " + lib.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-muted hover:bg-card border border-transparent hover:border-primary/30 shadow-soft hover:shadow-elegant transition-smooth"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-gradient-purple flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <MapPin className="text-primary-foreground" size={18} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-foreground leading-tight">{lib.name}</h3>
                  <span className="font-body text-xs uppercase tracking-wider text-primary font-semibold">{lib.region}</span>
                </div>
              </div>
              <p className="font-body text-sm text-muted-foreground mb-3 leading-relaxed">{lib.address}</p>
              <div className="flex items-center gap-2 text-sm font-body text-foreground/80">
                <Phone size={14} className="text-primary" />
                <span>{lib.phone}</span>
              </div>
            </a>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center font-body text-muted-foreground mt-8">
            No branches matched "{query}". Try another town or postcode.
          </p>
        )}
      </div>
    </section>
  );
};

export default Finder;
