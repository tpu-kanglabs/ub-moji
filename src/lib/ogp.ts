import fs from "node:fs";
import path from "node:path";
import satori from "satori";
import sharp from "sharp";
import type { Locale } from "@/lib/i18n";

const OGP_WIDTH = 1200;
const OGP_HEIGHT = 630;

// Cached assets (built once per build process)
let _notoSansJpFont: Buffer | null = null;
let _logoInfo: { dataUrl: string; aspectRatio: number } | null = null;

// Geist Regular (weight 400) — TTF from the "geist" npm package
let _geistRegular: Buffer | null = null;
// Geist SemiBold (weight 600)
let _geistSemiBold: Buffer | null = null;

function getGeistRegular(): Buffer {
  if (!_geistRegular) {
    _geistRegular = fs.readFileSync(
      path.join(
        process.cwd(),
        "node_modules/geist/dist/fonts/geist-sans/Geist-Regular.ttf",
      ),
    );
  }
  return _geistRegular;
}

function getGeistSemiBold(): Buffer {
  if (!_geistSemiBold) {
    _geistSemiBold = fs.readFileSync(
      path.join(
        process.cwd(),
        "node_modules/geist/dist/fonts/geist-sans/Geist-SemiBold.ttf",
      ),
    );
  }
  return _geistSemiBold;
}

function getNotoSansJpFont(): Buffer {
  if (!_notoSansJpFont) {
    // Use .woff (not woff2) — satori's opentype.js doesn't support woff2
    const fontPath = path.join(
      process.cwd(),
      "node_modules/@fontsource/noto-sans-jp/files/noto-sans-jp-japanese-400-normal.woff",
    );
    _notoSansJpFont = fs.readFileSync(fontPath);
  }
  return _notoSansJpFont;
}

async function getLogoInfo(): Promise<{
  dataUrl: string;
  aspectRatio: number;
}> {
  if (!_logoInfo) {
    const logoPath = path.join(process.cwd(), "src/assets/logo.png");
    const logoBuffer = fs.readFileSync(logoPath);
    const metadata = await sharp(logoBuffer).metadata();
    const w = metadata.width ?? 300;
    const h = metadata.height ?? 300;
    _logoInfo = {
      dataUrl: `data:image/png;base64,${logoBuffer.toString("base64")}`,
      aspectRatio: w / h,
    };
  }
  return _logoInfo;
}

function getFonts() {
  return [
    {
      name: "Geist",
      data: getGeistRegular(),
      weight: 400 as const,
      style: "normal" as const,
    },
    {
      name: "Geist",
      data: getGeistSemiBold(),
      weight: 600 as const,
      style: "normal" as const,
    },
    {
      name: "Noto Sans JP",
      data: getNotoSansJpFont(),
      weight: 400 as const,
      style: "normal" as const,
    },
    {
      name: "Noto Sans JP",
      data: getNotoSansJpFont(),
      weight: 600 as const,
      style: "normal" as const,
    },
  ];
}

async function svgToPng(svg: string): Promise<Buffer> {
  return sharp(Buffer.from(svg)).png().toBuffer();
}

export async function generateDefaultOgp(): Promise<Buffer> {
  const { dataUrl, aspectRatio } = await getLogoInfo();
  const logoWidth = 200;
  const logoHeight = Math.round(logoWidth / aspectRatio);

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          width: OGP_WIDTH,
          height: OGP_HEIGHT,
          backgroundColor: "#ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Geist, Noto Sans JP",
          gap: "0px",
        },
        children: [
          {
            type: "img",
            props: {
              src: dataUrl,
              width: logoWidth,
              height: logoHeight,
              style: { marginBottom: "40px" },
            },
          },
          {
            type: "div",
            props: {
              style: {
                fontSize: "76px",
                fontWeight: 600,
                color: "#252525",
                letterSpacing: "0.05em",
                lineHeight: "1",
                display: "flex",
              },
              children: "ub-MOJI",
            },
          },
          {
            type: "div",
            props: {
              style: {
                fontSize: "26px",
                fontWeight: 400,
                color: "#8e8e8e",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginTop: "20px",
                display: "flex",
              },
              children: "AI Vision Lab",
            },
          },
        ],
      },
    },
    {
      width: OGP_WIDTH,
      height: OGP_HEIGHT,
      fonts: getFonts(),
    },
  );

  return svgToPng(svg);
}

export async function generateArticleOgp({
  title,
  tag,
  lang,
}: {
  title: string;
  tag: string;
  lang: Locale;
}): Promise<Buffer> {
  const { dataUrl, aspectRatio } = await getLogoInfo();
  const logoWidth = 100;
  const logoHeight = Math.round(logoWidth / aspectRatio);

  const fontFamily =
    lang === "ja" ? "Noto Sans JP, Geist" : "Geist, Noto Sans JP";

  const titleSection: object[] = [];
  if (tag) {
    titleSection.push({
      type: "div",
      props: {
        style: {
          fontSize: "15px",
          fontWeight: 400,
          color: "#8e8e8e",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          display: "flex",
          marginBottom: "24px",
        },
        children: tag,
      },
    });
  }
  titleSection.push({
    type: "div",
    props: {
      style: {
        fontSize: "52px",
        fontWeight: 600,
        color: "#252525",
        lineHeight: "1.25",
        display: "flex",
        flexWrap: "wrap",
      },
      children: title,
    },
  });

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          width: OGP_WIDTH,
          height: OGP_HEIGHT,
          backgroundColor: "#ffffff",
          display: "flex",
          flexDirection: "column",
          padding: "72px 88px",
          fontFamily,
          justifyContent: "space-between",
        },
        children: [
          // Logo at top-left
          {
            type: "img",
            props: {
              src: dataUrl,
              width: logoWidth,
              height: logoHeight,
            },
          },
          // Title area (grows to fill space)
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                flex: "1",
                paddingTop: "44px",
                overflow: "hidden",
              },
              children: titleSection,
            },
          },
          // Footer with site name
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                borderTop: "1px solid #e8e8e8",
                paddingTop: "24px",
                marginTop: "32px",
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#8e8e8e",
                      letterSpacing: "0.08em",
                      display: "flex",
                    },
                    children: "ub-MOJI | AI Vision Lab",
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: OGP_WIDTH,
      height: OGP_HEIGHT,
      fonts: getFonts(),
    },
  );

  return svgToPng(svg);
}
