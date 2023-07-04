import Head from 'next/head';

export function getServerSideProps() {
  const font = fontList[random(0, fontList.length - 1)];
  const styles = Object.entries(font);
  const [fontStyle, randomFontStyle] = styles[random(0, styles.length - 1)];
  const weights = Object.entries(randomFontStyle);
  const [fontWeight, details] = weights[random(0, weights.length - 1)];
  const fontFamily = details.local[random(0, details.local.length - 1)];

  return {
    props: {
      fontStyle,
      fontWeight,
      fontFamily,
      src: `url("${details.url.woff2}") format("woff2")`,
    },
  };
}

export default function Home({ fontStyle, fontWeight, fontFamily, src }) {
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
    <>
      <Head>
        <title>F in the Chat</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="charset" content="utf-8" />
        <meta name="description" content="Paying respects as a Service" />
        <meta name="og:title" content="F in the Chat" />
        <meta name="og:description" content="Paying respects as a Service" />
        <meta name="og:type" content="website" />
        <meta
          name="og:image"
          content="http://f-in-the-chat.vercel.app/og_image.png"
        />
        <link rel="icon" href="/favicon.ico" />
        <style
          dangerouslySetInnerHTML={{
            __html: fontFace,
          }}
        ></style>
      </Head>
      <main>
        <div className="f-container">
          <p className="big-f" style={{ fontFamily, fontStyle, fontWeight }}>
            F
          </p>
        </div>
        <footer className="footer">
          <p>
            Current font: {fontFamily} {fontStyle} {fontWeight}. All fonts by{' '}
            <a href="https://www.theleagueofmoveabletype.com">
              The League of Movable Type
            </a>
            .
          </p>
          <p>Privacy: no cookies, no analytics, no third parties</p>
        </footer>
      </main>
    </>
  );
}

function random(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

const fontList = [
  {
    normal: {
      400: {
        local: ['Blackout Midnight'],
        url: {
          woff2: '/fonts/blackout-midnight-latin-400-normal.woff2',
        },
      },
    },
  },
  {
    normal: {
      400: {
        local: ['Blackout Sunrise'],
        url: {
          woff2: '/fonts/blackout-sunrise-latin-400-normal.woff2',
        },
      },
    },
  },
  {
    normal: {
      800: {
        local: ['Chunk Five'],
        url: {
          woff2: '/fonts/chunk-five-latin-800-normal.woff2',
        },
      },
    },
  },
  {
    normal: {
      300: {
        local: ['Junction'],
        url: {
          woff2: '/fonts/junction-latin-300-normal.woff2',
        },
      },
      400: {
        local: ['Junction'],
        url: {
          woff2: '/fonts/junction-latin-400-normal.woff2',
        },
      },
      700: {
        local: ['Junction'],
        url: {
          woff2: '/fonts/junction-latin-700-normal.woff2',
        },
      },
    },
  },
  {
    italic: {
      400: {
        local: ['League Gothic Condensed'],
        url: {
          woff2: '/fonts/league-gothic-condensed-latin-400-italic.woff2',
        },
      },
    },
    normal: {
      400: {
        local: ['League Gothic Condensed'],
        url: {
          woff2: '/fonts/league-gothic-condensed-latin-400-normal.woff2',
        },
      },
    },
  },
  {
    normal: {
      100: {
        local: ['League Mono Condensed'],
        url: {
          woff2: '/fonts/league-mono-condensed-latin-ext-100-normal.woff2',
        },
      },
      200: {
        local: ['League Mono Condensed'],
        url: {
          woff2: '/fonts/league-mono-condensed-latin-ext-200-normal.woff2',
        },
      },
      300: {
        local: ['League Mono Condensed'],
        url: {
          woff2: '/fonts/league-mono-condensed-latin-ext-300-normal.woff2',
        },
      },
      400: {
        local: ['League Mono Condensed'],
        url: {
          woff2: '/fonts/league-mono-condensed-latin-ext-400-normal.woff2',
        },
      },
      500: {
        local: ['League Mono Condensed'],
        url: {
          woff2: '/fonts/league-mono-condensed-latin-ext-500-normal.woff2',
        },
      },
      600: {
        local: ['League Mono Condensed'],
        url: {
          woff2: '/fonts/league-mono-condensed-latin-ext-600-normal.woff2',
        },
      },
      700: {
        local: ['League Mono Condensed'],
        url: {
          woff2: '/fonts/league-mono-condensed-latin-ext-700-normal.woff2',
        },
      },
      800: {
        local: ['League Mono Condensed'],
        url: {
          woff2: '/fonts/league-mono-condensed-latin-ext-800-normal.woff2',
        },
      },
    },
  },
  {
    normal: {
      100: {
        local: ['League Mono'],
        url: {
          woff2: '/fonts/league-mono-latin-ext-100-normal.woff2',
        },
      },
      200: {
        local: ['League Mono'],
        url: {
          woff2: '/fonts/league-mono-latin-ext-200-normal.woff2',
        },
      },
      300: {
        local: ['League Mono'],
        url: {
          woff2: '/fonts/league-mono-latin-ext-300-normal.woff2',
        },
      },
      400: {
        local: ['League Mono'],
        url: {
          woff2: '/fonts/league-mono-latin-ext-400-normal.woff2',
        },
      },
      500: {
        local: ['League Mono'],
        url: {
          woff2: '/fonts/league-mono-latin-ext-500-normal.woff2',
        },
      },
      600: {
        local: ['League Mono'],
        url: {
          woff2: '/fonts/league-mono-latin-ext-600-normal.woff2',
        },
      },
      700: {
        local: ['League Mono'],
        url: {
          woff2: '/fonts/league-mono-latin-ext-700-normal.woff2',
        },
      },
    },
  },
  {
    normal: {
      100: {
        local: ['League Mono Narrow'],
        url: {
          woff2: '/fonts/league-mono-narrow-latin-ext-100-normal.woff2',
        },
      },
      200: {
        local: ['League Mono Narrow'],
        url: {
          woff2: '/fonts/league-mono-narrow-latin-ext-200-normal.woff2',
        },
      },
      300: {
        local: ['League Mono Narrow'],
        url: {
          woff2: '/fonts/league-mono-narrow-latin-ext-300-normal.woff2',
        },
      },
      400: {
        local: ['League Mono Narrow'],
        url: {
          woff2: '/fonts/league-mono-narrow-latin-ext-400-normal.woff2',
        },
      },
      500: {
        local: ['League Mono Narrow'],
        url: {
          woff2: '/fonts/league-mono-narrow-latin-ext-500-normal.woff2',
        },
      },
      600: {
        local: ['League Mono Narrow'],
        url: {
          woff2: '/fonts/league-mono-narrow-latin-ext-600-normal.woff2',
        },
      },
      700: {
        local: ['League Mono Narrow'],
        url: {
          woff2: '/fonts/league-mono-narrow-latin-ext-700-normal.woff2',
        },
      },
      800: {
        local: ['League Mono Narrow'],
        url: {
          woff2: '/fonts/league-mono-narrow-latin-ext-800-normal.woff2',
        },
      },
    },
  },
  {
    normal: {
      500: {
        local: ['Ostrich Sans Dashed'],
        url: {
          woff2: '/fonts/ostrich-sans-dashed-latin-500-normal.woff2',
        },
      },
    },
  },
  {
    italic: {
      400: {
        local: ['Ostrich Sans Inline'],
        url: {
          woff2: '/fonts/ostrich-sans-inline-latin-400-italic.woff2',
        },
      },
    },
    normal: {
      400: {
        local: ['Ostrich Sans Inline'],
        url: {
          woff2: '/fonts/ostrich-sans-inline-latin-400-normal.woff2',
        },
      },
    },
  },
  {
    normal: {
      300: {
        local: ['Ostrich Sans'],
        url: {
          woff2: '/fonts/ostrich-sans-latin-300-normal.woff2',
        },
      },
      400: {
        local: ['Ostrich Sans'],
        url: {
          woff2: '/fonts/ostrich-sans-latin-400-normal.woff2',
        },
      },
      700: {
        local: ['Ostrich Sans'],
        url: {
          woff2: '/fonts/ostrich-sans-latin-700-normal.woff2',
        },
      },
      900: {
        local: ['Ostrich Sans'],
        url: {
          woff2: '/fonts/ostrich-sans-latin-900-normal.woff2',
        },
      },
    },
  },
  {
    normal: {
      500: {
        local: ['Ostrich Sans Rounded'],
        url: {
          woff2: '/fonts/ostrich-sans-rounded-latin-500-normal.woff2',
        },
      },
    },
  },
];
