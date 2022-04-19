import React from "react";


const Scroll = (props) =>{
  return(
    <div style={{overflow:'scroll', height:'500px', border:'2px black dashed'}}>
      {props.children}
    </div>
  )
}

export default Scroll