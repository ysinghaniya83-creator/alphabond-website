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
  body: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "why-tile-adhesive-fails-indian-summers",
    title: "Why Tile Adhesive Fails in Indian Summers: What Most Contractors Won't Tell You",
    subtitle: "Hollow tiles, debonding, cracked grout lines. These aren't product failures. They're application failures, and the cause is almost always the same.",
    date: "April 18, 2025",
    readTime: "6 min read",
    category: "Technical",
    coverImage: "/images/blog-tile-failure-summer.png",
    author: { name: "Kishan Enterprise Technical Team", role: "Bharuch, Gujarat" },
    body: `
<p>Every April and May, the calls start coming in. A contractor somewhere in Gujarat, or Maharashtra, or Rajasthan, has laid tiles in February. By summer, some of them are hollow when tapped. A few have cracked grout lines. In a couple of cases, tiles near a south-facing wall have actually popped.</p>

<p>The contractor blames the adhesive. The adhesive manufacturer gets a warranty claim. And everyone moves on until it happens again next year.</p>

<p>We've been supplying construction chemicals since 2022, and we've investigated enough of these failures to say this plainly: <strong>the adhesive is almost never the problem.</strong></p>

<h2>The actual cause of summer tile failures</h2>

<p>Indian summer temperatures, especially in Gujarat, Rajasthan, and Maharashtra, regularly push 42 to 47 degrees Celsius on site. A south or west-facing wall of an RCC structure can reach 60°C on the surface. That's not a hostile environment for the tile itself. Ceramic and vitrified tiles handle that fine.</p>

<p>The problem is differential thermal expansion. The tile expands at one rate. The adhesive bed expands at a slightly different rate. The substrate, whether it's a plastered wall, an RCC slab, or an AAC block wall, expands at its own rate. If the adhesive has fully cured and bonded properly, it bridges all three without issue. The system moves together.</p>

<p>But if the adhesive bed is too thick, if it didn't cure uniformly, or if the substrate wasn't prepared correctly, there are weak points. Those weak points fail under thermal stress, not because of heat itself, but because the heat exposes a pre-existing problem in the installation.</p>

<h2>The thick-bed mistake</h2>

<p>Walk onto any tile-laying site in India and you'll likely see something that should have stopped twenty years ago: contractors applying adhesive in a 12 to 15mm thick bed to "level" the substrate. This is a cement mortar habit carried over into adhesive work, and it's one of the most common causes of delamination.</p>

<p>A polymer-modified tile adhesive is designed to work at 3 to 6mm bed thickness. At that thickness, the polymer chains distribute stress evenly across the entire bonded surface. When you apply it at 10mm or more, the mass of the adhesive bed itself becomes a liability. It has its own thermal movement, its own shrinkage during cure, and its own weight. The bond isn't stronger. It's weaker.</p>

<p>If the substrate needs levelling, level it first. Use a floor levelling compound or properly cure a sand-cement screed. Then apply adhesive at the correct bed thickness.</p>

<h2>Open time violations</h2>

<p>Our TileGrip range has an open time of approximately 20 minutes at 20°C. At 35°C on a sunlit site, that open time can drop to 8 to 10 minutes. Contractors used to working in air-conditioned showrooms or cooler northern climates sometimes mix a full bucket, tile for 25 minutes, and then wonder why the last few tiles have reduced bond strength.</p>

<p>The rule is simple: if the adhesive has formed a skin, press it with your glove. If it doesn't transfer cleanly, don't lay on it. Scrape it off and apply fresh material. It's two minutes of waste versus a complete rework six months later.</p>

<p>In peak summer, mix smaller batches. Work in shaded sections first. Wet the substrate (not soaking, just damp) before applying adhesive when surface temperatures are very high.</p>

<h2>Grade selection matters more than people think</h2>

<p>This is where we see a lot of commercial compromises made on site. A civil contractor specifies TileGrip X3 or X4 for a lobby with 800x800 granite tiles. The sub-contractor, to save Rs.1 to 2 per square foot, buys X1 instead and doesn't tell anyone.</p>

<p>TileGrip X1 is an excellent product, but it was designed for standard ceramic tiles in indoor, moderate-use environments. It was not engineered for 800x800 granite. The shear strength, tensile strength, and flexibility of the polymer matrix are all calibrated for a specific tile weight and format range.</p>

<p>When X1 is used on large natural stone in a south-facing lobby that gets 45°C in May, failure is a matter of when, not if.</p>

<p>The grade breakdown we recommend:</p>
<ul>
  <li><strong>X1:</strong> Ceramic tiles, indoor walls and floors, standard residential use</li>
  <li><strong>X2:</strong> Large-format vitrified (up to 600x600), porcelain, natural stone up to medium weight, outdoor floors</li>
  <li><strong>X3:</strong> Marble, granite, oversized tiles (800x800 and above), high-traffic commercial, exterior walls</li>
  <li><strong>X4:</strong> Heavy stone cladding, facades, industrial floors, extreme weather exposure</li>
</ul>

<h2>One thing that's worth saying directly</h2>

<p>The cheapest tile adhesive on the market will cost you roughly Rs.12 to 15 per square foot of tiled surface. A premium adhesive costs Rs.18 to 22. On a 1,000 sq.ft. floor, that's a difference of about Rs.6,000 to 7,000.</p>

<p>A tile rework, including labour, tiles, adhesive, grouting, and disposal of old material, costs Rs.150 to 300 per square foot. On 1,000 sq.ft., that's Rs.1.5 to 3 lakh.</p>

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
    coverImage: "/images/blog-aac-blocks.jpg",
    author: { name: "Kishan Enterprise Technical Team", role: "Bharuch, Gujarat" },
    body: `
<p>Drive through any new residential or commercial construction site in Bharuch, Surat, or Ahmedabad today, and there's a better-than-even chance the walls are going up with AAC (Autoclaved Aerated Concrete) blocks rather than traditional red clay bricks.</p>

<p>The shift happened fast. Five years ago, AAC was a premium material used mostly on large commercial projects. Today, it's the standard choice for builders across Gujarat at almost every price point. The reasons are real: AAC is roughly 60% lighter than brick, has significantly better thermal insulation, carries no clay mining guilt, and can be cut with a hand saw on site.</p>

<p>But AAC blocks also failed, badly, on a lot of early projects in Gujarat. Not because the material is bad. Because contractors used them exactly like they'd use traditional brick, and that doesn't work.</p>

<h2>The mortar mistake</h2>

<p>Traditional brick masonry runs on a 12 to 18mm thick sand-cement mortar joint. It's a forgiving system. The thick joint compensates for minor dimensional inconsistencies in the brick, and the plasticity of the mortar allows a trained mason to level as he goes.</p>

<p>AAC blocks are manufactured to much tighter dimensional tolerances. The standard joint thickness for AAC is 3 to 5mm, which is called a thin-bed system. When contractors use 12mm sand-cement mortar on AAC blocks, several things go wrong:</p>

<ul>
  <li>The thick mortar joint becomes a thermal bridge, partially negating AAC's insulation advantage</li>
  <li>Cement mortar doesn't bond as well to the smooth, porous AAC surface as a polymer-modified adhesive</li>
  <li>Shrinkage in the thick mortar bed creates micro-cracks at the joint, which show up later as plaster cracks</li>
  <li>The additional dead load from thick joints matters more with AAC because the blocks are specified as a lightweight system</li>
</ul>

<p>A thin-bed polymer-modified block adhesive like BlockGrip X is designed specifically for this. The polymer matrix bonds to the AAC surface chemically, not just mechanically. The 3 to 5mm joint controls shrinkage. And the compressive strength of the cured adhesive exceeds 7.5 N/mm², more than adequate for the load path through a block wall.</p>

<h2>The plastering problem</h2>

<p>This is where most AAC wall failures actually originate, and it rarely gets talked about because the plaster goes on after the block work is done and the original mason is long gone.</p>

<p>AAC has low surface absorption. Traditional plaster relies partly on mechanical keying into a rough brick surface, and partly on the substrate absorbing water from the plaster mix, which helps it bond. AAC gives you neither. It's smooth and only minimally absorptive.</p>

<p>The correct modern solution is a bonding agent applied before plastering. PlastoGrip X, our polymer-modified plaster primer, creates a chemically active surface that the plaster bonds to without hacking. You apply it as a thin slurry coat of 1 to 2mm, let it become tacky, and plaster directly onto it. No hacking, no wire mesh, no hollow patches.</p>

<h2>Why AAC joints crack through the plaster</h2>

<p>This is the most common complaint we hear from builders who've switched to AAC: "the plaster cracks exactly along the block joints." It's almost always one of two causes.</p>

<p>First, the block adhesive joints weren't fully cured before plastering. AAC absorbs water from the adhesive. In thin joints, curing is fast, but it needs at least 24 hours in normal conditions before any vibration or wet plastering occurs. On fast-moving sites, this gets skipped.</p>

<p>Second, the block wall didn't have movement joints at columns, beams, and slab interfaces. AAC and RCC have different coefficients of thermal expansion. Without control joints, the differential movement cracks the plaster at exactly those junctions.</p>

<h2>Getting AAC right is straightforward</h2>

<p>The system is simple once you know it: thin-bed polymer adhesive for laying, proper curing time, bonding agent before plaster, control joints at RCC interfaces. That's it. Contractors who follow that sequence report far fewer callbacks on AAC wall projects than they ever had with brick.</p>

<p>The material is good. The system works. It just needs to be understood as a different system, not a lighter version of the same old method.</p>
    `,
  },
  {
    slug: "white-cement-vs-tile-grout-india",
    title: "White Cement Is Not Tile Grout. And the Difference Is Going to Show in Three Years.",
    subtitle: "Half of India's residential tiling uses white cement as a grout substitute. Here's why that's a problem, and what actually belongs in a tile joint.",
    date: "February 12, 2025",
    readTime: "5 min read",
    category: "Products",
    coverImage: "/images/blog-grout-comparison.jpg",
    author: { name: "Kishan Enterprise Technical Team", role: "Bharuch, Gujarat" },
    body: `
<p>Ask ten residential contractors in India what they fill tile joints with. At least seven will say white cement. Some mix it with a little water. Some mix it with pigment. A few mix it with a bit of sand. Almost none of them are filling tile joints correctly. They're creating a joint that will absorb water, stain, crack, and eventually have to be raked out and redone.</p>

<p>We're not blaming the contractors. White cement is cheap, available everywhere, and looks clean for the first six months. The problem is that it was never designed to be a tile grout, and it behaves exactly like a material that wasn't designed for the job.</p>

<h2>What white cement actually is</h2>

<p>White cement is Portland cement manufactured from raw materials with low iron and manganese oxide content. Chemically and mechanically, it's very similar to ordinary Portland cement. When it cures, it's hard and brittle, with high compressive strength and essentially zero flexibility. A 2 to 3mm tile joint filled with a material that shrinks slightly as it cures will develop micro-cracks almost immediately. Those cracks are invisible at first. They become visible by year two. And they become a hygiene and structural problem by year four.</p>

<h2>What a proper tile grout is designed to do</h2>

<p>A cement-based polymer-modified tile grout starts with cement as its base, but that's where the similarity ends. The polymer modification reduces shrinkage during curing, adds flexibility to the cured material, reduces water absorption, and allows stable colour pigmentation built into the material.</p>

<p>The practical result: a properly grouted tile floor looks the same at year five as it did at installation. The joints remain the same width. They don't stain from cooking oil or cleaning chemicals. They don't crack along the centreline. And they don't turn black in wet areas.</p>

<h2>The bathroom problem</h2>

<p>White cement in bathroom tile joints is a near-universal practice in Indian residential construction, and it's probably the single biggest source of long-term bathroom maintenance issues.</p>

<p>A bathroom tiled with white cement joints will, within 18 to 24 months, show dark grey-black staining in the joints from mould growing in the micro-cracks, pitting and crumbling at the joint surface, and in some cases, water penetrating through the joints into the wall and causing plaster damage on the other side.</p>

<p>The prevention is to specify a polymer-modified tile grout at the time of construction. The cost difference per square foot of tiled area is Rs.2 to 4. The cost of raking out, regrouting, and repairing any associated water damage is Rs.50 to 150 per square foot.</p>

<h2>Why does white cement persist?</h2>

<p>The answer is structural, not technical. The mason who lays the tile doesn't live with the bathroom for ten years. He's paid per square foot of tiled area. White cement is locally available and familiar. The building owner, who will actually experience the failure, typically isn't involved in the material selection at the time of construction.</p>

<p>The way this changes is architects and builders specifying proper grout by product name in their material schedules, making it non-negotiable rather than discretionary.</p>
    `,
  },
  {
    slug: "dry-sand-construction-what-it-is-and-why-it-matters",
    title: "What Is Dry Sand in Construction? And Why India's Largest Cement Companies Buy It by the Thousands of Tonnes",
    subtitle: "Most people think sand is sand. A manufacturer who supplies both explains why the distinction between wet and dry sand matters more than almost any other material decision on a large construction project.",
    date: "January 20, 2025",
    readTime: "8 min read",
    category: "Industry",
    coverImage: "/images/blog-dry-sand.jpg",
    author: { name: "Kishan Enterprise Technical Team", role: "Bharuch, Gujarat" },
    body: `
<p>Kishan Enterprise started in 2008 supplying wet sand to cement RMC plants in Gujarat and Maharashtra. By 2021, we'd added dry sand manufacturing. Today, dry sand accounts for a significant and growing share of our business, and we supply it to companies including Pidilite, Walplast, BirlaNu, and Magicrete.</p>

<h2>The basics: what makes sand "dry"</h2>

<p>Natural sand, as it comes from a river or quarry, contains moisture, sometimes 3 to 5%, sometimes more depending on the source and season. Dry sand is sand that has been processed to bring moisture content below 0.5%, usually to between 0.1% and 0.3%. This is done through a combination of screening to control particle size distribution, and thermal drying to remove moisture. The result is sand with a controlled and consistent particle size distribution, known and stable moisture content, and reliable bulk density.</p>

<h2>Why construction chemical manufacturers need dry sand</h2>

<p>If you're manufacturing a construction chemical such as a tile adhesive, a block mortar, a plaster primer, or a grout, the quality and consistency of your output depends entirely on the consistency of your raw materials. A polymer-modified tile adhesive is a precisely formulated blend of cement, calcium carbonate, dry sand, and polymer additives in carefully calculated ratios.</p>

<p>If the sand comes in at 4% moisture one batch and 1.5% moisture the next, your water-cement ratio shifts, your slump changes, and your finished product's open time, bond strength, and flexibility all vary. Dry sand solves this. When the sand entering the mixer is consistently at 0.2% moisture, the formulation is stable batch to batch.</p>

<h2>Why cement and RMC plants buy wet sand</h2>

<p>Ready-mixed concrete plants have a different requirement. They need sand in volume, large volume, at competitive price, with controlled particle size distribution, but without the processing cost of thermal drying. Wet sand, with a managed and reported moisture content at delivery, works fine because modern concrete batching plants measure delivered moisture and adjust their mix water accordingly.</p>

<p>We've been supplying UltraTech, JK Lakshmi, ACC, Nuvoco, and Prism Johnson RMC plants since 2008. The trust comes from the grading consistency, not from having the cheapest price on the market.</p>

<h2>The monsoon supply problem that most people don't talk about</h2>

<p>Between June and September, natural sand extraction in Gujarat is restricted or halted in most jurisdictions. For dry sand manufacturers, the monsoon creates a second problem: you can't dry what you can't dry in open-air conditions. A typical open-air sand processing yard becomes unworkable in heavy monsoon.</p>

<p>We invested in covered processing infrastructure specifically to maintain year-round production. A construction chemical manufacturer cannot stop production for four months because their sand supplier has a seasonal shutdown. We've built our facility to make sure that doesn't happen.</p>

<h2>What "9,000 MT per month" actually means on the ground</h2>

<p>We produce approximately 9,000 metric tonnes of dry sand per month from our Bharuch facility. That material moves in 20 to 25 tonne truck loads, through our own fleet, directly to buyer plants across Gujarat and Maharashtra. It doesn't sit in a yard for weeks accumulating moisture re-absorption. It moves plant to plant, measured and documented.</p>
    `,
  },
  {
    slug: "how-to-choose-construction-chemicals-small-contractor",
    title: "A Small Contractor's Honest Guide to Construction Chemicals, Without the Sales Pitch",
    subtitle: "What a site supervisor in Surat actually needs to know about tile adhesives, block mortars, and bonding agents. No jargon. No brand loyalty. Just what works.",
    date: "December 8, 2024",
    readTime: "6 min read",
    category: "Guides",
    coverImage: "/images/blog-contractor-guide.jpg",
    author: { name: "Kishan Enterprise Technical Team", role: "Bharuch, Gujarat" },
    body: `
<p>We manufacture construction chemicals. You should know that before reading this, so you can decide how much weight to give what follows. What I can tell you is that we also talk to contractors every week, on phone, on site, and a lot of what they need isn't a product recommendation. It's a straight answer to a simple question.</p>

<h2>Do I actually need tile adhesive, or can I use cement mortar?</h2>

<p>For ceramic tiles smaller than 300x300 on a well-prepared, level floor: cement mortar will technically work. The downsides are that it requires a thicker bed (which adds weight and height), it doesn't handle thermal movement as well, and the bond quality is highly dependent on the skill of the individual mason.</p>

<p>For anything larger than 400x400, for natural stone, for vitrified tiles, for any wall application, or for any exterior use: you need polymer-modified tile adhesive. Not because of brand marketing, but because the mechanics of bonding large, smooth, low-absorption tiles to a substrate require the properties that cement mortar simply doesn't have.</p>

<h2>What's the difference between the grades?</h2>

<p>TileGrip X1 is the workhorse. Ceramic tiles, indoor spaces, standard residential work, X1 does this reliably and economically. TileGrip X2 steps up for large-format vitrified (600x600 and above), porcelain, and natural stone in indoor-outdoor spaces. TileGrip X3 and X4 are for situations where you cannot afford a failure: oversized stone, exterior cladding, high-traffic commercial floors, facades that get full sun exposure.</p>

<p>The honest rule: match the grade to the worst condition the tile will face, not the average condition.</p>

<h2>What about block mortar: why not just use regular cement?</h2>

<p>For AAC blocks, regular cement mortar at 12mm joints creates thermal bridges, doesn't bond well to the smooth block surface, and shrinks in ways that crack plaster later. BlockGrip X at 3 to 5mm joints gives you better bond, less waste, faster laying speed, and dramatically fewer plaster cracks. For traditional brick, regular mortar is fine.</p>

<h2>When do I need a bonding agent before plastering?</h2>

<p>Any time you're plastering over AAC blocks, smooth fair-faced concrete, or old tiles. These surfaces don't absorb water from the plaster or provide mechanical key. Without a bonding agent, you'll get hollow patches and eventual delamination. PlastoGrip X applied as a thin slurry coat before plastering eliminates the need for surface hacking and wire mesh.</p>

<h2>The one thing most contractors get wrong</h2>

<p>They buy the right product and then don't mix it correctly. Every product has a water ratio. Too much water reduces bond strength and open time. Too little makes it unworkable. Use a clean bucket, a mechanical mixer or drill with a paddle attachment, and follow the mixing ratio on the bag. It takes an extra five minutes and makes a measurable difference to the finished bond.</p>
    `,
  },
  {
    slug: "tile-adhesive-coverage-per-square-foot-india",
    title: "How Much Tile Adhesive Do You Need Per Square Foot? A Practical Coverage Guide for Indian Sites",
    subtitle: "Before you order materials, you need accurate numbers. Here's how to calculate tile adhesive quantity for any project, with real figures from Indian site conditions.",
    date: "May 1, 2025",
    readTime: "5 min read",
    category: "Guides",
    coverImage: "/images/blog-contractor-guide.jpg",
    author: { name: "Kishan Enterprise Technical Team", role: "Bharuch, Gujarat" },
    body: `
<p>One of the most common questions we get from contractors and homeowners is simple: how many bags of tile adhesive do I need for my floor? It sounds like a straightforward calculation, but there are a few variables that change the answer significantly. This guide gives you accurate numbers to work with.</p>

<h2>The basic coverage formula</h2>

<p>All Alphabond TileGrip adhesives cover approximately 4 to 5 square metres per 20 kg bag at 3mm bed thickness using a standard notched trowel. That translates to roughly 43 to 54 square feet per 20 kg bag.</p>

<p>To calculate quantity needed:</p>
<ul>
  <li>Measure your total area in square feet</li>
  <li>Divide by 45 (a conservative middle estimate)</li>
  <li>Add 10 to 15% for wastage, cuts, and corners</li>
</ul>

<p>Example: For a 500 sq.ft. floor, the base calculation is 500 divided by 45, which equals approximately 11 bags. Adding 12% wastage brings you to about 12 to 13 bags of 20 kg TileGrip adhesive.</p>

<h2>What changes coverage significantly</h2>

<p><strong>Tile size:</strong> Large-format tiles (600x600 and above) require back-buttering in addition to the floor application. When you apply adhesive to both the floor and the back of the tile, your consumption per square foot increases by 30 to 50%. Plan for 7 to 8 square metres per bag instead of 9 to 10.</p>

<p><strong>Substrate condition:</strong> An uneven floor that needs levelling with adhesive (which is incorrect practice, but it happens) will consume significantly more material. If your substrate has more than 3mm variation, level it first with a levelling compound. Don't use tile adhesive as a levelling screed.</p>

<p><strong>Notch trowel size:</strong> The notch size directly controls bed thickness. A 6mm notch gives you a bed depth roughly double that of a 3mm notch. Most Indian tile work uses 6mm notch trowels, which means real-world coverage is closer to 3 to 3.5 square metres per bag. Use this figure for ordering unless your tiler specifically works at 3mm.</p>

<p><strong>Natural stone:</strong> Stone tiles are heavier and require fuller coverage on the back. Budget for 15 to 20% more material than for vitrified tiles of the same size.</p>

<h2>Coverage per bag in practice</h2>

<p>Based on typical Indian site conditions using a 6mm notched trowel:</p>
<ul>
  <li>Small ceramic tiles (up to 300x300): 30 to 40 sq.ft. per 20 kg bag</li>
  <li>Medium vitrified (400x400 to 600x600): 25 to 32 sq.ft. per 20 kg bag</li>
  <li>Large format (600x1200 and above, with back-buttering): 18 to 24 sq.ft. per 20 kg bag</li>
  <li>Natural stone with back-buttering: 15 to 20 sq.ft. per 20 kg bag</li>
</ul>

<h2>How to order for a project</h2>

<p>Always order 15% more than your calculated requirement. Tile adhesive is mixed with water and has a limited pot life once mixed. Batch losses from partially used buckets, spillage, and over-mixing are normal. Running short mid-project and waiting for delivery costs more in labour than the extra bags you ordered.</p>

<p>If you're unsure, call us. We can give you a project-specific quantity estimate based on your tile size, substrate type, and floor area within the same day.</p>

<h2>Shelf life and storage</h2>

<p>Unopened bags of TileGrip adhesive have a shelf life of 12 months from manufacture when stored in a cool, dry place off the ground. Don't store on a damp floor or in direct contact with rain. Bags that have absorbed moisture will clump and perform poorly even if the expiry date hasn't passed.</p>
    `,
  },
  {
    slug: "tile-adhesive-grades-c1-c2-c2te-c2tes1-explained",
    title: "C1, C2, C2TE, C2TES1: What Tile Adhesive Grade Classifications Actually Mean",
    subtitle: "The EN 12004 classification system appears on every adhesive bag in India, but most contractors don't know what the letters mean or why they matter for your specific project.",
    date: "April 5, 2025",
    readTime: "7 min read",
    category: "Technical",
    coverImage: "/images/blog-tile-failure-summer.png",
    author: { name: "Kishan Enterprise Technical Team", role: "Bharuch, Gujarat" },
    body: `
<p>If you've ever looked at a bag of tile adhesive in India and seen the designation "C2TE" or "C2TES1" printed on it, you've seen the EN 12004 classification system. This is the European standard for tile adhesive performance that has been adopted across India's quality-conscious construction chemical market. Most contractors ignore it. That's a mistake, because the classification tells you exactly what the adhesive can and cannot do.</p>

<h2>The basic classification structure</h2>

<p>Every cementitious tile adhesive gets a two-part base designation:</p>

<ul>
  <li><strong>C</strong> stands for cementitious (cement-based). All Alphabond TileGrip products are C-type adhesives.</li>
  <li><strong>1 or 2</strong> is the performance class. C1 is standard performance. C2 is improved performance with higher bond strengths.</li>
</ul>

<p>After the base designation, additional letters indicate special characteristics:</p>
<ul>
  <li><strong>E</strong> stands for Extended open time (at least 30 minutes, versus the standard 20 minutes)</li>
  <li><strong>T</strong> stands for Tixotropic, meaning the adhesive has non-slump properties for wall applications</li>
  <li><strong>S1 or S2</strong> stands for deformability. S1 is a flexible adhesive. S2 is a highly flexible adhesive.</li>
  <li><strong>F</strong> stands for Fast-setting</li>
</ul>

<h2>What the TileGrip grades mean in practice</h2>

<p><strong>TileGrip X1 (C1T):</strong> Standard cement-based adhesive with tixotropic (non-slump) properties. Suitable for standard ceramic tiles in low-to-medium stress environments. Wall and floor applications indoors. This is the everyday workhorse grade.</p>

<p><strong>TileGrip X2 (C2T):</strong> Improved-performance adhesive with tixotropic properties. Higher shear and tensile strength than X1. Suitable for larger tiles, heavier surfaces, vitrified and glass mosaic tiles, outdoor floors, and natural stone up to medium weight. The step up when X1's bond strength isn't enough.</p>

<p><strong>TileGrip X3 (C2TE):</strong> Improved-performance, tixotropic, extended open time. The extended open time is critical for large-format tiles. When you're aligning 800x800 granite tiles that weigh 15 to 20 kg each, you need time to position them accurately. X3 gives you that time while maintaining high bond strength. Suitable for demanding exterior applications, natural stone, high-traffic commercial interiors.</p>

<p><strong>TileGrip X4 (C2TES1):</strong> All of the above, plus S1 deformability. A flexible adhesive that can absorb thermal movement between the tile and the substrate. This is the grade for façades, cladding, roof terraces, and any application where significant thermal cycling is expected. The polymer modification is highest in this grade.</p>

<h2>Which grade do you actually need?</h2>

<p>The answer depends on three factors: tile format and weight, substrate type, and exposure conditions.</p>

<p><strong>Use X1 when:</strong> Installing standard ceramic tiles (up to 400x400) on prepared indoor floors or walls. Standard residential bathrooms, kitchen backsplashes, indoor corridors.</p>

<p><strong>Use X2 when:</strong> Working with large-format vitrified, porcelain, or natural stone tiles indoors or in sheltered outdoor areas. Outdoor courtyard floors in mild climates. Any installation where the tile weight or size exceeds what X1 is rated for.</p>

<p><strong>Use X3 when:</strong> Precision placement matters. Oversized tiles in lobbies, commercial atriums, and external feature walls. Marble and granite in luxury residential or hotel projects. Anywhere the open time of a standard adhesive creates pressure to rush.</p>

<p><strong>Use X4 when:</strong> The application involves thermal cycling, movement, or chemical exposure. External facades. Roof terraces and podiums. Industrial floors. Cladding on structural frames. This is the grade you use when failure is not an acceptable outcome.</p>

<h2>Why this matters for specifications</h2>

<p>When an architect specifies "C2TE tile adhesive" in a project specification, they're not specifying a brand. They're specifying a performance class. Any adhesive that meets C2TE can be used. What architects and project managers often don't realise is that a contractor substituting C1T (X1) for a specified C2TE (X3) is not just cutting corners. They're installing a non-compliant product. If tiles fail, the adhesive manufacturer's warranty is void, and the liability falls squarely on whoever made the substitution.</p>

<p>Specify the grade in writing. Check the bags on site. It takes 30 seconds and protects the project for decades.</p>
    `,
  },
  {
    slug: "tile-over-existing-tiles-india",
    title: "Can You Lay Tiles Over Existing Tiles? A Contractor's Honest Answer",
    subtitle: "It's done every day across India. Sometimes it works for decades. Sometimes it fails in months. The difference is entirely in how you prepare the surface and which adhesive you choose.",
    date: "March 20, 2025",
    readTime: "6 min read",
    category: "Technical",
    coverImage: "/images/blog-tile-failure-summer.png",
    author: { name: "Kishan Enterprise Technical Team", role: "Bharuch, Gujarat" },
    body: `
<p>Tiling over existing tiles is one of the most frequently asked questions we get at Alphabond. The short answer is yes, you can, but only when specific conditions are met. Skipping those conditions is how people end up with two layers of delaminated tiles instead of one.</p>

<h2>When tiling over existing tiles is acceptable</h2>

<p>The existing tile layer must be structurally sound. This means every tile in the area must be firmly bonded to the substrate beneath. Tap each tile with a coin or the handle of a screwdriver and listen. A solid, dull thud means good adhesion. A hollow ringing sound means the tile is already debonded from the substrate below.</p>

<p>A single hollow tile in a small area might be acceptable if you chip it out, fill the void, and re-fix it before proceeding. But if more than 10 to 15% of the tiles are hollow, the entire existing layer must be removed before new tiling begins. Laying new tiles over a partially delaminated base is laying new tiles over a future failure.</p>

<p>Additional conditions that must be met:</p>
<ul>
  <li>The existing tile surface must be clean, free of wax, polish, oils, and grease</li>
  <li>The added height of a second tile layer must be structurally and dimensionally acceptable (check door clearances, transition strips, and floor-to-slab height)</li>
  <li>The existing grout joints should be filled level before the new adhesive is applied, or the new tile layout should be offset so new joints don't fall directly over old ones</li>
  <li>Smooth, glazed tile surfaces need mechanical preparation before they'll accept adhesive</li>
</ul>

<h2>Surface preparation: the step nobody wants to do</h2>

<p>Glazed ceramic and vitrified tiles have a smooth, low-absorption surface. Standard cement-based tile adhesive doesn't bond well to them without preparation. You have two options.</p>

<p>First: mechanical abrasion. Grind the existing tile surface with an angle grinder using a diamond cup wheel, or use a floor sander with a coarse grit. This creates a mechanical key for the adhesive to grip. It's dusty, slow, and labour-intensive, but it's the most reliable preparation method.</p>

<p>Second: epoxy primer or bonding agent. Apply a thin coat of adhesion primer to the existing tile surface, allow it to tack, and apply adhesive over it. This is faster and cleaner than mechanical grinding, but the primer adds cost and the compatibility between primer and adhesive must be confirmed before use.</p>

<h2>Which adhesive to use for tile-on-tile work</h2>

<p>You need at least a C2T adhesive (TileGrip X2 or above) for any tile-on-tile application. Here's why: the existing tile surface doesn't absorb water from the adhesive the way a cement or plaster substrate does. The bond forms almost entirely through the polymer chemistry of the adhesive, not through mechanical absorption. A standard C1T adhesive has lower polymer content and lower tensile strength. It may bond initially but will debond under thermal movement or load.</p>

<p>For larger format tiles going onto existing tiles, use TileGrip X3. The extended open time allows you to work carefully, and the higher bond strength gives you the margin you need for a demanding substrate.</p>

<h2>The weight problem</h2>

<p>Adding a second tile layer adds significant load to the floor slab. Standard vitrified tiles at 10mm thickness weigh approximately 20 to 25 kg per square metre. Add 20 kg of adhesive and you're adding 40 to 45 kg per square metre of dead load.</p>

<p>For ground floors and well-designed commercial concrete slabs, this is generally fine. For upper floors in residential buildings, particularly older buildings with thinner slabs, consult a structural engineer before adding a second tile layer over a large area.</p>

<h2>The honest recommendation</h2>

<p>Tile-over-tile is a legitimate renovation technique when done correctly. The preparation is the job. The adhesive is straightforward. Don't skip the hollow-tap test. Don't skip the surface preparation. And don't use a cheap C1T adhesive because it's going onto "just tiles." The substrate being tiles makes the job harder, not easier.</p>
    `,
  },
  {
    slug: "plaster-falling-off-rcc-columns-beams-fix",
    title: "Why Does Plaster Fall Off RCC Columns and Beams? The Real Cause and the Permanent Fix",
    subtitle: "Plaster delaminating from concrete is one of the most common and most preventable problems in Indian construction. It's not the plaster that fails. It's the interface between the plaster and the concrete.",
    date: "March 1, 2025",
    readTime: "6 min read",
    category: "Technical",
    coverImage: "/images/blog-aac-blocks.jpg",
    author: { name: "Kishan Enterprise Technical Team", role: "Bharuch, Gujarat" },
    body: `
<p>If you've ever seen plaster peel away from a concrete column in a new building, you know what we're talking about. Not hairline cracks. Whole sections of plaster coming away in sheets, sometimes within a year of the building being plastered. The building owner is furious. The contractor says the plaster was mixed wrong. The plaster supplier says the application was wrong. Nobody talks about the actual cause.</p>

<h2>Why RCC surfaces are difficult to plaster</h2>

<p>Traditional lime or sand-cement plaster works by two mechanisms: mechanical bonding into a porous surface, and absorption of water from the plaster mix into the substrate. Both of these mechanisms keep the plaster in contact with the substrate during the critical early curing period.</p>

<p>Fair-faced concrete and RCC surfaces provide neither. The concrete is smooth from the formwork, non-porous compared to brick, and has a thin layer of cement laitance (the slurry that rises to the surface during casting) that is weak and poorly bonded to the concrete below. When you apply plaster directly to this surface, you're bonding to the laitance layer, not to the concrete.</p>

<p>That laitance layer fails. And when it fails, it takes your plaster with it.</p>

<h2>Why hacking doesn't always solve the problem</h2>

<p>The traditional solution to this problem was "hacking": using a chisel or bush hammer to roughen the concrete surface and create a mechanical key. This works if done correctly and thoroughly. It also has serious practical problems on construction sites.</p>

<p>First, hacking is extremely labour-intensive. A skilled worker can hack 15 to 20 square feet per hour by hand. On a building with hundreds of square metres of concrete columns and beams, the labour cost is substantial.</p>

<p>Second, hacking done carelessly doesn't actually penetrate the laitance. If the chiselling is only creating surface scratches rather than removing the laitance layer, you've added labour time and dust but haven't solved the problem.</p>

<p>Third, hacking on load-bearing columns in completed structures carries structural risk if done aggressively.</p>

<h2>The modern solution: polymer bonding agents</h2>

<p>PlastoGrip X, our polymer-modified plaster and bonding agent, was designed specifically to solve this problem without hacking. The application process is straightforward:</p>

<ol>
  <li>Clean the concrete surface with water. Remove dust, oil, and any loose laitance by wire brushing or water jetting.</li>
  <li>Allow the surface to dry to a saturated surface dry (SSD) condition, which means damp but not wet.</li>
  <li>Mix a thin slurry coat of PlastoGrip X with slightly more water than the standard mix ratio. This should have the consistency of thick cream.</li>
  <li>Apply the slurry coat to the concrete surface using a brush or trowel, working it into the surface. Target 1 to 2mm thickness.</li>
  <li>Allow the slurry coat to become tacky. This takes 30 to 90 minutes depending on temperature.</li>
  <li>Apply the finishing plaster coat directly onto the tacky slurry coat. The polymer creates a chemical bond between the concrete, the bonding layer, and the finish plaster.</li>
</ol>

<h2>Why this works where direct plastering fails</h2>

<p>The polymer in PlastoGrip X creates a flexible, chemically active interface layer that bonds to the concrete surface on one side and to the finishing plaster on the other. Unlike cement laitance, this interface layer is not brittle. It can accommodate the small differential movements that occur between concrete and plaster as temperatures change.</p>

<p>Bond strength with a properly applied bonding agent exceeds 1.0 N/mm² on clean concrete. Bond strength of direct plastering on smooth concrete without preparation is typically 0.1 to 0.3 N/mm², and often less on laitance-covered surfaces.</p>

<h2>Addressing the existing problem</h2>

<p>If plaster has already delaminated from columns in an existing building, the repair process is the same. Remove all hollow and delaminated plaster. Clean the exposed concrete. Apply bonding agent. Replaster. Don't patch plaster directly over hollow sections.</p>

<p>Patching delaminated plaster without addressing the bond failure is a temporary fix. The boundary between the old plaster and the new patch becomes the next failure line.</p>
    `,
  },
  {
    slug: "what-is-non-shrink-grout-machine-foundation",
    title: "What Is Machine Foundation Grouting and When Do You Need Non-Shrink Grout?",
    subtitle: "Heavy machinery requires precision alignment that normal concrete cannot maintain. Non-shrink precision grout is the material that keeps turbines, compressors, and industrial equipment running true for decades.",
    date: "February 15, 2025",
    readTime: "7 min read",
    category: "Industry",
    coverImage: "/images/blog-dry-sand.jpg",
    author: { name: "Kishan Enterprise Technical Team", role: "Bharuch, Gujarat" },
    body: `
<p>If you work in construction, you've probably heard of machine foundation grouting. If you work in manufacturing or process engineering, you know how critical it is. But the question of exactly what non-shrink grout does differently, and why it matters, often doesn't get a clear answer. This is that answer.</p>

<h2>What machine foundation grouting is</h2>

<p>When heavy industrial equipment is installed, such as turbines, compressors, pumps, generators, or large motors, it sits on a concrete foundation specifically designed for its load and vibration characteristics. But between the equipment base plate and the top surface of the concrete foundation, there is deliberately a gap, typically 25 to 75mm.</p>

<p>This gap exists because the concrete foundation is cast and cured independently of the equipment installation. The equipment is placed and precision-levelled using shims and jacking screws. Once the equipment is correctly aligned to its mechanical specifications, the gap between the base plate and the concrete is filled with grout.</p>

<p>That grout, when cured, becomes the load-transfer medium between the equipment and its foundation. Every kilogram of equipment weight, every vibration force, every thermal load passes through the grouted connection. The grout must be strong, stable, dimensionally precise, and capable of transferring dynamic loads without cracking or creep.</p>

<h2>Why ordinary concrete doesn't work</h2>

<p>Standard concrete shrinks as it cures. Shrinkage of 0.04 to 0.08% by length is typical for ordinary Portland cement concrete. That sounds small, but in a 500mm machine base plate, 0.06% shrinkage is 0.3mm of dimensional change. For equipment that has been precision-aligned to within 0.05mm, 0.3mm of movement is catastrophic.</p>

<p>Additionally, concrete shrinkage doesn't happen uniformly. The surface dries faster than the core. This creates differential shrinkage and, in thin sections like a base plate grout, it creates separation at the interface between the grout and the base plate or the concrete foundation. You end up with voids exactly where you need continuous load transfer.</p>

<p>Ordinary concrete also doesn't fill complex void shapes reliably. Machine foundation voids often have anchor bolts, recesses, and irregular geometry. Concrete at normal flow consistency won't reach every corner. Flowable non-shrink grout does.</p>

<h2>How non-shrink precision grout works</h2>

<p>AlphaGrout X1 and X2 are formulated with controlled expansion additives, typically metallic aluminium or gas-generating compounds in precise quantities. These additives cause a microscopic expansion in the grout during the early plastic phase, which exactly counteracts the subsequent drying shrinkage. The net result is a grout that maintains its volume as it cures.</p>

<p>The expansion is calibrated precisely. Too much expansion and the grout damages the formwork or misaligns the equipment. Too little and you're back to the same void problem as ordinary concrete. AlphaGrout's formulation is tested batch-to-batch to ensure expansion is within the required tolerance.</p>

<p>Key properties of AlphaGrout X1:</p>
<ul>
  <li>Compressive strength: more than 10 N/mm² at 1 day, more than 35 N/mm² at 7 days, more than 45 N/mm² at 28 days</li>
  <li>Young's Modulus: 25 kN/mm² (stiff enough to transfer dynamic loads, not so stiff as to crack under thermal cycling)</li>
  <li>Non-shrink, non-expanding net volume change after the controlled initial expansion</li>
  <li>Self-levelling at standard consistency for filling under base plates</li>
</ul>

<p>AlphaGrout X2 delivers higher strength (more than 65 N/mm² at 28 days) and accepts coarse aggregates up to 20mm for larger volume pours, such as column pocket grouting or large equipment pedestals.</p>

<h2>Typical applications in Indian industry</h2>

<p>In Gujarat and Maharashtra, we supply AlphaGrout for machine foundation grouting across the petrochemical corridor in Dahej, steel and manufacturing plants in Surat and Vadodara, pharmaceutical facilities in Ahmedabad, and cement plant equipment installations across the region.</p>

<p>Common applications include base plates for compressors, pumps, turbines, generators, and motors; column-to-foundation pocket grouting in precast construction; anchor bolt grouting in structural steel erection; and void filling in bridges and viaducts.</p>

<h2>The cost of using the wrong grout</h2>

<p>Using ordinary concrete, or a generic non-structural grout, for precision machine grouting creates alignment problems that are expensive to diagnose and even more expensive to fix. A misaligned compressor shaft, running just 0.1mm off-centre because the base plate has settled into a shrinkage void, will fail its bearings ahead of schedule. A bearing failure on a process compressor in a chemical plant can cause days of unplanned shutdown. The cost of that shutdown makes the price of AlphaGrout look like a rounding error.</p>

<p>Specify the right grout at the design stage. Don't let it be a site substitution decision made by whoever is buying materials that week.</p>
    `,
  },
  {
    slug: "tile-adhesive-drying-curing-time-india",
    title: "Tile Adhesive Drying and Curing Time in India: When Can You Grout, Walk On, and Load New Tiles?",
    subtitle: "Rushing any of these three steps is how tiles crack, grout lines stain, and floors have to be relaid. Here's what the curing timeline actually looks like on an Indian construction site.",
    date: "January 10, 2025",
    readTime: "5 min read",
    category: "Guides",
    coverImage: "/images/blog-grout-comparison.jpg",
    author: { name: "Kishan Enterprise Technical Team", role: "Bharuch, Gujarat" },
    body: `
<p>Every bag of tile adhesive has curing time information printed on it. Most contractors don't read it until something goes wrong. This guide explains the three critical waiting periods after tile installation: initial set, grouting readiness, and full load-bearing strength.</p>

<h2>The three stages of tile adhesive curing</h2>

<p><strong>Stage 1: Initial set (2 to 4 hours).</strong> This is when the adhesive starts to stiffen and the tile can no longer be adjusted. After initial set, the tile is "held" in position but the bond is far from its final strength. During this period, the tile can be moved accidentally if any load is applied. This is why foot traffic, laying adjacent tiles, or any work around freshly laid tiles must wait at least 4 to 6 hours in Indian summer conditions.</p>

<p><strong>Stage 2: Grouting readiness (24 hours minimum).</strong> Standard TileGrip adhesives should cure for a minimum of 24 hours at 25°C before grouting begins. Here's why this matters: when grout is applied to a tile joint, it introduces water into the joint. If the adhesive beneath the tile hasn't achieved sufficient strength, this water penetration and the mechanical action of pressing grout into the joints can disturb the bond.</p>

<p>Additionally, if you grout before the adhesive fully cures, any outgassing from the curing adhesive can push through the grout joint and cause staining or colour inconsistency in the finished grout surface.</p>

<p><strong>Stage 3: Full load bearing strength (7 to 14 days).</strong> Polymer-modified cementitious adhesives continue to gain strength for 7 to 14 days after application. The tile can be walked on carefully after 24 hours, but heavy point loads from furniture, scaffolding, or equipment should wait at least 7 days. For floors that will receive heavy equipment, allow a full 14-day cure before loading.</p>

<h2>How Indian summer conditions change the timeline</h2>

<p>The curing times above are at 20 to 25°C with normal humidity. Indian site conditions in summer are significantly different.</p>

<p><strong>High temperature (35 to 45°C):</strong> Faster initial set, but potentially reduced final strength if the adhesive dries out before full hydration. Wet the substrate before applying adhesive, work in shaded sections, and apply tiles in smaller batches. Don't over-thin the adhesive with extra water to compensate for the heat, as this reduces bond strength.</p>

<p><strong>Direct sun exposure:</strong> Tiles on south-facing walls in direct sun can reach 60 to 70°C on the surface. Apply adhesive to the wall, not the tile, and keep the tile in shade until the moment of placement. Apply fresh material frequently. Never apply adhesive to tiles that have been sitting in direct sun.</p>

<p><strong>Monsoon conditions:</strong> High humidity slows drying significantly. Allow 36 to 48 hours before grouting rather than 24 hours. Ensure the grouted surface isn't exposed to rain or heavy condensation for at least 24 hours after grouting. Most tile adhesives are water-resistant after cure, but the early curing phase is vulnerable to water ingress.</p>

<h2>Why tiles pop after grouting</h2>

<p>One specific failure mode that we see regularly in Gujarat: tiles that were laid correctly but then grouted within 6 to 8 hours, especially in summer. The adhesive was still in a plastic state. The pressure applied during grouting, combined with water from the grout mix, disrupted the interface between the adhesive and the substrate. When the adhesive fully cured, it cured in a stressed state, and tiles showed as hollow within weeks.</p>

<p>The fix for this failure is straightforward: wait the full 24 hours before grouting. It costs nothing. It prevents a complete rework.</p>

<h2>Quick reference for Indian sites</h2>

<ul>
  <li>Can I adjust tile position after laying? No: after initial set (2 to 4 hours)</li>
  <li>When can I walk carefully on new tiles? 24 hours minimum (48 hours in monsoon or cold weather)</li>
  <li>When can I start grouting? 24 hours minimum at 25°C; 36 to 48 hours in high humidity</li>
  <li>When can heavy furniture or equipment go on the floor? 7 days minimum; 14 days for heavy loads</li>
  <li>When is the adhesive at full rated strength? 28 days (same as concrete, same chemistry)</li>
</ul>
    `,
  },
];
