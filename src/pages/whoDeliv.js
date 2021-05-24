import React from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import useDatabase from "../hooks/useDatabase";
import useWhoWhats from "../hooks/useWhoWhats";

function WhoDeliv() {
  useDatabase();

  let whoWhats = useWhoWhats();
  let whoDeliv = whoWhats.whoDeliv;

  return (
    <React.Fragment>
      <h1>Who Deliv</h1>
      {whoDeliv && (
        <DataTable value={whoDeliv}>
          <Column field="custName" header="Customer"></Column>
          <Column field="nickName" header="Nickname"></Column>
          <Column field="zoneName" header="Zone Name"></Column>
          <Column field="city" header="City"></Column>
        </DataTable>
      )}
    </React.Fragment>
  );
}

export default WhoDeliv;
