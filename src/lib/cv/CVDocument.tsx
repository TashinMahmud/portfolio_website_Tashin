import { Document, Page, View, Text, Link, StyleSheet } from "@react-pdf/renderer";

const colors = {
  black: "#0f0f0f",
  dark: "#1a1a1a",
  mid: "#444444",
  light: "#666666",
  muted: "#888888",
  rule: "#d0d0d0",
  bg: "#ffffff",
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.bg,
    paddingTop: 44,
    paddingBottom: 44,
    paddingHorizontal: 48,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: colors.dark,
  },

  /* ── Header ── */
  header: { marginBottom: 14 },
  name: { fontSize: 24, fontFamily: "Helvetica-Bold", color: colors.black, letterSpacing: 0.5 },
  title: { fontSize: 11, color: colors.mid, marginTop: 3 },
  contactRow: { flexDirection: "row", marginTop: 7, flexWrap: "wrap" },
  contactItem: { fontSize: 9, color: colors.light, marginRight: 14 },
  contactLink: { fontSize: 9, color: colors.light, textDecoration: "none" },

  /* ── Section ── */
  section: { marginTop: 14 },
  sectionHeading: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: colors.black,
    letterSpacing: 1.8,
    textTransform: "uppercase",
    marginBottom: 5,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: colors.rule,
    borderBottomStyle: "solid",
  },

  /* ── Entry (Experience / Project / Education) ── */
  entry: { marginBottom: 10 },
  entryHeader: { flexDirection: "row", justifyContent: "space-between", marginBottom: 2 },
  entryTitle: { fontSize: 11, fontFamily: "Helvetica-Bold", color: colors.black },
  entryRight: { fontSize: 9, color: colors.muted },
  entrySubtitle: { fontSize: 10, color: colors.mid, marginBottom: 3 },
  bullet: { fontSize: 10, color: colors.dark, marginTop: 2, marginLeft: 10 },

  /* ── Skills ── */
  skillRow: { flexDirection: "row", marginBottom: 4 },
  skillCategory: { fontSize: 10, fontFamily: "Helvetica-Bold", color: colors.dark, width: 100 },
  skillList: { fontSize: 10, color: colors.mid, flex: 1 },

  /* ── Bio ── */
  bio: { fontSize: 10, color: colors.mid, lineHeight: 1.5 },
});

type CVData = {
  name: string;
  title: string;
  bio: string;
  phone: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
  experience: { role: string; company: string; period: string; points: string[] }[];
  projects: { title: string; description: string; tech: string[]; type?: string; github?: string; demo?: string }[];
  skills: { name: string; category: string }[];
};

export function CVDocument({ data }: { data: CVData }) {
  // Group skills by category
  const skillsByCategory: Record<string, string[]> = {};
  data.skills.forEach(({ name, category }) => {
    if (!skillsByCategory[category]) skillsByCategory[category] = [];
    skillsByCategory[category].push(name);
  });

  return (
    <Document
      title={`${data.name} — CV`}
      author={data.name}
      subject="Curriculum Vitae"
      keywords="resume, cv, software engineer, ai engineer"
    >
      <Page size="A4" style={styles.page}>

        {/* ── HEADER ── */}
        <View style={styles.header}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.title}>{data.title}</Text>
          <View style={styles.contactRow}>
            {data.phone    && <Text style={styles.contactItem}>{data.phone}</Text>}
            {data.email    && <Text style={styles.contactItem}>{data.email}</Text>}
            {data.location && <Text style={styles.contactItem}>{data.location}</Text>}
            {data.github   && <Link src={data.github}   style={styles.contactLink}>{data.github.replace("https://", "")}</Link>}
            {data.linkedin && <Text style={styles.contactItem}> </Text>}
            {data.linkedin && <Link src={data.linkedin} style={styles.contactLink}>{data.linkedin.replace("https://", "")}</Link>}
          </View>
        </View>

        {/* ── PROFESSIONAL SUMMARY ── */}
        {data.bio && (
          <View style={styles.section}>
            <Text style={styles.sectionHeading}>Professional Summary</Text>
            <Text style={styles.bio}>{data.bio}</Text>
          </View>
        )}

        {/* ── EXPERIENCE ── */}
        {data.experience.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionHeading}>Experience</Text>
            {data.experience.map((exp, i) => (
              <View key={i} style={styles.entry}>
                <View style={styles.entryHeader}>
                  <Text style={styles.entryTitle}>{exp.role}</Text>
                  <Text style={styles.entryRight}>{exp.period}</Text>
                </View>
                <Text style={styles.entrySubtitle}>{exp.company}</Text>
                {(exp.points ?? []).map((point, j) => (
                  <Text key={j} style={styles.bullet}>• {point}</Text>
                ))}
              </View>
            ))}
          </View>
        )}

        {/* ── EDUCATION ── */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Education</Text>
          <View style={styles.entry}>
            <View style={styles.entryHeader}>
              <Text style={styles.entryTitle}>B.Sc. in Computer Science &amp; Engineering</Text>
              <Text style={styles.entryRight}>2025</Text>
            </View>
            <Text style={styles.entrySubtitle}>North South University (NSU) — Dhaka, Bangladesh</Text>
          </View>
        </View>

        {/* ── SKILLS ── */}
        {Object.keys(skillsByCategory).length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionHeading}>Skills</Text>
            {Object.entries(skillsByCategory).map(([category, names]) => (
              <View key={category} style={styles.skillRow}>
                <Text style={styles.skillCategory}>{category}:</Text>
                <Text style={styles.skillList}>{names.join(", ")}</Text>
              </View>
            ))}
          </View>
        )}

        {/* ── PROJECTS ── */}
        {data.projects.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionHeading}>Projects</Text>
            {data.projects.map((proj, i) => (
              <View key={i} style={styles.entry}>
                <View style={styles.entryHeader}>
                  <Text style={styles.entryTitle}>{proj.title}</Text>
                  {proj.type && <Text style={styles.entryRight}>{proj.type}</Text>}
                </View>
                <Text style={styles.bio}>{proj.description}</Text>
                {proj.tech && proj.tech.length > 0 && (
                  <Text style={[styles.entrySubtitle, { marginTop: 3 }]}>
                    Tech: {proj.tech.join(", ")}
                  </Text>
                )}
                {(proj.github || proj.demo) && (
                  <View style={[styles.contactRow, { marginTop: 3 }]}>
                    {proj.github && <Link src={proj.github} style={styles.contactLink}>{proj.github}</Link>}
                    {proj.demo   && <Text style={styles.contactItem}> </Text>}
                    {proj.demo   && <Link src={proj.demo}   style={styles.contactLink}>{proj.demo}</Link>}
                  </View>
                )}
              </View>
            ))}
          </View>
        )}

      </Page>
    </Document>
  );
}
