import React, { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight, ShieldCheck, MapPin, Phone, Mail, Building, LayoutDashboard, Compass, Layers, CheckCircle2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b" : "bg-transparent"}`}>
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-white font-bold font-display text-xl leading-none">A</span>
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-slate-900">ALPHABOND</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Products</a>
            <a href="#solutions" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Solutions</a>
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
              Get a Quote
            </Button>
          </div>

          <button className="md:hidden text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
            <a href="#products" className="p-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Products</a>
            <a href="#solutions" className="p-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Solutions</a>
            <a href="#about" className="p-2 font-medium" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#contact" className="p-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <Button className="w-full mt-2">Get a Quote</Button>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/images/hero-bg.png" alt="Construction Site" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-slate-900/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
          </div>
          
          <div className="container relative z-10 mx-auto px-4 md:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
                <ShieldCheck size={16} className="text-primary-foreground" />
                <span>ISO 9001:2015 Certified Manufacturer</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-white leading-tight mb-6">
                Building Strength <br/><span className="text-primary-foreground opacity-90">That Lasts Generations.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl">
                High-performance construction chemicals engineered for precision, reliability, and scale. Trusted by India's leading architects, builders, and civil contractors for over two decades.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 text-base h-14">
                  Explore Products
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 text-base h-14">
                  View Technical Specs
                </Button>
              </div>

              <div className="mt-16 grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                <div>
                  <div className="text-3xl font-display font-bold text-white mb-1">20+</div>
                  <div className="text-sm text-slate-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-white mb-1">1500+</div>
                  <div className="text-sm text-slate-400">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-white mb-1">98%</div>
                  <div className="text-sm text-slate-400">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">Engineered for Excellence</h2>
              <p className="text-lg text-slate-600">
                Our comprehensive range of construction chemicals is formulated using advanced polymer technology to deliver unparalleled bonding strength and durability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Product 1 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] bg-slate-200 overflow-hidden">
                  <img src="/images/product-tilegrip.png" alt="Tilegrip application" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-display font-bold text-slate-900">Tilegrip <span className="text-primary font-normal text-lg ml-2">X1 - X4</span></h3>
                  </div>
                  <p className="text-slate-600 mb-6">
                    High-strength, polymer-modified tile adhesives designed for ceramic, vitrified, porcelain, and large-format natural stone. Ensures zero slippage and extended open time for both indoor and outdoor applications.
                  </p>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 size={16} className="text-primary" /> Superior bond strength</li>
                    <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 size={16} className="text-primary" /> Water & heat resistant</li>
                    <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 size={16} className="text-primary" /> Ready to use, just add water</li>
                  </ul>
                  <a href="#" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
                    Download Technical Data <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              {/* Product 2 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] bg-slate-200 overflow-hidden">
                  <img src="/images/product-alphagrout.png" alt="Alphagrout finish" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-display font-bold text-slate-900">Alphagrout <span className="text-primary font-normal text-lg ml-2">X1 & X2</span></h3>
                  </div>
                  <p className="text-slate-600 mb-6">
                    Precision non-shrink cementitious grouts formulated for structural reliability. Ideal for anchor bolts, machine foundations, precision bedding, and ensuring 100% crack-free architectural finishes.
                  </p>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 size={16} className="text-primary" /> High early strength</li>
                    <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 size={16} className="text-primary" /> Exceptional flowability</li>
                    <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 size={16} className="text-primary" /> Impact & vibration resistant</li>
                  </ul>
                  <a href="#" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
                    Download Technical Data <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              {/* Product 3 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Layers className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">Blockgrip X</h3>
                <p className="text-slate-600 mb-6">
                  Thin-bed AAC block adhesive designed to replace conventional mortar. Enables clean, fast, and durable blockwork with drastically reduced material wastage and superior thermal insulation.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors mt-auto">
                  Learn more <ArrowRight size={16} />
                </a>
              </div>

              {/* Product 4 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <LayoutDashboard className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">Plastogrip X</h3>
                <p className="text-slate-600 mb-6">
                  Advanced plaster bonding agent that forms a mechanical key to prevent delamination. Ensures smooth, crack-free plaster finishes on smooth concrete surfaces, blockwork, and columns without hacking.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors mt-auto">
                  Learn more <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section id="about" className="py-24 bg-white border-y border-slate-200">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Our Vision</h2>
                <p className="text-xl text-slate-600 leading-relaxed border-l-4 border-primary pl-6 py-2">
                  To be the most trusted and innovative global name in construction bonding, setting the benchmark for structural integrity and material science.
                </p>
              </div>
              <div className="bg-slate-900 rounded-3xl p-10 md:p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/4"></div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 relative z-10">Our Mission</h2>
                <p className="text-lg text-slate-300 leading-relaxed relative z-10">
                  To deliver innovative, eco-friendly, and high-performance solutions that redefine how the world builds. We are committed to empowering professionals with products that guarantee safety, efficiency, and flawless execution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sectors */}
        <section id="solutions" className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Application Sectors</h2>
              <p className="text-lg text-slate-600 max-w-2xl">Versatile solutions formulated for the distinct demands of diverse construction environments.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Residential & Commercial", img: "/images/sector-residential.png", desc: "Homes, premium apartments, office towers, and malls." },
                { title: "Infrastructure Projects", img: "/images/sector-infrastructure.png", desc: "Bridges, highways, metros, and critical public works." },
                { title: "Industrial & Institutional", img: "/images/sector-residential.png", desc: "Factories, warehouses, hospitals, and educational facilities." },
                { title: "Renovation & Remodeling", img: "/images/sector-infrastructure.png", desc: "Tile replacement, heritage restoration, and wall finishing." }
              ].map((sector, i) => (
                <div key={i} className="group relative rounded-2xl overflow-hidden h-[400px]">
                  <img src={sector.img} alt={sector.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h4 className="text-xl font-display font-bold text-white mb-2">{sector.title}</h4>
                    <p className="text-sm text-slate-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">{sector.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-slate-900 mb-16">Trusted by Industry Leaders</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { name: "Rajesh Patel", role: "Principal Architect, Ahmedabad", quote: "Alphabond's Blockgrip has transformed how we approach masonry. The clean finish and reduced material wastage align perfectly with our eco-friendly design philosophy." },
                { name: "Nikhil Gole", role: "Civil Contractor, Pune", quote: "Tilegrip is non-negotiable on my sites now. The bonding strength gives me total peace of mind, knowing we won't face complaints about hollow sounds or tile pop-ups years down the line." },
                { name: "Priya Sharma", role: "Interior Designer, Mumbai", quote: "For large-format Italian marble and premium vitrified tiles, precision is everything. Alphagrout provides the flawless, crack-free aesthetic our luxury clients demand." },
                { name: "Arun Kumar", role: "Project Manager, Chennai", quote: "Managing large-scale infrastructure requires reliable materials. Alphabond's non-shrink grouts have delivered consistent structural reliability across our bridge projects." }
              ].map((t, i) => (
                <div key={i} className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                  <div className="flex gap-1 text-primary mb-6">
                    {[1,2,3,4,5].map(star => <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
                  </div>
                  <p className="text-lg text-slate-700 italic mb-6">"{t.quote}"</p>
                  <div>
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-sm text-slate-500">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-slate-600">Technical insights into our product range and operations.</p>
            </div>
            
            <Accordion type="single" collapsible className="w-full bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-display font-semibold text-lg hover:text-primary">What types of products does Alphabond manufacture?</AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed">
                  We manufacture a comprehensive range of construction chemicals including Tile Adhesives (Tilegrip series), Non-shrink Grouts (Alphagrout series), AAC Block Adhesives (Blockgrip X), and Plaster Bonding Agents (Plastogrip X).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-display font-semibold text-lg hover:text-primary">Is Alphabond an ISO certified company?</AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed">
                  Yes, Alphabond is an ISO 9001:2015 certified manufacturer. Our state-of-the-art production facility adheres to strict global quality control standards to ensure batch-to-batch consistency.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-display font-semibold text-lg hover:text-primary">Do you provide technical support for large projects?</AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed">
                  Absolutely. We have a dedicated team of technical engineers who provide on-site guidance, application training, and customized product recommendations for large-scale commercial and infrastructure projects.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-display font-semibold text-lg hover:text-primary">Which regions do you serve?</AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed">
                  We supply pan-India through our robust distribution network of over 500+ channel partners. We also handle direct corporate supply for major infrastructure projects nationwide.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Let's build<br/>something enduring.</h2>
                <p className="text-slate-400 mb-12 text-lg">Connect with our technical team to discuss your project requirements, request a quote, or schedule a product demonstration.</p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Corporate Office</h4>
                      <p className="text-slate-400">142 Industrial Estate, Phase II<br/>Ahmedabad, Gujarat 380015</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Call Us</h4>
                      <p className="text-slate-400">+91 1800-123-4567<br/>Mon-Sat: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Email Us</h4>
                      <p className="text-slate-400">projects@alphabond.in<br/>support@alphabond.in</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-3xl p-8 md:p-10 text-slate-900 shadow-2xl">
                <h3 className="text-2xl font-display font-bold mb-6">Request a Callback</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">First Name</label>
                      <Input placeholder="John" className="bg-slate-50 border-slate-200" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Last Name</label>
                      <Input placeholder="Doe" className="bg-slate-50 border-slate-200" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Email Address</label>
                    <Input type="email" placeholder="john@company.com" className="bg-slate-50 border-slate-200" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Phone Number</label>
                    <Input type="tel" placeholder="+91 98765 43210" className="bg-slate-50 border-slate-200" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Project Details</label>
                    <Textarea placeholder="Tell us about your requirements..." className="min-h-[120px] bg-slate-50 border-slate-200" />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-base rounded-xl">
                    Submit Inquiry
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                  <span className="text-white font-bold font-display text-xl leading-none">A</span>
                </div>
                <span className="font-display font-bold text-xl tracking-tight text-white">ALPHABOND</span>
              </Link>
              <p className="max-w-md mb-6">
                High-performance construction chemicals engineered for precision, reliability, and scale. Building strength that lasts generations.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white">
                  IN
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white">
                  FB
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white">
                  TW
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 font-display">Products</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors">Tile Adhesives (Tilegrip)</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Non-shrink Grouts (Alphagrout)</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Block Adhesives (Blockgrip X)</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bonding Agents (Plastogrip X)</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 font-display">Company</h4>
              <ul className="space-y-3">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#solutions" className="hover:text-white transition-colors">Sectors</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-sm">
            <p>&copy; {new Date().getFullYear()} Alphabond Chemicals. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
