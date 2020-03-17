import React, { Component } from 'react'
import Header from "./components/header"
import HeaderLine from "./components/headerline"
import './App.scss'

const tempArr=[
  {
    fName:"moustafa",
    lName:"shamaa",
    age:28,
    email:"moustafa_shamaa@gmail.com",
    onlinestatus:true
  }
]
export default class App extends Component {
  render() {
    return (
    <div className="App">
     
      <Header />
      <HeaderLine
        header="headerline" 
        desc="para para"
        tempArr={tempArr}
         />
    </div>
    )
  }
}
