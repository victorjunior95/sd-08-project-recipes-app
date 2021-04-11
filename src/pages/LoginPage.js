import React from 'react';
import '../App.css';
// import rockGlass from '../images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from '../components/Login';
import '../CSS/LoginPage.css';

function LoginPage() {
  return (
    <div className="login-image main-container">
      {/* <span className="logo">TRYBE</span>
      <object
        className="rocksGlass"
        type="image/svg+xml"
        data={ rockGlass }
      >
        Glass
      </object> */}
      <Login />
    </div>
  );
}

export default LoginPage;
