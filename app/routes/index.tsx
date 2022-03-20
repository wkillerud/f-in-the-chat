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

export default function Index() {
  return (
    <main style={pageStyles}>
      <div style={container}>
        <p style={bigFStyles}>F</p>
      </div>
    </main>
  );
}
