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

const Total = ({ total }) => {
  return (
    <>
      <p>Number of exercises {total}</p>
      <br />
    </>
  )
}

function AppProps({ course, parts }) {
 const total = 10 + 7 +  14

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