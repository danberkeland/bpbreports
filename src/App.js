import React from "react";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

import "./App.css";
import useDatabase from "./hooks/useDatabase";

import Loader from "./Loader";

import AppRoutes from "./AppRoutes";
import Nav from "./Nav";

import styled from "styled-components";

const NavLock = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
`;

const BodyLock = styled.div`
  position: relative;
  width: 100%;
  top: 100px;
`;

Amplify.configure(awsconfig);

function App() {
  useDatabase();

  return (
    <React.Fragment>
      <Loader />
      <NavLock>
        <Nav />
      </NavLock>
      <BodyLock>
        <AppRoutes />
      </BodyLock>
    </React.Fragment>
  );
}

export default App;
