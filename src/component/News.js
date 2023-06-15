// props never change ,state can change
import React from "react";
import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  // for capitalizing first letter
  const capitalizefirstletter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);

    const url = `https://newsapi.org/v2/top-headlines?q=${props.q}&country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    // setState({ loading: true });
    setloading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedata = await data.json();
    props.setProgress(50);
    setarticles(parsedata.articles);
    settotalResults(parsedata.totalResults);
    setloading(false);
    props.setProgress(100);
    // setProgress(100);

    // props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizefirstletter(
      !props.category ? props.q ?? props.country : props.category
    )} Top-Headline`;

    updateNews();

    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    setpage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?q=${props.q}&country=${
      props.country
    }&category=${props.category}&apiKey=${props.apikey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setpage(page + 1);

    let data = await fetch(url);
    let parsedata = await data.json();
    setarticles(articles.concat(parsedata.articles));
    settotalResults(parsedata.totalResults);
  };

  return (
    <div
      className="container my-3"
      style={{ color: props.mode === "dark" ? "#eae4e4" : "black" }}
    >
      <h1
        className="text-center "
        style={{
          fontFamily: "cursive",
          margin: "25px",
          marginTop: "90px",
          color: props.mode === "dark" ? "#eae4e4" : "black",
        }}
      >
        {capitalizefirstletter(
          !props.category ? props.q ?? props.country : props.category
        )}{" "}
        Top-Headline
      </h1>
      {loading && <Spinner mode={props.mode}
              changemode={props.changemode}/>}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner   mode={props.mode}
        changemode={props.changemode} />}
      >
        <div className="container">
          <div className="row">
            {articles.map((Element) => {
              return (
                <div className="col-md-4" key={Element.url}>
                  <NewsItem
                    title={Element.title ? Element.title.slice(0, 50) : ""}
                    description={
                      Element.description
                        ? Element.description.slice(0, 85)
                        : ""
                    }
                    imageUrl={Element.urlToImage}
                    newsurl={Element.url}
                    author={Element.author}
                    date={Element.publishedAt}
                    source={Element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
     
    </div>
  );
};

News.default = {
  country: "in",
  pageSize: 6,
  category: "genral",
};
News.propTypes = {
  q: PropTypes.string,
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
