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
const SLATE_LIGHT = "#64748B";
const LIGHT_BG = "#F8FAFC";
const BORDER = "#E2E8F0";
const GREEN = "#16A34A";
const AMBER = "#D97706";

const s = StyleSheet.create({
  page: { fontFamily: "Inter", backgroundColor: "#ffffff", position: "relative" },

  /* ── Cover ── */
  coverPage: { backgroundColor: DARK, flexDirection: "column" },
  coverTopBand: { backgroundColor: PRIMARY, paddingHorizontal: 44, paddingVertical: 14, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  coverTopLabel: { fontSize: 8, color: "rgba(255,255,255,0.8)", letterSpacing: 2, textTransform: "uppercase" },
  coverTopBadge: { fontSize: 8, fontWeight: 700, color: "#ffffff", backgroundColor: "rgba(255,255,255,0.2)", paddingHorizontal: 8, paddingVertical: 3, borderRadius: 3 },
  coverHero: { flex: 1, padding: "52 44 32 44", justifyContent: "flex-end" },
  coverLogo: { width: 180, height: 62, objectFit: "contain", marginBottom: 40 },
  coverTagline: { fontSize: 38, fontWeight: 700, color: "#ffffff", lineHeight: 1.15, marginBottom: 14 },
  coverTaglineAccent: { color: "#60A5FA" },
  coverSub: { fontSize: 11, color: "#94A3B8", lineHeight: 1.6, marginBottom: 36, maxWidth: 380 },
  coverDivider: { height: 3, width: 56, backgroundColor: PRIMARY, marginBottom: 32 },
  coverBagStrip: { flexDirection: "row", gap: 8, marginBottom: 36 },
  coverBagCard: { backgroundColor: "rgba(255,255,255,0.06)", borderRadius: 6, padding: "8 10", alignItems: "center", border: "1px solid rgba(255,255,255,0.12)", flex: 1 },
  coverBagImg: { width: 44, height: 56, objectFit: "contain", marginBottom: 5 },
  coverBagName: { fontSize: 7, fontWeight: 700, color: "#ffffff", textAlign: "center", lineHeight: 1.3 },
  coverBagType: { fontSize: 6, color: "#94A3B8", textAlign: "center" },
  coverContact: { flexDirection: "row", gap: 20, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.1)" },
  coverContactItem: { fontSize: 9, color: "#94A3B8" },
  coverISO: { flexDirection: "row", alignItems: "center", gap: 6, marginTop: 12 },
  coverISOBadge: { fontSize: 8, fontWeight: 600, color: "#60A5FA", backgroundColor: "rgba(96,165,250,0.12)", paddingHorizontal: 8, paddingVertical: 3, borderRadius: 4, border: "1px solid rgba(96,165,250,0.2)" },

  /* ── About ── */
  aboutPage: { padding: 0, backgroundColor: "#ffffff" },
  aboutHeader: { backgroundColor: DARK, padding: "28 44 28 44" },
  aboutHeaderLabel: { fontSize: 8, color: "#94A3B8", textTransform: "uppercase", letterSpacing: 2, marginBottom: 6 },
  aboutHeaderTitle: { fontSize: 20, fontWeight: 700, color: "#ffffff", lineHeight: 1.3 },
  aboutContent: { padding: "28 44 28 44" },
  facilityRow: { flexDirection: "row", gap: 12, marginBottom: 22 },
  facilityImg: { flex: 1, height: 130, objectFit: "cover", borderRadius: 8 },
  facilityCaption: { fontSize: 7, color: SLATE_LIGHT, marginTop: 4, textAlign: "center" },
  sectionLabel: { fontSize: 8, fontWeight: 600, color: PRIMARY, textTransform: "uppercase", letterSpacing: 2, marginBottom: 6 },
  aboutBody: { fontSize: 8.5, color: SLATE, lineHeight: 1.65, marginBottom: 9 },
  statsRow: { flexDirection: "row", gap: 12, marginTop: 16, marginBottom: 20 },
  statBox: { flex: 1, backgroundColor: LIGHT_BG, borderRadius: 8, padding: 14, borderTop: `3px solid ${PRIMARY}`, alignItems: "center" },
  statValue: { fontSize: 22, fontWeight: 700, color: DARK, marginBottom: 2 },
  statLabel: { fontSize: 8, fontWeight: 600, color: SLATE, textAlign: "center", lineHeight: 1.4 },
  vmGrid: { flexDirection: "row", gap: 12 },
  vmBox: { flex: 1, backgroundColor: LIGHT_BG, borderRadius: 8, padding: 14, borderLeft: `3px solid ${PRIMARY}` },
  vmTitle: { fontSize: 9, fontWeight: 700, color: DARK, marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 },
  vmText: { fontSize: 8, color: SLATE, lineHeight: 1.6 },
  missionBullet: { fontSize: 8, color: SLATE, lineHeight: 1.6, marginBottom: 3 },

  /* ── Product page ── */
  productPage: { padding: 0, backgroundColor: "#ffffff" },
  productHeader: { backgroundColor: DARK, padding: "16 44 14 44", flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  productCategoryTag: { fontSize: 8, color: "#94A3B8", textTransform: "uppercase", letterSpacing: 1.5 },
  productTypeBadge: { fontSize: 8, fontWeight: 700, color: "#ffffff", backgroundColor: PRIMARY, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 4 },
  productHero: { flexDirection: "row", backgroundColor: LIGHT_BG, minHeight: 190 },
  productBagWrap: { width: 150, alignItems: "center", justifyContent: "center", padding: 16, backgroundColor: "#F1F5F9", borderRight: `1px solid ${BORDER}` },
  productBag: { width: 120, height: 155, objectFit: "contain" },
  productHeroRight: { flex: 1, padding: "18 24 18 18" },
  productName: { fontSize: 21, fontWeight: 700, color: DARK, marginBottom: 2 },
  productSubtitle: { fontSize: 9.5, fontWeight: 600, color: PRIMARY, marginBottom: 9, letterSpacing: 0.3 },
  productDesc: { fontSize: 8.5, color: SLATE, lineHeight: 1.65, marginBottom: 12 },
  advantagesWrap: { backgroundColor: "#EEF2FF", borderRadius: 6, padding: "10 12" },
  advantagesTitle: { fontSize: 7.5, fontWeight: 700, color: PRIMARY, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 },
  advantageBullet: { fontSize: 8, color: "#3730A3", lineHeight: 1.55, marginBottom: 2 },
  appImgWrap: { margin: "0 0 0 0", position: "relative" },
  appImg: { width: "100%", height: 120, objectFit: "cover" },
  appImgLabel: { position: "absolute", bottom: 6, left: 12, fontSize: 7.5, color: "#ffffff", fontWeight: 600, backgroundColor: "rgba(10,15,46,0.7)", paddingHorizontal: 8, paddingVertical: 3, borderRadius: 3 },
  productBody: { padding: "12 44 18 44" },
  twoCol: { flexDirection: "row", gap: 14 },
  col: { flex: 1 },
  boxTitle: { fontSize: 7.5, fontWeight: 700, color: "#ffffff", textTransform: "uppercase", letterSpacing: 0.8, backgroundColor: DARK, paddingHorizontal: 10, paddingVertical: 5, borderRadius: "4 4 0 0" },
  boxContent: { backgroundColor: LIGHT_BG, borderRadius: "0 0 4 4", padding: "8 10", border: `1px solid ${BORDER}` },
  tableRow: { flexDirection: "row", paddingVertical: 4, borderBottom: `1px solid ${BORDER}` },
  tableRowAlt: { flexDirection: "row", paddingVertical: 4, borderBottom: `1px solid ${BORDER}`, backgroundColor: "#F1F5F9" },
  tableLabel: { width: "48%", fontSize: 8, fontWeight: 600, color: DARK },
  tableValue: { flex: 1, fontSize: 8, color: SLATE },
  bullet: { fontSize: 8, color: SLATE, lineHeight: 1.55, marginBottom: 2 },
  howToBox: { backgroundColor: "#EEF2FF", borderRadius: 6, padding: "10 12", marginBottom: 10, borderLeft: `3px solid ${PRIMARY}` },
  howToTitle: { fontSize: 7.5, fontWeight: 700, color: PRIMARY, textTransform: "uppercase", letterSpacing: 1, marginBottom: 5 },
  howToText: { fontSize: 8, color: "#3730A3", lineHeight: 1.65 },
  packBadge: { flexDirection: "row", flexWrap: "wrap", gap: 6, marginTop: 8 },
  packItem: { backgroundColor: DARK, paddingHorizontal: 9, paddingVertical: 3, borderRadius: 4 },
  packText: { fontSize: 7.5, fontWeight: 600, color: "#ffffff" },

  /* ── Clients page ── */
  clientsPage: { backgroundColor: DARK, padding: 0 },
  clientsHeader: { backgroundColor: PRIMARY, padding: "22 44 20 44" },
  clientsHeaderLabel: { fontSize: 8, color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: 2, marginBottom: 4 },
  clientsHeaderTitle: { fontSize: 24, fontWeight: 700, color: "#ffffff", lineHeight: 1.2 },
  clientsBody: { padding: "28 44 28 44" },
  clientGroup: { marginBottom: 22 },
  clientGroupHeader: { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 10 },
  clientGroupTitle: { fontSize: 10, fontWeight: 700, color: "#ffffff" },
  clientGroupTag: { fontSize: 7, fontWeight: 600, color: "#60A5FA", backgroundColor: "rgba(96,165,250,0.12)", paddingHorizontal: 7, paddingVertical: 2, borderRadius: 3, border: "1px solid rgba(96,165,250,0.25)" },
  clientGrid: { flexDirection: "row", flexWrap: "wrap", gap: 6 },
  clientChip: { backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 4, paddingHorizontal: 10, paddingVertical: 5 },
  clientChipText: { fontSize: 8.5, color: "#CBD5E1" },
  clientDivider: { height: 1, backgroundColor: "rgba(255,255,255,0.08)", marginBottom: 22 },
  clientNote: { fontSize: 7.5, color: "#475569", textAlign: "center", marginTop: 8 },

  /* ── Lineup page ── */
  lineupPage: { backgroundColor: "#F8FAFC", justifyContent: "center", alignItems: "center", padding: 44 },
  lineupBand: { backgroundColor: DARK, padding: "20 32", borderRadius: 10, width: "100%", marginBottom: 30, alignItems: "center" },
  lineupTitle: { fontSize: 22, fontWeight: 700, color: "#ffffff", textAlign: "center", marginBottom: 4 },
  lineupSub: { fontSize: 9, color: "#94A3B8", textAlign: "center" },
  lineupGrid: { flexDirection: "row", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 28 },
  lineupCard: { width: 115, backgroundColor: "#ffffff", borderRadius: 8, padding: 10, alignItems: "center", border: `1px solid ${BORDER}`, shadowColor: "#000", shadowOpacity: 0.04, shadowRadius: 4 },
  lineupBag: { width: 65, height: 80, objectFit: "contain", marginBottom: 6 },
  lineupName: { fontSize: 8.5, fontWeight: 700, color: DARK, textAlign: "center", marginBottom: 2 },
  lineupType: { fontSize: 7, color: PRIMARY, textAlign: "center", fontWeight: 600 },
  lineupTypeGray: { fontSize: 6.5, color: SLATE_LIGHT, textAlign: "center", marginTop: 1 },
  lineupSlogan: { fontSize: 12, fontWeight: 600, color: PRIMARY, textAlign: "center", fontStyle: "italic" },
  lineupISORow: { flexDirection: "row", gap: 10, justifyContent: "center", marginTop: 16 },
  lineupBadge: { fontSize: 8, fontWeight: 600, color: SLATE, backgroundColor: "#EEF2FF", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 4, border: `1px solid ${BORDER}` },

  /* ── Back cover ── */
  backPage: { backgroundColor: "#0A0F2E", padding: 0, justifyContent: "space-between" },
  backTopAccent: { backgroundColor: PRIMARY, height: 8 },
  backContent: { flex: 1, padding: "44 44 32 44", justifyContent: "space-between" },
  backLogoWrap: { alignItems: "center", marginBottom: 36 },
  backLogo: { width: 150, height: 52, objectFit: "contain" },
  backTagline: { fontSize: 11, color: "#60A5FA", textAlign: "center", marginTop: 10 },
  backHighlights: { flexDirection: "row", gap: 10, marginBottom: 36 },
  backHighlight: { flex: 1, backgroundColor: "rgba(255,255,255,0.05)", borderRadius: 8, padding: 16, border: "1px solid rgba(255,255,255,0.1)", alignItems: "center" },
  backHighlightValue: { fontSize: 24, fontWeight: 700, color: "#60A5FA", marginBottom: 3 },
  backHighlightLabel: { fontSize: 8, color: "#CBD5E1", textAlign: "center" },
  backAddresses: { flexDirection: "row", gap: 14, marginBottom: 28 },
  backAddrBox: { flex: 1, backgroundColor: "rgba(255,255,255,0.04)", borderRadius: 8, padding: 14, border: "1px solid rgba(255,255,255,0.08)" },
  backAddrLabel: { fontSize: 7, fontWeight: 700, color: PRIMARY, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 7 },
  backAddrLine: { fontSize: 8.5, color: "#CBD5E1", lineHeight: 1.65 },
  backContacts: { flexDirection: "row", gap: 16, justifyContent: "center", marginBottom: 24 },
  backContactItem: { alignItems: "center", gap: 3 },
  backContactLabel: { fontSize: 7, color: "#64748B", textTransform: "uppercase", letterSpacing: 1 },
  backContactVal: { fontSize: 10, color: "#ffffff", fontWeight: 700 },
  backFooter: { borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 16, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  backFooterText: { fontSize: 7.5, color: "#475569" },
  backBadge: { fontSize: 7, color: "#60A5FA", backgroundColor: "rgba(96,165,250,0.08)", paddingHorizontal: 8, paddingVertical: 3, borderRadius: 3, border: "1px solid rgba(96,165,250,0.15)" },

  /* ── Page number ── */
  pageNum: { position: "absolute", bottom: 12, right: 44, fontSize: 7, color: "#CBD5E1" },
  pageNumDark: { position: "absolute", bottom: 12, right: 44, fontSize: 7, color: "#94A3B8" },
});

interface Props { baseUrl: string }

const ProductPage = ({
  category, typeBadge, bagImg, name, subtitle, desc,
  advantages, howToUse, properties, substrates, applications,
  pack, appImg, appCaption, baseUrl, page
}: {
  category: string; typeBadge: string; bagImg: string; name: string;
  subtitle: string; desc: string; advantages: string[];
  howToUse: string;
  properties: { label: string; value: string }[];
  substrates: string[]; applications: string[]; pack: string[];
  appImg?: string; appCaption?: string; baseUrl: string; page: number;
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
        <View style={s.advantagesWrap}>
          <Text style={s.advantagesTitle}>Key Advantages</Text>
          {advantages.map((a, i) => (
            <Text key={i} style={s.advantageBullet}>+ {a}</Text>
          ))}
        </View>
      </View>
    </View>

    {/* Full-width application image */}
    {appImg && (
      <View style={s.appImgWrap}>
        <Image src={`${baseUrl}${appImg}`} style={s.appImg} />
        {appCaption && <Text style={s.appImgLabel}>{appCaption}</Text>}
      </View>
    )}

    {/* Body */}
    <View style={s.productBody}>
      <View style={s.howToBox}>
        <Text style={s.howToTitle}>How to Use</Text>
        <Text style={s.howToText}>{howToUse}</Text>
      </View>

      <View style={s.twoCol}>
        {/* Left column */}
        <View style={s.col}>
          <Text style={s.boxTitle}>Technical Properties</Text>
          <View style={s.boxContent}>
            {properties.map((p, i) => (
              <View key={i} style={i % 2 === 0 ? s.tableRow : s.tableRowAlt}>
                <Text style={s.tableLabel}>{p.label}</Text>
                <Text style={s.tableValue}>{p.value}</Text>
              </View>
            ))}
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={s.boxTitle}>Pack Size</Text>
            <View style={s.boxContent}>
              <View style={s.packBadge}>
                {pack.map((p, i) => (
                  <View key={i} style={s.packItem}><Text style={s.packText}>{p}</Text></View>
                ))}
              </View>
            </View>
          </View>
        </View>

        {/* Right column */}
        <View style={s.col}>
          <Text style={s.boxTitle}>Suitable Substrates</Text>
          <View style={s.boxContent}>
            {substrates.map((sub, i) => <Text key={i} style={s.bullet}>• {sub}</Text>)}
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={s.boxTitle}>Applications</Text>
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
  <Document title="Alphabond Product Brochure" author="Kishan Enterprise" subject="Construction Chemicals — Bharuch, Gujarat" hyphenationCallback={(word) => [word]}>

    {/* ── PAGE 1: COVER ─────────────────────────────────── */}
    <Page size="A4" style={s.coverPage}>
      <View style={s.coverTopBand}>
        <Text style={s.coverTopLabel}>Kishan Enterprise — Operating as Alphabond™</Text>
        <Text style={s.coverTopBadge}>ISO 9001:2015 CERTIFIED</Text>
      </View>
      <View style={s.coverHero}>
        <Image src={`${baseUrl}/logo.png`} style={s.coverLogo} />
        <View style={s.coverDivider} />
        <Text style={s.coverTagline}>{"High-performance\nconstruction\nchemicals."}</Text>
        <Text style={s.coverSub}>
          {"Tile adhesives · Precision grouts · Block mortar · Ready-mix plaster · Industrial sand.\nManufactured in Bharuch & Surat, Gujarat. Supplying India's largest cement majors and construction chemical brands since 2008."}
        </Text>

        {/* Product bag strip */}
        <View style={s.coverBagStrip}>
          {[
            { img: "/images/real-tx1.png", name: "TileGrip X1", type: "C1T" },
            { img: "/images/real-tx2.png", name: "TileGrip X2", type: "C2T" },
            { img: "/images/real-tx3.png", name: "TileGrip X3", type: "C2TE" },
            { img: "/images/real-tx4.png", name: "TileGrip X4", type: "C2TES1" },
            { img: "/images/real-blockgrip.png", name: "BlockGrip X", type: "Block Mortar" },
            { img: "/images/real-plastogrip.png", name: "PlastoGrip X", type: "Plaster" },
            { img: "/images/real-ag1.png", name: "AlphaGrout X1", type: ">45 N/mm²" },
            { img: "/images/real-ag2.png", name: "AlphaGrout X2", type: ">65 N/mm²" },
          ].map((p) => (
            <View key={p.name} style={s.coverBagCard}>
              <Image src={`${baseUrl}${p.img}`} style={s.coverBagImg} />
              <Text style={s.coverBagName}>{p.name}</Text>
              <Text style={s.coverBagType}>{p.type}</Text>
            </View>
          ))}
        </View>

        <View style={s.coverContact}>
          <Text style={s.coverContactItem}>+91 90994 65837</Text>
          <Text style={s.coverContactItem}>+91 96385 63857</Text>
          <Text style={s.coverContactItem}>sales@alphabond.in</Text>
          <Text style={s.coverContactItem}>www.alphabond.in</Text>
        </View>
        <View style={s.coverISO}>
          <Text style={s.coverISOBadge}>ISO 9001:2015 Certified</Text>
          <Text style={s.coverISOBadge}>Make in India</Text>
          <Text style={s.coverISOBadge}>Since 2008</Text>
          <Text style={s.coverISOBadge}>Bharuch, Gujarat</Text>
        </View>
      </View>
    </Page>

    {/* ── PAGE 2: ABOUT / FACILITIES ───────────────────── */}
    <Page size="A4" style={s.aboutPage}>
      <View style={s.aboutHeader}>
        <Text style={s.aboutHeaderLabel}>About Us</Text>
        <Text style={s.aboutHeaderTitle}>{"Kishan Enterprise, operating as\nAlphabond™\nBuilding India, one bond at a time."}</Text>
      </View>
      <View style={s.aboutContent}>
        {/* Facility images */}
        <View style={s.facilityRow}>
          <View style={{ flex: 1 }}>
            <Image src={`${baseUrl}/images/facility-plant.png`} style={s.facilityImg} />
            <Text style={s.facilityCaption}>Bharuch Manufacturing Plant</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Image src={`${baseUrl}/images/facility-lab.png`} style={s.facilityImg} />
            <Text style={s.facilityCaption}>In-House Quality Control Laboratory</Text>
          </View>
        </View>

        <Text style={s.aboutBody}>
          Alphabond is our flagship brand, manufactured and marketed by Kishan Enterprise. Established in 2008 in Bharuch, Gujarat, we began as a trusted sand supply partner to India's largest cement and RMC majors. Over fifteen years, we have grown into a full-spectrum construction chemicals manufacturer — developing, testing, and producing products that address the real performance challenges of modern construction.
        </Text>
        <Text style={s.aboutBody}>
          We manufacture high-performance tile adhesives (C1T through C2TES1), AAC block jointing mortars, ready-mix plaster and bonding agents, and structural non-shrink precision grouts. We also supply premium wet and dry industrial sand to UltraTech, JK Lakshmi, ACC, Nuvoco, Prism Johnson, Pidilite, Walplast, and Magicrete, among others.
        </Text>
        <Text style={s.aboutBody}>
          Our ISO 9001:2015 certified facility operates with in-house QC documentation, full batch traceability, and a dedicated own-fleet distribution network. A second production unit currently under construction will more than triple chemical output capacity.
        </Text>

        <View style={s.statsRow}>
          {[
            { value: "17+", label: "Years in\nBusiness" },
            { value: "8", label: "Products\nin Range" },
            { value: "20+", label: "Major\nClients" },
            { value: "9,000 MT", label: "Dry Sand\nper Month" },
            { value: "1.5L+", label: "Bags\nper Month" },
          ].map((stat, i) => (
            <View key={i} style={s.statBox}>
              <Text style={s.statValue}>{stat.value}</Text>
              <Text style={s.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        <View style={s.vmGrid}>
          <View style={s.vmBox}>
            <Text style={s.vmTitle}>Our Vision</Text>
            <Text style={s.vmText}>
              To be a leading force in the building materials industry by delivering superior-quality products, fostering sustainable construction solutions, and building long-term relationships based on trust and excellence.
            </Text>
          </View>
          <View style={s.vmBox}>
            <Text style={s.vmTitle}>Our Mission</Text>
            <Text style={s.missionBullet}>+ Manufacture and supply high-performance building materials that meet the evolving demands of the construction industry.</Text>
            <Text style={s.missionBullet}>+ Maintain the highest standards of quality, innovation, and sustainability in every product.</Text>
            <Text style={s.missionBullet}>+ Ensure customer satisfaction through reliable, cost-effective, and efficient solutions.</Text>
            <Text style={s.missionBullet}>+ Expand reach and strengthen partnerships with leading construction companies across India.</Text>
          </View>
        </View>
      </View>
      <Text style={s.pageNum}>2</Text>
    </Page>

    {/* ── PAGE 3: TILEGRIP X1 ───────────────────────────── */}
    <ProductPage
      baseUrl={baseUrl} page={3}
      category="Tile Adhesive  ·  Classification: C1T" typeBadge="TileGrip X1"
      bagImg="/images/real-tx1.png" appImg="/images/app-tilegrip-x1.png"
      appCaption="TileGrip X1 — Standard ceramic tile installation, residential floor"
      name="TileGrip X1" subtitle="Polymer-Modified Tile Adhesive — C1T Grade"
      desc="TileGrip X1 is a high-performance, polymer-modified cement-based tile adhesive engineered for superior bonding strength and long-term durability. Designed for standard ceramic tile installation on indoor walls and floors, it provides reliable adhesion to concrete, cement plaster, brick, and block substrates. The polymer modification enhances flexibility and reduces shrinkage during curing."
      advantages={[
        "Superior bond strength — shear strength > 1.0 N/mm²",
        "Tixotropic (non-slump) — safe for wall applications",
        "20-minute open time for comfortable working pace",
        "Low VOC — safe for occupied residential spaces",
        "Consistent batch-to-batch quality from ISO-certified facility",
      ]}
      howToUse="Add 4.5 litres of clean water per 20 kg bag into a clean bucket. Mix with a mechanical drill/paddle to a smooth, lump-free consistency. Allow to stand 5 minutes, re-stir. Apply to substrate with a notched trowel, press tiles firmly within 20 minutes. Do not adjust tiles after initial set. Allow 24 hours before grouting. Do not walk on tiles for 24 hours."
      properties={[
        { label: "Appearance", value: "Grey / White Powder" },
        { label: "Open Time", value: "20 min at 20°C" },
        { label: "Pot Life", value: "Approx 2 hours" },
        { label: "Shear Bond Strength", value: "> 1.0 N/mm² (EN 1348)" },
        { label: "Tensile Adhesion", value: "> 0.5 N/mm²" },
        { label: "Coverage (20 kg)", value: "4–5 m² at 3 mm bed" },
        { label: "Shelf Life", value: "12 months in sealed bag" },
      ]}
      substrates={[
        "Cement plaster / sand-cement render",
        "Concrete — cured, sound, and clean",
        "Brick and block masonry",
        "AAC block surfaces (with bonding agent)",
        "Existing tiles — properly prepared",
      ]}
      applications={[
        "Indoor floor tiling — residential and commercial",
        "Indoor wall tiling — kitchens, bathrooms, corridors",
        "Ceramic tiles up to 400×400 mm",
        "Porcelain and mosaic tiles",
        "Standard-format natural stone (indoor)",
      ]}
      pack={["20 kg bag", "40 kg bag"]}
    />

    {/* ── PAGE 4: TILEGRIP X2 ───────────────────────────── */}
    <ProductPage
      baseUrl={baseUrl} page={4}
      category="Tile Adhesive  ·  Classification: C2T" typeBadge="TileGrip X2"
      bagImg="/images/real-tx2.png" appImg="/images/real-tx2-app.jpg"
      appCaption="TileGrip X2 — Large-format vitrified tile application, commercial floor"
      name="TileGrip X2" subtitle="Improved-Performance Tile Adhesive — C2T Grade"
      desc="TileGrip X2 is an improved-performance polymer-modified tile adhesive classified as C2T under EN 12004. It delivers higher shear and tensile bond strengths than C1T adhesives, making it the correct choice for large-format vitrified tiles, natural stone, and any application where tile weight or format exceeds standard limits. Suitable for outdoor sheltered floor applications."
      advantages={[
        "Higher bond strength — shear strength > 1.5 N/mm²",
        "Suitable for vitrified, porcelain, and natural stone tiles",
        "Handles tiles up to 600×600 mm without back-buttering",
        "Better water resistance — suitable for wet rooms",
        "Non-slump formulation for vertical wall applications",
      ]}
      howToUse="Add 4.5 litres of clean water per 20 kg bag. Mix mechanically to smooth consistency. Rest 5 minutes, re-stir. Apply with a 6 mm notched trowel; back-butter large tiles additionally. Press firmly within 20 minutes of application. Allow 24–48 hours before grouting. Cure for 7 days before heavy loading."
      properties={[
        { label: "Appearance", value: "Grey / White Powder" },
        { label: "Open Time", value: "20 min at 20°C" },
        { label: "Pot Life", value: "Approx 2 hours" },
        { label: "Shear Bond Strength", value: "> 1.5 N/mm² (EN 1348)" },
        { label: "Tensile Adhesion", value: "> 0.5 N/mm²" },
        { label: "Coverage (20 kg)", value: "3.5–4.5 m² at 3–6 mm bed" },
        { label: "Shelf Life", value: "12 months in sealed bag" },
      ]}
      substrates={[
        "Cement plaster and concrete (cured)",
        "Brick, block, and AAC masonry",
        "Existing tile surfaces (prepared)",
        "Cement board and fibre cement",
        "Smooth concrete (with bonding agent)",
      ]}
      applications={[
        "Large-format vitrified tiles (up to 600×600 mm)",
        "Porcelain tiles — floors and walls",
        "Natural stone — marble, granite, slate (indoor)",
        "Outdoor sheltered floor areas",
        "Wet rooms, bathrooms with heavy traffic",
        "Swimming pool surrounds (above water line)",
      ]}
      pack={["20 kg bag", "40 kg bag"]}
    />

    {/* ── PAGE 5: TILEGRIP X3 ───────────────────────────── */}
    <ProductPage
      baseUrl={baseUrl} page={5}
      category="Tile Adhesive  ·  Classification: C2TE" typeBadge="TileGrip X3"
      bagImg="/images/real-tx3.png" appImg="/images/app-tilegrip-x3.png"
      appCaption="TileGrip X3 — Oversized marble slab installation, high-end commercial lobby"
      name="TileGrip X3" subtitle="Extended Open Time Tile Adhesive — C2TE Grade"
      desc="TileGrip X3 is a C2TE classified high-performance tile adhesive with extended open time — a critical property when laying large, heavy tiles that require careful positioning and alignment. The extended 30-minute open time gives installers the working margin needed for oversized stone, natural marble, and premium large-format tiles without compromising on final bond strength."
      advantages={[
        "Extended 30-minute open time — ideal for precision tile placement",
        "High shear strength > 1.5 N/mm² after full cure",
        "Non-slump — safe for full vertical exterior wall applications",
        "Suitable for tile-over-tile renovation (with surface preparation)",
        "Enhanced flexibility vs standard C2T — handles thermal movement",
      ]}
      howToUse="Add 4.5 litres of clean water per 20 kg. Mix mechanically to smooth consistency. Rest 5 minutes, re-stir. Apply with an 8–10 mm notched trowel for large tiles; always back-butter natural stone. Position tiles within 30 minutes. Do not walk on surface for 48 hours. Allow 48 hours minimum before grouting."
      properties={[
        { label: "Appearance", value: "Grey / White Powder" },
        { label: "Open Time", value: "30 min at 20°C (Extended)" },
        { label: "Pot Life", value: "Approx 2.5 hours" },
        { label: "Shear Bond Strength", value: "> 1.5 N/mm² (EN 1348)" },
        { label: "Tensile Adhesion", value: "> 0.5 N/mm²" },
        { label: "Coverage (20 kg)", value: "2.5–3.5 m² with back-buttering" },
        { label: "Shelf Life", value: "12 months in sealed bag" },
      ]}
      substrates={[
        "Concrete and reinforced concrete slabs",
        "Cement render and plaster",
        "Existing tiles — surface prepared / ground",
        "Fair-faced concrete (with bonding agent)",
        "Cement board and backer board",
      ]}
      applications={[
        "Marble, granite, limestone slabs (any size)",
        "Oversized tiles 800×800 mm and above",
        "Exterior wall cladding — sheltered and exposed",
        "High-end commercial and hospitality interiors",
        "Renovation — tile-over-tile with preparation",
        "Heritage restoration — requires minimal open joints",
      ]}
      pack={["20 kg bag", "40 kg bag"]}
    />

    {/* ── PAGE 6: TILEGRIP X4 ───────────────────────────── */}
    <ProductPage
      baseUrl={baseUrl} page={6}
      category="Tile Adhesive  ·  Classification: C2TES1" typeBadge="TileGrip X4"
      bagImg="/images/real-tx4.png" appImg="/images/app-tilegrip-x4.png"
      appCaption="TileGrip X4 — External facade stone cladding on high-rise, full sun exposure"
      name="TileGrip X4" subtitle="Flexible, High-Performance Tile Adhesive — C2TES1 Grade"
      desc="TileGrip X4 is the highest-performance adhesive in the Alphabond TileGrip range. Classified C2TES1 under EN 12004, it combines extended open time, maximum bond strength, and S1 deformability — meaning it can flex and absorb the differential thermal movement between tile and substrate without cracking or debonding. The grade of choice for facades, external cladding, terraces, and industrial floors."
      advantages={[
        "S1 deformability — absorbs thermal and structural movement",
        "Maximum shear strength — engineered for no-failure applications",
        "Extended open time — full working control on large formats",
        "Chemical resistance — suitable for industrial and food-processing floors",
        "Freeze-thaw resistant after cure — performs in all Indian climates",
      ]}
      howToUse="Add 4.5 litres of clean water per 20 kg. Mix mechanically. Rest 5 minutes. Apply with 10 mm notched trowel. Back-butter all natural stone and tiles over 600×600 mm. Maximum bed thickness 6 mm (trowel side). Allow 30 minutes open time. Do not disturb after pressing. 48 hours before grouting. 14 days before full load."
      properties={[
        { label: "Appearance", value: "Grey / White Powder" },
        { label: "Open Time", value: "30 min at 20°C (Extended)" },
        { label: "Pot Life", value: "Approx 2.5 hours" },
        { label: "Shear Bond Strength", value: "> 2.0 N/mm² (EN 1348)" },
        { label: "Tensile Adhesion", value: "> 1.0 N/mm²" },
        { label: "Deformability (S1)", value: "> 2.5 mm transverse deformation" },
        { label: "Coverage (20 kg)", value: "2–3 m² with full back-buttering" },
        { label: "Shelf Life", value: "12 months in sealed bag" },
      ]}
      substrates={[
        "Structural concrete — columns, beams, slabs",
        "Steel frames with cement board cladding",
        "Existing cladding systems (assessed and prepared)",
        "Roof slabs and terraces",
        "Industrial resin-coated floors (with primer)",
      ]}
      applications={[
        "External building facades and cladding",
        "Roof terraces and podium decks",
        "Industrial and chemical processing floors",
        "Swimming pools (floor and walls)",
        "Large-format stone on structural frames",
        "Any application with significant thermal cycling",
      ]}
      pack={["20 kg bag", "40 kg bag"]}
    />

    {/* ── PAGE 7: BLOCKGRIP X ───────────────────────────── */}
    <ProductPage
      baseUrl={baseUrl} page={7}
      category="Block Jointing Mortar  ·  Thin-Bed System" typeBadge="BlockGrip X"
      bagImg="/images/real-blockgrip.png" appImg="/images/app-blockgrip.png"
      appCaption="BlockGrip X — Thin-bed AAC block jointing, residential construction, Gujarat"
      name="BlockGrip X" subtitle="Polymer-Modified AAC Block Jointing Mortar"
      desc="BlockGrip X is a polymer-modified thin-bed mortar engineered specifically for AAC (Autoclaved Aerated Concrete) block masonry. Unlike traditional sand-cement mortar used at 12–18 mm joints, BlockGrip X is designed for 3–5 mm thin joints that eliminate thermal bridging, reduce dead load, and improve masonry wall performance. Compatible with all major AAC block brands in India."
      advantages={[
        "Thin-bed 3–5 mm joint eliminates thermal bridges",
        "60% less mortar than traditional cement mortar",
        "Strong polymer bond to smooth AAC block surface",
        "Compressive strength > 7.5 N/mm² — exceeds structural requirements",
        "Faster laying speed — less preparation and mixing time",
      ]}
      howToUse="Add 5–6 litres of clean water per 20 kg bag. Mix mechanically to smooth, spreadable consistency. Wet the block surface lightly before laying. Apply mortar to the bottom and vertical faces of each block using a notched spreader. Press block firmly into position. Check alignment immediately — adjust within 5 minutes. Begin next course after 30 minutes. Cure with light water spray in dry conditions."
      properties={[
        { label: "Appearance", value: "Grey Powder" },
        { label: "Joint Thickness", value: "3–5 mm (thin-bed)" },
        { label: "Compressive Strength", value: "> 7.5 N/mm² @ 28 days" },
        { label: "Bond Strength", value: "> 0.6 N/mm²" },
        { label: "Open Time", value: "30 min at 20°C" },
        { label: "Coverage (20 kg)", value: "15–20 m² wall area at 4 mm joint" },
        { label: "Shelf Life", value: "12 months in sealed bag" },
      ]}
      substrates={[
        "AAC (Autoclaved Aerated Concrete) blocks — all grades",
        "Lightweight concrete blocks",
        "Cellular concrete blocks",
        "Dense concrete blocks (with surface wetting)",
      ]}
      applications={[
        "AAC block masonry — residential buildings",
        "AAC block masonry — commercial and institutional",
        "Partition walls — all block types",
        "Load-bearing block walls (with structural design)",
        "External walls — AAC with plaster or cladding over",
      ]}
      pack={["20 kg bag", "40 kg bag"]}
    />

    {/* ── PAGE 8: PLASTOGRIP X ──────────────────────────── */}
    <ProductPage
      baseUrl={baseUrl} page={8}
      category="Ready-Mix Plaster & Bonding Agent" typeBadge="PlastoGrip X"
      bagImg="/images/real-plastogrip.png" appImg="/images/app-plastogrip.png"
      appCaption="PlastoGrip X — Applied as bonding slurry on RCC column before plaster finish"
      name="PlastoGrip X" subtitle="Polymer-Modified Ready-Mix Plaster & Plaster Bonding Agent"
      desc="PlastoGrip X serves dual functions: as a polymer-modified ready-mix plaster for wall and ceiling finishing, and as a bonding agent (slurry coat) applied to smooth concrete and AAC surfaces before plastering. The polymer modification ensures excellent adhesion to RCC columns, beams, and AAC block walls without hacking — eliminating one of the most labour-intensive and time-consuming steps in traditional construction."
      advantages={[
        "Eliminates surface hacking before plastering on RCC and AAC",
        "Used as ready-mix plaster OR as bonding agent slurry coat",
        "Strong polymer bond to smooth concrete surfaces",
        "Reduces cracking at block-RCC interfaces",
        "Consistency guaranteed — no site mixing variability",
      ]}
      howToUse="As bonding agent: Mix with water to cream consistency (slightly wetter than standard). Apply as 1–2 mm slurry coat to clean, damp concrete surface using a brush. Allow to become tacky (30–90 min). Plaster directly over tacky coat. As ready-mix plaster: Mix to standard plaster consistency. Apply in 8–12 mm coats. Cure with light water spray for 3 days. Do not apply in direct sun or extreme heat."
      properties={[
        { label: "Appearance", value: "Grey / Off-White Powder" },
        { label: "Application Thickness", value: "Bonding: 1–2 mm | Plaster: 8–15 mm" },
        { label: "Bond Strength (RCC)", value: "> 0.8 N/mm²" },
        { label: "Compressive Strength", value: "> 6.0 N/mm² @ 28 days" },
        { label: "Open Time", value: "45 min at 20°C" },
        { label: "Coverage (bonding, 20 kg)", value: "Approx 15–20 m²" },
        { label: "Shelf Life", value: "12 months in sealed bag" },
      ]}
      substrates={[
        "Fair-faced RCC — columns, beams, slabs",
        "AAC block walls (as plaster over BlockGrip)",
        "Smooth concrete block walls",
        "Old painted surfaces (prepared and abraded)",
        "Cement board and fibre cement panels",
      ]}
      applications={[
        "Bonding agent before plastering on RCC surfaces",
        "Ready-mix wall plaster — interiors and exteriors",
        "Ceiling plaster on RCC soffit (with proper support)",
        "Plaster repair over delaminated old plaster",
        "First coat before skim coat / POP finish",
      ]}
      pack={["20 kg bag", "40 kg bag"]}
    />

    {/* ── PAGE 9: ALPHAGROUT X1 ─────────────────────────── */}
    <ProductPage
      baseUrl={baseUrl} page={9}
      category="Structural Precision Grout  ·  Non-Shrink" typeBadge="AlphaGrout X1"
      bagImg="/images/real-ag1.png" appImg="/images/real-ag1-app.jpg"
      appCaption="AlphaGrout X1 — Machine base plate grouting, industrial installation"
      name="AlphaGrout X1" subtitle="Non-Shrink Precision Grout — >45 N/mm² @ 28 Days"
      desc="AlphaGrout X1 is a cementitious non-shrink precision grout engineered for machine foundation grouting, column base plate grouting, and precision structural applications where zero settlement is required. The controlled expansion additive eliminates the shrinkage that causes voids under base plates in ordinary concrete or cement grout, ensuring full bearing contact and effective load transfer from day one."
      advantages={[
        "Non-shrink — zero void formation under base plates",
        "High early strength — > 10 N/mm² at 24 hours",
        "Self-levelling at standard consistency — fills complex void geometry",
        "28-day strength > 45 N/mm² — exceeds most foundation concrete",
        "Flowable — reaches all corners under base plates without vibration",
      ]}
      howToUse="Clean and pre-wet anchor pockets, pits, and substrate surfaces. Erect formwork to confine grout. Mix 4.5–5 litres of clean water per 25 kg bag mechanically for 3–4 minutes. Pour immediately. Do not add extra water — mix ratio is critical. Seal formwork to prevent leakage. Strip forms after 24 hours. Wet cure for 7 days. Do not pour in temperatures below 5°C or above 40°C without precautions."
      properties={[
        { label: "Appearance", value: "Grey Powder" },
        { label: "Compressive Strength 1D", value: "> 10 N/mm²" },
        { label: "Compressive Strength 7D", value: "> 35 N/mm²" },
        { label: "Compressive Strength 28D", value: "> 45 N/mm²" },
        { label: "Young's Modulus", value: "Approx 25 kN/mm²" },
        { label: "Volume Change", value: "Non-shrink (ASTM C827)" },
        { label: "Flow Consistency", value: "Self-levelling, flowable" },
        { label: "Coverage (25 kg)", value: "Approx 11.5 litres of grout" },
      ]}
      substrates={[
        "Concrete foundations — cured and clean",
        "Steel base plates — free of oil, rust, and scale",
        "Anchor bolt pockets — cleaned and pre-wetted",
        "Pre-cast column pocket joints",
      ]}
      applications={[
        "Machine base plate grouting — pumps, compressors, turbines",
        "Structural column base plates — steel construction",
        "Pre-cast column pocket connections",
        "Bridge bearing grouting",
        "Anchor bolt grouting — structural",
        "Equipment pedestal grouting — all industrial sectors",
      ]}
      pack={["25 kg bag"]}
    />

    {/* ── PAGE 10: ALPHAGROUT X2 ────────────────────────── */}
    <ProductPage
      baseUrl={baseUrl} page={10}
      category="Structural Precision Grout  ·  Heavy Section" typeBadge="AlphaGrout X2"
      bagImg="/images/real-ag2.png" appImg="/images/app-alphagrout-x2.png"
      appCaption="AlphaGrout X2 — Large-section column pocket grouting, precast structure"
      name="AlphaGrout X2" subtitle="High-Strength Non-Shrink Precision Grout — >65 N/mm² @ 28 Days"
      desc="AlphaGrout X2 is the heavy-section variant of Alphabond's precision grout range. Classified for use with coarse aggregate up to 20 mm, it is designed for large-volume pours including precast column pockets, heavy machine pedestals, bridge bearings, and crane rail grouting. The 28-day compressive strength exceeds 65 N/mm² — substantially higher than most structural concrete specifications."
      advantages={[
        "Ultra-high strength — > 65 N/mm² @ 28 days",
        "Accepts coarse aggregate up to 20 mm for large-volume pours",
        "Non-shrink with controlled expansion — zero void formation",
        "Chemical resistance — suited to industrial environments",
        "Compatible with post-tensioned and pre-stressed concrete systems",
      ]}
      howToUse="Clean substrate thoroughly. Remove all oil, grease, dust, and laitance. Pre-wet concrete surfaces to SSD condition. Mix 4.5–5 litres of water per 25 kg bag with coarse aggregate added per design specification. Mix mechanically for 4–5 minutes. Pour and consolidate with light rodding. Do not use vibrators — internal vibration disrupts the expansion mechanism. Wet cure for 14 days."
      properties={[
        { label: "Appearance", value: "Grey Powder" },
        { label: "Compressive Strength 1D", value: "> 20 N/mm²" },
        { label: "Compressive Strength 7D", value: "> 50 N/mm²" },
        { label: "Compressive Strength 28D", value: "> 65 N/mm²" },
        { label: "Max Aggregate Size", value: "Up to 20 mm (added on site)" },
        { label: "Volume Change", value: "Non-shrink (ASTM C827)" },
        { label: "Tensile Strength", value: "> 4.0 N/mm² @ 28 days" },
        { label: "Coverage (25 kg)", value: "Approx 11 litres (before aggregate)" },
      ]}
      substrates={[
        "Reinforced concrete foundations",
        "Pre-cast concrete column sockets",
        "Steel base plates — heavy equipment",
        "Bridge deck bearing pads",
        "Industrial floor recess grouting",
      ]}
      applications={[
        "Heavy machine foundation grouting",
        "Pre-cast column pocket connections — structural",
        "Crane rail and runway beam grouting",
        "Bridge and viaduct bearing grouting",
        "Offshore and marine structure repairs",
        "Reactor pedestal and vessel foundation grouting",
      ]}
      pack={["25 kg bag"]}
    />

    {/* ── PAGE 11: CLIENTS & PARTNERS ───────────────────── */}
    <Page size="A4" style={s.clientsPage}>
      <View style={s.clientsHeader}>
        <Text style={s.clientsHeaderLabel}>Our Clients & Partners</Text>
        <Text style={s.clientsHeaderTitle}>{"Trusted by India's largest names\nin construction and manufacturing."}</Text>
      </View>
      <View style={s.clientsBody}>
        {/* Wet Sand */}
        <View style={s.clientGroup}>
          <View style={s.clientGroupHeader}>
            <Text style={s.clientGroupTitle}>Wet Sand Supply</Text>
            <Text style={s.clientGroupTag}>Since 2008</Text>
          </View>
          <View style={s.clientGrid}>
            {["UltraTech Cement RMC", "JK Lakshmi Cement RMC", "Nuvoco Vistas RMC", "ACC Cement RMC", "Prism Johnson RMC", "Wagad Infra Projects"].map(c => (
              <View key={c} style={s.clientChip}><Text style={s.clientChipText}>{c}</Text></View>
            ))}
          </View>
        </View>
        <View style={s.clientDivider} />

        {/* Dry Sand */}
        <View style={s.clientGroup}>
          <View style={s.clientGroupHeader}>
            <Text style={s.clientGroupTitle}>Dry Sand Supply</Text>
            <Text style={s.clientGroupTag}>Since 2021</Text>
          </View>
          <View style={s.clientGrid}>
            {["Pidilite Industries", "Magicrete Building Solutions", "BirlaNu Ltd.", "Walplast Products", "Globcon Industries", "Avon Building Solutions", "Bharat Silica", "Aswani Industries (Ascolite)"].map(c => (
              <View key={c} style={s.clientChip}><Text style={s.clientChipText}>{c}</Text></View>
            ))}
          </View>
        </View>
        <View style={s.clientDivider} />

        {/* Job Work */}
        <View style={s.clientGroup}>
          <View style={s.clientGroupHeader}>
            <Text style={s.clientGroupTitle}>Job Work / Contract Manufacturing</Text>
            <Text style={s.clientGroupTag}>Since 2022</Text>
          </View>
          <View style={s.clientGrid}>
            {["Asian Paints", "Walplast Products", "Masterapuu", "Revacon Buildtech", "Magicrete Building Solutions"].map(c => (
              <View key={c} style={s.clientChip}><Text style={s.clientChipText}>{c}</Text></View>
            ))}
          </View>
        </View>

        <View style={{ marginTop: 24, backgroundColor: "rgba(255,255,255,0.04)", borderRadius: 8, padding: 16, border: "1px solid rgba(255,255,255,0.08)" }}>
          <Text style={{ fontSize: 10, fontWeight: 700, color: "#ffffff", marginBottom: 8 }}>Why leading brands choose Alphabond</Text>
          <View style={{ flexDirection: "row", gap: 10 }}>
            {[
              { title: "Own Fleet", desc: "Dedicated truck fleet under direct management. Consistent on-time delivery." },
              { title: "Year-Round", desc: "Monsoon-ready facility. No seasonal shutdowns affecting client production." },
              { title: "ISO Certified", desc: "Documented QC. Full batch traceability. Audit-ready at all times." },
              { title: "Responsive", desc: "Direct lines to management. Queries resolved same day." },
            ].map(item => (
              <View key={item.title} style={{ flex: 1, backgroundColor: "rgba(255,255,255,0.04)", borderRadius: 6, padding: 10 }}>
                <Text style={{ fontSize: 8.5, fontWeight: 700, color: "#60A5FA", marginBottom: 4 }}>{item.title}</Text>
                <Text style={{ fontSize: 7.5, color: "#94A3B8", lineHeight: 1.55 }}>{item.desc}</Text>
              </View>
            ))}
          </View>
        </View>

        <Text style={s.clientNote}>All trademarks are property of their respective owners. Referenced solely to indicate supply relationships. No endorsement is implied.</Text>
      </View>
      <Text style={s.pageNumDark}>11</Text>
    </Page>

    {/* ── PAGE 12: FULL LINEUP ──────────────────────────── */}
    <Page size="A4" style={s.lineupPage}>
      <View style={s.lineupBand}>
        <Text style={s.lineupTitle}>{"The Complete Alphabond Range"}</Text>
        <Text style={s.lineupSub}>Eight products. One ISO-certified facility. Delivered to your site.</Text>
      </View>

      <View style={s.lineupGrid}>
        {[
          { img: "/images/real-tx1.png", name: "TileGrip X1", type: "C1T", desc: "Standard tile adhesive" },
          { img: "/images/real-tx2.png", name: "TileGrip X2", type: "C2T", desc: "Improved performance" },
          { img: "/images/real-tx3.png", name: "TileGrip X3", type: "C2TE", desc: "Extended open time" },
          { img: "/images/real-tx4.png", name: "TileGrip X4", type: "C2TES1", desc: "Flexible, facades" },
          { img: "/images/real-blockgrip.png", name: "BlockGrip X", type: "Block Mortar", desc: "3–5 mm thin-bed" },
          { img: "/images/real-plastogrip.png", name: "PlastoGrip X", type: "Ready-Mix Plaster", desc: "Bonding + plaster" },
          { img: "/images/real-ag1.png", name: "AlphaGrout X1", type: ">45 N/mm²", desc: "Precision grout" },
          { img: "/images/real-ag2.png", name: "AlphaGrout X2", type: ">65 N/mm²", desc: "Heavy section grout" },
        ].map((p) => (
          <View key={p.name} style={s.lineupCard}>
            <Image src={`${baseUrl}${p.img}`} style={s.lineupBag} />
            <Text style={s.lineupName}>{p.name}</Text>
            <Text style={s.lineupType}>{p.type}</Text>
            <Text style={s.lineupTypeGray}>{p.desc}</Text>
          </View>
        ))}
      </View>

      <Text style={s.lineupSlogan}>"Manufactured in India. Engineered for performance."</Text>

      <View style={s.lineupISORow}>
        <Text style={s.lineupBadge}>ISO 9001:2015 Certified</Text>
        <Text style={s.lineupBadge}>In-House QC Lab</Text>
        <Text style={s.lineupBadge}>Own Fleet Delivery</Text>
        <Text style={s.lineupBadge}>Since 2008</Text>
      </View>

      <Text style={s.pageNumDark}>12</Text>
    </Page>

    {/* ── PAGE 13: BACK COVER ───────────────────────────── */}
    <Page size="A4" style={s.backPage}>
      <View style={s.backTopAccent} />
      <View style={s.backContent}>
        <View style={s.backLogoWrap}>
          <Image src={`${baseUrl}/logo.png`} style={s.backLogo} />
          <Text style={s.backTagline}>High-performance construction chemicals — made in Gujarat, trusted across India.</Text>
        </View>

        <View style={s.backHighlights}>
          {[
            { value: "17+", label: "Years in\nbusiness" },
            { value: "8", label: "Products\nin range" },
            { value: "20+", label: "Major clients\nnationwide" },
            { value: "9,000 MT", label: "Dry sand\nper month" },
          ].map((h, i) => (
            <View key={i} style={s.backHighlight}>
              <Text style={s.backHighlightValue}>{h.value}</Text>
              <Text style={s.backHighlightLabel}>{h.label}</Text>
            </View>
          ))}
        </View>

        <View style={s.backAddresses}>
          <View style={s.backAddrBox}>
            <Text style={s.backAddrLabel}>Registered Office</Text>
            <Text style={s.backAddrLine}>{"Kishan Enterprise\nB/H. Agroha Society, Old National Highway,\nAmod Road, Bharuch — 392001, Gujarat, India"}</Text>
          </View>
          <View style={s.backAddrBox}>
            <Text style={s.backAddrLabel}>Works / Factory</Text>
            <Text style={s.backAddrLine}>{"Survey No. 134/1, Amod-Bharuch Highway,\nKhambhalia, Bharuch District,\nGujarat — 392001, India"}</Text>
          </View>
          <View style={s.backAddrBox}>
            <Text style={s.backAddrLabel}>Branch Office</Text>
            <Text style={s.backAddrLine}>{"Kishan Enterprise\nParvat Patia, Ring Road,\nSurat — 395010, Gujarat, India"}</Text>
          </View>
        </View>

        <View style={s.backContacts}>
          {[
            { label: "Sales & Enquiries", val: "+91 90994 65837" },
            { label: "Technical Support", val: "+91 96385 63857" },
            { label: "Email", val: "sales@alphabond.in" },
            { label: "Website", val: "www.alphabond.in" },
          ].map((c, i) => (
            <View key={i} style={s.backContactItem}>
              <Text style={s.backContactLabel}>{c.label}</Text>
              <Text style={s.backContactVal}>{c.val}</Text>
            </View>
          ))}
        </View>

        <View style={s.backFooter}>
          <Text style={s.backFooterText}>© 2025 Kishan Enterprise. All rights reserved. Alphabond™ is a trademark of Kishan Enterprise.</Text>
          <Text style={s.backBadge}>ISO 9001:2015</Text>
        </View>
      </View>
    </Page>

  </Document>
);
