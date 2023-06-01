import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import EstilosGlobales from './EstilosGlobales';
import { GlobalContextProvider } from './Contexto/global';

ReactDOM.render(
  <React.StrictMode>
    <EstilosGlobales/>
    <GlobalContextProvider>
       <App/>
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


