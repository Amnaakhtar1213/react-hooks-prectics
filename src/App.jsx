import React, { useState } from 'react'
import UseState1 from './components/useState1'
import UseStateAdv2 from './components/useStateAdv2'
import FormHandling from './components/formHandling'
import LocalStorage from './components/LocalStorage'
import ApiCalling from './components/apiCalling'

function App() {
 
  return (
    <>
    <ApiCalling />
    <FormHandling />
 <UseState1 />
 <UseStateAdv2 />
 <LocalStorage />
    </>
  )
}

export default App
