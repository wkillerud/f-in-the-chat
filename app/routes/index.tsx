import { json, LinksFunction, useLoaderData } from 'remix';
import type { Font } from '../fonts';
import fontList from '../fonts';

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
  const font: Font = fontList[random(0, fontList.length - 1)];
  const styles = Object.entries(font);
  const [fontStyle, randomFontStyle] = styles[random(0, styles.length - 1)];
  const weights = Object.entries(randomFontStyle);
  const [fontWeight, details] = weights[random(0, weights.length - 1)];
  const fontFamily = details.local[random(0, details.local.length - 1)];
  return json({
    fontStyle,
    fontWeight,
    fontFamily,
    src: `url("${details.url.woff2}") format("woff2")`,
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
    <main>
      <div className="f-container">
        <style
          dangerouslySetInnerHTML={{
            __html: fontFace,
          }}
        ></style>
        <p className="big-f" style={{ fontFamily, fontStyle, fontWeight }}>
          F
        </p>
      </div>
      <footer className="footer">
        <p>Privacy: no cookies, no analytics, no third parties</p>
        <p>
          All fonts by{' '}
          <a href="https://www.theleagueofmoveabletype.com">
            The League of Movable Type
          </a>
          . Current font: {fontFamily} {fontStyle} {fontWeight}.
        </p>
      </footer>
    </main>
  );
}

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: '/styles.css',
    },
  ];
};
