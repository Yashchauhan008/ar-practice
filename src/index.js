// ✅ CORRECT for React 18/19+
import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
