import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import Main from './components/main/Main'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  function toggleDarkMode() {
    console.log("toggleDarkMode called", darkMode)
    setDarkMode(!darkMode)
  }

  return (
    <div className="flex flex-col scroll-auto">
      {/* header */}
      <div className='h-[10vh] sticky top-0 z-50'>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
      {/* banner */}
      <div className='backdrop-blur-sm h-[85vh] z-0'>
        <Banner darkMode={darkMode} numsOfProjects={5} numsOfCategories={3} />
      </div>
      {/* main */}
      <div id="main" className='h-96'>
        <Main darkMode={darkMode} />
      </div>
      {/* footer */}
      <div className='h-[20vh]'>
        footer
      </div>
    </div>
  )
}

export default App
