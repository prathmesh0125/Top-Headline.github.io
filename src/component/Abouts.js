import React from "react"

const Abouts=(props)=>  {
  
    return (
        <div className="container my-5" style={{  color: props.mode === "dark" ? "white" : "black"}} >
        <h2 className="my" style={{textAlign:'center',fontFamily:'cursive',marginTop:"90px"}}  >About Us</h2> 
        <div className=" accordion" id="accordionExample" >
          <div className="accordion-item" style={{  background: props.mode === "dark" ? "black" : "white",color:props.mode==="dark"?"white":"black"}}>
            <h2 className="accordion-header" id="headingOne" >
              <button
                className="accordion-button" style={{  background: props.mode === "dark" ? "black" : "white",color:props.mode==="dark"?"white":"black"}}
                // style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Read your Favorate News Topics
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              style={{  background: props.mode === "dark" ? "black" : "white",color:props.mode==="dark"?"white":"black"}}
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body"  style={{  background: props.mode === "dark" ? "black" : "white",color:props.mode==="dark"?"white":"black"}}>
                Top-Headline gives you a way to access quickly and efficently News for daily ...

        
              </div>
            </div>
          </div>
          <div className="accordion-item" >
            <h2 className="accordion-header" id="headingTwo" style={{  background: props.mode === "dark" ? "black" : "white",color:props.mode==="dark"?"white":"black"}}>
              <button
                className="accordion-button collapsed"
                // style={myStyle}
                style={{  background: props.mode === "dark" ? "black" : "white",color:props.mode==="dark"?"white":"black"}}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                free to use
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              style={{  background: props.mode === "dark" ? "black" : "white",color:props.mode==="dark"?"white":"black"}}
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{  background: props.mode === "dark" ? "black" : "white",color:props.mode==="dark"?"white":"black"}}>
              this Top-headline is Web-site is free to use and user can access any type of news in proper.It gives you Real News in world . it provides the Diffrant type of News.
  
              </div>
            </div>
          </div>
          <div className="accordion-item" style={{  background: props.mode === "dark" ? "black" : "white",color:props.mode==="dark"?"white":"black"}}>
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                // style={myStyle}
                style={{  background: props.mode === "dark" ? "black" : "white",color:props.mode==="dark"?"white":"black"}}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Browser Comoatiable
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
            //   style={myStyle}
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" >
              This Top-headline SoftWear works  in any web Browser such as chrome ,firefox ,internet Expolar ,safari ,opera.
              it gives you any type of News with best user experiance. 
              </div>
            </div>
          </div>
        </div>
      
      </div>
    )
  
}

export default Abouts
