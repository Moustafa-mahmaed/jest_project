import React from 'react';
import Header from "./components/header"
import HeaderLine from "./components/headerline"
import './App.scss'

function App() {
  return (
    <div className="App">
     
      <Header />
      <HeaderLine
       header="headerline"
        desc="para para" />
    </div>
  );
}

export default App;
