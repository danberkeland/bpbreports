import React from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import useDatabase from "../hooks/useDatabase";
import useWhoWhats from "../hooks/useWhoWhats";

function WhatDeliv() {
  useDatabase();

  let whoWhats = useWhoWhats();
  let whatDeliv = whoWhats.whatDeliv;

  return (
    <React.Fragment>
      <h1>What Deliv</h1>
      {whatDeliv && (
        <DataTable value={whatDeliv}>
          <Column field="prodName" header="Product"></Column>
          <Column field="nickName" header="Nickname"></Column>
          <Column field="weight" header="Weight"></Column>
          <Column field="packGroup" header="Pack Group"></Column>
          <Column field="doughType" header="Dough Type"></Column>
        </DataTable>
      )}
    </React.Fragment>
  );
}

export default WhatDeliv;
