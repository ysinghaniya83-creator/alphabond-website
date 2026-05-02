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

const PRIMARY   = "#010ED0";
const DARK      = "#0A0F2E";
const SLATE     = "#475569";
const LIGHT_BG  = "#F8FAFC";
const BORDER    = "#E2E8F0";
const ACCENT    = "#60A5FA";
const GREEN     = "#22C55E";

const s = StyleSheet.create({
  page: { fontFamily: "Inter", backgroundColor: "#ffffff", position: "relative" },

  /* ─── Cover ─────────────────────────────────────────── */
  coverPage:    { backgroundColor: DARK, flexDirection: "column" },
  coverTopBand: { flex: 1, padding: "44 48 0 48", flexDirection: "column", justifyContent: "flex-end" },
  coverBadgeRow:{ flexDirection: "row", gap: 8, marginBottom: 28 },
  coverBadge:   { fontSize: 7.5, fontWeight: 600, color: ACCENT, backgroundColor: "rgba(96,165,250,0.15)", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 4 },
  coverLogo:    { width: 160, height: 52, objectFit: "contain", marginBottom: 24 },
  coverDivider: { height: 3, width: 56, backgroundColor: PRIMARY, marginBottom: 24 },
  coverTagline: { fontSize: 36, fontWeight: 700, color: "#ffffff", lineHeight: 1.18, marginBottom: 14 },
  coverSub:     { fontSize: 10.5, color: "#94A3B8", lineHeight: 1.6, marginBottom: 28, maxWidth: 380 },
  coverContact: { flexDirection: "row", gap: 20, marginBottom: 40 },
  coverContactItem: { fontSize: 8.5, color: "#94A3B8" },

  coverBagStrip: { backgroundColor: "rgba(255,255,255,0.04)", borderTop: "1px solid rgba(255,255,255,0.1)", padding: "20 48", flexDirection: "row", gap: 8, alignItems: "center" },
  coverBagLabel: { fontSize: 7, fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: 1.5, marginRight: 8, width: 60 },
  coverBagCard:  { flex: 1, alignItems: "center", backgroundColor: "rgba(255,255,255,0.05)", borderRadius: 6, paddingVertical: 8, paddingHorizontal: 4, border: "1px solid rgba(255,255,255,0.08)" },
  coverBagImg:   { width: 34, height: 44, objectFit: "contain", marginBottom: 4 },
  coverBagName:  { fontSize: 5.5, fontWeight: 700, color: "#cbd5e1", textAlign: "center" },

  /* ─── About ──────────────────────────────────────────── */
  aboutPage:    { padding: 0, backgroundColor: "#ffffff" },
  aboutHeader:  { backgroundColor: DARK, padding: "22 44", flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  aboutHeaderLabel: { fontSize: 8, color: "#94A3B8", textTransform: "uppercase", letterSpacing: 1.5 },
  aboutHeaderBadge: { fontSize: 8, fontWeight: 700, color: "#ffffff", backgroundColor: PRIMARY, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 4 },
  facilityRow:  { flexDirection: "row", gap: 0, height: 150 },
  facilityImg:  { flex: 1, objectFit: "cover" },
  facilityCaption: { position: "absolute", bottom: 0, left: 0, right: 0, backgroundColor: "rgba(0,0,0,0.55)", padding: "4 10" },
  facilityCaptionText: { fontSize: 7, color: "#ffffff", fontWeight: 600 },
  aboutBody:    { padding: "24 44 28 44" },
  sectionLabel: { fontSize: 7.5, fontWeight: 600, color: PRIMARY, textTransform: "uppercase", letterSpacing: 2, marginBottom: 6 },
  aboutTitle:   { fontSize: 20, fontWeight: 700, color: DARK, marginBottom: 12, lineHeight: 1.25 },
  aboutText:    { fontSize: 8.5, color: SLATE, lineHeight: 1.65, marginBottom: 8 },
  statsRow:     { flexDirection: "row", gap: 10, marginTop: 16, marginBottom: 16 },
  statBox:      { flex: 1, backgroundColor: LIGHT_BG, borderRadius: 8, padding: "12 10", alignItems: "center", border: `1px solid ${BORDER}` },
  statVal:      { fontSize: 20, fontWeight: 700, color: PRIMARY, marginBottom: 2 },
  statLabel:    { fontSize: 7.5, fontWeight: 600, color: DARK, textAlign: "center" },
  statSub:      { fontSize: 6.5, color: SLATE, textAlign: "center", marginTop: 1 },
  vmGrid:       { flexDirection: "row", gap: 12, marginTop: 8 },
  vmBox:        { flex: 1, backgroundColor: LIGHT_BG, borderRadius: 8, padding: 14, borderLeft: `3px solid ${PRIMARY}` },
  vmTitle:      { fontSize: 9, fontWeight: 700, color: DARK, marginBottom: 6 },
  vmText:       { fontSize: 8, color: SLATE, lineHeight: 1.6 },
  missionBullet:{ fontSize: 8, color: SLATE, lineHeight: 1.6, marginBottom: 2 },

  /* ─── Product Page ───────────────────────────────────── */
  productPage:       { padding: 0, backgroundColor: "#ffffff" },
  productHeader:     { backgroundColor: DARK, padding: "18 44", flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  productCategoryTag:{ fontSize: 8, color: "#94A3B8", textTransform: "uppercase", letterSpacing: 1.5 },
  productTypeBadge:  { fontSize: 8, fontWeight: 700, color: "#ffffff", backgroundColor: PRIMARY, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 4 },

  productHero:       { flexDirection: "row", backgroundColor: LIGHT_BG, borderBottom: `1px solid ${BORDER}` },
  productBagWrap:    { width: 150, alignItems: "center", justifyContent: "center", padding: 16, backgroundColor: "#F1F5F9" },
  productBag:        { width: 120, height: 155, objectFit: "contain" },
  productHeroRight:  { flex: 1, padding: "18 24 14 14" },
  productName:       { fontSize: 20, fontWeight: 700, color: DARK, marginBottom: 2 },
  productSubtitle:   { fontSize: 9, fontWeight: 600, color: PRIMARY, marginBottom: 8, letterSpacing: 0.5 },
  productDesc:       { fontSize: 8.5, color: SLATE, lineHeight: 1.65, marginBottom: 10 },

  advantagesWrap:    { backgroundColor: "#EEF2FF", borderRadius: 6, padding: "9 12", border: `1px solid #C7D2FE` },
  advantagesTitle:   { fontSize: 7, fontWeight: 700, color: PRIMARY, textTransform: "uppercase", letterSpacing: 1, marginBottom: 5 },
  advantageRow:      { flexDirection: "row", gap: 5, marginBottom: 3, alignItems: "flex-start" },
  advantageDot:      { width: 6, height: 6, backgroundColor: PRIMARY, borderRadius: 3, marginTop: 1.5 },
  advantageText:     { fontSize: 7.5, color: "#3730A3", lineHeight: 1.5, flex: 1 },

  appImgWrap:        { height: 130, position: "relative", marginHorizontal: 0 },
  appImg:            { width: "100%", height: "100%", objectFit: "cover" },
  appImgOverlay:     { position: "absolute", bottom: 0, left: 0, right: 0, backgroundColor: "rgba(10,15,46,0.65)", padding: "5 12" },
  appImgCaption:     { fontSize: 7, color: "#e2e8f0", fontWeight: 600 },

  productBody:       { padding: "14 44 16 44" },
  twoCol:            { flexDirection: "row", gap: 14 },
  col:               { flex: 1 },
  boxTitle:          { fontSize: 7, fontWeight: 700, color: "#ffffff", textTransform: "uppercase", letterSpacing: 1, backgroundColor: DARK, paddingHorizontal: 10, paddingVertical: 5, borderRadius: "4 4 0 0" },
  boxContent:        { backgroundColor: LIGHT_BG, borderRadius: "0 0 4 4", padding: 10, border: `1px solid ${BORDER}` },
  tableRow:          { flexDirection: "row", borderBottom: `1px solid ${BORDER}`, paddingVertical: 4.5 },
  tableRowAlt:       { flexDirection: "row", borderBottom: `1px solid ${BORDER}`, paddingVertical: 4.5, backgroundColor: "#F1F5F9" },
  tableLabel:        { width: "47%", fontSize: 7.5, fontWeight: 600, color: DARK },
  tableValue:        { flex: 1, fontSize: 7.5, color: SLATE },
  bullet:            { fontSize: 8, color: SLATE, lineHeight: 1.6, marginBottom: 2 },
  howToBox:          { backgroundColor: "#EEF2FF", borderRadius: 6, padding: 10, marginTop: 10, borderLeft: `3px solid ${PRIMARY}` },
  howToTitle:        { fontSize: 7, fontWeight: 700, color: PRIMARY, textTransform: "uppercase", letterSpacing: 1, marginBottom: 5 },
  howToText:         { fontSize: 8, color: "#3730A3", lineHeight: 1.6 },
  packRow:           { flexDirection: "row", gap: 6, marginTop: 10 },
  packBadge:         { backgroundColor: DARK, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 4 },
  packText:          { fontSize: 8, fontWeight: 600, color: "#ffffff" },
  packLabel:         { fontSize: 7, color: "#64748B", textTransform: "uppercase", letterSpacing: 1, marginBottom: 5 },

  /* ─── Lineup page ────────────────────────────────────── */
  lineupPage:   { backgroundColor: DARK, justifyContent: "center", alignItems: "center", padding: 44 },
  lineupTitle:  { fontSize: 28, fontWeight: 700, color: "#ffffff", textAlign: "center", lineHeight: 1.2, marginBottom: 6 },
  lineupSub:    { fontSize: 10, color: "#94A3B8", textAlign: "center", marginBottom: 32 },
  lineupGrid:   { flexDirection: "row", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 32 },
  lineupCard:   { width: 115, backgroundColor: "rgba(255,255,255,0.06)", borderRadius: 8, padding: 10, alignItems: "center", border: "1px solid rgba(255,255,255,0.1)" },
  lineupBag:    { width: 65, height: 80, objectFit: "contain", marginBottom: 6 },
  lineupName:   { fontSize: 7.5, fontWeight: 700, color: "#ffffff", textAlign: "center", marginBottom: 2 },
  lineupType:   { fontSize: 6, color: "#94A3B8", textAlign: "center" },
  lineupSlogan: { fontSize: 13, fontWeight: 600, color: ACCENT, textAlign: "center", fontStyle: "italic" },

  /* ─── Clients page ───────────────────────────────────── */
  clientsPage:  { padding: 0, backgroundColor: "#ffffff" },
  clientsHeader:{ backgroundColor: DARK, padding: "22 44", flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  clientsHeaderLabel:{ fontSize: 8, color: "#94A3B8", textTransform: "uppercase", letterSpacing: 1.5 },
  clientsHeaderBadge:{ fontSize: 8, fontWeight: 700, color: "#ffffff", backgroundColor: PRIMARY, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 4 },
  clientsBody:  { padding: "24 44 28 44" },
  clientsIntro: { fontSize: 11, fontWeight: 600, color: DARK, marginBottom: 6, lineHeight: 1.4 },
  clientsDesc:  { fontSize: 8.5, color: SLATE, lineHeight: 1.65, marginBottom: 20 },
  clientGroup:  { marginBottom: 18 },
  clientGroupHeader: { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 8 },
  clientGroupTitle:  { fontSize: 9, fontWeight: 700, color: DARK },
  clientGroupTag:    { fontSize: 7, fontWeight: 700, paddingHorizontal: 8, paddingVertical: 3, borderRadius: 3 },
  clientsGrid:  { flexDirection: "row", flexWrap: "wrap", gap: 6 },
  clientChip:   { paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5, border: `1px solid ${BORDER}`, backgroundColor: LIGHT_BG },
  clientChipText:{ fontSize: 8, fontWeight: 600, color: DARK },
  clientsDivider:{ height: 1, backgroundColor: BORDER, marginVertical: 14 },
  isoStrip:     { flexDirection: "row", gap: 10, backgroundColor: LIGHT_BG, borderRadius: 8, padding: 12, border: `1px solid ${BORDER}`, alignItems: "center" },
  isoStripBadge:{ fontSize: 7.5, fontWeight: 700, color: PRIMARY, backgroundColor: "#EEF2FF", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 4, border: `1px solid #C7D2FE` },
  isoStripText: { fontSize: 8, color: SLATE, flex: 1 },

  /* ─── Back cover ─────────────────────────────────────── */
  backPage:     { backgroundColor: DARK, padding: 48, justifyContent: "space-between" },
  backLogoWrap: { alignItems: "center", marginBottom: 36 },
  backLogo:     { width: 140, height: 48, objectFit: "contain" },
  backTagline:  { fontSize: 10, color: ACCENT, textAlign: "center", marginTop: 8 },
  backHighlight:{ flexDirection: "row", gap: 12, marginBottom: 32 },
  backHighCard: { flex: 1, backgroundColor: "rgba(255,255,255,0.06)", borderRadius: 10, padding: 16, border: "1px solid rgba(255,255,255,0.1)", alignItems: "center" },
  backHighVal:  { fontSize: 22, fontWeight: 700, color: ACCENT, marginBottom: 3 },
  backHighLabel:{ fontSize: 7.5, fontWeight: 600, color: "#CBD5E1", textAlign: "center" },
  backAddresses:{ flexDirection: "row", gap: 12, marginBottom: 28 },
  backAddrBox:  { flex: 1, backgroundColor: "rgba(255,255,255,0.05)", borderRadius: 8, padding: 14, border: "1px solid rgba(255,255,255,0.1)" },
  backAddrLabel:{ fontSize: 7, fontWeight: 700, color: PRIMARY, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 7 },
  backAddrLine: { fontSize: 8, color: "#CBD5E1", lineHeight: 1.65 },
  backContacts: { flexDirection: "row", gap: 20, justifyContent: "center", marginBottom: 20 },
  backContactItem:{ alignItems: "center", gap: 3 },
  backContactLabel:{ fontSize: 7, color: "#64748B", textTransform: "uppercase", letterSpacing: 1 },
  backContactVal:{ fontSize: 9, color: "#ffffff", fontWeight: 600 },
  backFooter:   { borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 16, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  backFooterText:{ fontSize: 7, color: "#475569" },
  backBadge:    { fontSize: 7, color: ACCENT, backgroundColor: "rgba(96,165,250,0.1)", paddingHorizontal: 8, paddingVertical: 3, borderRadius: 3 },

  /* ─── Page number ────────────────────────────────────── */
  pageNum:      { position: "absolute", bottom: 14, right: 44, fontSize: 7, color: "#CBD5E1" },
  pageNumDark:  { position: "absolute", bottom: 14, right: 44, fontSize: 7, color: "#94A3B8" },
});

interface Props { baseUrl: string }

const ProductPage = ({
  category, typeBadge, bagImg, name, subtitle, desc, howToUse,
  properties, substrates, applications, pack, appImg, appCaption,
  advantages, baseUrl, page
}: {
  category: string; typeBadge: string; bagImg: string; name: string;
  subtitle: string; desc: string; howToUse: string;
  properties: { label: string; value: string }[];
  substrates: string[]; applications: string[]; pack: string[];
  appImg?: string; appCaption?: string;
  advantages: string[];
  baseUrl: string; page: number;
}) => (
  <Page size="A4" style={s.productPage}>
    {/* Header */}
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
            <View key={i} style={s.advantageRow}>
              <View style={s.advantageDot} />
              <Text style={s.advantageText}>{a}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>

    {/* Full-width application image */}
    {appImg && (
      <View style={s.appImgWrap}>
        <Image src={`${baseUrl}${appImg}`} style={s.appImg} />
        <View style={s.appImgOverlay}>
          <Text style={s.appImgCaption}>{appCaption || "Application"}</Text>
        </View>
      </View>
    )}

    {/* Body */}
    <View style={s.productBody}>
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
          <View style={{ marginTop: 12 }}>
            <Text style={s.boxTitle}>Pack Size</Text>
            <View style={s.boxContent}>
              <Text style={s.packLabel}>Available in:</Text>
              <View style={s.packRow}>
                {pack.map((p, i) => (
                  <View key={i} style={s.packBadge}>
                    <Text style={s.packText}>{p}</Text>
                  </View>
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
          <View style={{ marginTop: 12 }}>
            <Text style={s.boxTitle}>Area of Application</Text>
            <View style={s.boxContent}>
              {applications.map((a, i) => <Text key={i} style={s.bullet}>• {a}</Text>)}
            </View>
          </View>
          <View style={s.howToBox}>
            <Text style={s.howToTitle}>How to Use</Text>
            <Text style={s.howToText}>{howToUse}</Text>
          </View>
        </View>
      </View>
    </View>

    <Text style={s.pageNumDark}>{page}</Text>
  </Page>
);

export const AlphabondBrochure = ({ baseUrl }: Props) => (
  <Document title="Alphabond Product Brochure" author="Kishan Enterprise" subject="High-Performance Construction Chemicals — Bharuch, Gujarat">

    {/* ── PAGE 1: COVER ─────────────────────────────────── */}
    <Page size="A4" style={s.coverPage}>
      <View style={s.coverTopBand}>
        <View style={s.coverBadgeRow}>
          <Text style={s.coverBadge}>ISO 9001:2015 Certified</Text>
          <Text style={s.coverBadge}>Make in India</Text>
          <Text style={s.coverBadge}>Since 2008</Text>
          <Text style={s.coverBadge}>Bharuch &amp; Surat, Gujarat</Text>
        </View>
        <Image src={`${baseUrl}/logo.png`} style={s.coverLogo} />
        <View style={s.coverDivider} />
        <Text style={s.coverTagline}>{"High-performance\nconstruction chemicals.\nBuilt in India."}</Text>
        <Text style={s.coverSub}>
          {"Tile adhesives, precision grouts, block mortar, ready-mix plaster and industrial sand — all manufactured at our ISO-certified Bharuch facility. Trusted by Asian Paints, Pidilite, UltraTech, Walplast and Magicrete."}
        </Text>
        <View style={s.coverContact}>
          <Text style={s.coverContactItem}>+91 90994 65837</Text>
          <Text style={s.coverContactItem}>+91 96385 63857</Text>
          <Text style={s.coverContactItem}>info@alphabond.in</Text>
          <Text style={s.coverContactItem}>www.alphabond.in</Text>
        </View>
      </View>

      {/* Product bag strip at bottom of cover */}
      <View style={s.coverBagStrip}>
        <Text style={s.coverBagLabel}>Product Range</Text>
        {[
          { img: "/images/real-tx1.png",       name: "TileGrip X1" },
          { img: "/images/real-tx2.png",       name: "TileGrip X2" },
          { img: "/images/real-tx3.png",       name: "TileGrip X3" },
          { img: "/images/real-tx4.png",       name: "TileGrip X4" },
          { img: "/images/real-blockgrip.png", name: "BlockGrip X" },
          { img: "/images/real-plastogrip.png",name: "PlastoGrip X" },
          { img: "/images/real-ag1.png",       name: "AlphaGrout X1" },
          { img: "/images/real-ag2.png",       name: "AlphaGrout X2" },
        ].map((p) => (
          <View key={p.name} style={s.coverBagCard}>
            <Image src={`${baseUrl}${p.img}`} style={s.coverBagImg} />
            <Text style={s.coverBagName}>{p.name}</Text>
          </View>
        ))}
      </View>
    </Page>

    {/* ── PAGE 2: ABOUT ─────────────────────────────────── */}
    <Page size="A4" style={s.aboutPage}>
      <View style={s.aboutHeader}>
        <Text style={s.aboutHeaderLabel}>About Alphabond</Text>
        <Text style={s.aboutHeaderBadge}>Est. 2008</Text>
      </View>

      {/* Facility images side by side */}
      <View style={s.facilityRow}>
        <View style={{ flex: 1, position: "relative" }}>
          <Image src={`${baseUrl}/images/facility-plant.png`} style={s.facilityImg} />
          <View style={s.facilityCaption}>
            <Text style={s.facilityCaptionText}>Bharuch Manufacturing Plant</Text>
          </View>
        </View>
        <View style={{ flex: 1, position: "relative" }}>
          <Image src={`${baseUrl}/images/facility-lab.png`} style={s.facilityImg} />
          <View style={s.facilityCaption}>
            <Text style={s.facilityCaptionText}>In-House Quality Control Laboratory</Text>
          </View>
        </View>
      </View>

      <View style={s.aboutBody}>
        <Text style={s.sectionLabel}>Kishan Enterprise — Operating as Alphabond™</Text>
        <Text style={s.aboutTitle}>{"Manufacturing excellence.\nDelivered from Gujarat."}</Text>
        <Text style={s.aboutText}>
          Established in 2008, Alphabond is the flagship construction chemicals brand of Kishan Enterprise, an ISO 9001:2015 certified manufacturer headquartered in Bharuch, Gujarat. We began with industrial sand supply and expanded into high-performance construction chemicals to serve a gap in the Indian market for reliable, locally manufactured bonding solutions.
        </Text>
        <Text style={s.aboutText}>
          Today, we manufacture and supply eight products across tile adhesives, precision grouts, block mortars, and ready-mix plasters. Our dry sand and wet sand operations supply 9,000 metric tonnes per month to India's largest cement and RMC majors, including UltraTech, JK Lakshmi, ACC, Nuvoco, and Prism Johnson.
        </Text>

        {/* Stats strip */}
        <View style={s.statsRow}>
          {[
            { val: "17+", label: "Years in Business", sub: "Since 2008" },
            { val: "8", label: "Products in Range", sub: "Construction chemicals" },
            { val: "20+", label: "Major Clients", sub: "National brands" },
            { val: "9,000 MT", label: "Dry Sand / Month", sub: "Industrial supply" },
            { val: "1.5L", label: "Bags / Month", sub: "Current capacity" },
          ].map((st) => (
            <View key={st.label} style={s.statBox}>
              <Text style={s.statVal}>{st.val}</Text>
              <Text style={s.statLabel}>{st.label}</Text>
              <Text style={s.statSub}>{st.sub}</Text>
            </View>
          ))}
        </View>

        <View style={s.vmGrid}>
          <View style={s.vmBox}>
            <Text style={s.vmTitle}>Our Vision</Text>
            <Text style={s.vmText}>
              To be a leading force in the building materials industry by delivering superior-quality products, fostering sustainable construction solutions, and building long-term partnerships based on trust and excellence.
            </Text>
          </View>
          <View style={s.vmBox}>
            <Text style={s.vmTitle}>Our Mission</Text>
            <Text style={s.missionBullet}>+ Manufacture high-performance building materials that meet evolving construction demands.</Text>
            <Text style={s.missionBullet}>+ Maintain the highest standards of quality, innovation, and sustainability in every product.</Text>
            <Text style={s.missionBullet}>+ Ensure customer satisfaction through reliable, cost-effective solutions and responsive service.</Text>
            <Text style={s.missionBullet}>+ Expand reach and strengthen partnerships with leading construction companies across India.</Text>
          </View>
        </View>
      </View>
      <Text style={s.pageNum}>2</Text>
    </Page>

    {/* ── PAGE 3: TILEGRIP X1 ───────────────────────────── */}
    <ProductPage
      baseUrl={baseUrl} page={3}
      category="Tile Adhesive  ·  C1T Grade" typeBadge="Standard Performance"
      bagImg="/images/real-tx1.png" appImg="/images/app-tilegrip-x1.png"
      appCaption="TileGrip X1 — standard ceramic and vitrified tile fixing on walls and floors"
      name="TileGrip X1"
      subtitle="Premium Polymer-Modified Tile Adhesive — Standard Grade"
      desc="TileGrip X1 is a high-performance, polymer-modified cementitious tile adhesive designed for superior bonding strength and durability. Engineered for both wall and floor applications in standard residential and commercial environments, it provides excellent adhesion to concrete, cement plaster, and brick substrates."
      howToUse="Add 4.5 litres of clean water per 20 kg bag. Mix mechanically to a smooth, lump-free paste. Apply with a notched trowel at 3 to 4mm bed thickness. Press tiles firmly within the open time. Back-butter tiles larger than 400x400. Allow 24 hours before grouting. Do not walk on tiles for 24 hours."
      advantages={[
        "Polymer-modified formula for superior adhesion vs plain cement mortar",
        "Easy-mix grey/white powder — consistent quality batch after batch",
        "Suitable for ceramic tiles on walls and floors — ideal residential grade",
        "20-minute open time gives working room for precise tile placement",
        "Water resistant after cure — suitable for wet areas including bathrooms",
      ]}
      properties={[
        { label: "Grade",           value: "C1T (EN 12004)" },
        { label: "Appearance",      value: "Grey / White Powder" },
        { label: "Open Time",       value: "20 min at 20°C" },
        { label: "Pot Life",        value: "Approx. 120 min" },
        { label: "Shear Strength",  value: "> 1.0 N/mm² (28 days)" },
        { label: "Tensile Strength",value: "> 0.5 N/mm² (28 days)" },
        { label: "Coverage",        value: "4–5 m² per 20 kg bag @ 3mm" },
        { label: "Mixing Ratio",    value: "4.5 L water per 20 kg bag" },
      ]}
      substrates={[
        "Cement plaster / sand-cement render",
        "Concrete / RCC slabs and walls",
        "Brick and block masonry (plastered)",
        "Existing ceramic tiles (prepared surface)",
      ]}
      applications={[
        "Indoor floor and wall tiling — residential",
        "Bathrooms, kitchens, utility areas",
        "Standard ceramic tile fixing (up to 400×400)",
        "Corridor and common area floors",
        "Retail and office interiors",
      ]}
      pack={["20 kg", "5 kg"]}
    />

    {/* ── PAGE 4: TILEGRIP X2 ───────────────────────────── */}
    <ProductPage
      baseUrl={baseUrl} page={4}
      category="Tile Adhesive  ·  C2T Grade" typeBadge="Improved Performance"
      bagImg="/images/real-tx2.png" appImg="/images/real-tx2-app.jpg"
      appCaption="TileGrip X2 — large-format vitrified and natural stone tile fixing"
      name="TileGrip X2"
      subtitle="High-Strength Tile Adhesive — Improved Performance Grade"
      desc="TileGrip X2 is an improved-performance polymer-modified tile adhesive with higher shear and tensile strength than C1T grade. Designed for larger tile formats, heavier natural stone, and demanding indoor-outdoor applications where standard grade adhesives do not provide sufficient bond strength."
      howToUse="Add 4.5 litres of clean water per 20 kg bag. Mix mechanically to a smooth, lump-free paste. Apply using a notched trowel. For tiles larger than 600x600, apply adhesive to both the substrate and the back of the tile (back-butter). Press firmly within open time. Allow 24 hours before grouting."
      advantages={[
        "C2T grade — higher shear and tensile strength than standard C1T adhesives",
        "Suitable for vitrified tiles up to 600x600 and natural stone",
        "Improved water resistance for outdoor courtyards and sheltered terraces",
        "Tixotropic (non-slump) — stays in place on vertical wall surfaces",
        "Excellent adhesion to smooth, low-absorption tile surfaces",
      ]}
      properties={[
        { label: "Grade",           value: "C2T (EN 12004)" },
        { label: "Appearance",      value: "Grey / White Powder" },
        { label: "Open Time",       value: "20 min at 20°C" },
        { label: "Pot Life",        value: "Approx. 120 min" },
        { label: "Shear Strength",  value: "> 1.5 N/mm² (28 days)" },
        { label: "Tensile Strength",value: "> 1.0 N/mm² (28 days)" },
        { label: "Coverage",        value: "4–5 m² per 20 kg bag @ 3mm" },
        { label: "Mixing Ratio",    value: "4.5 L water per 20 kg bag" },
      ]}
      substrates={[
        "Concrete / RCC slabs and walls",
        "Cement plaster and render",
        "AAC block walls (plastered)",
        "Existing glazed tiles (back-buttered)",
      ]}
      applications={[
        "Large-format vitrified tiles (400×400 to 600×600)",
        "Natural stone — slate, limestone, sandstone",
        "Outdoor floor tiling — sheltered terraces",
        "Swimming pool surrounds and wet areas",
        "Commercial lobbies and reception areas",
      ]}
      pack={["20 kg", "5 kg"]}
    />

    {/* ── PAGE 5: TILEGRIP X3 ───────────────────────────── */}
    <ProductPage
      baseUrl={baseUrl} page={5}
      category="Tile Adhesive  ·  C2TE Grade" typeBadge="Extended Open Time"
      bagImg="/images/real-tx3.png" appImg="/images/app-tilegrip-x3.png"
      appCaption="TileGrip X3 — oversized marble and granite installation with precise alignment time"
      name="TileGrip X3"
      subtitle="High-Strength Tile Adhesive with Extended Open Time — C2TE Grade"
      desc="TileGrip X3 is a C2TE classified, polymer-modified tile adhesive combining improved-performance bond strength with extended open time of up to 30 minutes. Specifically designed for large, heavy tiles that require precise positioning — marble, granite, oversized vitrified — and for demanding exterior wall cladding applications."
      howToUse="Add 4.5 litres of clean water per 20 kg bag. Mix mechanically to a smooth consistency. Apply with a notched trowel. Back-butter all tiles above 600x600. The extended open time allows careful alignment of large and heavy tiles. Press firmly and check with a rubber mallet. Allow 24 hours before grouting."
      advantages={[
        "30-minute extended open time — critical for large, heavy tile alignment",
        "C2TE grade — improved bond strength plus extended working time",
        "Ideal for tile-on-tile renovation (existing glazed surfaces)",
        "Non-slump on vertical surfaces — suitable for exterior wall cladding",
        "Handles 800x800 and above marble and granite formats",
      ]}
      properties={[
        { label: "Grade",           value: "C2TE (EN 12004)" },
        { label: "Appearance",      value: "Grey / White Powder" },
        { label: "Open Time",       value: "30 min at 20°C (Extended)" },
        { label: "Pot Life",        value: "Approx. 150 min" },
        { label: "Shear Strength",  value: "> 1.5 N/mm² (28 days)" },
        { label: "Tensile Strength",value: "> 1.0 N/mm² (28 days)" },
        { label: "Coverage",        value: "4–5 m² per 20 kg bag @ 3mm" },
        { label: "Mixing Ratio",    value: "4.5 L water per 20 kg bag" },
      ]}
      substrates={[
        "Concrete / RCC slabs and walls",
        "Cement plaster and render",
        "Existing glazed tiles (mechanically prepared)",
        "AAC block walls",
        "Fair-faced concrete (with bonding agent)",
      ]}
      applications={[
        "Oversized marble and granite (800×800 and above)",
        "Exterior wall cladding and feature walls",
        "High-traffic commercial floors",
        "Tile-on-tile renovation projects",
        "Hotels, malls, airport interiors",
      ]}
      pack={["20 kg", "5 kg"]}
    />

    {/* ── PAGE 6: TILEGRIP X4 ───────────────────────────── */}
    <ProductPage
      baseUrl={baseUrl} page={6}
      category="Tile Adhesive  ·  C2TES1 Grade" typeBadge="Flexible / Facade Grade"
      bagImg="/images/real-tx4.png" appImg="/images/app-tilegrip-x4.png"
      appCaption="TileGrip X4 — facade and structural external tile cladding applications"
      name="TileGrip X4"
      subtitle="Flexible High-Performance Tile Adhesive — C2TES1 Grade"
      desc="TileGrip X4 is the highest-performance product in the TileGrip range — a C2TES1 classified, highly flexible polymer-modified adhesive designed for external facades, structural cladding, and any application where significant thermal cycling, movement, or chemical exposure is expected."
      howToUse="Add 4.5 litres of clean water per 20 kg bag. Mix mechanically to a smooth, uniform consistency. Apply with a large-notch trowel. Back-butter all tiles, especially on facades. The flexible polymer matrix accommodates thermal movement. Allow 48 hours before grouting on exposed external surfaces."
      advantages={[
        "S1 deformability class — absorbs thermal movement between tile and substrate",
        "Maximum bond strength in the TileGrip range — highest polymer content",
        "Extended 30-minute open time for precise large-format placement",
        "Ideal for facades, roof terraces, and external cladding in all climates",
        "Chemical resistance — suitable for industrial and commercial floors",
      ]}
      properties={[
        { label: "Grade",            value: "C2TES1 (EN 12004)" },
        { label: "Appearance",       value: "Grey / White Powder" },
        { label: "Open Time",        value: "30 min at 20°C (Extended)" },
        { label: "Deformability",    value: "S1 Class (> 2.5 mm)" },
        { label: "Shear Strength",   value: "> 2.0 N/mm² (28 days)" },
        { label: "Tensile Strength", value: "> 1.0 N/mm² (28 days)" },
        { label: "Coverage",         value: "3.5–4.5 m² per 20 kg @ 3mm" },
        { label: "Mixing Ratio",     value: "4.5 L water per 20 kg bag" },
      ]}
      substrates={[
        "Concrete and RCC facades and walls",
        "Structural steel frames (with primer)",
        "External render / cement plaster",
        "Roof terrace slabs",
        "Industrial screed floors",
      ]}
      applications={[
        "External building facades and curtain walls",
        "Roof terraces, podiums, and plaza decks",
        "Industrial and chemical-resistant floors",
        "Heavy stone cladding — granite, marble, travertine",
        "Infrastructure — bridges, tunnels, metro stations",
      ]}
      pack={["20 kg", "5 kg"]}
    />

    {/* ── PAGE 7: BLOCKGRIP X ──────────────────────────── */}
    <ProductPage
      baseUrl={baseUrl} page={7}
      category="Block Jointing Mortar  ·  Thin-Bed System" typeBadge="AAC / CLC Block"
      bagImg="/images/real-blockgrip.png" appImg="/images/app-blockgrip.png"
      appCaption="BlockGrip X — thin-bed polymer-modified jointing mortar for AAC block masonry"
      name="BlockGrip X"
      subtitle="Polymer-Modified Block Jointing Mortar for AAC and CLC Blocks"
      desc="BlockGrip X is a factory-blended, polymer-modified thin-bed block jointing mortar specifically engineered for AAC (Autoclaved Aerated Concrete) and CLC (Cellular Lightweight Concrete) block masonry. It replaces traditional sand-cement mortar with a precision thin-bed system that eliminates thermal bridging and dramatically reduces material waste."
      howToUse="Add 5.5 to 6 litres of clean water per 20 kg bag. Mix mechanically for 3 to 5 minutes until smooth. Apply a 3 to 5mm uniform layer to the block surface using a notched trowel or serrated float. Place blocks within 15 minutes. Ensure horizontal and vertical alignment. Allow 24 hours before plastering."
      advantages={[
        "Thin-bed system (3–5mm joint) eliminates thermal bridging in AAC walls",
        "Uses 70% less material per square metre vs traditional sand-cement mortar",
        "Faster laying speed — experienced masons report 20–30% more output",
        "Compressive strength > 7.5 N/mm² — exceeds AAC block strength requirement",
        "Reduces plaster cracks by creating a dimensionally stable block interface",
      ]}
      properties={[
        { label: "Joint Thickness",   value: "3–5 mm (thin-bed)" },
        { label: "Compressive Strength", value: "> 7.5 N/mm² (28 days)" },
        { label: "Open Time",         value: "15 min at 20°C" },
        { label: "Pot Life",          value: "Approx. 90 min" },
        { label: "Coverage",          value: "Approx. 25–35 m² per 20 kg" },
        { label: "Mixing Ratio",      value: "5.5–6 L water per 20 kg bag" },
        { label: "Colour",            value: "Light grey" },
        { label: "Application Temp.", value: "5°C to 40°C" },
      ]}
      substrates={[
        "AAC (Autoclaved Aerated Concrete) blocks",
        "CLC (Cellular Lightweight Concrete) blocks",
        "Fly ash blocks",
        "Lightweight aggregate blocks",
      ]}
      applications={[
        "AAC block wall construction — residential and commercial",
        "Load-bearing and non-load-bearing walls",
        "Partition walls in high-rise buildings",
        "Industrial and institutional buildings",
        "Green-rated building projects (LEED, GRIHA)",
      ]}
      pack={["20 kg", "40 kg"]}
    />

    {/* ── PAGE 8: PLASTOGRIP X ─────────────────────────── */}
    <ProductPage
      baseUrl={baseUrl} page={8}
      category="Ready-Mix Plaster  ·  Bonding Agent" typeBadge="Wall & Ceiling"
      bagImg="/images/real-plastogrip.png" appImg="/images/real-plastogrip-app.jpg"
      appCaption="PlastoGrip X — bonding coat and ready-mix plaster on RCC columns and AAC walls"
      name="PlastoGrip X"
      subtitle="Polymer-Modified Ready-Mix Plaster and Bonding Agent"
      desc="PlastoGrip X serves a dual function as both a bonding agent and a ready-mix finish plaster. As a bonding agent applied as a thin slurry coat, it creates a chemically active surface on smooth concrete, RCC columns, and AAC block walls — eliminating the need for hacking, wire mesh, or mechanical surface preparation before plastering."
      howToUse="As bonding agent: Mix to a thin slurry consistency. Apply a 1–2mm coat to the clean, damp substrate. Allow to become tacky (30 to 90 minutes). Apply finish plaster to the tacky surface. As finish plaster: Mix with water to mortar consistency. Apply in 6–10mm coats. Float and finish to the required surface quality. Allow full cure before painting."
      advantages={[
        "Eliminates surface hacking on RCC and smooth concrete — saves time and cost",
        "Prevents plaster delamination from AAC blocks and RCC columns",
        "Ready-mix formula ensures consistent quality vs site-mixed plaster",
        "Polymer modification reduces shrinkage cracks in finished plaster",
        "Dual use: bonding agent + finish plaster from the same product",
      ]}
      properties={[
        { label: "Bond Strength",     value: "> 1.0 N/mm² (28 days)" },
        { label: "Compressive Strength", value: "> 5.0 N/mm² (28 days)" },
        { label: "Application Thickness", value: "1–2 mm (bonding) / 6–10 mm (plaster)" },
        { label: "Open Time",         value: "30–90 min tack time" },
        { label: "Coverage (bonding coat)", value: "Approx. 8–10 m² per 20 kg" },
        { label: "Coverage (plaster)",value: "Approx. 2.5–3 m² per 20 kg @ 6mm" },
        { label: "Colour",            value: "Grey" },
        { label: "Application Temp.", value: "5°C to 45°C" },
      ]}
      substrates={[
        "RCC columns, beams, and slabs",
        "Fair-faced concrete (cast surfaces)",
        "AAC and CLC block walls",
        "Brick masonry walls",
        "Old plastered surfaces (bonding repair)",
      ]}
      applications={[
        "Bonding agent before plastering on smooth RCC",
        "Ready-mix finish plaster on walls and ceilings",
        "Repair of delaminated plaster areas",
        "Plastering on AAC block structures without hacking",
        "Reducing plaster callbacks on column and beam surfaces",
      ]}
      pack={["20 kg", "40 kg"]}
    />

    {/* ── PAGE 9: ALPHAGROUT X1 ────────────────────────── */}
    <ProductPage
      baseUrl={baseUrl} page={9}
      category="Precision Structural Grout  ·  Non-Shrink" typeBadge="X1 — Standard Strength"
      bagImg="/images/real-ag1.png" appImg="/images/real-ag1-app.jpg"
      appCaption="AlphaGrout X1 — machine base plate grouting in a Gujarat industrial facility"
      name="AlphaGrout X1"
      subtitle="Non-Shrink Precision Structural Grout — Standard Strength Grade"
      desc="AlphaGrout X1 is a precision, factory-blended, non-shrink cementitious grout engineered for machine foundation grouting and structural applications where dimensional stability, high compressive strength, and complete void-filling are critical. The controlled expansion eliminates settlement and ensures full contact between the base plate and the concrete foundation."
      howToUse="Add 4.5 to 5 litres of clean water per 20 kg bag. Mix mechanically for 3 to 5 minutes to a smooth, lump-free, flowable consistency. Pour or pump under the base plate, ensuring complete filling with no air pockets. Support formwork to contain the grout. Allow 24 hours before removing formwork. Full strength achieved at 28 days."
      advantages={[
        "Non-shrink controlled expansion — maintains precise machine alignment",
        "Self-levelling consistency fills complex void geometries completely",
        "> 45 N/mm² compressive strength at 28 days",
        "Suitable for grout depth 10–50mm under machine base plates",
        "Tested batch-to-batch — consistent expansion and strength in every bag",
      ]}
      properties={[
        { label: "Compressive Strength", value: "> 10 N/mm² (1 day)" },
        { label: "Compressive Strength", value: "> 35 N/mm² (7 days)" },
        { label: "Compressive Strength", value: "> 45 N/mm² (28 days)" },
        { label: "Volume Change",        value: "Non-shrink (controlled expansion)" },
        { label: "Young's Modulus",      value: "25 kN/mm² (28 days)" },
        { label: "Flowability",          value: "Self-levelling at standard consistency" },
        { label: "Grout Depth",          value: "10–50 mm (without aggregate)" },
        { label: "Mixing Ratio",         value: "4.5–5 L water per 20 kg bag" },
      ]}
      substrates={[
        "Concrete machine foundations",
        "RCC equipment pedestals",
        "Precast column pocket foundations",
        "Anchor bolt pockets in concrete",
      ]}
      applications={[
        "Machine base plate grouting — pumps, motors, compressors",
        "Generator set and turbine foundation grouting",
        "Anchor bolt and holding-down bolt grouting",
        "Precast column to foundation connection grouting",
        "Structural void filling in bridges and viaducts",
      ]}
      pack={["20 kg", "25 kg"]}
    />

    {/* ── PAGE 10: ALPHAGROUT X2 ───────────────────────── */}
    <ProductPage
      baseUrl={baseUrl} page={10}
      category="Precision Structural Grout  ·  Non-Shrink" typeBadge="X2 — High Strength"
      bagImg="/images/real-ag2.png" appImg="/images/app-alphagrout-x2.png"
      appCaption="AlphaGrout X2 — high-strength structural grouting with coarse aggregate for large pours"
      name="AlphaGrout X2"
      subtitle="Non-Shrink Precision Structural Grout — High Strength Grade with Coarse Aggregate"
      desc="AlphaGrout X2 is the high-strength variant in the AlphaGrout range, delivering compressive strength exceeding 65 N/mm² at 28 days. It accepts coarse aggregate up to 20mm, making it suitable for large-volume pours such as column pocket grouting, equipment pedestal construction, and structural void filling in bridges and viaducts."
      howToUse="For thin pours (without aggregate): Add 5 litres water per 20 kg bag. Mix mechanically. For extended volume pours: Add clean coarse aggregate up to 20mm at a ratio of up to 25 kg per 20 kg of grout. Mix thoroughly. Pour or pump into prepared formwork. Vibrate to ensure full consolidation. Cure with wet hessian for 7 days."
      advantages={[
        "> 65 N/mm² compressive strength at 28 days — highest in the AlphaGrout range",
        "Accepts up to 20mm coarse aggregate for economical large-volume pours",
        "Non-shrink in both aggregate-extended and non-extended form",
        "Suitable for pours up to 300mm depth with aggregate addition",
        "Used in petrochemical, power generation, and heavy manufacturing applications",
      ]}
      properties={[
        { label: "Compressive Strength", value: "> 20 N/mm² (1 day)" },
        { label: "Compressive Strength", value: "> 55 N/mm² (7 days)" },
        { label: "Compressive Strength", value: "> 65 N/mm² (28 days)" },
        { label: "Volume Change",        value: "Non-shrink (controlled expansion)" },
        { label: "Max Aggregate Size",   value: "20 mm" },
        { label: "Grout Depth",          value: "Up to 300 mm with aggregate" },
        { label: "Flowability",          value: "Self-levelling at standard consistency" },
        { label: "Mixing Ratio",         value: "5 L water per 20 kg bag" },
      ]}
      substrates={[
        "Concrete machine foundations (large equipment)",
        "Precast column pockets",
        "Bridge bearing pedestals",
        "Anchor bolt pocket grouting",
      ]}
      applications={[
        "Large equipment foundation grouting — turbines, compressors",
        "Column pocket grouting in precast construction",
        "Bridge bearing plate and pedestal grouting",
        "Heavy industrial machinery bases",
        "Structural void filling in civil infrastructure",
      ]}
      pack={["20 kg", "25 kg"]}
    />

    {/* ── PAGE 11: CLIENTS & PARTNERS ──────────────────── */}
    <Page size="A4" style={s.clientsPage}>
      <View style={s.clientsHeader}>
        <Text style={s.clientsHeaderLabel}>Clients &amp; Partners</Text>
        <Text style={s.clientsHeaderBadge}>Since 2008</Text>
      </View>

      <View style={s.clientsBody}>
        <Text style={s.clientsIntro}>
          {"Trusted by India's largest cement majors, construction chemical brands, and infrastructure developers."}
        </Text>
        <Text style={s.clientsDesc}>
          Alphabond has built supply relationships with more than 20 major national brands across three business verticals. From continuous sand supply to cement RMC plants, to dry sand for construction chemical manufacturers, to job work and contract manufacturing for national brands — our clients stay because the product and the service are consistent.
        </Text>

        <View style={s.clientsDivider} />

        {/* Client groups */}
        {[
          {
            title: "Wet Sand Supply",
            tag: "Since 2008",
            tagBg: "#dcfce7", tagColor: "#15803d",
            clients: ["UltraTech Cement RMC", "JK Lakshmi Cement RMC", "Nuvoco Vistas RMC", "ACC Cement RMC", "Prism Johnson RMC", "Wagad Infra Projects RMC"],
          },
          {
            title: "Dry Sand Supply",
            tag: "Since 2021",
            tagBg: "#dbeafe", tagColor: "#1d4ed8",
            clients: ["Pidilite Industries", "Magicrete Building Solutions", "BirlaNu Ltd.", "Walplast Products", "Globcon Industries", "Avon Building Solutions", "Bharat Silica", "Aswani Industries (Ascolite)"],
          },
          {
            title: "Job Work / Contract Manufacturing",
            tag: "Since 2022",
            tagBg: "#ffedd5", tagColor: "#c2410c",
            clients: ["Asian Paints", "Walplast Products", "Masterapuu", "Revacon Buildtech", "Magicrete Building Solutions"],
          },
        ].map((group) => (
          <View key={group.title} style={s.clientGroup}>
            <View style={s.clientGroupHeader}>
              <Text style={s.clientGroupTitle}>{group.title}</Text>
              <View style={[s.clientGroupTag, { backgroundColor: group.tagBg }]}>
                <Text style={{ fontSize: 7, fontWeight: 700, color: group.tagColor }}>{group.tag}</Text>
              </View>
            </View>
            <View style={s.clientsGrid}>
              {group.clients.map((client) => (
                <View key={client} style={s.clientChip}>
                  <Text style={s.clientChipText}>{client}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}

        <View style={s.clientsDivider} />

        <View style={s.isoStrip}>
          <Text style={s.isoStripBadge}>ISO 9001:2015</Text>
          <Text style={s.isoStripBadge}>Make in India</Text>
          <Text style={s.isoStripBadge}>Batch Traceable</Text>
          <Text style={s.isoStripText}>
            All products manufactured under ISO 9001:2015 certified processes with full batch traceability and in-house QC documentation.
          </Text>
        </View>

        <Text style={{ fontSize: 7, color: "#94A3B8", marginTop: 12 }}>
          All trademarks are property of their respective owners. Referenced solely to indicate supply relationships. No endorsement implied.
        </Text>
      </View>
      <Text style={s.pageNumDark}>11</Text>
    </Page>

    {/* ── PAGE 12: COMPLETE LINEUP ─────────────────────── */}
    <Page size="A4" style={s.lineupPage}>
      <Text style={s.lineupTitle}>{"The complete\nAlphabond range."}</Text>
      <Text style={s.lineupSub}>
        {"Eight products. One ISO-certified manufacturer. Bharuch, Gujarat."}
      </Text>
      <View style={s.lineupGrid}>
        {[
          { img: "/images/real-tx1.png",        name: "TileGrip X1",    type: "Tile Adhesive · C1T" },
          { img: "/images/real-tx2.png",        name: "TileGrip X2",    type: "Tile Adhesive · C2T" },
          { img: "/images/real-tx3.png",        name: "TileGrip X3",    type: "Tile Adhesive · C2TE" },
          { img: "/images/real-tx4.png",        name: "TileGrip X4",    type: "Tile Adhesive · C2TES1" },
          { img: "/images/real-blockgrip.png",  name: "BlockGrip X",    type: "Block Jointing Mortar" },
          { img: "/images/real-plastogrip.png", name: "PlastoGrip X",   type: "Ready-Mix Plaster" },
          { img: "/images/real-ag1.png",        name: "AlphaGrout X1",  type: "Precision Grout >45 N/mm²" },
          { img: "/images/real-ag2.png",        name: "AlphaGrout X2",  type: "Precision Grout >65 N/mm²" },
        ].map((p) => (
          <View key={p.name} style={s.lineupCard}>
            <Image src={`${baseUrl}${p.img}`} style={s.lineupBag} />
            <Text style={s.lineupName}>{p.name}</Text>
            <Text style={s.lineupType}>{p.type}</Text>
          </View>
        ))}
      </View>
      <Text style={s.lineupSlogan}>
        {"Built stronger. Delivered smarter. Trusted wider."}
      </Text>
      <Text style={s.pageNum}>12</Text>
    </Page>

    {/* ── PAGE 13: BACK COVER ──────────────────────────── */}
    <Page size="A4" style={s.backPage}>
      <View style={s.backLogoWrap}>
        <Image src={`${baseUrl}/logo.png`} style={s.backLogo} />
        <Text style={s.backTagline}>High-Performance Construction Chemicals — Made in India</Text>
      </View>

      {/* Highlight stats */}
      <View style={s.backHighlight}>
        {[
          { val: "17+", label: "Years in Business" },
          { val: "8",   label: "Products in Range" },
          { val: "20+", label: "Major Clients" },
          { val: "ISO", label: "9001:2015 Certified" },
        ].map((h) => (
          <View key={h.label} style={s.backHighCard}>
            <Text style={s.backHighVal}>{h.val}</Text>
            <Text style={s.backHighLabel}>{h.label}</Text>
          </View>
        ))}
      </View>

      <View style={s.backAddresses}>
        <View style={s.backAddrBox}>
          <Text style={s.backAddrLabel}>Head Office / Plant — Bharuch</Text>
          <Text style={s.backAddrLine}>{"Kishan Enterprise\nSurvey No. 396, Kothamba,\nTaluka Amod, Bharuch — 392 001\nGujarat, India"}</Text>
        </View>
        <View style={s.backAddrBox}>
          <Text style={s.backAddrLabel}>Sales Office — Surat</Text>
          <Text style={s.backAddrLine}>{"Kishan Enterprise\nUlhava Road, Kosamba,\nTaluka Mangrol, Surat — 394 120\nGujarat, India"}</Text>
        </View>
        <View style={s.backAddrBox}>
          <Text style={s.backAddrLabel}>Contact &amp; Enquiries</Text>
          <Text style={s.backAddrLine}>{"Phone: +91 90994 65837\nPhone: +91 96385 63857\nEmail: info@alphabond.in\nSales: sales@alphabond.in\nWeb: www.alphabond.in"}</Text>
        </View>
      </View>

      <View style={s.backFooter}>
        <Text style={s.backFooterText}>© 2025 Kishan Enterprise. All rights reserved. Alphabond™ is a registered trademark of Kishan Enterprise.</Text>
        <Text style={s.backBadge}>ISO 9001:2015 Certified</Text>
      </View>
    </Page>

  </Document>
);
