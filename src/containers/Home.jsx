import React from 'react';
import components from '../components/index';

function Home() {
  return (
    <div className="home-container">
      <components.Header />
      <h2>Comidas...</h2>
      <components.Footer />
    </div>
  );
}

export default Home;
