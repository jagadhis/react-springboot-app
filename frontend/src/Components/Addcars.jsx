import React, { useState } from "react";

const Addcars = () => {
  const [Carname, SetCarname] = useState("");
  const [Carnum, SetCarnum] = useState("");
  const [drivername, Setdrivername] = useState("");

  const [cancel, SetCancel] = useState("");
  const save = (e) => {
    e.preventDefault();
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
                    value={Carnum}
                    onChange={(e) => SetCarname(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Driver Name:</label>
                  <input
                    placeholder="DriverName"
                    name="Carnumber"
                    className="form-control"
                    value={drivername}
                    onChange={(e) => SetCarnum(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Car Name:</label>
                  <input
                    placeholder="CarName"
                    name="Carname"
                    className="form-control"
                    value={Carname}
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

export default Addcars;
