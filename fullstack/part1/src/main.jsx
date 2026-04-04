import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppProps from './App.jsx'

const course = "FullStack application development with React and Node.js"
const parts = [
  { part: "Fundamentals of React", exercises: 10 },
  { part: "Using props to pass data", exercises: 7 },
  { part: "State of a component", exercises: 14 }
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProps course={course} parts={parts} />
  </StrictMode>,
)
