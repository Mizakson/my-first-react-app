import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import Greeting from './Greeting.jsx'
import './index.css'
import AplhabetAdventure from './MainContent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <AplhabetAdventure />
  </StrictMode>,
)
