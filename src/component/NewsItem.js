import React from "react";

const NewsItem=(props)=>  {
  
    let { title, description, imageUrl, newsurl,author,date,source } = props;
    return (
      // className="box" style={{border:"2px solid red "}}
      <div className="my-3 " style={{marginBottom:'2%'}}>
        <div className="card" >
          <img
            src={
              !imageUrl
                ? "https://cdn.ndtv.com/common/images/ogndtv.png"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}<span className="badge rounded-pill bg-warning " style={{margin:"2%"}}>{source}</span></h5>
            {/* { title.length>=?"..." :' .....'} */}
            <p className="card-text">{description}...</p>
             <p className="card-text" >
            {/* <span className="badge rounded-pill bg-danger " >by {!author?"UnKnown":author} on {new Date(date).toGMTString()}</span></p>  */} 
              <small className="text-muted"> by {!author?"UnKnown":author} on {new Date(date).toGMTString()}</small></p>

            <a
              rel="noreferrer"
              href={newsurl}
              target="-blank"
              className="btn 
            btn-sm btn-danger"
            >
              Read more...
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
