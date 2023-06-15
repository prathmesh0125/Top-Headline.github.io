import React from "react";

const Fotter=(props)=> {
  
    return (
      <div>
        <footer className={`footer-basic fixed-bottom footer-${props.mode}    bg-${props.mode} `} style={{color:
              props.mode === "dark" ? "white" : "black"
            }} >
          <p className="copyright " >
            <i>
              © Copyright 2023. All Rights Reserved. | <a href="mailto:bidveprathmesh590@gmail.com" style={{textDecoration:'none',color:props.mode === "dark" ? "white" : "black"}}><em>Prathmesh</em> Bidve</a>  
            </i>
          </p>
        </footer>
      </div>
    );
  
}

export default Fotter;
