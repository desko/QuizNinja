import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {ChakraProvider} from '@chakra-ui/react';
import {BrowserProvider} from 'react-router-dom';
import './styles/reset.css';
import './styles/base.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <ChakraProvider>
        <BrowserProvider>
          <App />
        </BrowserProvider>
      </ChakraProvider>
    </React.StrictMode>,
);
