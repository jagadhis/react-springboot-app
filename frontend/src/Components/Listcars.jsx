import React, { useState } from "react";

const Listcars = () => {
  const [Cars, setcars] = useState([]);
  return (
    <div>
      <h2 className="text-center">Cars list</h2>
      <div className="row">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>Car Name</th>
              <th>Car Number</th>
              <th>Driver Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Cars.map((cars) => (
              <tr key={cars.id}>
                <td>{cars.carname}</td>
                <td>{cars.carnumber}</td>
                <td>{cars.drivername}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Listcars;
