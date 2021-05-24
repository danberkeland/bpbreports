import React, { useState } from "react";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

import "./App.css";
import useWhoWhats from "./hooks/useWhoWhats";
import useDatabase from "./hooks/useDatabase";

import Loader from './Loader';


Amplify.configure(awsconfig);

function App() {

  

  let date;
  let location;

  useDatabase();
  let whoWhats = useWhoWhats(date, location);
  let whatBake = whoWhats.whatBake

  return (
    <React.Fragment>
      <Loader />
      <div className="App">
        <h1>Back Porch Bakery Reports</h1>
        {whatBake && whatBake.map((prod) => prod.prodName)}
      </div>
    </React.Fragment>
  );
}

export default App;
