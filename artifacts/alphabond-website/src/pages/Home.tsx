import React, { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Menu, X, ArrowRight, ShieldCheck, MapPin, Phone, Mail,
  ChevronDown, Truck, CloudRain, FlaskConical,
  Package, HeartHandshake, Users, Clock,
  Factory, CheckCircle2, Download, Award, FileText
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

/* ─── Real product data from alphabond.in ─────────────────────────── */
const TILEGRIP_GRADES = [
  {
    grade: "X1",
    subtitle: "Standard Adhesive",
    img: "/images/real-tx1.png",
    desc: "Standard polymer-modified tile adhesive for everyday applications. Ideal for ceramic, vitrified, and highly porous tiles on indoor walls and floors.",
    applications: ["Ceramic tiles – internal/external floors", "Vitrified tiles – internal floors", "Highly porous tiles – prevents debonding"],
    specs: [
      { label: "Open Time", value: "~20 min @ 20°C" },
      { label: "Pot Life", value: "~120 min" },
      { label: "Shear Strength", value: "> 1.0 N/mm²" },
      { label: "Tensile Strength", value: "> 0.5 N/mm²" },
      { label: "Coverage", value: "4–5 m² per 20 kg @ 3 mm" },
      { label: "Packaging", value: "20 kg Bag" },
    ],
  },
  {
    grade: "X2",
    subtitle: "Heavy-Duty Adhesive",
    img: "/images/real-tx2.png",
    appImg: "/images/real-tx2-app.jpg",
    desc: "Polymer-enhanced adhesive for large-format and heavy tiles. Superior flexibility and bond for indoor/outdoor spaces and high-traffic installations.",
    applications: ["Large-format vitrified tiles – floors", "Porcelain & ceramic – high-traffic areas", "Natural stone – medium-weight", "Indoor & outdoor floor installations"],
    specs: [
      { label: "Open Time", value: "~20 min @ 20°C" },
      { label: "Pot Life", value: "~120 min" },
      { label: "Shear Strength", value: "> 1.25 N/mm²" },
      { label: "Tensile Strength", value: "> 1.0 N/mm²" },
      { label: "Coverage", value: "Per 20 kg bag" },
      { label: "Packaging", value: "20 kg Bag" },
    ],
  },
  {
    grade: "X3",
    subtitle: "Premium – Natural Stone & Large Format",
    img: "/images/real-tx3.png",
    desc: "Premium-grade for natural stone, marble, granite, and large-format tiles. Enhanced bonding, flexibility, and extended open time for demanding applications.",
    applications: ["Maximum adhesion for oversized tiles", "Granite, marble & natural stone walls", "High-traffic malls, lobbies, corridors", "Demanding exterior installations"],
    specs: [
      { label: "Open Time", value: "~20–25 min @ 20°C" },
      { label: "Pot Life", value: "~120 min" },
      { label: "Shear Strength", value: "> 1.5 N/mm²" },
      { label: "Tensile Strength", value: "> 1.0 N/mm²" },
      { label: "Coverage", value: "Per 20 kg bag" },
      { label: "Packaging", value: "20 kg Bag" },
    ],
  },
  {
    grade: "X4",
    subtitle: "Extra-Strength – Cladding & Façades",
    img: "/images/real-tx4.png",
    desc: "Ultimate performance adhesive for heavy stone, cladding, and demanding exterior or interior applications. Maximum bond strength, weather resistance, unmatched reliability.",
    applications: ["Dense stones – granite/marble wall cladding", "Heavy-load industrial & commercial floors", "Oversized and thick tile installation", "Outdoor façades with extreme weather exposure"],
    specs: [
      { label: "Open Time", value: "~20–25 min @ 20°C" },
      { label: "Pot Life", value: "~120 min" },
      { label: "Shear Strength", value: "> 1.5 N/mm²" },
      { label: "Tensile Strength", value: "> 1.0 N/mm²" },
      { label: "Coverage", value: "Per 20 kg bag" },
      { label: "Packaging", value: "20 kg Bag" },
    ],
  },
];

const ALPHAGROUT_GRADES = [
  {
    grade: "X1",
    subtitle: "Non-Shrink Precision Grout",
    img: "/images/real-ag1.png",
    desc: "Cement-based, non-shrink, polymer-enriched precision grout for machine foundations, column joints, and structural anchor applications. Formulated with Portland cement, graded fillers, and controlled expansion additives for high early strength.",
    applications: ["Machine foundation grouting", "Column joints and precast construction gaps", "Grout anchors and structural anchor bolts", "Base plate of turbines, compressors & heavy machinery"],
    specs: [
      { label: "Density", value: "2200–2250 kg/m³" },
      { label: "Young's Modulus", value: "25 kN/mm²" },
      { label: "Compressive Strength (1D)", value: "> 10 N/mm²" },
      { label: "Compressive Strength (7D)", value: "> 35 N/mm²" },
      { label: "Compressive Strength (28D)", value: "> 45 N/mm²" },
      { label: "Packaging", value: "25 kg Bag" },
    ],
  },
  {
    grade: "X2",
    subtitle: "High-Strength Precision Grout",
    img: "/images/real-ag2.png",
    desc: "Extended-aggregate grade precision grout for larger-volume applications requiring higher compressive strength. Accepts well-graded coarse aggregates up to 20 mm. Delivers superior structural performance with the same reliable non-shrink properties as X1.",
    applications: ["Large-volume machine foundation grouting", "Column joints and precast construction voids", "Structural anchor bolt grouting", "Base plate grouting for turbines and heavy plant"],
    specs: [
      { label: "Density", value: "2200–2250 kg/m³" },
      { label: "Young's Modulus", value: "28 kN/mm²" },
      { label: "Compressive Strength (1D)", value: "> 25 N/mm²" },
      { label: "Compressive Strength (7D)", value: "> 45 N/mm²" },
      { label: "Compressive Strength (28D)", value: "> 65 N/mm²" },
      { label: "Packaging", value: "25 kg Bag" },
    ],
  },
];

const SECTORS = [
  {
    title: "Residential & Commercial",
    img: "/images/sector-residential.png",
    badge: "01",
    desc: "Homes, luxury apartments, office towers, and malls. Tilegrip X2/X3 for premium large-format tiles. Blockgrip X for AAC block walls. Plastogrip X for column and beam plastering.",
    products: ["Tilegrip X2 / X3", "Blockgrip X", "Plastogrip X", "Alphagrout X1"],
  },
  {
    title: "Infrastructure Projects",
    img: "/images/sector-infrastructure.png",
    badge: "02",
    desc: "Bridges, highways, metros, and public works. Tilegrip X4 for structural tile cladding. Proven in projects across Gujarat and Maharashtra.",
    products: ["Tilegrip X4", "Blockgrip X"],
  },
  {
    title: "Industrial & Institutional",
    img: "/images/sector-industrial.png",
    badge: "03",
    desc: "Factories, warehouses, hospitals, and schools where chemical resistance, heavy-duty bonding, and long service life are critical. Tilegrip X4 for heavy-load floors.",
    products: ["Tilegrip X3 / X4", "Alphagrout X1 / X2"],
  },
  {
    title: "Renovation & Remodeling",
    img: "/images/sector-renovation.png",
    badge: "04",
    desc: "Tile replacement, heritage restoration, and wall finishing upgrades. Tilegrip X3 for tile-on-tile application. Plastogrip X for delamination repair without hacking.",
    products: ["Tilegrip X3", "Plastogrip X"],
  },
];

/* ─── Component ───────────────────────────────────────────────────── */
export function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTilegrip, setActiveTilegrip] = useState(0);
  const [activeAlphagrout, setActiveAlphagrout] = useState(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: [string, string][] = [
    ["Products", "#products"], ["Solutions", "#solutions"],
    ["Clients", "#clients"], ["Job Work", "#job-work"],
    ["Blog", "/blog"], ["About", "#about"], ["Contact", "#contact"],
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* ── Navbar ─────────────────────────────────────────── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/96 backdrop-blur-md shadow-sm border-b border-slate-200" : "bg-transparent"}`}>
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="Alphabond" className="h-10 w-auto object-contain" />
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map(([label, href]) => (
              <a key={label} href={href} className={`text-sm font-medium transition-colors ${isScrolled ? "text-slate-600 hover:text-primary" : "text-white/80 hover:text-white"}`}>{label}</a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+919638563857" className={`text-sm font-medium transition-colors ${isScrolled ? "text-slate-700" : "text-white/80"}`}>+91 96385 63857</a>
            <Link href="/brochure">
              <Button variant="outline" className={`rounded-full px-4 h-9 text-sm gap-1.5 ${isScrolled ? "border-slate-300 text-slate-700 hover:bg-slate-50" : "border-white/30 text-white hover:bg-white/10 bg-transparent"}`}>
                <FileText size={13} /> Brochure
              </Button>
            </Link>
            <a href="#contact">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-5 h-9 text-sm">Get a Quote</Button>
            </a>
          </div>

          <button className={`md:hidden ${isScrolled ? "text-slate-900" : "text-white"}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b shadow-lg p-4 flex flex-col gap-3 z-50">
            {navLinks.map(([label, href]) => (
              <a key={label} href={href} className="p-2 font-medium text-slate-700" onClick={() => setMobileMenuOpen(false)}>{label}</a>
            ))}
            <a href="#contact" className="mt-2"><Button className="w-full">Get a Quote</Button></a>
          </div>
        )}
      </header>

      <main className="flex-1">

        {/* ── Hero ───────────────────────────────────────────── */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/images/hero-bg.png" alt="Construction Site" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-900/75 to-slate-900/30" />
          </div>

          <div className="container relative z-10 mx-auto px-4 md:px-8 pt-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold mb-8 tracking-wide">
                <ShieldCheck size={13} className="text-blue-300" />
                ISO-Certified Manufacturer · Bharuch, Gujarat · Since 2008
              </div>
              <h1 className="text-5xl md:text-7xl font-bold font-display text-white leading-[1.03] mb-6">
                Building the<br /><span className="text-blue-400">foundation,</span><br />literally.
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
                From wet sand for India's largest cement majors to a full range of construction chemicals. Kishan Enterprise — operating as <strong className="text-white font-semibold">Alphabond</strong> — manufactures the materials that make modern infrastructure possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <a href="#products"><Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 text-base h-13">Explore Products</Button></a>
                <a href="#contact"><Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 text-base h-13 bg-transparent">Request a Sample</Button></a>
                <Link href="/brochure"><Button size="lg" variant="outline" className="border-white/20 text-white/70 hover:text-white hover:bg-white/10 rounded-full px-8 text-base h-13 bg-transparent gap-2"><FileText size={16} /> Download Brochure</Button></Link>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/15">
                {[
                  { value: "17+", label: "Years in Industry" },
                  { value: "9,000 MT", label: "Monthly Sand Output" },
                  { value: "20+", label: "Major Industrial Clients" },
                ].map(s => (
                  <div key={s.label}>
                    <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">{s.value}</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white/40 animate-bounce">
            <ChevronDown size={20} />
          </div>
        </section>

        {/* ── About ──────────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs uppercase tracking-widest text-primary font-bold mb-4">About the Company</p>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-5">Two decades of materials, manufactured in Gujarat.</h2>
                <p className="text-slate-600 leading-relaxed mb-5">Kishan Enterprise, operating under the brand name <strong>Alphabond™</strong>, is a leading manufacturer and supplier of high-quality building materials and industrial sand solutions based in Bharuch and Surat, Gujarat.</p>
                <p className="text-slate-600 leading-relaxed mb-8">Since 2008 we've supplied wet sand to India's top cement and RMC companies. We entered dry sand manufacturing in 2021, and launched the Alphabond construction chemicals range in 2022 — all from our ISO-certified facility in Bharuch with a dedicated in-house QC lab and our own logistics fleet.</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Established", value: "2008" },
                    { label: "Legal Entity", value: "Kishan Enterprise" },
                    { label: "Certification", value: "ISO-Certified Facility" },
                    { label: "Locations", value: "Bharuch & Surat, Gujarat" },
                  ].map(item => (
                    <div key={item.label} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">{item.label}</div>
                      <div className="font-semibold text-slate-900 text-sm">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-900 rounded-2xl p-6">
                  <p className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-4">Our Product Range</p>
                  <div className="grid grid-cols-4 gap-3">
                    {[
                      { img: "/images/real-tx1.png", name: "TileGrip X1" },
                      { img: "/images/real-tx2.png", name: "TileGrip X2" },
                      { img: "/images/real-tx3.png", name: "TileGrip X3" },
                      { img: "/images/real-tx4.png", name: "TileGrip X4" },
                      { img: "/images/real-blockgrip.png", name: "BlockGrip X" },
                      { img: "/images/real-plastogrip.png", name: "PlastoGrip X" },
                      { img: "/images/real-ag1.png", name: "AlphaGrout X1" },
                      { img: "/images/real-ag2.png", name: "AlphaGrout X2" },
                    ].map(p => (
                      <div key={p.name} className="flex flex-col items-center bg-white/5 rounded-xl p-2 border border-white/10">
                        <img src={p.img} alt={p.name} className="h-16 w-auto object-contain" />
                        <span className="text-[9px] text-slate-400 text-center mt-1.5 leading-tight">{p.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: "17+", label: "Years in Business", sub: "Est. 2008" },
                    { value: "9,000 MT", label: "Monthly Sand Output", sub: "Bharuch plant" },
                    { value: "20+", label: "Major Clients", sub: "Industrial buyers" },
                  ].map(s => (
                    <div key={s.label} className="bg-slate-50 rounded-xl p-4 border border-slate-100 text-center">
                      <div className="text-xl font-display font-bold text-primary">{s.value}</div>
                      <div className="text-[10px] font-semibold text-slate-700 mt-0.5">{s.label}</div>
                      <div className="text-[9px] text-slate-400">{s.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Differentiators ────────────────────────────────── */}
        <section className="py-20 bg-slate-950 text-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-2xl mb-14">
              <p className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-4">What Sets Us Apart</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-4">Three things our competitors can't match.</h2>
              <p className="text-slate-400 text-lg">Owning our logistics, mastering monsoon production, and testing every batch in our own lab. These aren't extras — they're how we keep India's biggest construction companies running on schedule, year-round.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Truck size={26} />, title: "Our own fleet.", tag: "Reliable · On-time · Direct", desc: "We don't outsource transport, so we don't apologize for it either. With a dedicated fleet of trucks under our direct control, we deliver on our schedule — straight from plant to your project site." },
                { icon: <CloudRain size={26} />, title: "Monsoon doesn't stop us.", tag: "Year-round supply · No off-season", desc: "When the rains hit, most regional suppliers shut down for months. Our equipment and process technology are engineered to keep producing through peak monsoon." },
                { icon: <FlaskConical size={26} />, title: "In-house QC lab.", tag: "Tested in · Tested out · Documented", desc: "Every raw material is tested before it enters the plant. Every finished product is tested before it leaves. Every bag, every batch, every shipment meets specification." },
              ].map((item, i) => (
                <div key={i} className="group border border-white/10 rounded-2xl p-8 hover:border-primary/50 hover:bg-white/5 transition-all">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:bg-primary group-hover:text-white transition-colors">{item.icon}</div>
                  <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-400 text-sm mb-5 leading-relaxed">{item.desc}</p>
                  <div className="text-xs font-bold text-blue-400 tracking-widest uppercase">{item.tag}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Products ───────────────────────────────────────── */}
        <section id="products" className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <div>
                <p className="text-xs uppercase tracking-widest text-primary font-bold mb-4">The Alphabond Line</p>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900">Four products.<br />Every project covered.</h2>
              </div>
              <p className="text-slate-600 max-w-sm text-base leading-relaxed">Manufactured in our ISO-certified Bharuch facility. Tested in our in-house lab. Trusted by India's leading construction brands.</p>
            </div>

            {/* ─ TILEGRIP SERIES ─────────────────────────────── */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden mb-6">
              <div className="grid md:grid-cols-5">
                {/* Left: series overview */}
                <div className="md:col-span-2 bg-slate-900 text-white p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
                  <div className="relative z-10">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3 block">01 · Tile Adhesive</span>
                    <h3 className="text-3xl font-display font-bold mb-2">TileGrip Series</h3>
                    <p className="text-blue-300 font-medium mb-5">X1 · X2 · X3 · X4</p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-8">
                      Alphabond's premium range of high-performance, polymer-modified tile adhesives designed for superior bonding strength, durability, and ease of application. Specialized solutions for ceramic, vitrified, porcelain, natural stone, and large-format tiles — for both interior and exterior use.
                    </p>
                    <ul className="space-y-2">
                      {["Water-resistant formulation", "Superior bonding strength", "Saves time & labour", "Indoor & outdoor use", "Packaging: 20 kg Bags"].map(f => (
                        <li key={f} className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 size={13} className="text-blue-400 shrink-0" />{f}</li>
                      ))}
                    </ul>
                  </div>
                  {/* Grade strength ladder */}
                  <div className="relative z-10 mt-8 grid grid-cols-4 gap-1.5">
                    {[
                      { grade: "X1", str: "C1T", bar: "w-1/4" },
                      { grade: "X2", str: "C2T", bar: "w-2/4" },
                      { grade: "X3", str: "C2TE", bar: "w-3/4" },
                      { grade: "X4", str: "C2TES1", bar: "w-full" },
                    ].map(g => (
                      <div key={g.grade} className="bg-white/5 rounded-lg p-2 border border-white/10">
                        <div className="text-xs font-bold text-white mb-0.5">{g.grade}</div>
                        <div className="text-[8px] text-blue-300">{g.str}</div>
                        <div className="mt-1.5 h-1 bg-white/10 rounded-full overflow-hidden">
                          <div className={`h-full bg-primary rounded-full ${g.bar}`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: 4 grade cards */}
                <div className="md:col-span-3 p-6">
                  {/* Grade tabs */}
                  <div className="flex gap-2 mb-5 flex-wrap">
                    {TILEGRIP_GRADES.map((g, i) => (
                      <button
                        key={g.grade}
                        onClick={() => setActiveTilegrip(i)}
                        className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${activeTilegrip === i ? "bg-primary text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                      >
                        {g.grade}
                      </button>
                    ))}
                  </div>

                  {/* Active grade detail */}
                  {(() => {
                    const g = TILEGRIP_GRADES[activeTilegrip];
                    return (
                      <div className="grid sm:grid-cols-2 gap-6">
                        {/* Bag image */}
                        <div className="flex flex-col items-center justify-center bg-slate-50 rounded-2xl p-6 border border-slate-100">
                          <img src={g.img} alt={`TileGrip ${g.grade}`} className="h-56 w-auto object-contain" />
                          <div className="mt-3 text-center">
                            <div className="font-display font-bold text-slate-900">TileGrip {g.grade}</div>
                            <div className="text-xs text-slate-500">{g.subtitle}</div>
                          </div>
                        </div>

                        {/* Info */}
                        <div>
                          <h4 className="font-display font-bold text-slate-900 text-lg mb-2">TileGrip {g.grade}</h4>
                          <p className="text-slate-500 text-xs italic mb-3">{g.subtitle}</p>
                          <p className="text-sm text-slate-600 leading-relaxed mb-4">{g.desc}</p>
                          <div className="space-y-1.5 mb-4">
                            {g.applications.map(a => (
                              <div key={a} className="flex items-start gap-2 text-xs text-slate-700">
                                <CheckCircle2 size={12} className="text-primary mt-0.5 shrink-0" />{a}
                              </div>
                            ))}
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            {g.specs.map(s => (
                              <div key={s.label} className="bg-slate-50 rounded-lg px-3 py-2 border border-slate-100">
                                <div className="text-[9px] text-slate-400 uppercase tracking-wide">{s.label}</div>
                                <div className="text-xs font-semibold text-slate-900">{s.value}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })()}

                  {/* Grade overview strip */}
                  <div className="mt-5 grid grid-cols-4 gap-2 pt-5 border-t border-slate-100">
                    {TILEGRIP_GRADES.map((g, i) => (
                      <button
                        key={g.grade}
                        onClick={() => setActiveTilegrip(i)}
                        className={`rounded-xl p-3 border text-center transition-all ${activeTilegrip === i ? "border-primary bg-primary/5" : "border-slate-100 hover:border-primary/30"}`}
                      >
                        <img src={g.img} alt={g.grade} className="h-12 w-auto object-contain mx-auto mb-1" />
                        <div className="text-xs font-bold text-primary">{g.grade}</div>
                        <div className="text-[9px] text-slate-400 leading-tight">{g.subtitle.split(" – ")[0]}</div>
                      </button>
                    ))}
                  </div>

                  <div className="mt-4 flex gap-3">
                    <a href="#contact"><Button size="sm" className="rounded-full text-xs bg-primary hover:bg-primary/90 text-white gap-1.5"><Download size={12} /> Request TDS</Button></a>
                    <a href="#contact"><Button size="sm" variant="outline" className="rounded-full text-xs gap-1.5">Get a Sample <ArrowRight size={12} /></Button></a>
                  </div>
                </div>
              </div>
            </div>

            {/* ─ ALPHAGROUT SERIES ───────────────────────────── */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden mb-6">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-2 bg-slate-900 text-white p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
                  <div className="relative z-10">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3 block">02 · Structural Precision Grout</span>
                    <h3 className="text-3xl font-display font-bold mb-2">AlphaGrout Series</h3>
                    <p className="text-blue-300 font-medium mb-5">X1 · X2</p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-8">
                      Cement-based, non-shrink, polymer-enriched high-performance precision grouts for structural and industrial applications. Engineered for machine foundation grouting, column joints, structural anchor bolts, and heavy plant base plates — not for tile joints.
                    </p>
                    <ul className="space-y-2">
                      {["Non-shrink, non-expanding formulation", "High early strength — > 10 N/mm² at 1 day", "Compressive strength up to > 65 N/mm² at 28 days", "For machine foundations, turbines & heavy plant", "Packaging: 25 kg Bag"].map(f => (
                        <li key={f} className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 size={13} className="text-blue-400 shrink-0" />{f}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative z-10 mt-8 grid grid-cols-2 gap-2">
                    {[
                      { label: "X1 Compressive (28D)", value: "> 45 N/mm²" },
                      { label: "X2 Compressive (28D)", value: "> 65 N/mm²" },
                      { label: "Density", value: "2200–2250 kg/m³" },
                      { label: "Expansion Type", value: "Non-shrink" },
                    ].map(p => (
                      <div key={p.label} className="bg-white/5 rounded-lg p-2.5 border border-white/10">
                        <div className="text-[8px] text-slate-400 uppercase tracking-wide">{p.label}</div>
                        <div className="text-xs font-bold text-white mt-0.5">{p.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-3 p-6">
                  <div className="flex gap-2 mb-5">
                    {ALPHAGROUT_GRADES.map((g, i) => (
                      <button
                        key={g.grade}
                        onClick={() => setActiveAlphagrout(i)}
                        className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${activeAlphagrout === i ? "bg-primary text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                      >
                        {g.grade}
                      </button>
                    ))}
                  </div>

                  {(() => {
                    const g = ALPHAGROUT_GRADES[activeAlphagrout];
                    return (
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="flex flex-col items-center justify-center bg-slate-50 rounded-2xl p-6 border border-slate-100">
                          <img src={g.img} alt={`AlphaGrout ${g.grade}`} className="h-56 w-auto object-contain" />
                          <div className="mt-3 text-center">
                            <div className="font-display font-bold text-slate-900">AlphaGrout {g.grade}</div>
                            <div className="text-xs text-slate-500">{g.subtitle}</div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-slate-900 text-lg mb-2">AlphaGrout {g.grade}</h4>
                          <p className="text-slate-500 text-xs italic mb-3">{g.subtitle}</p>
                          <p className="text-sm text-slate-600 leading-relaxed mb-4">{g.desc}</p>
                          <div className="space-y-1.5 mb-4">
                            {g.applications.map(a => (
                              <div key={a} className="flex items-start gap-2 text-xs text-slate-700">
                                <CheckCircle2 size={12} className="text-primary mt-0.5 shrink-0" />{a}
                              </div>
                            ))}
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            {g.specs.map(s => (
                              <div key={s.label} className="bg-slate-50 rounded-lg px-3 py-2 border border-slate-100">
                                <div className="text-[9px] text-slate-400 uppercase tracking-wide">{s.label}</div>
                                <div className="text-xs font-semibold text-slate-900">{s.value}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })()}

                  <div className="mt-5 grid grid-cols-2 gap-2 pt-5 border-t border-slate-100">
                    {ALPHAGROUT_GRADES.map((g, i) => (
                      <button
                        key={g.grade}
                        onClick={() => setActiveAlphagrout(i)}
                        className={`rounded-xl p-3 border flex items-center gap-3 transition-all ${activeAlphagrout === i ? "border-primary bg-primary/5" : "border-slate-100 hover:border-primary/30"}`}
                      >
                        <img src={g.img} alt={g.grade} className="h-10 w-auto object-contain" />
                        <div className="text-left">
                          <div className="text-xs font-bold text-primary">AlphaGrout {g.grade}</div>
                          <div className="text-[9px] text-slate-400 leading-tight">{g.subtitle}</div>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="mt-4 flex gap-3">
                    <a href="#contact"><Button size="sm" className="rounded-full text-xs bg-primary hover:bg-primary/90 text-white gap-1.5"><Download size={12} /> Request TDS</Button></a>
                    <a href="#contact"><Button size="sm" variant="outline" className="rounded-full text-xs gap-1.5">Get a Sample <ArrowRight size={12} /></Button></a>
                  </div>
                </div>
              </div>
            </div>

            {/* ─ BLOCKGRIP X ─────────────────────────────────── */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden mb-6">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-2 bg-slate-900 text-white p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
                  <div className="relative z-10">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3 block">03 · Block Jointing Mortar</span>
                    <h3 className="text-3xl font-display font-bold mb-2">BlockGrip X</h3>
                    <p className="text-blue-300 font-medium mb-5">Thin-Bed Ready-Mix Mortar</p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-8">
                      Premium ready-mix mortar for AAC blocks, hollow blocks, concrete blocks, and bricks. Superior bond strength with thin joints (3–5 mm) for faster construction and reduced structural load — a complete replacement for conventional sand-cement mortar.
                    </p>
                    <ul className="space-y-2">
                      {[
                        "High bonding strength for AAC & all masonry types",
                        "Thin joint 3–5 mm — reduces overall structural load",
                        "One 40 kg bag bonds ~40 blocks (900×200×150 mm)",
                        "Shrinkage-controlled — no cracks or debonding",
                        "Packaging: 20 kg & 40 kg Bags",
                      ].map(f => (
                        <li key={f} className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 size={13} className="text-blue-400 shrink-0" />{f}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative z-10 mt-8 grid grid-cols-2 gap-2">
                    {[
                      { label: "Tensile Strength", value: "> 0.6 N/mm²" },
                      { label: "Compressive Strength", value: "> 15 N/mm² @ 14D" },
                      { label: "Bond Strength", value: "> 1.0 N/mm²" },
                      { label: "Pot Life", value: "~2 hrs @ 27°C" },
                    ].map(p => (
                      <div key={p.label} className="bg-white/5 rounded-lg p-2.5 border border-white/10">
                        <div className="text-[8px] text-slate-400 uppercase tracking-wide">{p.label}</div>
                        <div className="text-xs font-bold text-white mt-0.5">{p.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-3 p-8 flex flex-col justify-between">
                  <div className="flex flex-col items-center justify-center bg-slate-50 rounded-2xl p-8 border border-slate-100 mb-6">
                    <img src="/images/real-blockgrip.png" alt="BlockGrip X" className="h-64 w-auto object-contain" />
                    <div className="mt-4 text-center">
                      <div className="font-display font-bold text-slate-900 text-lg">BlockGrip X</div>
                      <div className="text-sm text-slate-500">Block Jointing Mortar · Thin-Bed</div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Suitable Substrates & Applications</p>
                    <div className="grid grid-cols-2 gap-1.5">
                      {[
                        "AAC block surfaces",
                        "Hollow / concrete block surfaces",
                        "Brick masonry",
                        "Stretcher, corner & pillar blocks",
                        "Interior & exterior wall construction",
                        "Bricks and conventional masonry",
                      ].map(s => (
                        <div key={s} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 size={11} className="text-primary shrink-0" />{s}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a href="#contact"><Button size="sm" className="rounded-full text-xs bg-primary hover:bg-primary/90 text-white gap-1.5"><Download size={12} /> Request TDS</Button></a>
                    <a href="#contact"><Button size="sm" variant="outline" className="rounded-full text-xs gap-1.5">Get a Sample <ArrowRight size={12} /></Button></a>
                  </div>
                </div>
              </div>
            </div>

            {/* ─ PLASTOGRIP X ────────────────────────────────── */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden mb-6">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-2 bg-slate-900 text-white p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
                  <div className="relative z-10">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3 block">04 · Ready-Mix Plaster & Bonding Agent</span>
                    <h3 className="text-3xl font-display font-bold mb-2">PlastoGrip X</h3>
                    <p className="text-blue-300 font-medium mb-5">Polymer-Modified Plaster</p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-8">
                      High-quality polymer-modified ready-mix plaster for smooth, durable wall finishes on concrete, AAC blocks, and smooth substrates. Eliminates hacking and wire mesh. Two-coat system: thin bonding slurry first (1–2 mm), then finishing coat.
                    </p>
                    <ul className="space-y-2">
                      {[
                        "No hacking or wire mesh required on smooth surfaces",
                        "Prevents debonding, hollow patches & cracks",
                        "Two-coat system for maximum adhesion",
                        "Excellent water retention and workability",
                        "Packaging: 20 kg & 40 kg Bags",
                      ].map(f => (
                        <li key={f} className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 size={13} className="text-blue-400 shrink-0" />{f}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative z-10 mt-8 grid grid-cols-2 gap-2">
                    {[
                      { label: "Bond Strength", value: "> 1.0 N/mm²" },
                      { label: "Pot Life", value: "90–120 min" },
                      { label: "Coverage", value: "~40–50 sq.ft / 20 kg" },
                      { label: "Coat 1 Thickness", value: "1–2 mm (bonding)" },
                    ].map(p => (
                      <div key={p.label} className="bg-white/5 rounded-lg p-2.5 border border-white/10">
                        <div className="text-[8px] text-slate-400 uppercase tracking-wide">{p.label}</div>
                        <div className="text-xs font-bold text-white mt-0.5">{p.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-3 p-8 flex flex-col justify-between">
                  <div className="flex flex-col items-center justify-center bg-slate-50 rounded-2xl p-8 border border-slate-100 mb-6">
                    <img src="/images/real-plastogrip.png" alt="PlastoGrip X" className="h-64 w-auto object-contain" />
                    <div className="mt-4 text-center">
                      <div className="font-display font-bold text-slate-900 text-lg">PlastoGrip X</div>
                      <div className="text-sm text-slate-500">Ready-Mix Plaster · Plaster Bonding Agent</div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Suitable Substrates & Applications</p>
                    <div className="grid grid-cols-2 gap-1.5">
                      {[
                        "RCC columns and beams",
                        "Smooth / fair-faced concrete",
                        "AAC block walls",
                        "Brick masonry walls",
                        "Old tiled / plastered surfaces",
                        "Interior & exterior plaster work",
                      ].map(s => (
                        <div key={s} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 size={11} className="text-primary shrink-0" />{s}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a href="#contact"><Button size="sm" className="rounded-full text-xs bg-primary hover:bg-primary/90 text-white gap-1.5"><Download size={12} /> Request TDS</Button></a>
                    <a href="#contact"><Button size="sm" variant="outline" className="rounded-full text-xs gap-1.5">Get a Sample <ArrowRight size={12} /></Button></a>
                  </div>
                </div>
              </div>
            </div>

            {/* System callout */}
            <div className="mt-8 rounded-2xl bg-primary/5 border border-primary/20 p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-xs uppercase tracking-widest text-primary font-bold mb-3">The Alphabond System</p>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-3">Products designed to work together.</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">From block laying to plastering to tiling to grouting — a single supplier for your entire finishing and bonding chain. No compatibility issues. Unified technical support. One trusted brand.</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Masonry & Finish Chain</p>
                  <div className="flex flex-wrap gap-2 items-center mb-5">
                    {[
                      { step: "01", name: "BlockGrip X", action: "Lay AAC blocks" },
                      { step: "02", name: "PlastoGrip X", action: "Prime for plaster" },
                      { step: "03", name: "TileGrip", action: "Fix tiles" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="text-center bg-white rounded-xl border border-primary/20 px-4 py-3 min-w-[105px]">
                          <div className="text-xs text-primary font-bold mb-0.5">{item.step}</div>
                          <div className="font-display font-bold text-slate-900 text-sm">{item.name}</div>
                          <div className="text-xs text-slate-500">{item.action}</div>
                        </div>
                        {i < 2 && <ArrowRight size={13} className="text-slate-300 shrink-0" />}
                      </div>
                    ))}
                  </div>
                  <div className="bg-slate-900 rounded-xl px-4 py-3 text-white inline-flex items-center gap-3">
                    <div>
                      <div className="text-[9px] text-blue-400 uppercase tracking-widest font-bold mb-0.5">Heavy Industrial</div>
                      <div className="text-sm font-bold">AlphaGrout X1 · X2</div>
                      <div className="text-[10px] text-slate-400">Machine foundations · Column joints · Heavy plant</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Product Lineup ─────────────────────────────────── */}
        <section className="py-20 bg-slate-950">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-4">The Complete Range</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">Eight products. One trusted manufacturer.</h2>
              <p className="text-slate-400 text-base max-w-2xl mx-auto">From machine foundation grouting to AAC block laying, plastering, and tile fixing — the entire Alphabond range, all manufactured at our ISO-certified Bharuch facility.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {[
                { img: "/images/real-tx1.png", name: "TileGrip X1", type: "Tile Adhesive · C1T" },
                { img: "/images/real-tx2.png", name: "TileGrip X2", type: "Tile Adhesive · C2T" },
                { img: "/images/real-tx3.png", name: "TileGrip X3", type: "Tile Adhesive · C2TE" },
                { img: "/images/real-tx4.png", name: "TileGrip X4", type: "Tile Adhesive · C2TES1" },
                { img: "/images/real-blockgrip.png", name: "BlockGrip X", type: "Block Jointing Mortar" },
                { img: "/images/real-plastogrip.png", name: "PlastoGrip X", type: "Ready-Mix Plaster" },
                { img: "/images/real-ag1.png", name: "AlphaGrout X1", type: "Precision Grout" },
                { img: "/images/real-ag2.png", name: "AlphaGrout X2", type: "Precision Grout +" },
              ].map(p => (
                <div key={p.name} className="flex flex-col items-center bg-white/5 hover:bg-white/10 transition-colors rounded-2xl p-4 border border-white/10 hover:border-primary/40 group">
                  <img src={p.img} alt={p.name} className="h-24 w-auto object-contain mb-3 group-hover:scale-105 transition-transform duration-300" />
                  <div className="text-xs font-bold text-white text-center mb-1">{p.name}</div>
                  <div className="text-[9px] text-slate-500 text-center leading-tight">{p.type}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/brochure">
                <Button variant="outline" className="border-white/20 text-white/70 hover:text-white hover:bg-white/10 rounded-full px-8 h-11 bg-transparent gap-2">
                  <FileText size={15} /> Download Full Product Brochure
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Manufacturing Capacity ─────────────────────────── */}
        <section className="py-20 bg-white border-y border-slate-100">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs uppercase tracking-widest text-primary font-bold mb-4">Manufacturing Capacity</p>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-5">Built to scale.</h2>
                <p className="text-slate-600 leading-relaxed mb-8">Two advanced production facilities in Bharuch. A second unit currently under construction will more than triple chemical output. Every product carries full batch traceability and in-house QC documentation.</p>
                <div className="space-y-3">
                  {[
                    { label: "Production Units", value: "2 (1 Operational, 1 Under Construction)" },
                    { label: "Verticals", value: "Wet Sand · Dry Sand · Construction Chemicals · Job Work" },
                    { label: "Location", value: "Bharuch, Gujarat, India" },
                    { label: "QC", value: "In-house lab — tested in, tested out, documented" },
                  ].map(item => (
                    <div key={item.label} className="flex gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 items-start">
                      <CheckCircle2 size={15} className="text-primary mt-0.5 shrink-0" />
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">{item.label}</div>
                        <div className="font-semibold text-slate-900 text-sm">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="rounded-2xl bg-slate-950 text-white p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-2xl" />
                  <div className="text-5xl font-display font-bold text-blue-400 mb-2 relative z-10">9,000 MT</div>
                  <div className="font-semibold text-lg mb-1 relative z-10">Per Month — Dry Sand</div>
                  <p className="text-slate-400 text-sm relative z-10">Supplying industrial-grade dry sand to cement majors and construction chemical brands across India.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-slate-200 p-6 text-center">
                    <div className="text-4xl font-display font-bold text-slate-900 mb-1">1.5L</div>
                    <div className="text-sm font-semibold text-slate-700 mb-1">Bags / Month</div>
                    <div className="text-xs text-slate-500">Current chemical production</div>
                  </div>
                  <div className="rounded-2xl bg-primary/5 border border-primary/20 p-6 text-center">
                    <div className="text-4xl font-display font-bold text-primary mb-1">5L+</div>
                    <div className="text-sm font-semibold text-slate-700 mb-1">Bags / Month</div>
                    <div className="text-xs text-slate-500">After 2nd unit is operational</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Sectors ────────────────────────────────────────── */}
        <section id="solutions" className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mb-14">
              <p className="text-xs uppercase tracking-widest text-primary font-bold mb-4">Application Sectors</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-3">Built for every project type.</h2>
              <p className="text-lg text-slate-600 max-w-2xl">Each sector demands different performance characteristics. Here's how Alphabond products are specified for each environment.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {SECTORS.map((sector, i) => (
                <div key={i} className="group relative rounded-2xl bg-slate-900 border border-slate-800 p-8 hover:border-primary/40 transition-all overflow-hidden">
                  <div className="absolute top-0 right-0 w-52 h-52 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="relative z-10">
                    <div className="text-6xl font-display font-black text-white/[0.06] mb-5 leading-none">{sector.badge}</div>
                    <h4 className="text-xl font-display font-bold text-white mb-3">{sector.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed mb-5">{sector.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {sector.products.map(p => (
                        <span key={p} className="px-2.5 py-1 rounded-full bg-primary/20 border border-primary/30 text-blue-300 text-xs font-semibold">{p}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Job Work ───────────────────────────────────────── */}
        <section id="job-work" className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs uppercase tracking-widest text-primary font-bold mb-4">Job Work & Contract Manufacturing</p>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-5">Your brand. Our manufacturing.</h2>
                <p className="text-slate-600 leading-relaxed mb-5">Alphabond operates as a trusted white-label contract manufacturer for construction chemicals, produced under your brand name from our ISO-certified Bharuch facility. We've been trusted by <strong>Asian Paints, Walplast, Magicrete, Revacon Buildtech, and Masterapuu</strong> for private-label production since 2022.</p>
                <p className="text-slate-600 leading-relaxed mb-8">From custom formulations and stringent batch testing to branded packaging and direct dispatch — partners get a ready-to-market, quality-assured product range without the capital or complexity of building their own plant.</p>
                <a href="#contact"><Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 gap-2">Discuss a Partnership <ArrowRight size={16} /></Button></a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <FlaskConical size={20} />, title: "Custom Formulations", desc: "Product specs tailored to match your brand's performance requirements and market positioning." },
                  { icon: <CheckCircle2 size={20} />, title: "Stringent QC Testing", desc: "Every batch tested in our in-house lab. Full documentation provided with each shipment." },
                  { icon: <Package size={20} />, title: "Branded Packaging", desc: "Products dispatched ready-to-market under your brand name, colours, and design." },
                  { icon: <HeartHandshake size={20} />, title: "Full Service Partnership", desc: "From R&D to delivery. We handle manufacturing so you can focus on brand growth." },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-primary/30 hover:shadow-sm transition-all">
                    <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">{item.icon}</div>
                    <h4 className="font-bold text-slate-900 mb-2 text-sm">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Clients ────────────────────────────────────────── */}
        <section id="clients" className="py-24 bg-slate-950 text-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-4">Clients</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-5">Trusted by India's biggest names.</h2>
              <p className="text-slate-400 text-lg">From the country's largest cement majors and construction-chemical brands to private-label job-work partners.</p>
            </div>
            <div className="space-y-5">
              {[
                { category: "Wet Sand Supply", tag: "Since 2008", tagColor: "text-green-400 bg-green-400/10 border-green-400/20", clients: ["UltraTech Cement RMC", "JK Lakshmi Cement RMC", "Nuvoco Vistas RMC", "ACC Cement RMC", "Prism Johnson RMC", "Wagad Infra Projects RMC"] },
                { category: "Dry Sand Supply", tag: "Since 2021", tagColor: "text-blue-400 bg-blue-400/10 border-blue-400/20", clients: ["Pidilite Industries", "Magicrete Building Solutions", "BirlaNu Ltd.", "Walplast Products", "Globcon Industries", "Avon Building Solutions", "Bharat Silica", "Aswani Industries (Ascolite)"] },
                { category: "Job Work / Contract Manufacturing", tag: "Since 2022", tagColor: "text-orange-400 bg-orange-400/10 border-orange-400/20", clients: ["Asian Paints", "Walplast Products", "Masterapuu", "Revacon Buildtech", "Magicrete Building Solutions"] },
              ].map((group, i) => (
                <div key={i} className="border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <h3 className="text-base font-display font-bold">{group.category}</h3>
                    <span className={`text-xs px-3 py-1 rounded-full border font-semibold ${group.tagColor}`}>{group.tag}</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {group.clients.map(client => (
                      <div key={client} className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-slate-300 hover:border-primary/40 hover:text-white transition-colors">{client}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-600 text-xs mt-8">All trademarks are property of their respective owners. Referenced solely to indicate supply relationships. No endorsement implied.</p>
          </div>
        </section>

        {/* ── Why Alphabond ──────────────────────────────────── */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-xs uppercase tracking-widest text-primary font-bold mb-4">Why Alphabond</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900">Eight reasons our clients stay with us.</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: <Award size={20} />, num: "01", title: "Consistent Quality", desc: "Every batch tested in our in-house lab. Every shipment uniform. QC built into every stage of manufacturing." },
                { icon: <Truck size={20} />, num: "02", title: "Own Fleet, Own Schedule", desc: "Dedicated truck fleet under direct control. Clients build their schedules around our reliability." },
                { icon: <Factory size={20} />, num: "03", title: "High Capacity", desc: "9,000 MT dry sand and 1.5 lakh bags monthly. Expanding to 5L+ bags per month soon." },
                { icon: <Clock size={20} />, num: "04", title: "17+ Years Experience", desc: "Operating since 2008. Deep expertise in supply, logistics, and large industrial buyer needs." },
                { icon: <Users size={20} />, num: "05", title: "Trusted by Leaders", desc: "UltraTech, Pidilite, JK Lakshmi, Asian Paints, Nuvoco, ACC, Walplast — and growing." },
                { icon: <CloudRain size={20} />, num: "06", title: "Monsoon-Ready", desc: "Engineered to produce year-round. Competitors shut down in monsoon. We don't." },
                { icon: <ShieldCheck size={20} />, num: "07", title: "ISO-Certified", desc: "Documented processes, traceable batches, audit-ready records. Every time." },
                { icon: <HeartHandshake size={20} />, num: "08", title: "Customer-Centric", desc: "Hands-on management. Direct lines of communication. We answer fast." },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-md hover:border-primary/20 transition-all group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">{item.icon}</div>
                    <span className="text-2xl font-display font-bold text-slate-100">{item.num}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 text-sm">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Vision & Mission ───────────────────────────────── */}
        <section id="about" className="py-24 bg-white border-y border-slate-100">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-stretch">
              <div className="border border-slate-200 rounded-3xl p-10 md:p-12 flex flex-col">
                <p className="text-xs uppercase tracking-widest text-primary font-bold mb-6">Our Vision</p>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">To be the most trusted name in construction bonding solutions.</h2>
                <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-primary pl-6">Setting new benchmarks for durability, quality, and sustainability — empowering builders, architects, and infrastructure leaders with products that simplify construction, enhance performance, and create lasting value.</p>
              </div>
              <div className="bg-slate-950 rounded-3xl p-10 md:p-12 text-white relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl opacity-15 -translate-y-1/2 translate-x-1/4" />
                <p className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-6 relative z-10">Our Mission</p>
                <h2 className="text-3xl font-display font-bold mb-6 relative z-10">To deliver products that build a stronger India.</h2>
                <p className="text-lg text-slate-300 leading-relaxed relative z-10">High-performance construction chemicals and sand solutions that transform the way the world builds — backed by continuous R&D, ethical practices, and exceptional customer service. Every project, big or small, built stronger and smarter with Alphabond.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Testimonials ───────────────────────────────────── */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-slate-900 mb-14">What professionals say.</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: "Rajesh Patel", role: "Principal Architect, Ahmedabad", quote: "Alphabond's BlockGrip has transformed how we approach AAC masonry. The clean, precise joint and near-zero wastage align perfectly with how we design for sustainable construction." },
                { name: "Nikhil Gole", role: "Civil Contractor, Pune", quote: "TileGrip X3 is non-negotiable on my sites now. The extended open time is a game-changer for large-format stone on walls. Bonding strength means zero callbacks months later." },
                { name: "Priya Sharma", role: "Interior Designer, Mumbai", quote: "For 120×60 Italian porcelain on flooring, you can't compromise. TileGrip X4's superior bond and flexible formulation give us the results our luxury clients demand." },
                { name: "Arun Kumar", role: "Project Manager, Chennai", quote: "AlphaGrout X1 gave us a consistently clean, uniform finish across a 40,000 sq.ft. commercial floor. Water resistance held perfectly in the wet zones. Reliable product." },
              ].map((t, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="flex gap-1 text-primary mb-5">
                    {[1,2,3,4,5].map(star => (
                      <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-5 leading-relaxed">"{t.quote}"</p>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-3">Frequently Asked Questions</h2>
              <p className="text-slate-600">Technical and commercial queries about our products and operations.</p>
            </div>
            <Accordion type="single" collapsible className="w-full bg-slate-50 rounded-2xl p-6 border border-slate-200">
              {[
                { q: "What does Alphabond manufacture?", a: "Alphabond (a brand of Kishan Enterprise) manufactures wet sand, dry sand, and a full range of construction chemicals from our ISO-certified facility in Bharuch, Gujarat. Our chemical range includes Tile Adhesives (TileGrip X1–X4), Structural Precision Grouts (AlphaGrout X1 & X2), AAC Block Jointing Mortar (BlockGrip X), and Ready-Mix Plaster / Bonding Agent (PlastoGrip X)." },
                { q: "Which TileGrip grade should I use?", a: "TileGrip X1 is for standard ceramic tiles indoors. X2 handles large-format vitrified, porcelain, and natural stone for indoor/outdoor use. X3 is premium-grade for granite, marble, and large-format tiles in high-traffic and demanding exteriors. X4 is our extra-strength grade for heavy stone cladding, façades, and challenging industrial/exterior applications." },
                { q: "What is AlphaGrout used for — is it a tile grout or a structural grout?", a: "AlphaGrout X1 and X2 are high-performance structural precision grouts — not tile grouts. They are cement-based, non-shrink, polymer-enriched grouts engineered for machine foundation grouting, column joints, structural anchor bolts, and base plates of turbines, compressors, and heavy industrial machinery. X1 achieves > 45 N/mm² compressive strength at 28 days. X2 delivers > 65 N/mm² at 28 days and accepts coarse aggregates up to 20 mm for large-volume pours." },
                { q: "Do you offer job work / contract manufacturing?", a: "Yes. Since 2022, we manufacture tile adhesives, block adhesives, grouts, and specialty compounds under clients' own brand names. Current partners include Asian Paints, Walplast, Magicrete, Revacon Buildtech, and Masterapuu. We provide custom formulations, batch QC documentation, and branded packaging." },
                { q: "What is your production capacity?", a: "Dry sand: 8,000–9,000 MT per month. Construction chemicals: 1.5 lakh bags per month currently. A second production unit under construction in Bharuch will expand chemical capacity to over 5 lakh bags per month." },
                { q: "How do I get Technical Data Sheets for your products?", a: "Contact us via the enquiry form or call directly. We will send TDS for any product or grade the same business day. For large project specifications, our technical team can provide a project-specific product selection guide." },
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-display font-semibold text-base hover:text-primary">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-base leading-relaxed">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ── Contact ────────────────────────────────────────── */}
        <section id="contact" className="py-24 bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <p className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-4">Get In Touch</p>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-5 leading-tight">Let's build together.</h2>
                <p className="text-slate-400 mb-12 text-lg leading-relaxed">For supply enquiries, sample requests, job work partnerships, or rate negotiations. Our team responds within hours, not days.</p>
                <div className="space-y-7">
                  {[
                    { icon: <MapPin size={18} />, title: "Manufacturing Facility", lines: ["Bharuch, Gujarat, India", "Also present in Surat, Gujarat"] },
                    { icon: <Phone size={18} />, title: "Call Us", lines: ["+91 96385 63857", "+91 90994 65837"] },
                    { icon: <Mail size={18} />, title: "Email Us", lines: ["info@alphabond.in"] },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center shrink-0">{item.icon && React.cloneElement(item.icon as React.ReactElement, { className: "text-primary" })}</div>
                      <div>
                        <h4 className="font-bold text-base mb-1">{item.title}</h4>
                        {item.lines.map(l => <p key={l} className="text-slate-400 text-sm">{l}</p>)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-3xl p-8 md:p-10 text-slate-900 shadow-2xl">
                <h3 className="text-2xl font-display font-bold mb-1">Send an Enquiry</h3>
                <p className="text-slate-500 text-sm mb-6">Supply · Samples · Job Work · Technical queries</p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">First Name</label>
                      <Input placeholder="Rajesh" className="bg-slate-50 border-slate-200" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Last Name</label>
                      <Input placeholder="Patel" className="bg-slate-50 border-slate-200" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Company Name</label>
                    <Input placeholder="Your Company Ltd." className="bg-slate-50 border-slate-200" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Phone</label>
                      <Input placeholder="+91 98765 43210" className="bg-slate-50 border-slate-200" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Enquiry Type</label>
                      <select className="w-full h-10 px-3 rounded-md border border-slate-200 bg-slate-50 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/30">
                        <option>Supply Enquiry</option>
                        <option>Sample Request</option>
                        <option>Job Work / White Label</option>
                        <option>Technical Query / TDS</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Message</label>
                    <Textarea placeholder="Describe your project, product interest, or job-work requirement..." className="bg-slate-50 border-slate-200 min-h-[90px]" />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white h-12 rounded-xl text-base font-semibold">Submit Enquiry</Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ── Footer ─────────────────────────────────────────── */}
        <footer className="bg-black text-slate-400 py-14">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-4 gap-10 mb-12">
              <div className="md:col-span-2">
                <img src="/logo.png" alt="Alphabond" className="h-10 w-auto object-contain mb-4 brightness-200" />
                <p className="text-xs text-slate-600 mb-1">A Brand of Kishan Enterprise</p>
                <p className="text-sm leading-relaxed max-w-sm mt-3">ISO-certified manufacturer of construction chemicals and industrial sand solutions. Bharuch & Surat, Gujarat, India. Since 2008.</p>
                <div className="flex gap-4 mt-6 text-sm flex-wrap">
                  <a href="tel:+919638563857" className="text-slate-500 hover:text-white transition-colors">+91 96385 63857</a>
                  <a href="mailto:info@alphabond.in" className="text-slate-500 hover:text-white transition-colors">info@alphabond.in</a>
                </div>
              </div>
              <div>
                <h4 className="text-white font-semibold text-xs mb-4 uppercase tracking-wider">Products</h4>
                <ul className="space-y-2 text-sm">
                  {["TileGrip (X1–X4)", "AlphaGrout (X1 & X2)", "BlockGrip X", "PlastoGrip X"].map(p => (
                    <li key={p}><a href="#products" className="hover:text-white transition-colors">{p}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold text-xs mb-4 uppercase tracking-wider">Company</h4>
                <ul className="space-y-2 text-sm">
                  {[["About", "#about"], ["Solutions", "#solutions"], ["Clients", "#clients"], ["Job Work", "#job-work"], ["Contact", "#contact"]].map(([label, href]) => (
                    <li key={label}><a href={href} className="hover:text-white transition-colors">{label}</a></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
              <p>© 2026 Kishan Enterprise. Alphabond™ is a registered trademark of Kishan Enterprise.</p>
              <p className="text-slate-600">Manufactured in Bharuch, Gujarat, India</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
