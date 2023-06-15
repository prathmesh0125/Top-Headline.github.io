import React from "react";
import loading from "./loading.gif";
// import loading from "./sp1.js"
const Spinner=(props)=> {
 
    return (
      <div className="text-center"style={{ filter:props.mode==="dark"?"invert(100%)":"invert(25%)",}} >
        <img style={{width: '17%'   }} src={loading} alt="loading" />
      </div>
    );
  
}

export default Spinner;
