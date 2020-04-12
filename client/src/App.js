import React, { Fragment } from 'react';
import Customers from "./components/customers/customers"

function App() {
  return (
    <Fragment>
      <div style={{ textAlign: "center", margin: 0, padding: "1rem", background: "lightblue" }}>
        <h1>React - Express - Starter - Pack</h1>
        <p>Connect hard coded customers</p>
      </div>
      <Customers />
    </Fragment>
  );
}

export default App;
