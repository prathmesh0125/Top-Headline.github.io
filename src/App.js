import "./App.css";
import React, { useState } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import Fotter from "./component/Fotter";
import { Routes, Route } from "react-router-dom";
import Abouts from "./component/Abouts";
import LoadingBar from "react-top-loading-bar";
// import Spinner from "./component/Spinner";

const App = (props) => {
  const pageSize = 15;
  const apikey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  const [mode, SetMode] = useState("light"); //whether dark mode is Enabel or not

  const changemode = () => {
    if (mode === "light") {
      SetMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      SetMode("light");
      document.body.style.backgroundColor = "#00000040";
    }
  };

  return (
    // style={{ backgroundColor: "#d7cdcd" }}
    <div className="y"style={{ filter:props.mode==="dark"? " cursor:url./image/p.png":"cursor:url./image/cur.png",}} >
      {/* <Router> */}
      <Navbar mode={mode} changemode={changemode} />
      <LoadingBar color="red" progress={progress} />
      {/* <Loadbar/> */}

      {/* <News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="in" category="sports" /> */}

      <Routes>
        <Route
          exact
          path="/"
          element={
            <News
              mode={mode}
              changemode={changemode}
              setProgress={setProgress}
              apikey={apikey}
              key="genral"
              pageSize={pageSize}
              q=""
              country="in"
              category="general"
            />
          }
        />
        <Route
          exact
          path="/bussiness"
          element={
            <News
              mode={mode}
              changemode={changemode}
              setProgress={setProgress}
              apikey={apikey}
              key="bussiness"
              q=""
              pageSize={pageSize}
              country="in"
              category="business"
            />
          }
        />

        <Route
          exact
          path="/entertainment"
          element={
            <News
              mode={mode} changemode={changemode}
              setProgress={setProgress}
              apikey={apikey}
              key="entertainment"
              pageSize={pageSize}
              q=""
              country="in"
              category="entertainment"
            />
          }
        />

        <Route
          exact
          path="/health"
          element={
            <News
              mode={mode}
              changemode={changemode}
              setProgress={setProgress}
              apikey={apikey}
              key="health"
              pageSize={pageSize}
              q=""
              country="in"
              category="health"
            />
          }
        />
        <Route
          exact
          path="/science"
          element={
            <News
              mode={mode}
              changemode={changemode}
              setProgress={setProgress}
              apikey={apikey}
              key="science"
              q=""
              pageSize={pageSize}
              country="in"
              category="science"
            />
          }
        />
        <Route
          exact
          path="/sports"
          element={
            <News
              mode={mode}
              changemode={changemode}
              setProgress={setProgress}
              apikey={apikey}
              key="sports"
              q=""
              pageSize={pageSize}
              country="in"
              category="sports"
            />
          }
        />
        <Route
          exact
          path="/tecnology"
          element={
            <News
              mode={mode}
              changemode={changemode}
              setProgress={setProgress}
              apikey={apikey}
              key="tecnology"
              pageSize={pageSize}
              q=""
              country="in"
              category="technology"
            />
          }
        />
        <Route
          exact
          path="/weather"
          element={
            <News
              mode={mode}
              changemode={changemode}
              setProgress={setProgress}
              apikey={apikey}
              key="q"
              pageSize={pageSize}
              q="weather"
              country=""
              category=""
            />
          }
        />

        <Route
          exact
          path="/Abouts"
          element={<Abouts mode={mode} changemode={changemode} />}
        />

        {/* for country */}
        <Route
          exact
          path="/us"
          element={
            <News
              mode={mode}
              changemode={changemode}
              setProgress={setProgress}
              apikey={apikey}
              key="America"
              pageSize={pageSize}
              q="America"
              country=""
              category=""
            />
          }
        />
        <Route
          exact
          path="/jp"
          element={
            <News
              setProgress={setProgress}
              apikey={apikey}
              key="japan"
              q="japan"
              pageSize={pageSize}
              country=""
              category=""
            />
          }
        />
        <Route
          exact
          path="/fr"
          element={
            <News
              mode={mode}
              changemode={changemode}
              setProgress={setProgress}
              apikey={apikey}
              key="America"
              pageSize={pageSize}
              q="france"
              country=""
              category=""
            />
          }
        />
        <Route
          exact
          path="/cricket"
          element={
            <News
              mode={mode}
              changemode={changemode}
              setProgress={setProgress}
              apikey={apikey}
              key="cricket"
              pageSize={pageSize}
              q="IPL"
              country="in"
              category=""
            />
          }
        />
        <Route
          exact
          path="/de"
          element={
            <News
              mode={mode} changemode={changemode} setProgress={setProgress} apikey={apikey} key="de" pageSize={pageSize} q="Germany"
              country=""
              category=""
            />
          }
        />
      </Routes>

      <Fotter mode={mode} changemode={changemode} />
    </div>
  );
};
export default App;

// npm install react-router-dom
