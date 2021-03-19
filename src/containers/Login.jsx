import React from 'react';
import rockGlass from '../images/rockGlass.svg';

const Login = () => (
  <div>
    Login
    <div className="meals">
      <span className="logo">TRYBE</span>
      <object
        className="rocksGlass"
        type="image/svg+xml"
        data={ rockGlass }
      >
        Glass
      </object>
    </div>
  </div>
);

export default Login;
