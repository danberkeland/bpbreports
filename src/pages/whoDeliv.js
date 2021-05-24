import React from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import useDatabase from "../hooks/useDatabase";
import useWhoWhats from "../hooks/useWhoWhats";

import { convertDatetoBPBDate, todayPlus } from "../helpers/timeDateHelpers"


function WhoDeliv() {

  let today = convertDatetoBPBDate(todayPlus()[0])

  let whoWhats = useWhoWhats(today);
  let whoDeliv = whoWhats.whoDeliv;

  return (
    <React.Fragment>
     
      <h1>What Deliv {today}</h1>
      {whoDeliv && (
        <DataTable value={whoDeliv}>
          <Column field="custName" header="custName"></Column>
          <Column field="qty" header="qty"></Column>
          <Column field="SO" header="SO"></Column>
          <Column field="prodName" header="prodName"></Column>
          <Column field="delivDate" header="delivDate"></Column>   
        </DataTable>
      )}
    </React.Fragment>
  );
}

export default WhoDeliv;
