import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Updatecars = () => {
  const [carname, SetCarname] = useState("");
  const [carnum, SetCarnum] = useState("");
  const [drivername, Setdrivername] = useState("");
  let history = useNavigate();
  const BASEURL = "http://localhost:8080/api/v1/Addcars";

  const save = (e) => {
    e.preventDefault();
    const cars = {
      carname,
      carnum,
      drivername,
    };
    axios.post(BASEURL, cars).then((res) => {
      console.log(res.data);
    });
    console.log("Cars=>" + JSON.stringify(cars));
  };
  const cancel = () => {
    history("/cars");
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Add Cars</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Car Name:</label>
                  <input
                    placeholder="CarName"
                    name="Carname"
                    className="form-control"
                    value={carname}
                    onChange={(e) => SetCarname(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Car Number:</label>
                  <input
                    placeholder="CarNumber"
                    name="Carnumber"
                    className="form-control"
                    value={carnum}
                    onChange={(e) => SetCarnum(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Driver Name:</label>
                  <input
                    placeholder="DriverName"
                    name="drivername"
                    className="form-control"
                    value={drivername}
                    onChange={(e) => Setdrivername(e.target.value)}
                  />
                </div>
                <button className="btn btn-success" onClick={save}>
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={cancel}
                  style={{ marginLeft: 10 }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updatecars;
