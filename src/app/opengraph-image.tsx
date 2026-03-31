import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Tashin Mahmud Khan — AI Engineer & Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#020202",
          padding: "80px",
          fontFamily: "monospace",
          position: "relative",
        }}
      >
        {/* Blue corner glow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 400,
            height: 400,
            background: "radial-gradient(circle at top left, rgba(59,130,246,0.15), transparent 70%)",
          }}
        />

        {/* Grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Top label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#3b82f6",
              boxShadow: "0 0 12px #3b82f6",
            }}
          />
          <span style={{ color: "#3b82f6", fontSize: 14, letterSpacing: "0.3em", textTransform: "uppercase" }}>
            TASHIN.SYS — PORTFOLIO
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}
        >
          Tashin Mahmud Khan
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.4)",
            letterSpacing: "0.05em",
            marginBottom: 48,
          }}
        >
          AI Engineer &amp; Automation Developer
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: 12 }}>
          {["Machine Learning", "FastAPI", "Next.js", "Automation"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: "1px solid rgba(59,130,246,0.3)",
                background: "rgba(59,130,246,0.08)",
                color: "#93c5fd",
                fontSize: 13,
                letterSpacing: "0.1em",
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* URL bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 80,
            color: "rgba(255,255,255,0.2)",
            fontSize: 14,
            letterSpacing: "0.1em",
          }}
        >
          tashin-mahmud.vercel.app
        </div>
      </div>
    ),
    size
  );
}
