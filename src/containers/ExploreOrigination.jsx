import React from 'react';
import components from '../components';

function ExploreOrigination() {
  return (
    <div>
      <components.Header title="Explorar Origem" />
      <main className="explore-container">
        <select className="custom-select">
          <option>Canada</option>
          <option>França</option>
          <option>Japão</option>
        </select>
      </main>
      <components.Footer />
    </div>
  );
}

export default ExploreOrigination;
