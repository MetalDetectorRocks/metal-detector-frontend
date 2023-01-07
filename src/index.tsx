import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App/App'
import reportWebVitals from './reportWebVitals'
import './Styles/main.scss'
import { StyledEngineProvider, ThemeProvider } from '@mui/material'
import { darkTheme } from './Theme'
import configureDaysJs from './Config/daysjs.config'
import { AuthProvider } from './Context/AuthProvider'
import { disableReactDevTools } from '@fvilers/disable-react-devtools'

configureDaysJs()

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools()
}

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  /*
   * StrictMode renders components twice (on dev but not production)
   * in order to detect any problems with your code and warn you about
   * them (which can be quite useful).
   */
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
