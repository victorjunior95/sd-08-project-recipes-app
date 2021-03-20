import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Login from './Pages/Login/Login';
import Provider from './ContextApi/loginPassContext';

function App() {
  return (
     <BrowserRouter>
        <div >
          <Provider>
            <Login />
            <Routes />
          </Provider>
        </div>
     </BrowserRouter>
  );
}

export default App;
