import React, { Component } from "react";

import Navbar from "./Component/Navbar";
import News from "./Component/News";

// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <div
          style={{
            backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaVS0uuFWZzPowU5gb7g4Ecxc3vCpUAQSV-Q&usqp=CAU")`,
            backgroundSize: "cover",
          }}
        >
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <News
                    key={"general"}
                    category="general"
                    country="in"
                    pageSize={8}
                  />
                }
              />
              <Route
                exact
                path="/business"
                element={
                  <News
                    key={"business"}
                    category="business"
                    country="in"
                    pageSize={8}
                  />
                }
              />
              <Route
                exact
                path="/entertainment"
                element={
                  <News
                    key={"entertainment"}
                    category="entertainment"
                    country="in"
                    pageSize={8}
                  />
                }
              />
              <Route
                exact
                path="/health"
                element={
                  <News
                    key={"health"}
                    category="health"
                    country="in"
                    pageSize={8}
                  />
                }
              />
              <Route
                exact
                path="/science"
                element={
                  <News
                    key={"science"}
                    category="science"
                    country="in"
                    pageSize={8}
                  />
                }
              />
              <Route
                exact
                path="/sports"
                element={
                  <News
                    key={"sports"}
                    category="sports"
                    country="in"
                    pageSize={8}
                  />
                }
              />
              <Route
                exact
                path="/technology"
                element={
                  <News
                    key={"technology"}
                    category="technology"
                    country="in"
                    pageSize={8}
                  />
                }
              />
              <Route
                exact
                path="/world"
                element={
                  <News
                    key={"world"}
                    category="general"
                    country=""
                    pageSize={8}
                  />
                }
              />
            </Routes>
          </BrowserRouter>
        </div>
      </>
    );
  }
}
