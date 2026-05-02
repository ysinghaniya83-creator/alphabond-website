import { useState, useEffect } from "react";
import { Link } from "wouter";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { AlphabondBrochure } from "@/components/brochure/AlphabondBrochure";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft, Loader2, FileText } from "lucide-react";

export function BrochurePage() {
  const [baseUrl, setBaseUrl] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    const base = import.meta.env.BASE_URL?.replace(/\/$/, "") || "";
    setBaseUrl(window.location.origin + base);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Nav */}
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40">
        <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <Link href="/">
            <img src="/logo.png" alt="Alphabond" className="h-8 w-auto object-contain brightness-200" />
          </Link>
          <Link href="/" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
            <ArrowLeft size={14} /> Back to site
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-8 py-16 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-2xl mb-6">
            <FileText size={28} className="text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Alphabond Product Brochure
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            13-page technical brochure covering all 8 Alphabond products: complete specs, substrates, applications, key advantages, and usage instructions.
          </p>
        </div>

        {/* Download card */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-xl font-display font-bold text-white mb-3">What's inside</h2>
              <ul className="space-y-2">
                {[
                  "TileGrip X1 · X2 · X3 · X4: one page per grade",
                  "BlockGrip X: AAC block jointing mortar",
                  "PlastoGrip X: ready-mix plaster & bonding agent",
                  "AlphaGrout X1 · X2: non-shrink precision grout",
                  "Key advantages section per product",
                  "Full technical properties for every product",
                  "How-to-use instructions per product",
                  "Suitable substrates & areas of application",
                  "Clients & Partners page: all major brands",
                  "Company profile, facility photos, vision & mission",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="text-blue-400 mt-0.5 shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center gap-4">
              {/* Brochure thumbnail stack */}
              <div className="relative w-48 h-64 mb-2">
                {[3, 2, 1, 0].map((offset) => (
                  <div
                    key={offset}
                    className="absolute inset-0 bg-white rounded-xl shadow-2xl"
                    style={{ transform: `rotate(${(offset - 1.5) * 2}deg) translateY(${offset * 2}px)`, zIndex: offset }}
                  >
                    <div className="h-full rounded-xl overflow-hidden bg-slate-900 flex flex-col">
                      <div className="flex-1 bg-gradient-to-b from-slate-800 to-slate-900" />
                      <div className="p-3">
                        <div className="h-2 bg-blue-500 rounded w-3/4 mb-1.5" />
                        <div className="h-1.5 bg-slate-600 rounded w-full mb-1" />
                        <div className="h-1.5 bg-slate-600 rounded w-5/6" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="w-full space-y-3">
                {baseUrl ? (
                  <PDFDownloadLink
                    document={<AlphabondBrochure baseUrl={baseUrl} />}
                    fileName="Alphabond_Product_Brochure_2025.pdf"
                    className="block"
                  >
                    {({ loading }) => (
                      <Button
                        disabled={loading}
                        className="w-full bg-primary hover:bg-primary/90 text-white h-12 rounded-xl text-base font-semibold gap-2"
                      >
                        {loading ? (
                          <><Loader2 size={16} className="animate-spin" /> Generating PDF…</>
                        ) : (
                          <><Download size={16} /> Download Brochure (PDF)</>
                        )}
                      </Button>
                    )}
                  </PDFDownloadLink>
                ) : (
                  <Button disabled className="w-full h-12 rounded-xl">
                    <Loader2 size={16} className="animate-spin mr-2" /> Loading…
                  </Button>
                )}

                <Button
                  variant="outline"
                  className="w-full h-11 rounded-xl border-white/20 text-white hover:bg-white/10 bg-transparent"
                  onClick={() => setShowPreview(!showPreview)}
                >
                  {showPreview ? "Hide Preview" : "Preview in Browser"}
                </Button>
              </div>

              <p className="text-xs text-slate-500 text-center">13 pages · A4 format · PDF</p>
            </div>
          </div>
        </div>

        {/* Preview pane */}
        {showPreview && baseUrl && (
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-slate-900 mb-8">
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <span className="text-sm font-semibold text-white">Brochure Preview</span>
              <button className="text-xs text-slate-400 hover:text-white" onClick={() => setShowPreview(false)}>Close</button>
            </div>
            <PDFViewer width="100%" height={700} showToolbar={true}>
              <AlphabondBrochure baseUrl={baseUrl} />
            </PDFViewer>
          </div>
        )}

        {/* Product list reference */}
        <div className="grid sm:grid-cols-4 gap-4 mt-4">
          {[
            { name: "TileGrip X1–X4", img: "/images/real-tx1.png", type: "Tile Adhesive" },
            { name: "BlockGrip X", img: "/images/real-blockgrip.png", type: "Block Mortar" },
            { name: "PlastoGrip X", img: "/images/real-plastogrip.png", type: "Ready-Mix Plaster" },
            { name: "AlphaGrout X1–X2", img: "/images/real-ag1.png", type: "Precision Grout" },
          ].map((p) => (
            <div key={p.name} className="bg-white/5 rounded-2xl p-5 border border-white/10 flex flex-col items-center text-center hover:border-primary/40 transition-colors">
              <img src={p.img} alt={p.name} className="h-20 w-auto object-contain mb-3" />
              <div className="font-semibold text-white text-sm">{p.name}</div>
              <div className="text-xs text-slate-500 mt-0.5">{p.type}</div>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t border-white/10 py-8 mt-10">
        <div className="container mx-auto px-4 md:px-8 text-center text-xs text-slate-600">
          © 2025 Kishan Enterprise. Alphabond™ is a registered trademark.
        </div>
      </footer>
    </div>
  );
}
