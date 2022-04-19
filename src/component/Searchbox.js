import React from "react";

const Searchbox =({searchChange}) => {
  return(
    <div className="pa2">
      <input
        onChange={searchChange}
        className="pa3 bg b--green bg-lightest-blue"
        type="search" 
        placeholder="search robot">
      </input>
    </div>
  )
}

export default Searchbox;