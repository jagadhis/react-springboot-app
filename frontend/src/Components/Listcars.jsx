import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Listcars = () => {
  const { id } = useParams();
  const [Cars, setcars] = useState([]);

  let history = useNavigate();

  const BASEURL = "http://localhost:8080/api/v1/cars";
  const DELETEURL = `http://localhost:8080/api/v1/cars/${id}`;
  useEffect(() => {
    axios.get(BASEURL).then((res) => {
      setcars(res.data);
    });
  }, []);

  const addCars = () => {
    history("/Addcars");
  };
  const editcars = (id) => {
    history(`/Updatecars/${id}`);
  };

  const deletecars = (id) => {
    axios.delete(DELETEURL).then((res) => {
      const del = Cars.filter((car) => id !== car.id);
      setcars(del);
      console.log(del);
    });
  };

  console.log(deletecars);
  console.log(id);
  console.log(Cars);

  const viewcars = (id) => {
    history(`/viewcars/${id}`);
  };
  return (
    <div>
      <h2 className="text-center">Cars list</h2>
      <div className="row">
        <button className="btn btn-primary" onClick={addCars}>
          Add cars
        </button>
      </div>
      <div className="row">
        <table className="table table-striped table-bordered ">
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
                <td>{cars.carnum}</td>
                <td>{cars.drivername}</td>
                <td>
                  <button
                    onClick={() => editcars(cars.id)}
                    className="btn btn-info"
                  >
                    Update
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => deletecars(cars.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => viewcars(cars.id)}
                    className="btn btn-info"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Listcars;
