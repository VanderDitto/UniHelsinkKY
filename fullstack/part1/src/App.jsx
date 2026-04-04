import React from 'react'
import './App.css'

const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}

const Part = ({ part, exercises }) => {
  return (
    <p>{part} {exercises}</p>
  )
}

const Total = ({ total }) => {
  return (
    <p>Number of exercises {total}</p>
  )
}

function App() {
  const course = "FullStack application development with React and Node.js"
  const parts = [
    { part: "Fundamentals of React", exercises: 10 },
    { part: "Using props to pass data", exercises: 7 },
    { part: "State of a component", exercises: 14 }
  ]
  const total = parts.reduce((sum, item) => sum + item.exercises, 0)

  return (
    <section>
      <Header course={course} />
      <Part part={parts[0].part} exercises={parts[0].exercises} />
      <Part part={parts[1].part} exercises={parts[1].exercises} />
      <Part part={parts[2].part} exercises={parts[2].exercises} />
      <Total total={total} />
    </section>
  )
}
export default App
