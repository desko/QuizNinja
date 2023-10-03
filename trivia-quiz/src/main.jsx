import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {ChakraProvider} from '@chakra-ui/react';
import {BrowserRouter} from 'react-router-dom';
import './styles/reset.css';
import './styles/base.css';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {QuizProvider} from './context/QuizContext.jsx';
import theme from './styles/chakra/Theme';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <QuizProvider>
              <App />
            </QuizProvider>
          </QueryClientProvider>
        </BrowserRouter>
      </ChakraProvider>
    </React.StrictMode>,
);
