import { siteConfig } from "@/content/site";

const BG = "#0b0f14";
const SURFACE = "#121820";
const ACCENT = "#00d4ff";
const MINT = "#60d8b8";
const HEADING = "#f2f6fa";
const BODY = "#a8b3c2";

type LocationOgProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  footer?: string;
};

export function LocationOgImage({
  eyebrow,
  title,
  subtitle,
  footer = siteConfig.name,
}: LocationOgProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: BG,
        padding: "64px 72px",
        fontFamily: "system-ui, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -120,
          right: -80,
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${ACCENT}33 0%, transparent 70%)`,
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -160,
          left: -60,
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${MINT}22 0%, transparent 70%)`,
          display: "flex",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: ACCENT,
            boxShadow: `0 0 24px ${ACCENT}`,
            display: "flex",
          }}
        />
        <span style={{ color: ACCENT, fontSize: 22, fontWeight: 600, letterSpacing: "0.08em" }}>
          {eyebrow.toUpperCase()}
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", zIndex: 1, maxWidth: 900 }}>
        <div
          style={{
            display: "flex",
            color: HEADING,
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            color: BODY,
            fontSize: 30,
            lineHeight: 1.4,
            maxWidth: 820,
          }}
        >
          {subtitle}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 1,
        }}
      >
        <span style={{ display: "flex", color: MINT, fontSize: 24, fontWeight: 600 }}>
          {footer}
        </span>
        <span style={{ display: "flex", color: BODY, fontSize: 20 }}>
          Strategy. Systems. Growth.
        </span>
      </div>

      <div
        style={{
          position: "absolute",
          inset: 24,
          borderRadius: 24,
          border: `1px solid ${SURFACE}`,
          pointerEvents: "none",
          display: "flex",
        }}
      />
    </div>
  );
}
