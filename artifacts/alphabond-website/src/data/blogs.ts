export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  category: string;
  coverImage: string;
  author: {
    name: string;
    role: string;
  };
  body: string; // HTML string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "why-tile-adhesive-fails-indian-summers",
    title: "Why Tile Adhesive Fails in Indian Summers — And What Most Contractors Won't Tell You",
    subtitle: "Hollow tiles, debonding, cracked grout lines. These aren't product failures. They're application failures — and the cause is almost always the same.",
    date: "April 18, 2025",
    readTime: "6 min read",
    category: "Technical",
    coverImage: "/images/real-tx2-app.jpg",
    author: { name: "Kishan Enterprise Technical Team", role: "Bharuch, Gujarat" },
    body: `
<p>Every April and May, the calls start coming in. A contractor somewhere in Gujarat, or Maharashtra, or Rajasthan, has laid tiles in February. By summer, some of them are hollow when tapped. A few have cracked grout lines. In a couple of cases, tiles near a south-facing wall have actually popped.</p>

<p>The contractor blames the adhesive. The adhesive manufacturer gets a warranty claim. And everyone moves on until it happens again next year.</p>

<p>We've been supplying construction chemicals since 2022, and we've investigated enough of these failures to say this plainly: <strong>the adhesive is almost never the problem.</strong></p>

<h2>The actual cause of summer tile failures</h2>

<p>Indian summer temperatures — especially in Gujarat, Rajasthan, and Maharashtra — regularly push 42–47°C on site. A south or west-facing wall of an RCC structure can reach 60°C on the surface. That's not a hostile environment for the tile itself. Ceramic and vitrified tiles handle that fine.</p>

<p>The problem is differential thermal expansion. The tile expands at one rate. The adhesive bed expands at a slightly different rate. The substrate — whether it's a plastered wall, an RCC slab, or an AAC block wall — expands at its own rate. If the adhesive has fully cured and bonded properly, it bridges all three without issue. The system moves together.</p>

<p>But if the adhesive bed is too thick, if it didn't cure uniformly, or if the substrate wasn't prepared correctly — there are weak points. And those weak points fail under thermal stress, not because of heat itself, but because the heat exposes a pre-existing problem in the installation.</p>

<h2>The thick-bed mistake</h2>

<p>Walk onto any tile-laying site in India and you'll likely see something that should have stopped twenty years ago: contractors applying adhesive in a 12–15mm thick bed to "level" the substrate. This is a cement mortar habit carried over into adhesive work, and it's one of the most common causes of delamination.</p>

<p>A polymer-modified tile adhesive is designed to work at 3–6mm bed thickness. At that thickness, the polymer chains distribute stress evenly across the entire bonded surface. When you apply it at 10mm or more, the mass of the adhesive bed itself becomes a liability — it has its own thermal movement, its own shrinkage during cure, and its own weight. The bond isn't stronger. It's weaker.</p>

<p>If the substrate needs levelling, level it first. Use a floor levelling compound or properly cure a sand-cement screed. Then apply adhesive at the correct bed thickness.</p>

<h2>Open time violations</h2>

<p>Our TileGrip range has an open time of approximately 20 minutes at 20°C. At 35°C on a sunlit site, that open time can drop to 8–10 minutes. Contractors used to working in air-conditioned showrooms or cooler northern climates sometimes mix a full bucket, tile for 25 minutes, and then wonder why the last few tiles have reduced bond strength.</p>

<p>The rule is simple: if the adhesive has formed a skin — if it doesn't transfer cleanly to your glove when you press it — don't lay on it. Scrape it off and apply fresh material. It's two minutes of waste versus a complete rework six months later.</p>

<p>In peak summer, mix smaller batches. Work in shaded sections first. Wet the substrate (not soaking — damp) before applying adhesive when surface temperatures are very high.</p>

<h2>Grade selection matters more than people think</h2>

<p>This is where we see a lot of commercial compromises made on site. A civil contractor specifies TileGrip X3 or X4 for a lobby with 800×800 granite tiles. The sub-contractor, to save ₹1–2 per square foot, buys X1 instead and doesn't tell anyone.</p>

<p>TileGrip X1 is an excellent product — for standard ceramic tiles in indoor, moderate-use environments. It was not engineered for 800×800 granite. The shear strength, the tensile strength, and the flexibility of the polymer matrix are all calibrated for a specific tile weight and format range.</p>

<p>When X1 is used on large natural stone in a south-facing lobby that gets 45°C in May, failure is a matter of when, not if.</p>

<p>The grade breakdown we recommend:</p>
<ul>
  <li><strong>X1</strong> — Ceramic tiles, indoor walls and floors, standard residential use</li>
  <li><strong>X2</strong> — Large-format vitrified (up to 600×600), porcelain, natural stone up to medium weight, outdoor floors</li>
  <li><strong>X3</strong> — Marble, granite, oversized tiles (800×800 and above), high-traffic commercial, exterior walls</li>
  <li><strong>X4</strong> — Heavy stone cladding, façades, industrial floors, extreme weather exposure</li>
</ul>

<h2>One thing that's worth saying directly</h2>

<p>The cheapest tile adhesive on the market will cost you roughly ₹12–15 per square foot of tiled surface. A premium adhesive costs ₹18–22. On a 1,000 sq.ft. floor, that's a difference of about ₹6,000–7,000.</p>

<p>A tile rework — labour, tiles, adhesive, grouting, disposal of old material — costs ₹150–300 per square foot. On 1,000 sq.ft., that's ₹1.5 to 3 lakh.</p>

<p>The math isn't complicated. But the incentive structure on-site often is. The adhesive purchase decision is made by whoever buys materials. The rework cost, three years later, falls on the building owner. Until that alignment changes, we'll keep getting calls every April.</p>
    `,
  },
  {
    slug: "aac-blocks-gujarat-construction-guide",
    title: "AAC Blocks Took Over Gujarat's Construction Sites. Here's What Changes When You Use Them Properly.",
    subtitle: "Autoclaved aerated concrete is lighter, greener, and thermally superior. But it needs a different adhesive, different plaster prep, and contractors who've actually read the instructions.",
    date: "March 5, 2025",
    readTime: "7 min read",
    category: "Construction",
    coverImage: "/images/real-blockgrip-app.jpg",
    author: { name: "Kishan Enterprise Technical Team", role: "Bharuch, Gujarat" },
    body: `
<p>Drive through any new residential or commercial construction site in Bharuch, Surat, or Ahmedabad today, and there's a better-than-even chance the walls are going up with AAC (Autoclaved Aerated Concrete) blocks — not traditional red clay bricks.</p>

<p>The shift happened fast. Five years ago, AAC was a premium material used mostly on large commercial projects. Today, it's the standard choice for builders across Gujarat at almost every price point. The reasons are real: AAC is roughly 60% lighter than brick, has significantly better thermal insulation (important for Gujarat summers), carries no clay mining guilt, and can be cut with a hand saw on site.</p>

<p>But AAC blocks also failed — badly — on a lot of early projects in Gujarat. Not because the material is bad. Because contractors used them exactly like they'd use traditional brick, and that doesn't work.</p>

<h2>The mortar mistake</h2>

<p>Traditional brick masonry runs on a 12–18mm thick sand-cement mortar joint. It's a forgiving system — the thick joint compensates for minor dimensional inconsistencies in the brick, and the plasticity of the mortar allows a trained mason to level as he goes.</p>

<p>AAC blocks are manufactured to much tighter dimensional tolerances. The standard joint thickness for AAC is 3–5mm — what's called a "thin-bed" system. When contractors use 12mm sand-cement mortar on AAC blocks, several things go wrong:</p>

<ul>
  <li>The thick mortar joint becomes a thermal bridge, partially negating AAC's insulation advantage</li>
  <li>Cement mortar doesn't bond as well to the smooth, porous AAC surface as a polymer-modified adhesive</li>
  <li>Shrinkage in the thick mortar bed creates micro-cracks at the joint, which show up later as plaster cracks</li>
  <li>The additional dead load from thick joints matters more with AAC because the blocks are specified as a lightweight system — engineers sometimes account for this in their structural design</li>
</ul>

<p>A thin-bed polymer-modified block adhesive like BlockGrip X is designed specifically for this. The polymer matrix bonds to the AAC surface chemically, not just mechanically. The 3–5mm joint controls shrinkage. And the compressive strength of the cured adhesive exceeds 7.5 N/mm² — more than adequate for the load path through a block wall.</p>

<h2>The plastering problem</h2>

<p>This is where most AAC wall failures actually originate, and it rarely gets talked about because the plaster goes on after the block work is done and the original mason is long gone.</p>

<p>AAC has low surface absorption. Traditional plaster relies partly on mechanical keying (into a rough brick surface) and partly on the substrate absorbing water from the plaster mix, which helps it bond. AAC gives you neither — it's smooth and only minimally absorptive.</p>

<p>The old-school solution is to hack the surface — score the blocks with a notch hammer to create a mechanical key. This works, but it's slow, labour-intensive, and damages the surface integrity of the block.</p>

<p>The correct modern solution is a bonding agent applied before plastering. PlastoGrip X, our polymer-modified plaster primer, creates a chemically active surface that the plaster bonds to without hacking. You apply it as a thin slurry coat (1–2mm), let it become tacky, and plaster directly onto it. No hacking, no wire mesh, no hollow patches.</p>

<p>The failure mode when this step is skipped or skimped on is predictable: plaster that sounds hollow when tapped, plaster that cracks along the block joints, and eventually, plaster that falls away in sections — usually in the third or fourth year after construction.</p>

<h2>Why AAC joints crack through the plaster</h2>

<p>This is the most common complaint we hear from builders who've switched to AAC: "the plaster cracks exactly along the block joints." It's almost always one of two causes.</p>

<p>First, the block adhesive joints weren't fully cured before plastering. AAC absorbs water from the adhesive. In thin joints, curing is fast — but it needs at least 24 hours in normal conditions before any vibration or wet plastering occurs. On fast-moving sites, this gets skipped.</p>

<p>Second, the block wall didn't have movement joints at columns, beams, and slab interfaces. AAC and RCC have different coefficients of thermal expansion. Where they meet — at columns and at the underside of beams — you need a foam-backed control joint, not plaster bridging across the two materials. Without it, the differential movement cracks the plaster at exactly those junctions.</p>

<h2>Getting AAC right is straightforward</h2>

<p>The system is simple once you know it: thin-bed polymer adhesive for laying, proper curing time, bonding agent before plaster, control joints at RCC interfaces. That's it. Contractors who follow that sequence report far fewer callbacks on AAC wall projects than they ever had with brick.</p>

<p>The material is good. The system works. It just needs to be understood as a different system — not a lighter version of the same old method.</p>
    `,
  },
  {
    slug: "white-cement-vs-tile-grout-india",
    title: "White Cement Is Not Tile Grout. And the Difference Is Going to Show in Three Years.",
    subtitle: "Half of India's residential tiling uses white cement as a grout substitute. Here's why that's a problem, and what actually belongs in a tile joint.",
    date: "February 12, 2025",
    readTime: "5 min read",
    category: "Products",
    coverImage: "/images/real-ag1-app.jpg",
    author: { name: "Kishan Enterprise Technical Team", role: "Bharuch, Gujarat" },
    body: `
<p>Ask ten residential contractors in India what they fill tile joints with. At least seven will say white cement. Some mix it with a little water. Some mix it with pigment. A few mix it with a bit of sand. Almost none of them are filling tile joints — they're creating a joint that will absorb water, stain, crack, and eventually have to be raked out and redone.</p>

<p>We're not blaming the contractors. White cement is cheap, available everywhere, and looks clean for the first six months. The problem is that it was never designed to be a tile grout, and it behaves exactly like a material that wasn't designed for the job.</p>

<h2>What white cement actually is</h2>

<p>White cement is Portland cement manufactured from raw materials with low iron and manganese oxide content — which is what gives it the white colour instead of the usual grey. Chemically and mechanically, it's very similar to ordinary Portland cement. It's designed for structural and decorative applications where colour matters: white concrete, architectural features, and as a base for coloured renders.</p>

<p>When it cures, it's hard and brittle. It has high compressive strength and essentially zero flexibility. It bonds reasonably well to most cementitious substrates when applied in bulk — but a tile joint is not a bulk application. A 2–3mm tile joint, filled with a material that shrinks slightly as it cures, will develop micro-cracks almost immediately. Those cracks are invisible at first. They become visible by year two. And they become a hygiene and structural problem by year four.</p>

<h2>What a proper tile grout is designed to do</h2>

<p>A cement-based polymer-modified tile grout — like AlphaGrout X1 — starts with cement as its base, but that's where the similarity ends. The polymer modification does several things that pure cement cannot:</p>

<p>It reduces shrinkage during curing, so the joint fills completely and stays filled. It adds a degree of flexibility to the cured material, so minor movement between tiles — which happens with every thermal cycle — doesn't crack the joint. It reduces water absorption (AlphaGrout X1 is below 5% water absorption, versus white cement which absorbs freely). And it allows the grout to be formulated in a range of colours that are built into the material — not painted on top.</p>

<p>The practical result: a properly grouted tile floor looks the same at year five as it did at installation. The joints remain the same width. They don't stain from cooking oil or cleaning chemicals. They don't crack along the centreline. And they don't turn black in wet areas.</p>

<h2>The bathroom problem</h2>

<p>White cement in bathroom tile joints is a near-universal practice in Indian residential construction, and it's probably the single biggest source of long-term bathroom maintenance issues.</p>

<p>A bathroom tiled with white cement joints will, within 18–24 months, show: dark grey-black staining in the joints (mould growing in the micro-cracks), pitting and crumbling at the joint surface, and in some cases, water penetrating through the joints into the wall and causing plaster damage on the other side.</p>

<p>The solution is to rake out and regrout — which is disruptive, moderately expensive, and almost always gets delayed until it becomes a much bigger problem.</p>

<p>The prevention is to specify a polymer-modified tile grout at the time of construction. The cost difference per square foot of tiled area is ₹2–4. The cost of raking out, regrouting, and repairing any associated water damage is ₹50–150 per square foot.</p>

<h2>Why does white cement persist?</h2>

<p>The answer is structural, not technical. The mason who lays the tile doesn't live with the bathroom for ten years. He's paid per square foot of tiled area, often by the same contractor who bought the adhesive, not the building owner. White cement is locally available and familiar. The building owner, who will actually experience the failure, typically isn't involved in the material selection at the time of construction.</p>

<p>The way this changes is architects and builders specifying proper grout by product name in their material schedules — making it non-negotiable rather than discretionary. A few progressive builders in Gujarat have started doing this. When it's in writing, it gets used.</p>

<h2>A note on joint width</h2>

<p>AlphaGrout X1 is designed for joint widths of 1–6mm, which covers most standard tile installations. For wider joints — common with rustic, handmade, or textured tiles, or in intentionally wide-joint design aesthetics — AlphaGrout X2 is the appropriate choice. It's polymer-modified for additional flexibility and stain resistance, and handles the wider joint profile without cracking.</p>

<p>If you're working with a designer who wants wide joints as a design feature, make sure the grout specification matches the intent. Filling a 10mm joint with a standard fine-particle grout will give you a cracked finish within months.</p>
    `,
  },
  {
    slug: "dry-sand-construction-what-it-is-and-why-it-matters",
    title: "What Is Dry Sand in Construction? And Why India's Largest Cement Companies Buy It by the Thousands of Tonnes",
    subtitle: "Most people think sand is sand. A manufacturer who supplies both explains why the distinction between wet and dry sand matters more than almost any other material decision on a large construction project.",
    date: "January 20, 2025",
    readTime: "8 min read",
    category: "Industry",
    coverImage: "/images/facility-plant.png",
    author: { name: "Kishan Enterprise Technical Team", role: "Bharuch, Gujarat" },
    body: `
<p>Kishan Enterprise started in 2008 supplying wet sand to cement RMC plants in Gujarat and Maharashtra. By 2021, we'd added dry sand manufacturing. Today, dry sand accounts for a significant and growing share of our business, and we supply it to companies including Pidilite, Walplast, BirlaNu, and Magicrete.</p>

<p>The question we get asked, surprisingly often, is: what's the difference? And why does it matter?</p>

<h2>The basics: what makes sand "dry"</h2>

<p>Natural sand, as it comes from a river or quarry, contains moisture — sometimes 3–5%, sometimes more, depending on the source and season. For construction purposes, this moisture content variation is a significant problem if you need consistency.</p>

<p>Dry sand is sand that has been processed to bring moisture content below 0.5%, usually to between 0.1% and 0.3%. This is done through a combination of screening (to control particle size distribution) and thermal drying (to remove moisture). The result is sand with a controlled and consistent particle size distribution, known and stable moisture content, and reliable bulk density.</p>

<h2>Why construction chemical manufacturers need dry sand</h2>

<p>If you're manufacturing a construction chemical — a tile adhesive, a block mortar, a plaster primer, a grout — the quality and consistency of your output depends entirely on the consistency of your raw materials. A polymer-modified tile adhesive is a precisely formulated blend of cement, calcium carbonate, dry sand, and polymer additives in carefully calculated ratios.</p>

<p>If the sand comes in at 4% moisture one batch and 1.5% moisture the next, your water-cement ratio shifts, your slump changes, and your finished product's open time, bond strength, and flexibility all vary. The tile adhesive might still work, but it won't perform to specification reliably.</p>

<p>Dry sand solves this. When the sand entering the mixer is consistently at 0.2% moisture, the formulation is stable batch to batch. This is why companies like Pidilite and Walplast, who manufacture products that have to meet published technical data sheets, cannot use site-sourced wet sand as a raw material for their chemical products.</p>

<h2>Why cement and RMC plants buy wet sand</h2>

<p>Ready-mixed concrete plants have a different requirement. They need sand in volume — large volume, at competitive price, with controlled particle size distribution, but without the processing cost of thermal drying. Wet sand, with a managed and reported moisture content at delivery, works fine because modern concrete batching plants measure delivered moisture and adjust their mix water accordingly.</p>

<p>The key for RMC plants is consistency of particle size distribution (the grading curve), not moisture. A well-graded sand produces a concrete mix that's easier to work with, has better strength development, and requires less cement for a given target strength — which is a significant cost saving at scale.</p>

<p>We've been supplying UltraTech, JK Lakshmi, ACC, Nuvoco, and Prism Johnson RMC plants since 2008. The trust comes from the grading consistency, not from having the cheapest price on the market.</p>

<h2>The monsoon supply problem that most people don't talk about</h2>

<p>Between June and September, natural sand extraction in Gujarat is restricted or halted in most jurisdictions. River sand mining stops. Quarry operations are limited. The construction industry, which doesn't stop, has to find other sources — and the quality of those sources is often worse and the price significantly higher.</p>

<p>For dry sand manufacturers, the monsoon creates a second problem: you can't dry what you can't dry. A typical open-air sand processing yard becomes unworkable in heavy monsoon. Sand arrives wet, stays wet, and the thermal drying load per tonne increases significantly.</p>

<p>We invested in covered processing infrastructure specifically to maintain year-round production. This isn't a marketing claim — it's an operational necessity for the buyers who depend on us. A construction chemical manufacturer cannot stop production for four months because their sand supplier has a seasonal shutdown. We've built our facility to make sure that doesn't happen.</p>

<h2>What "9,000 MT per month" actually means on the ground</h2>

<p>We produce approximately 9,000 metric tonnes of dry sand per month from our Bharuch facility. A metric tonne of dry sand at standard bulk density occupies about 0.65 cubic metres. So 9,000 MT is roughly 5,850 cubic metres per month — which gives you a sense of the physical scale.</p>

<p>That material moves in 20–25 tonne truck loads, through our own fleet, directly to buyer plants across Gujarat and Maharashtra. It's not stored at an intermediate depot. It doesn't sit in a yard for weeks accumulating moisture re-absorption. It moves plant to plant, measured and documented.</p>

<p>The reason we run our own fleet rather than using third-party logistics is simple: our buyers have production schedules. If sand doesn't arrive on Tuesday morning, their batching plant stops on Tuesday afternoon. We don't want to be the reason someone's plant stops.</p>

<h2>The direction the market is going</h2>

<p>River sand is a finite resource and its extraction is increasingly regulated. Manufactured sand (M-sand, produced by crushing rock) has improved significantly over the last decade and is now the dominant aggregate in many parts of Karnataka, Maharashtra, and Tamil Nadu.</p>

<p>In Gujarat, the transition is underway but slower — river sand is still available, still competitive on price in most locations, and the construction industry is conservative. What's changing is quality standards. As the construction chemical industry grows and as RMC plants upgrade their batching systems, the tolerance for inconsistent raw materials is falling.</p>

<p>Consistent, documented, reliably-delivered dry sand is going to be more valuable in five years than it is today. We've been building for that future since 2021.</p>
    `,
  },
  {
    slug: "how-to-choose-construction-chemicals-small-contractor",
    title: "A Small Contractor's Honest Guide to Construction Chemicals — Without the Sales Pitch",
    subtitle: "What a site supervisor in Surat actually needs to know about tile adhesives, block mortars, and bonding agents. No jargon. No brand loyalty. Just what works.",
    date: "December 8, 2024",
    readTime: "6 min read",
    category: "Guides",
    coverImage: "/images/real-tx-hero.jpg",
    author: { name: "Kishan Enterprise Technical Team", role: "Bharuch, Gujarat" },
    body: `
<p>We manufacture construction chemicals. You should know that before reading this, so you can decide how much weight to give what follows. What I can tell you is that we also talk to contractors every week — on phone, on site — and a lot of what they need isn't a product recommendation. It's a straight answer to a simple question.</p>

<p>This is an attempt to write those answers down.</p>

<h2>Do I actually need tile adhesive, or can I use cement mortar?</h2>

<p>For ceramic tiles smaller than 300×300 on a well-prepared, level floor: cement mortar will technically work. It's what got built for decades. The downsides are that it requires a thicker bed (which adds weight and height), it doesn't handle thermal movement as well, and the bond quality is highly dependent on the skill of the individual mason.</p>

<p>For anything larger than 400×400, for natural stone, for vitrified tiles, for any wall application, or for any exterior use: you need polymer-modified tile adhesive. Not because of brand marketing — because the mechanics of bonding large, smooth, low-absorption tiles to a substrate require the properties that cement mortar simply doesn't have.</p>

<p>The cost difference is real but smaller than it looks. Tile adhesive costs more per bag than cement. But you use far less per square foot (3–6mm bed vs. 12–15mm), there's no sand to buy separately, the labour is faster, and the rework rate is dramatically lower. On projects where we've done the full calculation, the total installed cost per square foot is often comparable and sometimes lower with adhesive.</p>

<h2>All tile adhesives look the same to me. Are they actually different?</h2>

<p>Yes, significantly. The polymer content, the polymer type, and the base cement formulation all vary. The practical differences are in open time (how long you have to work before the adhesive skins over), flexibility (how much movement the cured bond can tolerate), and maximum tile size and weight the product is rated for.</p>

<p>The simplest rule of thumb for most residential work:</p>

<ul>
  <li>Standard ceramic tiles, indoor, under 400×400: entry-level polymer-modified adhesive (TileGrip X1 equivalent)</li>
  <li>Vitrified tiles, 400×600 and above, or outdoor use: mid-range (TileGrip X2 equivalent)</li>
  <li>Granite, marble, large format over 600×600, any exterior wall cladding: premium (TileGrip X3/X4 equivalent)</li>
</ul>

<p>Using a lower grade than recommended doesn't always cause immediate failure. It causes failure in year two or three when the warranty period is past and it's harder to establish who was responsible.</p>

<h2>When should I use a bonding agent before plastering?</h2>

<p>Any time you're plastering onto a surface that's smooth or low-absorption: RCC columns and beams, fair-faced concrete walls, AAC block walls, old tiled surfaces you're re-plastering over. These surfaces don't give cement plaster much to grip onto mechanically.</p>

<p>The failure mode without bonding agent is hollow plaster — plaster that bonds initially, sounds hollow within a year, and eventually falls. By the time it falls, it's usually causing water penetration and damage to the room below or adjacent.</p>

<p>A plaster bonding agent like PlastoGrip X is applied as a thin scrape-coat, allowed to become tacky, and plastered over directly. The whole process adds maybe 30–45 minutes per wall. The protection against hollow plaster is total when done correctly.</p>

<h2>What should I actually look for when buying construction chemicals?</h2>

<p>Three things matter: technical data sheet availability, batch traceability, and the seller's ability to answer specific questions.</p>

<p>Any legitimate construction chemical product has a published TDS — a technical data sheet that specifies compressive strength, tensile strength, open time, coverage rate, and application conditions. If the seller doesn't have a TDS or doesn't know what one is, walk away.</p>

<p>Batch traceability means the product bag has a batch number and manufacture date. This matters if something goes wrong — you need to be able to tell whether the product was within shelf life and whether it matches specification for the test sample in the batch.</p>

<p>And if you ask the sales person "what's the minimum substrate temperature for application?" or "can I use this on AAC blocks in external locations?" — they should either know the answer or be able to find it within ten minutes. If the answer is "yes it works fine for everything," that's not a technical person. Be cautious.</p>

<h2>Is branded product worth paying extra for?</h2>

<p>This is a question we're in an obvious conflict of interest to answer, so read this carefully. Branded product from a manufacturer with a published TDS, a QC lab, and traceability is worth paying more than you'd pay for an unbranded product with no documentation. That's true even if the brand is not the most famous one on the shelf.</p>

<p>What isn't necessarily worth a premium is the national advertising budget of a multinational construction chemical brand. There are several well-manufactured, well-tested regional brands in India — especially in Gujarat and Maharashtra — that perform on spec and cost significantly less than the category leaders.</p>

<p>The question to ask isn't "is this the brand I've seen on TV?" It's "can they give me a TDS, a batch number, and someone who'll answer a technical question?" If yes — price and availability drive the decision from there.</p>
    `,
  },
];
