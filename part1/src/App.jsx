import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const App = () => {

  const nowDATE = new Date();
  let nowTIME = nowDATE.getHours() + ":" + nowDATE.getMinutes() + ":" + nowDATE.getSeconds();

  return (

    <div>
      <p>Hello world    {nowTIME.toString()}</p>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum laboriosam iusto quis suscipit! Optio illum soluta accusantium vitae delectus, illo cumque commodi voluptatum, unde, corporis deserunt voluptas odit atque.</div>
    
      <div></div>
    </div>
  )
}

export default App