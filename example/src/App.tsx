import React, { useEffect } from 'react'
import AdvHeaderModule, { Counter } from 'rn-advanced-header-5d-solutions'

const App = () => {
  useEffect(() => {
    console.log(AdvHeaderModule)
  })

  return <Counter />
}

export default App
