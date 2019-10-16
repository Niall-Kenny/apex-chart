import React, { Component } from "react";
import "./customerTable.css";
class CustomerTable extends Component {
  state = {
    data: [1]
  };
  render() {
    return (
      <table className="customer-table">
        <thead>
          <tr className="customer-table-header">
            <th scope="col">Customer Name</th>
            <th scope="col">Overall Score</th>
            <th scope="col">Venue Count</th>
            <th scope="col">OOR Venues</th>
            <th scope="col">No Data</th>
            <th scope="col">Radios Down</th>
            <th scope="col">Latency > 200</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map(customer => {
            return (
              <>
                <tr className="customer-table-row">
                  <td data-label="Customer Name">Mc Donalds</td>
                  <td data-label="Overall Score">12%</td>
                  <td data-label="Venue Count">1365</td>
                  <td data-label="OOR Venues">12</td>
                  <td data-label="No Data">130</td>
                  <td data-label="Radios Down">200</td>
                  <td data-label="Latency > 200">531</td>
                </tr>
                <tr className="customer-table-row">
                  <td>Mc Donalds</td>
                  <td>12%</td>
                  <td>1365</td>
                  <td>12</td>
                  <td>130</td>
                  <td>200</td>
                  <td>531</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default CustomerTable;
