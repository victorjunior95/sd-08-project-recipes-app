import React from 'react';
import './App.css';
import shareIcon from './images/shareIcon.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="meals">
      <span className="logo">TRYBE</span>
      <object
        className="rocksGlass"
        type="image/svg+xml"
        data={ shareIcon }
      >
        Glass
      </object>
    </div>
  );
}

export default App;
