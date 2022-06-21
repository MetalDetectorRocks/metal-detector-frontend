import React from 'react'
import {AppRouter} from '../../Router/AppRouter'
import {configureAxios} from "../../Config/axios.config";

const App: React.FC = () => {
  configureAxios();
  return (
    <>
      <AppRouter />
    </>
  )
}

export default App
