import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
const Viewcars = () => {
  const { id } = useParams();
  const [Cars, setcars] = useState([]);
  const BASEURL = `http://localhost:8080/api/v1/cars/${id}`;

  useEffect(() => {
    axios.get(BASEURL).then((res) => {
      setcars(res.data);
    });
  });
  return (
    <div>
      <br></br>
      <div className="card col-md-6 offset-md-3 ">
        <h3 className="text-center">View Cars Details</h3>
        <div className="card-body ">
          <div className="row">
            <label>ID :</label>
            <div>{Cars.id}</div>
          </div>
          <div className="row">
            <label>Car Name:</label>
            <div>{Cars.carname}</div>
          </div>
          <div className="row">
            <label>Car Number:</label>
            <div>{Cars.carnum}</div>
          </div>
          <div className="row">
            <label>Driver Name</label>
            <div>{Cars.drivername}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viewcars;
