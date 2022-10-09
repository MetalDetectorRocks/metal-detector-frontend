import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App/App'
import reportWebVitals from './reportWebVitals'
import './Styles/main.scss'
import { StyledEngineProvider, ThemeProvider } from '@mui/material'
import { darkTheme } from './Theme'
import configureAxios from './Config/axios.config'
import configureDaysJs from './Config/daysjs.config'
import { AuthProvider } from './Context/AuthProvider'

configureAxios() // ToDo DanielW: maybe not needed this way, decide later
configureDaysJs()

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <AuthProvider>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={darkTheme}>
          <App />
        </ThemeProvider>
      </StyledEngineProvider>
    </AuthProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
