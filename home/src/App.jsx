import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  function toggleDarkMode() {
    console.log("toggleDarkMode called", darkMode)
    setDarkMode(!darkMode)
  }

  return (
    <div className="flex flex-col scroll-auto">
      {/* header */}
      <div className='h-[10vh] sticky top-0'>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
      {/* banner */}
      <div className='backdrop-blur-sm h-[85vh]'>
        <h3>Portfolio & Projects</h3>
      </div>
      {/* main */}
      <div className='h-96'>
        main
      </div>
      {/* footer */}
      <div className='h-[20vh]'>
        footer
      </div>
    </div>
  )
}

export default App
