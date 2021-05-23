import React from "react";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

import "./App.css";
import useWhoWhats from "./hooks/useWhoWhats";
import useDatabase from "./hooks/useDatabase";

import { ProgressSpinner } from 'primereact/progressspinner';


Amplify.configure(awsconfig);

function App() {
  let date;
  let location;

  useDatabase();
  let whoWhats = useWhoWhats(date, location);
  const whatBake = whoWhats.whatBake;

  return (
    <React.Fragment>
      <ProgressSpinner style={{width: '100px', height: '100px'}} strokeWidth="3" fill="#BBBBBB" animationDuration=".5s"/>
      <div className="App">
        <h1>Back Porch Bakery Reports</h1>
        {whatBake && whatBake.map((prod) => prod.prodName)}
      </div>
    </React.Fragment>
  );
}

export default App;
