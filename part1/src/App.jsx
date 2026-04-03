
import './App.css'
import React from 'react';


const Operations = (props) => {

  const Age = 11;
  return (
    <div>
      <h1>Operations</h1>
      <p>{props.operation}</p>
      <p>Age: {Age  +  5}</p>
    </div>
  )
}


let Name = "John Doe";
let LastName = " LLL";

let VararraynameFriendsz = ["Friend1", "Friend2", "Friend3"];

const Hello = (props)=>{
let Showestfunct = function(){
  return ( <div>
    <h1>Hello world {Name}  {props.lastName}</h1>
    <div> {VararraynameFriendsz.map((friend, index) => (
      <p key={index}>{friend}</p>
    ))}</div>
  </div>)
}
Showestfunct();
}

const App = () => {

  const nowDATE = new Date();
  let nowTIME = nowDATE.getHours() + ":" + nowDATE.getMinutes() + ":" + nowDATE.getSeconds();

  return ( React.createElement('div', null,
    React.createElement('p', null, `Hello world    ${nowTIME.toString()}`),
    React.createElement('div', null, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum laboriosam iusto quis suscipit! Optio illum soluta accusantium vitae delectus, illo cumque commodi voluptatum, unde, corporis deserunt voluptas odit atque.'),
    React.createElement('div', null),
    <Hello />,
    <div>
      <h1>Heading 1</h1>
      <Hello lastName="LLL" />
      <Operations operation="Addition" />
    </div>
  )

);

export default App

}