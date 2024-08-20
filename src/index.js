//index.js

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Create a root container that points to your root DOM element (typically a div with id="root")
const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // React 18's new API

// Render your React application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
