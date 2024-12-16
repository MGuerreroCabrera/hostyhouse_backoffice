import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UsersProvider from './providers/UsersProvider.jsx'

createRoot(document.querySelector("#root")).render(
    <BrowserRouter>
    <UsersProvider>
        <App />
    </UsersProvider>
    </BrowserRouter>
)
