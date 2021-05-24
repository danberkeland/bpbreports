import React from "react";

import Progress from "@material-ui/core/CircularProgress";

import styled from "styled-components";

const LoaderSetup = styled.div`
  width: 100%;
  margin: 45vh 45%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
`;

const LoaderBack = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 199;
  background-color: rgba(65, 64, 99, 0.5);
`;

const Loader = () => {
  return (
    <React.Fragment>
      <LoaderBack>
        <LoaderSetup>
          <Progress />
        </LoaderSetup>
      </LoaderBack>
    </React.Fragment>
  );
};

export default Loader;
