import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Routes from './routes/routes';
import ContextFood from './context/ContextFood';

// options for all alerts
const options = {
  offset: '40px',
  position: 'top center',
  timeout: 3000, // deixar como 0 tira o 'timeout', daí só clicando no 'X' que fecha o alerta;
  type: 'error', // estranhamente mudar isso aqui não está mudando o ícone;
  transition: 'scale',
  containerStyle: {
    zIndex: 100,
  },
};
function App() {
  return (
    <AlertProvider template={ AlertTemplate } { ...options }>
      <ContextFood>
        <Routes />
      </ContextFood>
    </AlertProvider>
  );
}

export default App;

// import styled from 'styled-components';
// import React from 'react';

// const AppContainer = styled.div`
//   width: 100%;
//   height: 100%
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// function App() {
//   return <AppContainer>Hello</AppContainer>;
// }

// export default App;
