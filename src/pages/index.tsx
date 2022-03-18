import * as React from 'react';
import { Helmet } from 'react-helmet';

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
  fontSize: '78vh',
};

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
        title="F in the Chat"
        meta={[
          {
            name: 'description',
            content: 'Paying respects as a Service!',
          },
          {
            property: 'og:title',
            content: 'F in the Chat',
          },
          {
            property: 'og:description',
            content: 'Paying respects as a Service!',
          },
          {
            property: 'og:type',
            content: 'website',
          },
          {
            name: 'twitter:card',
            content: 'summary',
          },
          {
            name: 'twitter:creator',
            content: '',
          },
          {
            name: 'twitter:title',
            content: 'F in the Chat',
          },
          {
            name: 'twitter:description',
            content: 'Paying respects as a Service!',
          },
        ]}
      />

      <div style={container}>
        <p style={bigFStyles}>F</p>
      </div>
    </main>
  );
};

export default IndexPage;
