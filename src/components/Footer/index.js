import React from 'react';
import FooterButton from './FooterButton';
import './footer.scss';

function Footer() {
  return (
    <footer className="footer" data-testid="footer">
      <FooterButton toPage="drinks" />
      <FooterButton toPage="explore" />
      <FooterButton toPage="food" />
    </footer>
  );
}

export default Footer;
