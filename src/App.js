import React, { Component } from 'react'
import Header from "./components/header"
import HeaderLine from "./components/headerline"
import SharedButton  from "./components/button";
import ListItem  from "./components/ListItem";
import { connect } from 'react-redux'
import { fetchPosts } from "./action";

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
class App extends Component {
  constructor(props){
      super(props)
      this.fetch =this.fetch.bind(this)
  }


  fetch(){
this.props.fetchPosts()
  }
  render() {

    const configButton ={
      buttonText :"Get posts",
      emitEvent :this.fetch
    }
    const {posts} =this.props;
    return (
    <div className="App">
     
      <Header />
      <HeaderLine
        header="headerline" 
        desc="para para"
        tempArr={tempArr}
         />
         <SharedButton {...configButton} />
         {
           posts.length > 0 && 
           <div>
           {posts.map((post,i)=>{
             const {title, body}=post
             const configlistitem={
               title,
               desc:body
             }
             return(
               <ListItem   key={i}
                {...configlistitem}
                 />
             )
           })}
           </div>
         }

    </div>
    )
  }
}

const mapStateToProps = state =>{
  return{
    posts : state.posts
  }
}


export default connect(mapStateToProps,{fetchPosts})(App)