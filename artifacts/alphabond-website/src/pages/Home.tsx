import React, { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Menu, X, ArrowRight, ShieldCheck, MapPin, Phone, Mail,
  Building, Layers, CheckCircle2, Truck, CloudRain, FlaskConical,
  Factory, Package, Wrench, Users, BarChart3, Award, Clock, HeartHandshake
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* ── Navbar ─────────────────────────────────────────────────────── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200" : "bg-transparent"}`}>
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-white font-bold font-display text-xl leading-none">A</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className={`font-display font-bold text-xl tracking-tight transition-colors ${isScrolled ? "text-slate-900" : "text-white"}`}>ALPHABOND</span>
              <span className={`text-[10px] tracking-widest font-medium transition-colors ${isScrolled ? "text-slate-400" : "text-white/60"}`}>A BRAND OF KISHAN ENTERPRISE</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {["Products", "Solutions", "Clients", "Job Work", "About", "Contact"].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className={`text-sm font-medium transition-colors ${isScrolled ? "text-slate-600 hover:text-primary" : "text-white/80 hover:text-white"}`}>{item}</a>
            ))}
          </nav>

          <div className="hidden md:flex">
            <a href="#contact">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">Get a Quote</Button>
            </a>
          </div>

          <button className={`md:hidden ${isScrolled ? "text-slate-900" : "text-white"}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b shadow-lg p-4 flex flex-col gap-3 animate-in slide-in-from-top-2">
            {["Products", "Solutions", "Clients", "Job Work", "About", "Contact"].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="p-2 font-medium text-slate-700" onClick={() => setMobileMenuOpen(false)}>{item}</a>
            ))}
            <Button className="w-full mt-2">Get a Quote</Button>
          </div>
        )}
      </header>

      <main className="flex-1">

        {/* ── Hero ───────────────────────────────────────────────────────── */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-36 overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 z-0">
            <img src="/images/hero-bg.png" alt="Construction Site" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-slate-900/75" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/70 to-transparent" />
          </div>

          <div className="container relative z-10 mx-auto px-4 md:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8">
                <ShieldCheck size={14} className="text-blue-300" />
                <span>ISO-Certified Manufacturer · Bharuch, Gujarat · Since 2008</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold font-display text-white leading-[1.05] mb-6">
                Building the<br />
                <span className="text-blue-400">foundation,</span><br />
                literally.
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
                From wet sand for India's largest cement majors to a full range of construction chemicals. Alphabond manufactures the materials that make modern infrastructure possible.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <a href="#products">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 text-base h-14">Explore Products</Button>
                </a>
                <a href="#contact">
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 text-base h-14 bg-transparent">Request a Sample</Button>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                <div>
                  <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">17+</div>
                  <div className="text-sm text-slate-400">Years in Industry</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">9,000</div>
                  <div className="text-sm text-slate-400">MT Monthly Sand Output</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">20+</div>
                  <div className="text-sm text-slate-400">Major Industrial Clients</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── About Strip ────────────────────────────────────────────────── */}
        <section className="py-20 bg-white border-b border-slate-100">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">About the company</p>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                  Two decades of materials, manufactured in Gujarat.
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Kishan Enterprise, operating under the trusted brand name Alphabond, is a leading manufacturer and supplier of high-quality building materials and industrial sand solutions in Gujarat, India. With over 17 years in the trade, we deliver reliable, performance-driven products to clients across the country.
                </p>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Since 2008, we have been a trusted supplier of wet sand to some of India's most reputed cement and Ready-Mix Concrete companies. Since 2021, we successfully entered dry sand manufacturing and supply, and in 2022 launched our Alphabond range of construction chemicals — all from our ISO-certified facility in Bharuch.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Established", value: "2008" },
                    { label: "Legal Entity", value: "Kishan Enterprise" },
                    { label: "Certification", value: "ISO-Certified" },
                    { label: "Locations", value: "Surat & Bharuch, Gujarat" },
                  ].map(item => (
                    <div key={item.label} className="bg-slate-50 rounded-xl p-4">
                      <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">{item.label}</div>
                      <div className="font-semibold text-slate-900">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="aspect-video rounded-2xl overflow-hidden bg-slate-200">
                  <img src="/images/hero-bg.png" alt="Alphabond facility" className="w-full h-full object-cover" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Wet Sand", value: "Since 2008" },
                    { label: "Dry Sand", value: "Since 2021" },
                    { label: "Chemicals", value: "Since 2022" },
                  ].map(item => (
                    <div key={item.label} className="bg-primary/5 border border-primary/10 rounded-xl p-4 text-center">
                      <div className="font-bold text-primary font-display">{item.value}</div>
                      <div className="text-xs text-slate-600 mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Three Differentiators ──────────────────────────────────────── */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-2xl mb-16">
              <p className="text-sm uppercase tracking-widest text-blue-400 font-semibold mb-4">What sets us apart</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
                Three things our competitors can't match.
              </h2>
              <p className="text-slate-400 mt-4 text-lg">Owning our logistics, mastering monsoon production, and testing every batch in our own lab. These aren't extras. They're how we keep our biggest clients running on schedule, year-round.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Truck size={28} />,
                  title: "Our own fleet.",
                  tag: "Reliable · On-time · Direct",
                  desc: "We don't outsource transport, so we don't apologize for it either. With a dedicated fleet of trucks under our direct control, we deliver on our schedule — straight from plant to your project site.",
                },
                {
                  icon: <CloudRain size={28} />,
                  title: "Monsoon doesn't stop us.",
                  tag: "Year-round supply · No off-season",
                  desc: "When the rains hit, most regional suppliers shut down for months. Our equipment and process technology are engineered to keep producing even during peak monsoon. Your projects don't have to pause when ours don't.",
                },
                {
                  icon: <FlaskConical size={28} />,
                  title: "In-house QC lab.",
                  tag: "Tested in · Tested out · Documented",
                  desc: "Every raw material is tested before it enters the plant. Every finished product is tested before it leaves. Our fully equipped quality control lab ensures every bag, every batch, every shipment meets specification.",
                },
              ].map((item, i) => (
                <div key={i} className="border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-colors group">
                  <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:bg-primary/30 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">{item.desc}</p>
                  <div className="text-xs font-semibold text-blue-400 tracking-wider uppercase">{item.tag}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Products ───────────────────────────────────────────────────── */}
        <section id="products" className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">The Alphabond Line</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">Premium construction chemicals.</h2>
              <p className="text-lg text-slate-600">
                Manufactured in our ISO-certified facility, engineered for residential, commercial, and infrastructure projects.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] bg-slate-200 overflow-hidden">
                  <img src="/images/product-tilegrip.png" alt="Tilegrip" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded">01 · Tile Adhesive</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-slate-900 mb-1">Tilegrip <span className="text-primary font-normal text-lg">X1 · X2 · X3 · X4</span></h3>
                  <p className="text-slate-600 mb-6">
                    For ceramic, vitrified, porcelain, natural stone and large-format tiles. Indoor and outdoor application, with grades for every substrate and load condition.
                  </p>
                  <ul className="space-y-2 mb-6">
                    {["Superior bond strength for all tile types", "Water and heat resistant formulation", "Grades for every substrate and load", "Extended open time for precision laying"].map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 size={15} className="text-primary shrink-0" />{f}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] bg-slate-200 overflow-hidden">
                  <img src="/images/product-alphagrout.png" alt="Alphagrout" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded">02 · Non-Shrink Grout</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-slate-900 mb-1">Alphagrout <span className="text-primary font-normal text-lg">X1 & X2</span></h3>
                  <p className="text-slate-600 mb-6">
                    High-strength, non-shrink grouts engineered for heavy-duty structural reliability: precision bedding, anchor bolts, and crack-free finishes.
                  </p>
                  <ul className="space-y-2 mb-6">
                    {["Non-shrink formulation prevents cracking", "High early strength development", "Ideal for anchor bolts and machinery beds", "Exceptional flowability and compaction"].map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 size={15} className="text-primary shrink-0" />{f}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-100 p-8 hover:shadow-md transition-shadow">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded">03 · AAC Block Adhesive</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-3">Blockgrip X <span className="text-slate-400 font-normal text-base">Thin-bed Mortar</span></h3>
                <p className="text-slate-600 mb-6">
                  Thin-bed AAC block adhesive that provides clean, fast, and durable blockwork with reduced wastage and improved alignment. Replaces conventional mortar with superior joint strength.
                </p>
                <ul className="space-y-2">
                  {["Reduced material wastage vs conventional mortar", "Improved block alignment and joint strength", "Fast setting for faster floor completion", "Compatible with all AAC block grades"].map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 size={15} className="text-primary shrink-0" />{f}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-slate-100 p-8 hover:shadow-md transition-shadow">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded">04 · Plaster Bonding Agent</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-3">Plastogrip X <span className="text-slate-400 font-normal text-base">Plaster Primer</span></h3>
                <p className="text-slate-600 mb-6">
                  Plaster bonding agent that enhances adhesion, prevents delamination, and ensures smooth, crack-free plaster on internal and external walls. Eliminates the need for surface hacking.
                </p>
                <ul className="space-y-2">
                  {["Prevents plaster delamination and cracking", "Eliminates the need for surface hacking", "For internal and external wall applications", "Works on smooth concrete, columns, and blockwork"].map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 size={15} className="text-primary shrink-0" />{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Manufacturing Capacity ─────────────────────────────────────── */}
        <section className="py-20 bg-white border-y border-slate-100">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">Manufacturing Capacity</p>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Built to scale.</h2>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Two advanced production facilities in Bharuch, designed to meet the demand of India's largest construction and infrastructure companies. A second manufacturing unit is currently under construction.
                </p>
                <div className="space-y-4">
                  {[
                    { label: "Production Units", value: "2 (1 Operational, 1 Under Construction)" },
                    { label: "Verticals", value: "Wet Sand · Dry Sand · Construction Chemicals · Job Work" },
                    { label: "Location", value: "Bharuch, Gujarat, India" },
                  ].map(item => (
                    <div key={item.label} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">{item.label}</div>
                        <div className="font-semibold text-slate-900 text-sm">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="rounded-2xl bg-slate-900 text-white p-8">
                  <div className="text-4xl font-display font-bold text-blue-400 mb-2">9,000 MT</div>
                  <div className="font-semibold text-lg mb-2">Per Month — Dry Sand</div>
                  <p className="text-slate-400 text-sm">Manufacturing capacity of 8,000–9,000 metric tonnes monthly, supplying dry sand to major industrial clients across India.</p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="rounded-2xl border border-slate-200 p-6">
                    <div className="text-3xl font-display font-bold text-slate-900 mb-1">1.5L</div>
                    <div className="text-sm font-semibold text-slate-700 mb-1">Bags / Month</div>
                    <div className="text-xs text-slate-500">Current production capacity for the full Alphabond chemicals range.</div>
                  </div>
                  <div className="rounded-2xl bg-primary/5 border border-primary/20 p-6">
                    <div className="text-3xl font-display font-bold text-primary mb-1">5L</div>
                    <div className="text-sm font-semibold text-slate-700 mb-1">Bags / Month</div>
                    <div className="text-xs text-slate-500">Future total capacity once second unit is operational.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Solutions / Sectors ────────────────────────────────────────── */}
        <section id="solutions" className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mb-16">
              <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">Application Sectors</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Built for every project type.</h2>
              <p className="text-lg text-slate-600 max-w-2xl">Versatile solutions formulated for the distinct demands of diverse construction environments.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Residential & Commercial", img: "/images/sector-residential.png", desc: "Homes, premium apartments, office towers, malls, and commercial spaces — ensuring durable finishes and long-lasting installations." },
                { title: "Infrastructure Projects", img: "/images/sector-infrastructure.png", desc: "Bridges, highways, metros, and public works. Adhesives and grouts built to withstand heavy loads and harsh conditions." },
                { title: "Industrial & Institutional", img: "/images/sector-residential.png", desc: "Factories, warehouses, hospitals, and schools where strength, chemical resistance, and safety are critical." },
                { title: "Renovation & Remodeling", img: "/images/sector-infrastructure.png", desc: "Tile replacement, heritage restoration, and wall finishing — providing fast, clean, and reliable results." }
              ].map((sector, i) => (
                <div key={i} className="group relative rounded-2xl overflow-hidden h-[420px] cursor-pointer">
                  <img src={sector.img} alt={sector.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2">0{i + 1}</div>
                    <h4 className="text-xl font-display font-bold text-white mb-2">{sector.title}</h4>
                    <p className="text-sm text-slate-300 opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 leading-relaxed">{sector.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Job Work / Contract Manufacturing ──────────────────────────── */}
        <section id="job-work" className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">Job Work & Contract Manufacturing</p>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Your brand. Our manufacturing.</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Alphabond operates as a trusted white-label contract manufacturer for construction chemicals, produced under your brand name from our ISO-certified Bharuch facility. Partners get a ready-to-market, quality-assured product range without the capital, complexity, or time of building their own plant.
                </p>
                <p className="text-slate-600 leading-relaxed mb-8">
                  We manufacture tile adhesives, AAC block adhesives, grouts, and specialty bonding compounds under clients' own brand names. From R&D to branded packaging — we handle everything.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Asian Paints", "Walplast", "Magicrete", "Revacon Buildtech", "Masterapuu"].map(brand => (
                    <span key={brand} className="px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-sm font-medium text-slate-700">{brand}</span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                {[
                  { icon: <FlaskConical size={22} />, title: "Custom Formulations", desc: "Tailored product specifications developed to match your brand's performance requirements." },
                  { icon: <CheckCircle2 size={22} />, title: "Stringent QC Testing", desc: "Every batch tested in our in-house lab before it leaves the facility." },
                  { icon: <Package size={22} />, title: "Branded Packaging", desc: "Products shipped ready-to-market, under your brand name and design." },
                  { icon: <HeartHandshake size={22} />, title: "Full Service Partnership", desc: "From R&D to delivery, we handle the manufacturing so you focus on growing your brand." },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">{item.icon}</div>
                    <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Clients ────────────────────────────────────────────────────── */}
        <section id="clients" className="py-24 bg-slate-900 text-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm uppercase tracking-widest text-blue-400 font-semibold mb-4">Clients</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Trusted by India's biggest names.</h2>
              <p className="text-slate-400 text-lg">From the country's largest cement majors and construction-chemical brands to private-label job-work clients.</p>
            </div>

            <div className="space-y-10">
              {[
                {
                  category: "Wet Sand Supply",
                  tag: "Since 2008",
                  clients: ["UltraTech Cement RMC", "JK Lakshmi Cement RMC", "Nuvoco Vistas RMC", "ACC Cement RMC", "Prism Johnson RMC", "Wagad Infra Projects RMC"]
                },
                {
                  category: "Dry Sand Supply",
                  tag: "Since 2021",
                  clients: ["Pidilite Industries", "Magicrete Building Solutions", "BirlaNu Ltd.", "Walplast Products", "Globcon Industries", "Avon Building Solutions", "Bharat Silica", "Aswani Industries (Ascolite)"]
                },
                {
                  category: "Job Work / Contract Manufacturing",
                  tag: "Since 2022",
                  clients: ["Asian Paints", "Walplast Products", "Masterapuu", "Revacon Buildtech", "Magicrete Building Solutions"]
                }
              ].map((group, i) => (
                <div key={i} className="border border-white/10 rounded-2xl p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <h3 className="text-lg font-display font-bold">{group.category}</h3>
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-blue-400 font-semibold">{group.tag}</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {group.clients.map(client => (
                      <div key={client} className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-slate-300 hover:border-primary/50 hover:text-white transition-colors">
                        {client}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-slate-600 text-xs mt-8">All trademarks and logos are property of their respective owners and are used here solely to indicate supply relationships. No endorsement is implied.</p>
          </div>
        </section>

        {/* ── Why Alphabond (8 Reasons) ──────────────────────────────────── */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">Why Alphabond</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900">Eight reasons our clients stay with us.</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <Award size={22} />, num: "01", title: "Consistent Quality", desc: "Every batch tested in our in-house lab. Every shipment uniform. Quality control built into every stage of manufacturing." },
                { icon: <Truck size={22} />, num: "02", title: "Own Fleet, Own Schedule", desc: "Dedicated fleet under our direct control. Clients build their schedules around our reliability." },
                { icon: <Factory size={22} />, num: "03", title: "High Capacity", desc: "9,000 MT of dry sand and 1.5 lakh bags monthly today, with expansion to 5 lakh+ bags underway." },
                { icon: <Clock size={22} />, num: "04", title: "17+ Years Experience", desc: "Operating since 2008. Deep understanding of supply, logistics, and the needs of large industrial buyers." },
                { icon: <Users size={22} />, num: "05", title: "Trusted by Leaders", desc: "Long-term relationships with UltraTech, Pidilite, JK Lakshmi, Asian Paints, Nuvoco, ACC, Walplast and others." },
                { icon: <CloudRain size={22} />, num: "06", title: "Monsoon-Ready Production", desc: "Equipment and process technology that keep producing through monsoon, when our competitors shut down." },
                { icon: <ShieldCheck size={22} />, num: "07", title: "ISO-Certified Facility", desc: "Manufacturing operations meet ISO standards. Documented processes, traceable batches, audit-ready records." },
                { icon: <HeartHandshake size={22} />, num: "08", title: "Customer-Centric", desc: "Hands-on management. Direct lines of communication. We answer the phone, and we answer fast." },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-md hover:border-primary/20 transition-all group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-2xl font-display font-bold text-slate-200">{item.num}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Vision & Mission ───────────────────────────────────────────── */}
        <section id="about" className="py-24 bg-white border-y border-slate-100">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-stretch">
              <div className="border border-slate-200 rounded-3xl p-10 md:p-12 flex flex-col">
                <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-6">Our Vision</p>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">To be the most trusted name in construction bonding solutions.</h2>
                <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-primary pl-6">
                  Setting new benchmarks for durability, quality, and sustainability, empowering builders, architects, and infrastructure leaders with products that simplify construction, enhance performance, and create lasting value.
                </p>
              </div>
              <div className="bg-slate-900 rounded-3xl p-10 md:p-12 text-white relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/4" />
                <p className="text-sm uppercase tracking-widest text-blue-400 font-semibold mb-6 relative z-10">Our Mission</p>
                <h2 className="text-3xl font-display font-bold mb-6 relative z-10">To deliver products that build a stronger India.</h2>
                <p className="text-lg text-slate-300 leading-relaxed relative z-10">
                  High-performance construction chemicals and sand solutions that transform the way the world builds, backed by continuous R&D, ethical practices, and exceptional customer service. Every project, big or small, built stronger and smarter with Alphabond.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Testimonials ───────────────────────────────────────────────── */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-slate-900 mb-16">What our customers say.</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { name: "Rajesh Patel", role: "Principal Architect, Ahmedabad", quote: "Alphabond's Blockgrip has transformed how we approach masonry. The clean finish and reduced material wastage align perfectly with our eco-friendly design philosophy." },
                { name: "Nikhil Gole", role: "Civil Contractor, Pune", quote: "Tilegrip is non-negotiable on my sites now. The bonding strength gives me total peace of mind, knowing we won't face complaints about hollow sounds or tile pop-ups years down the line." },
                { name: "Priya Sharma", role: "Interior Designer, Mumbai", quote: "For large-format Italian marble and premium vitrified tiles, precision is everything. Alphagrout provides the flawless, crack-free aesthetic our luxury clients demand." },
                { name: "Arun Kumar", role: "Project Manager, Chennai", quote: "Managing large-scale infrastructure requires reliable materials. Alphabond's non-shrink grouts have delivered consistent structural reliability across our bridge projects." }
              ].map((t, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="flex gap-1 text-primary mb-6">
                    {[1,2,3,4,5].map(star => (
                      <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-lg text-slate-700 italic mb-6 leading-relaxed">"{t.quote}"</p>
                  <div>
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-sm text-slate-500">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-slate-600">Technical and business queries about our products and operations.</p>
            </div>

            <Accordion type="single" collapsible className="w-full bg-slate-50 rounded-2xl p-6 border border-slate-200">
              {[
                { q: "What types of products does Alphabond manufacture?", a: "We manufacture a full range of construction chemicals including Tile Adhesives (Tilegrip X1–X4), Non-shrink Grouts (Alphagrout X1 & X2), AAC Block Adhesives (Blockgrip X), and Plaster Bonding Agents (Plastogrip X). We also supply wet sand and dry sand to cement majors and industrial clients." },
                { q: "Is Alphabond an ISO-certified manufacturer?", a: "Yes, our manufacturing facility in Bharuch, Gujarat, is ISO-certified. We maintain documented processes, traceable batches, and audit-ready records to ensure every product meets specification." },
                { q: "Do you offer white-label or job-work manufacturing?", a: "Yes. We have a dedicated contract manufacturing division. We produce tile adhesives, block adhesives, grouts, and specialty compounds under clients' own brand names — with custom formulations, branded packaging, and in-house QC. Existing partners include Asian Paints, Walplast, and Magicrete." },
                { q: "What is your current production capacity?", a: "Our dry sand capacity is 8,000–9,000 metric tonnes per month. For construction chemicals, we currently produce 1.5 lakh bags per month with a second production unit under construction that will take total chemical capacity past 5 lakh bags monthly." },
                { q: "Which regions do you serve?", a: "We operate from Bharuch and Surat, Gujarat, and supply across India. Our own logistics fleet ensures direct, on-time delivery regardless of season — including during monsoon, when many regional competitors pause operations." },
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-display font-semibold text-base hover:text-primary">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-base leading-relaxed">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ── Contact ────────────────────────────────────────────────────── */}
        <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <p className="text-sm uppercase tracking-widest text-blue-400 font-semibold mb-4">Let's build together.</p>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                  For enquiries, samples, or rate negotiations.
                </h2>
                <p className="text-slate-400 mb-12 text-lg">Our team will respond within hours, not days.</p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Manufacturing Facility</h4>
                      <p className="text-slate-400">Bharuch, Gujarat, India</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Call Us</h4>
                      <p className="text-slate-400">+91 96385 63857</p>
                      <p className="text-slate-400">+91 90994 65837</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Email Us</h4>
                      <p className="text-slate-400">info@alphabond.in</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 md:p-10 text-slate-900 shadow-2xl">
                <h3 className="text-2xl font-display font-bold mb-2">Send an Enquiry</h3>
                <p className="text-slate-500 text-sm mb-6">For supply enquiries, sample requests, or job work partnerships.</p>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-slate-700">First Name</label>
                      <Input placeholder="Rajesh" className="bg-slate-50 border-slate-200" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-slate-700">Last Name</label>
                      <Input placeholder="Patel" className="bg-slate-50 border-slate-200" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700">Company Name</label>
                    <Input placeholder="Your Company Ltd." className="bg-slate-50 border-slate-200" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700">Phone</label>
                    <Input placeholder="+91 98765 43210" className="bg-slate-50 border-slate-200" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700">Email</label>
                    <Input type="email" placeholder="you@company.com" className="bg-slate-50 border-slate-200" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700">Message / Requirement</label>
                    <Textarea placeholder="Describe your project, product interest, or job-work requirement..." className="bg-slate-50 border-slate-200 min-h-[100px]" />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white h-12 rounded-xl text-base">Submit Enquiry</Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ── Footer ─────────────────────────────────────────────────────── */}
        <footer className="bg-black text-slate-400 py-12">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-4 gap-10 mb-12">
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 bg-primary rounded-sm flex items-center justify-center">
                    <span className="text-white font-bold text-base leading-none">A</span>
                  </div>
                  <div>
                    <div className="font-display font-bold text-lg text-white tracking-tight">ALPHABOND</div>
                    <div className="text-[10px] tracking-widest text-slate-500">A BRAND OF KISHAN ENTERPRISE</div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed max-w-sm">
                  ISO-certified manufacturer of construction chemicals and industrial sand solutions. Operating from Bharuch, Gujarat since 2008.
                </p>
              </div>

              <div>
                <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Products</h4>
                <ul className="space-y-2 text-sm">
                  {["Tilegrip (X1–X4)", "Alphagrout (X1 & X2)", "Blockgrip X", "Plastogrip X"].map(p => (
                    <li key={p}><a href="#products" className="hover:text-white transition-colors">{p}</a></li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Company</h4>
                <ul className="space-y-2 text-sm">
                  {["About", "Job Work", "Clients", "Contact"].map(p => (
                    <li key={p}><a href={`#${p.toLowerCase().replace(" ", "-")}`} className="hover:text-white transition-colors">{p}</a></li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
              <p>© 2026 Kishan Enterprise. Alphabond™ is a trademark of Kishan Enterprise.</p>
              <p className="text-slate-600">Manufactured in Bharuch, Gujarat, India</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
