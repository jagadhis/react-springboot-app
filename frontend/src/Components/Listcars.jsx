import React, { useState } from "react";
import CarsService from "./Services/CarsService";

const Listcars = () => {
  const [Cars, setcars] = useState([]);

  componentDidMount();
  {
    CarsService.getCars().then((res) => {
      setcars({ Cars: res.data });
    });
  }
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
