import fonts from 'google-fonts-complete';
import { json, useLoaderData } from 'remix';

const pageStyles = {
  color: '#232129',
  fontSize: '16px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

const container = {
  display: 'flex',
  justifyContent: 'center',
};

const bigFStyles = {
  marginBlockStart: '1vh',
  marginBlockEnd: '1vh',
  fontSize: '70vh',
};

type FontWeight = {
  local: string[];
  url: {
    woff: string;
    woff2: string;
  };
};

type FontStyle = {
  '100'?: FontWeight;
  '200'?: FontWeight;
  '300'?: FontWeight;
  '400'?: FontWeight;
  '500'?: FontWeight;
  '600'?: FontWeight;
  '700'?: FontWeight;
  '800'?: FontWeight;
  '900'?: FontWeight;
};

type Font = {
  normal?: FontStyle;
  italic?: FontStyle;
  oblique?: FontStyle;
};

type FontFace = {
  fontStyle: string;
  fontWeight: string;
  fontFamily: string;
  src: string;
};

function random(min: number, max: number) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

export const loader = async () => {
  const fontList = Object.values(fonts);
  const font: Font = fontList[random(0, fontList.length - 1)].variants;
  const styles = Object.entries(font);
  const [fontStyle, randomFontStyle] = styles[random(0, styles.length - 1)];
  const weights = Object.entries(randomFontStyle);
  const [fontWeight, details] = weights[random(0, weights.length - 1)];
  const fontFamily = details.local[random(0, details.local.length - 1)];
  return json({
    fontStyle,
    fontWeight,
    fontFamily,
    src: `url("${details.url.woff2}") format("woff2"),
      url("${details.url.woff}") format("woff")`,
  });
};

export default function Index() {
  const { fontFamily, fontStyle, fontWeight, src } = useLoaderData<FontFace>();

  const fontFace = `
  @font-face {
    font-display: fallback;
    font-style: ${fontStyle};
    font-weight: ${fontWeight};
    font-family: ${fontFamily};
    src: ${src};
  }
`;

  return (
    <main style={pageStyles}>
      <div style={container}>
        <style
          dangerouslySetInnerHTML={{
            __html: fontFace,
          }}
        ></style>
        <p style={{ ...bigFStyles, fontFamily }}>F</p>
      </div>
    </main>
  );
}
