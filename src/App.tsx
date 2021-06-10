import React, { Suspense } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Weather from "./Components/Weather";
import Details from "./Components/Details/Details";
import Fallback from "./Components/Fallback/Fallback";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Weather />
          </Route>
          <Route path="/weather-details">
            <Suspense fallback={<Fallback />}>
              <Details />
            </Suspense>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
