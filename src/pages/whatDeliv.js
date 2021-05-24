import React from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import useWhoWhats from "../hooks/useWhoWhats";

import { convertDatetoBPBDate, todayPlus } from "../helpers/timeDateHelpers"

function WhatDeliv() {

  let today = convertDatetoBPBDate(todayPlus()[0])

  let whoWhats = useWhoWhats(today);
  let whatDeliv = whoWhats.whatDeliv;

  return (
    <React.Fragment>
      <h1>What Deliv {today}</h1>
      {whatDeliv && (
        <DataTable value={whatDeliv}>
          <Column field="prodName" header="prodName"></Column>
          <Column field="qty" header="qty"></Column>
          <Column field="SO" header="SO"></Column>
          <Column field="custName" header="custName"></Column>
          <Column field="delivDate" header="delivDate"></Column>   
        </DataTable>
      )}
    </React.Fragment>
  );
}

export default WhatDeliv;
