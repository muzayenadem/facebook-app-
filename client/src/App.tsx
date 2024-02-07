import React from 'react'
import Main from './containers/Main/Main'
import Routers from './router/Routers'

import axios from 'axios'

axios.defaults.withCredentials = true
function App() {
  return (
    <>
    <Main/>
 
    </>
  )
}

export default App