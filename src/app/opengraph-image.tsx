import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} : couvreur à Coutras et dans le Libournais`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(145deg, #1A1F24 0%, #242A30 50%, #3A2A20 100%)",
          color: "#F7F4F0",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "#B5541C",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            BDX
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ fontSize: 34, fontWeight: 700 }}>{site.name}</div>
            <div style={{ fontSize: 20, color: "#F4A574" }}>{site.tradeLine}</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 54,
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              maxWidth: 920,
            }}
          >
            Couvreur à Coutras et dans le Libournais
          </div>
          <div style={{ fontSize: 26, color: "#B3BAC1", maxWidth: 860, lineHeight: 1.35 }}>
            Pose, entretien et nettoyage de toiture, taille de haies et terrassement.
            Garantie décennale.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
          }}
        >
          <span style={{ color: "#F4A574" }}>{site.phone}</span>
          <span style={{ color: "#E8EAEC" }}>{site.domain}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
