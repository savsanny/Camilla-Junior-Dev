import React, { useState, useEffect } from "react";
import "./App.css";

function TableData() {
  const [data, getData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:3000/location")
      .then((res) => res.json())
      .then((response) => {
        getData(response);
      });
  };

  return (
    <>
      <h1>Weather of Sydney, Australia</h1>
      <tbody>
        <tr>
          <th>Date</th>
          <th>Min</th>
          <th>Max</th>
        </tr>
        {data.map((item, i) => (
          <tr key={i}>
            <td>{item.Date}</td>
            <td>{item.Max}</td>
            <td>{item.Min}</td>
          </tr>
        ))}
      </tbody>
    </>
  );
}

export default TableData;
