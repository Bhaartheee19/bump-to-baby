import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'


import "@fontsource/dancing-script/400.css";
import "@fontsource/dancing-script/600.css";
import "@fontsource/dancing-script/700.css";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
