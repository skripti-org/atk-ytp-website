import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        colorScheme: 'dark',
        colors: {
          'triangle-yellow': [
            '#E7FF50',
            '#E7FF50',
            '#E7FF50',
            '#E7FF50',
            '#E7FF50',
            '#E7FF50',
            '#E7FF50',
            '#E7FF50',
            '#E7FF50',
            '#E7FF50',
          ],
        },
      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>,
);
