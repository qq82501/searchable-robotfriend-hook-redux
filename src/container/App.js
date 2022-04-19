import React from "react";
import Cardlist from "../component/Cardlist";
import Searchbox from "../component/Searchbox";
import Scroll from "../component/Scroll";
// import { robots } from "./robots";
import { Component } from "react";
import "./App.css";



class App extends Component{
  constructor(){
    super()
    this.state = {
      robots : [],
      searchfield : ''
    }
  }

 componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => {return Response.json();})
    .then(users =>{this.setState({robots:users})})
  
 }
  
  onSearchChange = (event) =>{
     this.setState({searchfield:event.target.value})
  }
  render(){
    const {robots,searchfield} = this.state
    //從原本的robots當中，篩選出新的robot(array)，
    //需包含searchfield為篩選條件
    const filteredRobot = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
      })

      if (robots.length === 0) {
        return <h1 className="tc">Loading</h1>
      }
      else{
        return (      
            <div className="tc">
              <h1 className="f1">RoboFriends</h1>
              <Searchbox searchChange = {this.onSearchChange} />

       {/* 為了將Cardlist包住，Scroll不像Searchbox/Cardlist是單行封閉的形式 
           而是如div一樣包裹住內容，此時Cardlist為Scroll的Children*/}
              <Scroll>
                <Cardlist robots ={filteredRobot} />
              </Scroll>
            </div>
          )

        }
    }

}

export default App;