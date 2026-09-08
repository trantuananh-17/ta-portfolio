import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt = "Tran Tuan Anh — Software Engineer";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #12121c 0%, #241f47 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#a78bfa",
          }}
        >
          Portfolio
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 86,
            fontWeight: 700,
          }}
        >
          Tran Tuan Anh
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 12,
            fontSize: 44,
            color: "#c4b5fd",
          }}
        >
          Software Engineer
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 30,
            color: "#9ca3af",
          }}
        >
          TypeScript · Node.js · React · Next.js · PostgreSQL · Docker
        </div>
      </div>
    ),
    size,
  );
}
