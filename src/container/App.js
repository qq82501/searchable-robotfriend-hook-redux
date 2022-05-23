import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import Cardlist from "../component/Cardlist";
import Searchbox from "../component/Searchbox";
import ErrorBoundary from "../component/ErrorBoundary";
import Scroll from "../component/Scroll";
import "./App.css";
import { setSearchfiled, requestRobots } from "../action";

const mapStateToProps = (state) =>{
  return {searchField: state.searchRobots.searchField,
          robots: state.requestRobots.robots,
          isPending: state.requestRobots.isPending,
          error: state.requestRobots.error}
}
const mapDispatchToProps = (dispatch) =>{
  return{
    onSearchChange: (event) =>{dispatch(setSearchfiled(event.target.value))},
    onRequestRobots: () =>{dispatch(requestRobots())}
  }
}

function App (props){

  // const [robots, setRobots] =  useState([]);
  // const [searchfield, setSearchfiled] = useState('');
  const [count, setCount] = useState(0);

  useEffect(()=>{
    // console.log(props.store.getState())
    // fetch('https://jsonplaceholder.typicode.com/users')(
    // .then(Response => {return Response.json();})
    // .then(users =>{setRobots(users)})
    props.onRequestRobots();
    console.log(count)
  },[count]) 
  //usEffect，有兩個參數，每當function render一次就會執行一次 = > userEffect(a,b)，a表示要執行的動作，b表示dependency
  //dependency用來解決無限re-render，表示當有dependency的value有變化時，才重新re-render。
  //依該例子來說，只有當count的value有改變時，才會重新re-renser function App


  //  const onSearchChange = (event) =>{
  //    setSearchfiled(event.target.value)
  //  }

     //從原本的robots當中，篩選出新的robot(array)，
     //需包含searchfield做為篩選條件
    //  const {searchfield, onSearchChange} = props
     const {robots, isPending, searchField, onSearchChange} = props;
     const filteredRobot = robots.filter(robot =>{
       return robot.name.toLowerCase().includes(searchField.toLowerCase())
       })
       // 也可寫成 if(!robots.length)
       if (isPending) {
         return <h1 className="tc">Loading</h1>
       }
       else{
         return (      
             <div className="tc">
               <h1 className="f1">RoboFriends</h1>
               <button onClick={()=>{setCount(count+1)}}>Click me!</button>
               <Searchbox searchChange = {onSearchChange} />
  
        {/* 為了將Cardlist包住，Scroll不像Searchbox/Cardlist是單行封閉的形式 
            而是如div一樣包裹住內容，此時Cardlist為Scroll的Children*/}
               <Scroll>
                 <ErrorBoundary>
                   <Cardlist robots ={filteredRobot} />
                 </ErrorBoundary>
               </Scroll>
             </div>
           )
  
         }
     }
export default connect(mapStateToProps, mapDispatchToProps )(App);