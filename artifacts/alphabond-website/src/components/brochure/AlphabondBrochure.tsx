import {
  Document, Page, View, Text, Image, StyleSheet, Font
} from "@react-pdf/renderer";

Font.register({
  family: "Inter",
  fonts: [
    { src: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2", fontWeight: 400 },
    { src: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hiA.woff2", fontWeight: 600 },
    { src: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZ9hiA.woff2", fontWeight: 700 },
  ],
});

const PRIMARY = "#010ED0";
const DARK = "#0A0F2E";
const SLATE = "#475569";
const LIGHT_BG = "#F8FAFC";
const BORDER = "#E2E8F0";

const s = StyleSheet.create({
  page: { fontFamily: "Inter", backgroundColor: "#ffffff", position: "relative" },
  /* ── Cover ── */
  coverPage: { backgroundColor: DARK, flexDirection: "column", justifyContent: "flex-end" },
  coverOverlay: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 },
  coverBg: { width: "100%", height: "100%", opacity: 0.25 },
  coverContent: { padding: 48, position: "relative", zIndex: 1 },
  coverLogo: { width: 160, height: 56, objectFit: "contain", marginBottom: 32 },
  coverTagline: { fontSize: 28, fontWeight: 700, color: "#ffffff", lineHeight: 1.2, marginBottom: 10 },
  coverSub: { fontSize: 12, color: "#94A3B8", marginBottom: 48, lineHeight: 1.5 },
  coverDivider: { height: 2, width: 48, backgroundColor: PRIMARY, marginBottom: 32 },
  coverContact: { flexDirection: "row", gap: 24, marginBottom: 8 },
  coverContactItem: { fontSize: 9, color: "#94A3B8" },
  coverISO: { flexDirection: "row", alignItems: "center", gap: 6, marginTop: 16 },
  coverISOBadge: { fontSize: 8, color: "#60A5FA", backgroundColor: "rgba(96,165,250,0.15)", paddingHorizontal: 8, paddingVertical: 3, borderRadius: 4 },
  /* ── About ── */
  aboutPage: { padding: 44, backgroundColor: "#ffffff" },
  facilityImg: { width: "100%", height: 160, objectFit: "cover", borderRadius: 8, marginBottom: 28 },
  sectionLabel: { fontSize: 8, fontWeight: 600, color: PRIMARY, textTransform: "uppercase", letterSpacing: 2, marginBottom: 6 },
  aboutTitle: { fontSize: 22, fontWeight: 700, color: DARK, marginBottom: 14, lineHeight: 1.25 },
  aboutBody: { fontSize: 9, color: SLATE, lineHeight: 1.65, marginBottom: 10 },
  vmGrid: { flexDirection: "row", gap: 12, marginTop: 20 },
  vmBox: { flex: 1, backgroundColor: LIGHT_BG, borderRadius: 8, padding: 14, borderLeft: `3px solid ${PRIMARY}` },
  vmTitle: { fontSize: 10, fontWeight: 700, color: DARK, marginBottom: 6 },
  vmText: { fontSize: 8.5, color: SLATE, lineHeight: 1.6 },
  missionBullet: { fontSize: 8.5, color: SLATE, lineHeight: 1.6, marginBottom: 3 },
  /* ── Product page ── */
  productPage: { padding: 0, backgroundColor: "#ffffff" },
  productHeader: { backgroundColor: DARK, padding: "20 44 18 44", flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  productCategoryTag: { fontSize: 8, color: "#94A3B8", textTransform: "uppercase", letterSpacing: 1.5 },
  productTypeBadge: { fontSize: 8, fontWeight: 700, color: "#ffffff", backgroundColor: PRIMARY, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 4 },
  productHero: { flexDirection: "row", backgroundColor: LIGHT_BG, minHeight: 180 },
  productBagWrap: { width: 160, alignItems: "center", justifyContent: "center", padding: 16, backgroundColor: "#F1F5F9" },
  productBag: { width: 130, height: 160, objectFit: "contain" },
  productHeroRight: { flex: 1, padding: "20 24 20 16" },
  productName: { fontSize: 22, fontWeight: 700, color: DARK, marginBottom: 3 },
  productSubtitle: { fontSize: 10, fontWeight: 600, color: PRIMARY, marginBottom: 8 },
  productDesc: { fontSize: 8.5, color: SLATE, lineHeight: 1.65 },
  productBody: { padding: "14 44 24 44" },
  twoCol: { flexDirection: "row", gap: 16, marginTop: 12 },
  col: { flex: 1 },
  boxTitle: { fontSize: 8, fontWeight: 700, color: "#ffffff", textTransform: "uppercase", letterSpacing: 1, backgroundColor: DARK, paddingHorizontal: 10, paddingVertical: 5, borderRadius: "4 4 0 0" },
  boxContent: { backgroundColor: LIGHT_BG, borderRadius: "0 0 4 4", padding: 10, border: `1px solid ${BORDER}` },
  tableRow: { flexDirection: "row", borderBottom: `1px solid ${BORDER}`, paddingVertical: 5 },
  tableRowAlt: { flexDirection: "row", borderBottom: `1px solid ${BORDER}`, paddingVertical: 5, backgroundColor: "#F1F5F9" },
  tableLabel: { width: "45%", fontSize: 8, fontWeight: 600, color: DARK },
  tableValue: { flex: 1, fontSize: 8, color: SLATE },
  bullet: { fontSize: 8.5, color: SLATE, lineHeight: 1.6, marginBottom: 3 },
  howToBox: { backgroundColor: "#EEF2FF", borderRadius: 6, padding: 12, marginTop: 12, borderLeft: `3px solid ${PRIMARY}` },
  howToTitle: { fontSize: 8, fontWeight: 700, color: PRIMARY, textTransform: "uppercase", letterSpacing: 1, marginBottom: 5 },
  howToText: { fontSize: 8.5, color: "#3730A3", lineHeight: 1.6 },
  packBadge: { flexDirection: "row", gap: 8, marginTop: 10 },
  packItem: { backgroundColor: DARK, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 4 },
  packText: { fontSize: 8, fontWeight: 600, color: "#ffffff" },
  /* ── Lineup page ── */
  lineupPage: { backgroundColor: DARK, justifyContent: "center", alignItems: "center", padding: 44 },
  lineupTitle: { fontSize: 30, fontWeight: 700, color: "#ffffff", textAlign: "center", lineHeight: 1.2, marginBottom: 8 },
  lineupSub: { fontSize: 11, color: "#94A3B8", textAlign: "center", marginBottom: 36 },
  lineupGrid: { flexDirection: "row", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 36 },
  lineupCard: { width: 120, backgroundColor: "rgba(255,255,255,0.06)", borderRadius: 8, padding: 10, alignItems: "center", border: `1px solid rgba(255,255,255,0.1)` },
  lineupBag: { width: 70, height: 85, objectFit: "contain", marginBottom: 6 },
  lineupName: { fontSize: 8, fontWeight: 700, color: "#ffffff", textAlign: "center", marginBottom: 2 },
  lineupType: { fontSize: 6.5, color: "#94A3B8", textAlign: "center" },
  lineupSlogan: { fontSize: 14, fontWeight: 600, color: "#60A5FA", textAlign: "center", fontStyle: "italic" },
  /* ── Back cover ── */
  backPage: { backgroundColor: "#0A0F2E", padding: 48, justifyContent: "space-between" },
  backLogoWrap: { alignItems: "center", marginBottom: 40 },
  backLogo: { width: 140, height: 48, objectFit: "contain" },
  backTagline: { fontSize: 10, color: "#60A5FA", textAlign: "center", marginTop: 8 },
  backAddresses: { flexDirection: "row", gap: 20, marginBottom: 36 },
  backAddrBox: { flex: 1, backgroundColor: "rgba(255,255,255,0.05)", borderRadius: 8, padding: 16, border: `1px solid rgba(255,255,255,0.1)` },
  backAddrLabel: { fontSize: 7, fontWeight: 700, color: PRIMARY, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 8 },
  backAddrLine: { fontSize: 8.5, color: "#CBD5E1", lineHeight: 1.65 },
  backContacts: { flexDirection: "row", gap: 20, justifyContent: "center", marginBottom: 20 },
  backContactItem: { alignItems: "center", gap: 3 },
  backContactLabel: { fontSize: 7, color: "#64748B", textTransform: "uppercase", letterSpacing: 1 },
  backContactVal: { fontSize: 9.5, color: "#ffffff", fontWeight: 600 },
  backFooter: { borderTop: `1px solid rgba(255,255,255,0.1)`, paddingTop: 16, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  backFooterText: { fontSize: 7.5, color: "#475569" },
  backBadge: { fontSize: 7, color: "#60A5FA", backgroundColor: "rgba(96,165,250,0.1)", paddingHorizontal: 8, paddingVertical: 3, borderRadius: 3 },
  /* ── Page number ── */
  pageNum: { position: "absolute", bottom: 14, right: 44, fontSize: 7, color: "#CBD5E1" },
  pageNumDark: { position: "absolute", bottom: 14, right: 44, fontSize: 7, color: "#475569" },
});

interface Props { baseUrl: string }

const ProductPage = ({
  category, typeBadge, bagImg, name, subtitle, desc, howToUse,
  properties, substrates, applications, pack, appImg, baseUrl, page
}: {
  category: string; typeBadge: string; bagImg: string; name: string;
  subtitle: string; desc: string; howToUse: string;
  properties: { label: string; value: string }[];
  substrates: string[]; applications: string[]; pack: string[];
  appImg?: string; baseUrl: string; page: number;
}) => (
  <Page size="A4" style={s.productPage}>
    {/* Header band */}
    <View style={s.productHeader}>
      <Text style={s.productCategoryTag}>{category}</Text>
      <Text style={s.productTypeBadge}>{typeBadge}</Text>
    </View>

    {/* Hero area */}
    <View style={s.productHero}>
      <View style={s.productBagWrap}>
        <Image src={`${baseUrl}${bagImg}`} style={s.productBag} />
      </View>
      <View style={s.productHeroRight}>
        <Text style={s.productName}>{name}</Text>
        <Text style={s.productSubtitle}>{subtitle}</Text>
        <Text style={s.productDesc}>{desc}</Text>
        {appImg && (
          <Image src={`${baseUrl}${appImg}`} style={{ width: "100%", height: 75, objectFit: "cover", borderRadius: 6, marginTop: 10 }} />
        )}
      </View>
    </View>

    {/* Body */}
    <View style={s.productBody}>
      <View style={s.howToBox}>
        <Text style={s.howToTitle}>How to Use</Text>
        <Text style={s.howToText}>{howToUse}</Text>
      </View>

      <View style={s.twoCol}>
        {/* Left */}
        <View style={s.col}>
          <Text style={s.boxTitle}>Properties</Text>
          <View style={s.boxContent}>
            {properties.map((p, i) => (
              <View key={i} style={i % 2 === 0 ? s.tableRow : s.tableRowAlt}>
                <Text style={s.tableLabel}>{p.label}</Text>
                <Text style={s.tableValue}>{p.value}</Text>
              </View>
            ))}
          </View>
          <View style={{ marginTop: 12 }}>
            <Text style={s.boxTitle}>Pack Size</Text>
            <View style={s.boxContent}>
              {pack.map((p, i) => <Text key={i} style={s.bullet}>• {p}</Text>)}
            </View>
          </View>
        </View>
        {/* Right */}
        <View style={s.col}>
          <Text style={s.boxTitle}>Suitable Substrates</Text>
          <View style={s.boxContent}>
            {substrates.map((s2, i) => <Text key={i} style={s.bullet}>• {s2}</Text>)}
          </View>
          <View style={{ marginTop: 12 }}>
            <Text style={s.boxTitle}>Area of Application</Text>
            <View style={s.boxContent}>
              {applications.map((a, i) => <Text key={i} style={s.bullet}>• {a}</Text>)}
            </View>
          </View>
        </View>
      </View>
    </View>
    <Text style={s.pageNumDark}>{page}</Text>
  </Page>
);

export const AlphabondBrochure = ({ baseUrl }: Props) => (
  <Document title="Alphabond Product Brochure" author="Kishan Enterprise" subject="Construction Chemicals">

    {/* ── PAGE 1: COVER ─────────────────────────────────── */}
    <Page size="A4" style={s.coverPage}>
      <View style={s.coverOverlay}>
        <Image src={`${baseUrl}/images/hero-bg.png`} style={s.coverBg} />
      </View>
      <View style={s.coverContent}>
        <Image src={`${baseUrl}/logo.png`} style={s.coverLogo} />
        <View style={s.coverDivider} />
        <Text style={s.coverTagline}>{"Building the\nfoundation,\nliterally."}</Text>
        <Text style={s.coverSub}>
          {"High-performance construction chemicals and industrial sand solutions.\nManufactured in ISO-certified facilities in Bharuch & Surat, Gujarat.\nKishan Enterprise — operating as Alphabond™ — since 2008."}
        </Text>
        <View style={s.coverContact}>
          <Text style={s.coverContactItem}>+91 90994 65837</Text>
          <Text style={s.coverContactItem}>+91 96385 63857</Text>
          <Text style={s.coverContactItem}>info@alphabond.in</Text>
          <Text style={s.coverContactItem}>www.alphabond.in</Text>
        </View>
        <View style={s.coverISO}>
          <Text style={s.coverISOBadge}>ISO 9001:2015</Text>
          <Text style={s.coverISOBadge}>Make in India</Text>
          <Text style={s.coverISOBadge}>Since 2008</Text>
        </View>
      </View>
    </Page>

    {/* ── PAGE 2: ABOUT / VISION / MISSION ─────────────── */}
    <Page size="A4" style={s.aboutPage}>
      <Text style={s.sectionLabel}>About Us</Text>
      <Text style={s.aboutTitle}>{"Kishan Enterprise — operating as\nAlphabond™"}</Text>
      <Text style={s.aboutBody}>
        Alphabond is our flagship brand, proudly manufactured and marketed by Kishan Enterprise. Established in 2008, we began our journey in the sand supply industry. Over the years, we have expanded our expertise to become a leading manufacturer of high-quality building materials.
      </Text>
      <Text style={s.aboutBody}>
        We specialise in manufacturing high-performance tile adhesives, block mortar, ready-mix plaster, and precision grouts — designed to meet the evolving needs of modern construction. Our products are engineered for superior bonding strength, durability, and ease of application. We also supply premium-quality industrial sand — including both wet sand and dry sand — to India's largest cement and RMC majors.
      </Text>
      <Text style={s.aboutBody}>
        Our commitment to quality, innovation, and customer satisfaction has made us a trusted partner for builders, contractors, developers, and leading construction chemical manufacturers across India.
      </Text>
      <View style={s.vmGrid}>
        <View style={s.vmBox}>
          <Text style={s.vmTitle}>Our Vision</Text>
          <Text style={s.vmText}>
            To be a leading force in the building materials industry by delivering superior-quality products, fostering sustainable construction solutions, and building long-term relationships based on trust and excellence.
          </Text>
        </View>
        <View style={s.vmBox}>
          <Text style={s.vmTitle}>Our Mission</Text>
          <Text style={s.missionBullet}>• Manufacture and supply high-performance building materials that meet the evolving demands of the construction industry.</Text>
          <Text style={s.missionBullet}>• Maintain the highest standards of quality, innovation, and sustainability in every product we create.</Text>
          <Text style={s.missionBullet}>• Ensure customer satisfaction by providing reliable, cost-effective, and efficient solutions.</Text>
          <Text style={s.missionBullet}>• Expand our reach and strengthen partnerships with leading construction companies and developers.</Text>
        </View>
      </View>
      <Text style={s.pageNum}>2</Text>
    </Page>

    {/* ── PAGE 3: TILEGRIP X1 ───────────────────────────── */}
    <ProductPage
      baseUrl={baseUrl} page={3}
      category="Tile Adhesive  ·  C1T" typeBadge="Type 1"
      bagImg="/images/real-tx1.png"
      name="TileGrip X1" subtitle="Premium Tile Adhesive for Superior Bonding"
      desc="TileGrip X1 is a high-performance, polymer-modified tile adhesive designed for superior bonding strength and durability. Engineered for both wall and floor applications, it provides excellent adhesion to various substrates including concrete, cement plaster, and existing tiles."
      howToUse="Add 4.5 litres of clean water per 20 kg bag. Mix to a smooth, lump-free consistency. Apply with a notched trowel, press tiles firmly within 10–15 minutes. Fill joints after 24 hours. Do not walk on tiles for at least 24 hours."
      properties={[
        { label: "Appearance", value: "Grey / White Powder" },
        { label: "Open Time", value: "20 min at 20°C" },
        { label: "Pot Life", value: "Approx 120 min" },
        { label: "Shear Strength", value: "> 1.0 N/mm²" },
        { label: "Tensile Strength", value: "> 0.5 N/mm²" },
        { label: "Coverage (20 kg bag)", value: "4–5 m² @ 3 mm bed thickness" },
      ]}
      substrates={["Plaster", "AAC Block Surface", "Cement Base Surface", "RCC Surface", "Mosaic Tile Surface"]}
      applications={["Ceramic tile on internal & external floor", "Vitrified tiles on internal floor", "Highly porous tiles"]}
      pack={["20 kg Bag"]}
    />

    {/* ── PAGE 4: TILEGRIP X2 ───────────────────────────── */}
    <ProductPage
      baseUrl={baseUrl} page={4}
      category="Tile Adhesive  ·  C2T" typeBadge="Type 2"
      bagImg="/images/real-tx2.png"
      name="TileGrip X2" subtitle="High-Strength Tile Adhesive for Heavy-Duty Applications"
      desc="TileGrip X2 is a high-bond tile adhesive specially formulated for large-format and heavy tiles. Designed for both interior and exterior applications, it provides exceptional adhesion and flexibility, ensuring a long-lasting and durable finish."
      howToUse="Add 4.5 litres of clean water per 20 kg bag. Mix to a smooth, lump-free consistency. Apply with a notched trowel, press tiles firmly within 10–15 minutes. Fill joints after 24 hours. Suitable for floors, walls, vertical and horizontal surfaces."
      properties={[
        { label: "Appearance", value: "Grey / White Powder" },
        { label: "Open Time", value: "20 min at 20°C" },
        { label: "Pot Life", value: "Approx 120 min" },
        { label: "Shear Strength", value: "> 1.25 N/mm²" },
        { label: "Tensile Strength", value: "> 1.0 N/mm²" },
        { label: "Coverage (20 kg bag)", value: "4–5 m² @ 3 mm bed thickness" },
      ]}
      substrates={["Cement mortar beds", "Cement-based self-levelling screed", "Cement-based plaster", "Brick masonry", "Concrete surfaces", "Concrete block masonry", "Cement terrazzo", "AAC block masonry"]}
      applications={["Vitrified tiles & glass mosaic tiles, natural stones", "Internal & external applications", "Vertical & horizontal surfaces"]}
      pack={["20 kg Bag"]}
    />

    {/* ── PAGE 5: TILEGRIP X3 ───────────────────────────── */}
    <ProductPage
      baseUrl={baseUrl} page={5}
      category="Tile Adhesive  ·  C2TE" typeBadge="Type 3"
      bagImg="/images/real-tx3.png"
      name="TileGrip X3" subtitle="Premium-Grade Adhesive for Heavy & High-Traffic Applications"
      desc="TileGrip X3 by Alphabond is a top-tier, high-performance tile adhesive specially formulated for demanding applications. Designed for large-format tiles, heavy stones, and high-traffic areas, it offers exceptional bonding strength, flexibility, and durability."
      howToUse="Add 4.5 litres of clean water per 20 kg bag. Mix to a smooth consistency. Apply with a notched trowel, press tiles firmly within 10–15 minutes. Extended open time of 20–25 min allows precision placement of large-format tiles. Fill joints after 24 hours."
      properties={[
        { label: "Appearance", value: "Grey / White Powder" },
        { label: "Open Time", value: "20–25 min at 20°C" },
        { label: "Pot Life", value: "Approx 120 min" },
        { label: "Shear Strength", value: "> 1.5 N/mm²" },
        { label: "Tensile Strength", value: "> 1.5 N/mm²" },
        { label: "Coverage (20 kg bag)", value: "4–5 m² @ 3 mm bed thickness" },
      ]}
      substrates={["Cement mortar beds", "Brick / Block / Concrete masonry", "Waterproofing products", "Cement-based self-levelling screed", "Fibre cement slabs", "Cement-based plaster / Concrete"]}
      applications={["Large-format vitrified and glass mosaic tiles", "Granite, marble, and all types of natural stone", "Internal & external / vertical & horizontal surfaces"]}
      pack={["20 kg Bag"]}
    />

    {/* ── PAGE 6: TILEGRIP X4 ───────────────────────────── */}
    <ProductPage
      baseUrl={baseUrl} page={6}
      category="Tile Adhesive  ·  C2TES1" typeBadge="Type 4"
      bagImg="/images/real-tx4.png"
      name="TileGrip X4" subtitle="Ultimate Heavy-Duty Tile Adhesive for Extreme Conditions"
      desc="TileGrip X4 by Alphabond is a high-performance, industrial-grade tile adhesive designed for the most demanding applications. Engineered for large-format tiles, natural stones, and extreme environments, it delivers superior adhesion, flexibility, and durability for long-lasting performance."
      howToUse="Add 4.5 litres of clean water per 20 kg bag. Mix thoroughly. Apply with a notched trowel at correct bed thickness. Allow 20–25 minutes open time for precise placement on heavy stone and cladding. Cure for minimum 24 hours before grouting."
      properties={[
        { label: "Appearance", value: "Grey / White Powder" },
        { label: "Open Time", value: "20–25 min at 20°C" },
        { label: "Pot Life", value: "Approx 120 min" },
        { label: "Shear Strength", value: "> 1.5 N/mm²" },
        { label: "Tensile Strength", value: "> 1.5 N/mm²" },
        { label: "Coverage (20 kg bag)", value: "4–5 m² @ 3 mm bed thickness" },
      ]}
      substrates={["Cement-based plaster / Concrete", "Cement-based self-levelling screed", "Brick / Block / Concrete masonry", "Fibre cement slabs", "Waterproofing products", "Thermal insulation panelling systems"]}
      applications={["Large-format and glass mosaic tiles", "Marble, granite, stones and laminated stoneware", "Plaster board, fibre-cement sheets, concrete surfaces"]}
      pack={["20 kg Bag"]}
    />

    {/* ── PAGE 7: BLOCKGRIP X ───────────────────────────── */}
    <ProductPage
      baseUrl={baseUrl} page={7}
      category="Block Jointing Mortar" typeBadge="Masonry"
      bagImg="/images/real-blockgrip.png"
      name="BlockGrip X" subtitle="High-Performance Ready-Mix Mortar for Superior Masonry Work"
      desc="BlockGrip X is a premium-grade ready-mix mortar designed for efficient and durable masonry applications. Engineered with high-quality cement, graded sand, and performance-enhancing additives, it ensures strong bonding, smooth application, and long-lasting durability for bricklaying and blockwork."
      howToUse="Mix approx. 25–28% clean water in 40 kg powder and make a workable paste. Apply to block surfaces using a notch trowel to ensure good bonding. One 40 kg bag will bond approx. 40 blocks (900 mm × 200 mm × 150 mm). Joints should be 3–5 mm thick."
      properties={[
        { label: "Appearance", value: "Grey / White Powder" },
        { label: "Pot Life", value: "Approx 2 hrs @ 27°C" },
        { label: "Tensile Strength", value: "> 0.6 N/mm²" },
        { label: "Compressive Strength", value: "> 15 N/mm² @ 14 Days" },
        { label: "Bond Strength", value: "> 1.0 N/mm²" },
        { label: "Recommended Thickness", value: "3–5 mm" },
      ]}
      substrates={["AAC block surfaces", "Hollow / concrete block surfaces", "Brick masonry", "Pillar and corner block surfaces"]}
      applications={["AAC block joining works", "Stretcher block, corner block, pillar block joining", "Bricks and conventional masonry", "Interior & exterior wall construction"]}
      pack={["20 kg Bag", "40 kg Bag"]}
    />

    {/* ── PAGE 8: PLASTOGRIP X ──────────────────────────── */}
    <ProductPage
      baseUrl={baseUrl} page={8}
      category="Ready-Mix Cement Plaster / Bonding Agent" typeBadge="Plaster"
      bagImg="/images/real-plastogrip.png"
      name="PlastoGrip X" subtitle="High-Performance Ready-Mix Plaster for Superior Wall Finishing"
      desc="PlastoGrip X is a high-quality, polymer-modified ready-mix plaster designed for smooth and durable wall finishes. It provides excellent adhesion, crack resistance, and workability — making it ideal for both interior and exterior applications. Formulated with graded sand, premium binders, and performance-enhancing additives. Eliminates the need for hacking or wire mesh on smooth surfaces."
      howToUse="Cure the wall surface with water before applying. First coat (bonding layer): add more water to make a thinner slurry and apply a thin, uniform coat (1–2 mm). Allow to become tacky. Second coat: add the required water to a 40 kg bag, mix with a blender, and apply the finishing coat. Allow to cure."
      properties={[
        { label: "Appearance", value: "Grey Powder" },
        { label: "Pot Life", value: "Approx 90–120 min" },
        { label: "Bond Strength", value: "> 1.0 N/mm²" },
        { label: "Coverage", value: "~40–50 sq.ft per 20 kg bag" },
        { label: "Application Thickness", value: "Thin coat 1–2 mm (bonding layer)" },
        { label: "Water Retention", value: "Excellent" },
      ]}
      substrates={["RCC columns and beams", "Smooth / fair-faced concrete", "AAC block walls", "Brick masonry walls", "Old tiled / plastered surfaces"]}
      applications={["Bonding layer before plastering on smooth surfaces", "Prevents debonding, hollow patches, and cracks", "Interior & exterior plaster applications", "No hacking or wire mesh required"]}
      pack={["20 kg Bag", "40 kg Bag"]}
    />

    {/* ── PAGE 9: ALPHAGROUT X1 ─────────────────────────── */}
    <ProductPage
      baseUrl={baseUrl} page={9}
      category="High Performance Precision Grout" typeBadge="Non-Shrink"
      bagImg="/images/real-ag1.png"
      name="AlphaGrout X1" subtitle="High Performance Precision Grout"
      desc="AlphaGrout X1 is a cement-based, non-shrink, non-expanding polymer-enriched high-performance, high-strength binder for precision grouting applications. Formulated with advanced polymers, specialised additives, and carefully chosen fillers. It is a blend of Portland cement, graded fillers, and additives that ensure controlled expansion, low water demand for high early strength, and consistent mixing."
      howToUse="Prepare and clean the surface thoroughly. Set up sealed formwork around the area to be grouted. Mix AlphaGrout X1 with clean water to the desired consistency. Pour steadily from one side to avoid air pockets. Finish the exposed areas neatly. Cure properly for at least 7 days to ensure optimal strength and durability."
      properties={[
        { label: "Appearance", value: "Grey Powder" },
        { label: "Density", value: "2200 to 2250 kg/m³" },
        { label: "Time of Expansion", value: "Start: 20 min — Finish: 150 min" },
        { label: "Young's Modulus", value: "25 kN/mm²" },
        { label: "Compressive Strength (1D)", value: "> 10 N/mm²" },
        { label: "Compressive Strength (7D)", value: "> 35 N/mm²" },
        { label: "Compressive Strength (28D)", value: "> 45 N/mm²" },
      ]}
      substrates={["Concrete plinths and foundations", "Precast concrete elements", "Steel base plates", "Structural anchor positions", "Column-to-foundation interfaces"]}
      applications={["Machine foundation grouting", "Column joints and precast construction gaps", "Grout anchors in concrete", "Sealing around penetrations", "Base plate of turbines, compressors, pumps & heavy machinery"]}
      pack={["25 kg Bag"]}
    />

    {/* ── PAGE 10: ALPHAGROUT X2 ────────────────────────── */}
    <ProductPage
      baseUrl={baseUrl} page={10}
      category="High Performance Precision Grout" typeBadge="Non-Shrink+"
      bagImg="/images/real-ag2.png"
      name="AlphaGrout X2" subtitle="High Performance Precision Grout — Extended Aggregate Grade"
      desc="AlphaGrout X2 is a cement-based, non-shrink, non-expanding polymer-enriched high-performance, high-strength binder for precision grouting. Well-graded coarse aggregates up to 20 mm in size can be added for larger-volume applications. Delivers higher compressive strength than X1 with the same reliable non-shrink properties."
      howToUse="Prepare and clean the surface thoroughly. Set up sealed formwork. Mix with clean water to the desired consistency. For large-volume pours, add coarse aggregates up to 20 mm. Pour steadily from one side to avoid air pockets. Cure for at least 7 days."
      properties={[
        { label: "Appearance", value: "Grey Powder" },
        { label: "Density", value: "2200 to 2250 kg/m³" },
        { label: "Time of Expansion", value: "Start: 20 min — Finish: 120 min" },
        { label: "Young's Modulus", value: "28 kN/mm²" },
        { label: "Compressive Strength (1D)", value: "> 25 N/mm²" },
        { label: "Compressive Strength (7D)", value: "> 45 N/mm²" },
        { label: "Compressive Strength (28D)", value: "> 65 N/mm²" },
      ]}
      substrates={["Concrete plinths and foundations", "Precast concrete elements", "Steel base plates", "Structural anchor positions", "Large-volume void filling"]}
      applications={["Machine foundation grouting", "Column joints and precast construction gaps/voids", "Grout anchors in concrete", "Sealing around penetrations", "Base plate of turbines, compressors, pumps & heavy machinery"]}
      pack={["25 kg Bag"]}
    />

    {/* ── PAGE 11: PRODUCT LINEUP ───────────────────────── */}
    <Page size="A4" style={s.lineupPage}>
      <Text style={s.lineupTitle}>{"Crafted With Care.\nTrusted By You."}</Text>
      <Text style={s.lineupSub}>The complete Alphabond product range — one manufacturer, every application.</Text>
      <View style={s.lineupGrid}>
        {[
          { img: "/images/real-tx1.png", name: "TileGrip X1", type: "Tile Adhesive · C1T" },
          { img: "/images/real-tx2.png", name: "TileGrip X2", type: "Tile Adhesive · C2T" },
          { img: "/images/real-tx3.png", name: "TileGrip X3", type: "Tile Adhesive · C2TE" },
          { img: "/images/real-tx4.png", name: "TileGrip X4", type: "Tile Adhesive · C2TES1" },
          { img: "/images/real-blockgrip.png", name: "BlockGrip X", type: "Block Jointing Mortar" },
          { img: "/images/real-plastogrip.png", name: "PlastoGrip X", type: "Ready-Mix Plaster" },
          { img: "/images/real-ag1.png", name: "AlphaGrout X1", type: "Precision Grout" },
          { img: "/images/real-ag2.png", name: "AlphaGrout X2", type: "Precision Grout +" },
        ].map((p) => (
          <View key={p.name} style={s.lineupCard}>
            <Image src={`${baseUrl}${p.img}`} style={s.lineupBag} />
            <Text style={s.lineupName}>{p.name}</Text>
            <Text style={s.lineupType}>{p.type}</Text>
          </View>
        ))}
      </View>
      <Text style={s.lineupSlogan}>Building stronger. Together.</Text>
      <Text style={{ ...s.pageNum, color: "#475569" }}>11</Text>
    </Page>

    {/* ── PAGE 12: BACK COVER ───────────────────────────── */}
    <Page size="A4" style={s.backPage}>
      <View style={s.backLogoWrap}>
        <Image src={`${baseUrl}/logo.png`} style={s.backLogo} />
        <Text style={s.backTagline}>A Brand of Kishan Enterprise · ISO 9001:2015 · Make in India</Text>
      </View>
      <View style={s.backAddresses}>
        <View style={s.backAddrBox}>
          <Text style={s.backAddrLabel}>Registered Office</Text>
          <Text style={s.backAddrLine}>Shop No. A/12, Ground Floor,</Text>
          <Text style={s.backAddrLine}>Krishna Residency, N.H. 48,</Text>
          <Text style={s.backAddrLine}>Kamrej, Surat,</Text>
          <Text style={s.backAddrLine}>Gujarat — 394186.</Text>
        </View>
        <View style={s.backAddrBox}>
          <Text style={s.backAddrLabel}>Production Facility</Text>
          <Text style={s.backAddrLine}>Survey No. 747/A,</Text>
          <Text style={s.backAddrLine}>N.H. 48, Behind Relief Hotel,</Text>
          <Text style={s.backAddrLine}>Jhanghar, Bharuch,</Text>
          <Text style={s.backAddrLine}>Gujarat — 392210.</Text>
        </View>
      </View>
      <View style={s.backContacts}>
        {[
          { label: "Phone", val: "+91 90994 65837" },
          { label: "Phone", val: "+91 96385 63857" },
          { label: "Email", val: "info@alphabond.in" },
          { label: "Website", val: "www.alphabond.in" },
        ].map((c, i) => (
          <View key={i} style={s.backContactItem}>
            <Text style={s.backContactLabel}>{c.label}</Text>
            <Text style={s.backContactVal}>{c.val}</Text>
          </View>
        ))}
      </View>
      <View style={s.backFooter}>
        <Text style={s.backFooterText}>© 2025 Kishan Enterprise. Alphabond™ is a registered trademark of Kishan Enterprise.</Text>
        <Text style={s.backBadge}>ISO 9001:2015 Certified</Text>
      </View>
    </Page>
  </Document>
);
