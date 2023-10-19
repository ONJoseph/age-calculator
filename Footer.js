import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={footerStyle}>
      <p>
        AgeCalculator By Joseph Ogbole &copy;{currentYear} All Rights Reserved
      </p>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px 0',
  position: 'absolute',
  bottom: '0',
  width: '100%',
};

export default Footer;
