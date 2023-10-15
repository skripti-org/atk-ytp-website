import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        fontFamily: 'Syne, sans',
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
          yellow: [
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
          'red': [
            '#c2255c',
            '#c2255c',
            '#c2255c',
            '#c2255c',
            '#c2255c',
            '#c2255c',
            '#c2255c',
            '#c2255c',
            '#c2255c',
            '#c2255c',
            '#c2255c'
          ],
          'kide': [
            '#5e35b1',
            '#5e35b1',
            '#5e35b1',
            '#5e35b1',
            '#5e35b1',
            '#5e35b1',
            '#5e35b1',
            '#5e35b1',
            '#5e35b1',
            '#5e35b1',
          ]
        },
      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>,
);
