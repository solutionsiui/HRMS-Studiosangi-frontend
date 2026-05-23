export default function StatCard({ icon, label, value, accent, sub }) {
  return (
    <div className="stat-card" style={{ "--accent-local": accent || "var(--accent)" }}>
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 12,
          marginBottom: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, color-mix(in srgb, ${accent || "var(--accent)"} 16%, var(--surface2)), rgba(255,255,255,0.92))`,
          border: `1px solid color-mix(in srgb, ${accent || "var(--accent)"} 26%, var(--border))`,
          boxShadow: `0 0 18px color-mix(in srgb, ${accent || "var(--accent)"} 18%, transparent)`,
          fontSize: 24,
        }}
      >
        {icon}
      </div>
      <div
        className="syne"
        style={{
          background: "var(--accent-gradient)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          fontSize: 28,
          fontWeight: 800,
          letterSpacing: "0.02em",
          lineHeight: 1,
        }}
      >
        {value}
      </div>
      <div style={{ fontSize: 13, color: "var(--text-2)", marginTop: 8 }}>{label}</div>
      {sub && <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 2 }}>{sub}</div>}
    </div>
  );
}
