import React from 'react'
import './App.css'

const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}

const Part = ({ part, exercises }) => {
  return (
    <>
      <p>{part} {exercises}</p>
      <br />
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.total}</p>
      <br />
    </>
  )
}

function AppProps({ course, parts }) {
  // Calculate the total number of exercises using reduce and  props.total
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

export default AppProps