import React from 'react';
import Provider from './context/Provider';
import Login from './Pages/Login';

function App() {
  return (
    <Provider>
      <Login />
    </Provider>
  );
}

export default App;
