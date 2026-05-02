import { useParams, Link } from "wouter";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogs";
import { Button } from "@/components/ui/button";

const CATEGORY_COLORS: Record<string, string> = {
  Technical: "bg-blue-50 text-blue-700 border-blue-200",
  Construction: "bg-orange-50 text-orange-700 border-orange-200",
  Products: "bg-purple-50 text-purple-700 border-purple-200",
  Industry: "bg-green-50 text-green-700 border-green-200",
  Guides: "bg-slate-100 text-slate-700 border-slate-200",
};

export function BlogPost() {
  const params = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  const others = BLOG_POSTS.filter((p) => p.slug !== params.slug).slice(0, 2);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-3">Article not found</h1>
          <Link href="/blog"><Button>Back to Blog</Button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <header className="border-b border-slate-100 bg-white sticky top-0 z-40">
        <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="Alphabond" className="h-8 w-auto object-contain" />
          </Link>
          <Link href="/blog" className="text-sm text-slate-500 hover:text-primary transition-colors flex items-center gap-1">
            <ArrowLeft size={14} /> All articles
          </Link>
        </div>
      </header>

      <main>
        {/* Hero */}
        <div className="relative h-72 md:h-96 overflow-hidden bg-slate-900">
          <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-slate-950/20" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${CATEGORY_COLORS[post.category]}`}>{post.category}</span>
              <span className="text-xs text-slate-300 flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Article */}
        <div className="container mx-auto px-4 md:px-8 max-w-3xl py-12">

          {/* Title block */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4 leading-tight">{post.title}</h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-6">{post.subtitle}</p>
            <div className="flex items-center gap-6 text-sm text-slate-400 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xs font-bold">KE</div>
                <div>
                  <div className="font-semibold text-slate-700 text-xs">{post.author.name}</div>
                  <div className="text-xs text-slate-400">{post.author.role}</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar size={13} />
                {post.date}
              </div>
            </div>
          </div>

          {/* Body */}
          <div
            className="prose prose-slate max-w-none
              prose-headings:font-display prose-headings:font-bold prose-headings:text-slate-900
              prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4
              prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-5
              prose-ul:text-slate-700 prose-ul:leading-relaxed prose-li:mb-1.5
              prose-strong:text-slate-900 prose-strong:font-semibold
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />

          {/* CTA */}
          <div className="mt-16 bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Have a project that needs these products?</h3>
            <p className="text-slate-600 text-sm mb-5">Our technical team is happy to recommend the right product and grade for your specific application — for free, with no obligation.</p>
            <Link href="/#contact">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8">Get in Touch</Button>
            </Link>
          </div>

          {/* Back */}
          <div className="mt-10 pt-8 border-t border-slate-100">
            <Link href="/blog">
              <Button variant="outline" className="rounded-full gap-2"><ArrowLeft size={14} /> Back to all articles</Button>
            </Link>
          </div>
        </div>

        {/* More articles */}
        {others.length > 0 && (
          <div className="bg-slate-50 border-t border-slate-100 py-14">
            <div className="container mx-auto px-4 md:px-8 max-w-3xl">
              <h3 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-7">More articles</h3>
              <div className="grid sm:grid-cols-2 gap-5">
                {others.map(p => (
                  <Link key={p.slug} href={`/blog/${p.slug}`}>
                    <div className="group bg-white border border-slate-200 rounded-2xl p-6 cursor-pointer hover:shadow-md transition-shadow">
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${CATEGORY_COLORS[p.category]} mb-3 inline-block`}>{p.category}</span>
                      <h4 className="font-display font-bold text-slate-900 text-sm leading-snug group-hover:text-primary transition-colors mb-2">{p.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{p.subtitle}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-slate-100 py-10">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>© 2026 Kishan Enterprise. Alphabond™ is a registered trademark.</p>
          <Link href="/" className="hover:text-primary transition-colors">alphabond.in</Link>
        </div>
      </footer>
    </div>
  );
}
