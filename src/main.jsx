import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Provider} from "react-redux"
import { Store } from './Redux/store'
import {BrowserRouter} from "react-router-dom"
import { StyledEngineProvider } from '@mui/material/styles';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode injectFirst> 
    <BrowserRouter>
        <Provider store={Store}>
        <App />
        </Provider>
    </BrowserRouter>
  </React.StrictMode>
)

