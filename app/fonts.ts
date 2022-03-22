type FontWeight = {
  local: string[];
  url: {
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

export type Font = {
  normal?: FontStyle;
  italic?: FontStyle;
  oblique?: FontStyle;
};

const fonts: Font[] = [
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

export default fonts;
