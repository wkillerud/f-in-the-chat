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
  const title = 'F in the Chat';
  const description = 'Paying respects as a Service!';
  return {
    title: 'F in the Chat',
    viewport: 'width=device-width,initial-scale=1',
    charset: 'utf-8',
    description,
    keywords: 'Remix,jokes',
    'og:title': title,
    'og:description': description,
    'og:type': 'website',
    'twitter:title': title,
    'twitter:description': description,
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
