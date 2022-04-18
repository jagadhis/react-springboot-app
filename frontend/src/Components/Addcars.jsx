import React, { useState } from "react";

const Addcars = () => {
  const [Carname, SetCarname] = useState("");
  const [Carnum, SetCarnum] = useState("");
  const [drivername, Setdrivername] = useState("");

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
                    value={Carnum}
                    onChange={(e) => Setdrivername(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Driver Name:</label>
                  <input
                    placeholder="DriverName"
                    name="Carnumber"
                    className="form-control"
                    value={drivername}
                    onChange={(e) => SetCarname(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Car Name:</label>
                  <input
                    placeholder="CarName"
                    name="Carname"
                    className="form-control"
                    value={Carname}
                    onChange={(e) => SetCarname(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addcars;
