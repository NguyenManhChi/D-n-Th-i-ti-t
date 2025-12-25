import React from 'react'
import Weather from './components/weather'
const App = () => {
  return (
    <div className={`bg-[url('./assets/bautroi.jpg')] bg-cover bg-center w-screen h-screen flex items-center justify-center`}>
      <Weather />
    </div>
  )
}

export default App
