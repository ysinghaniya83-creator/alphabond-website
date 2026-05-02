import { Link } from "wouter";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogs";

const CATEGORY_COLORS: Record<string, string> = {
  Technical: "bg-blue-50 text-blue-700 border-blue-200",
  Construction: "bg-orange-50 text-orange-700 border-orange-200",
  Products: "bg-purple-50 text-purple-700 border-purple-200",
  Industry: "bg-green-50 text-green-700 border-green-200",
  Guides: "bg-slate-100 text-slate-700 border-slate-200",
};

export function Blog() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <header className="border-b border-slate-100 bg-white sticky top-0 z-40">
        <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Alphabond" className="h-8 w-auto object-contain" />
          </Link>
          <Link href="/" className="text-sm text-slate-500 hover:text-primary transition-colors flex items-center gap-1">
            ← Back to site
          </Link>
        </div>
      </header>

      <main>
        {/* Header */}
        <section className="py-16 md:py-24 bg-slate-950 text-white">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <p className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-4">Alphabond Journal</p>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-5 leading-tight">
              Practical knowledge<br />from the plant floor.
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl">
              Technical guides, industry observations, and product deep-dives from a manufacturer that's been in the construction materials business since 2008. Written for builders, contractors, and architects — not for search engines.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-8 max-w-5xl py-14">

          {/* Featured post */}
          <Link href={`/blog/${featured.slug}`}>
            <div className="group mb-14 cursor-pointer">
              <div className="grid md:grid-cols-2 gap-0 bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
                  <img
                    src={featured.coverImage}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${CATEGORY_COLORS[featured.category]}`}>{featured.category}</span>
                    <span className="text-xs text-slate-400 flex items-center gap-1"><Clock size={11} />{featured.readTime}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-display font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors leading-snug">{featured.title}</h2>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6">{featured.subtitle}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">{featured.date}</span>
                    <span className="text-sm font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">Read article <ArrowRight size={14} /></span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Rest of posts */}
          <h2 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-7">More Articles</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer h-full flex flex-col">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${CATEGORY_COLORS[post.category]}`}>{post.category}</span>
                      <span className="text-xs text-slate-400 flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                    </div>
                    <h3 className="text-base font-display font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors leading-snug">{post.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4 flex-1">{post.subtitle}</p>
                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-100">
                      <span className="text-xs text-slate-400">{post.date}</span>
                      <span className="text-xs font-semibold text-primary flex items-center gap-1">Read <ArrowRight size={11} /></span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-10 mt-10">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>© 2026 Kishan Enterprise. Alphabond™ is a registered trademark.</p>
          <Link href="/" className="hover:text-primary transition-colors">alphabond.in</Link>
        </div>
      </footer>
    </div>
  );
}
