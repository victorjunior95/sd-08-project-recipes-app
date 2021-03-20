import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login/Login';
import Provider from './ContextApi/loginPassContext';

function App() {
  return (
    <div>
      <Provider>
        <Login />
      </Provider>
    </div>
  );
}

export default App;
