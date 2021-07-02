import React, { useState } from 'react'
import logo from './logo.svg'
import './App.scss'

// COMPONENT
import Header from './components/header/header.component'
import HomePage from './pages/home/home_page.component'
import Navigation from './components/navigation/navigation.component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation/>
      <Header/>
      <HomePage/>
    </div>
  )
}

export default App
