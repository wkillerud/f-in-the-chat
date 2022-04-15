import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';
import type { MetaFunction } from 'remix';

export const meta: MetaFunction = () => {
  const title = 'F in the Chat - Paying respects as a Service!';
  const description = 'A randomly generated F, any time and any place you need one.';
  const preview = 'https://finthe.chat/og_image.png';
  return {
    title,
    viewport: 'width=device-width,initial-scale=1',
    charset: 'utf-8',
    description,
    keywords: 'Remix,jokes,silly,chat,f,respects',
    'og:title': title,
    'og:description': description,
    'og:type': 'website',
    'og:image': preview,
    'twitter:card': 'summary_large_image',
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': preview,
  };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
