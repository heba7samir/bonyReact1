import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'
import "./App.scss"
import { IsMobileProvider } from './utilies/IsMobileContext.jsx'
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <IsMobileProvider>
    <App />
  </IsMobileProvider>
    
  // {/* </StrictMode>, */}
);
