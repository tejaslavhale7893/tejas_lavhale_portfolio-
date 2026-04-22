import React from 'react'
import Routing from './component/Routing'
import { LanguageProvider } from './context/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <Routing />
    </LanguageProvider>
  )
}

export default App
