import React, { useState } from 'react'
import Home from './components/home'

const App = () => {

  const [sidebar, setSidebar] = useState(-100)


  const handleOpen = () => {
    setSidebar(0)
  }

  const handleCross = () => {
    setSidebar(-100)
  }


  return (
    <>
      <Home handleCross={handleCross} sidebar={sidebar} handleOpen={handleOpen} />
    </>
  )
}

export default App