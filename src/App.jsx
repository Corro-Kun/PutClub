import { useState } from 'react'
import Router from './routers/router.routes'
import { Context } from './context/context'

function App() {
  return(
    <Context>
      <Router />
    </Context>
  )
}

export default App
