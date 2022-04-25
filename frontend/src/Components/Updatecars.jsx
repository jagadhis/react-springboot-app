import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Updatecars = () => {
  const { id } = useParams();
  const [carname, SetCarname] = useState("");
  const [carnum, SetCarnum] = useState("");
  const [drivername, Setdrivername] = useState("");
  const [startkm, Setstartkm] = useState("");
  const [endkm, Setendkm] = useState("");
  const [totalhr, Settotalhr] = useState("");
  const [totalkm, Settotalkm] = useState("");
  const [amount, Setamount] = useState("");
  const [update, SetUpdate] = useState("");
  let history = useNavigate();
  const BASEURL = `http://localhost:8080/api/v1/cars/${id}`;
  useEffect(() => {
    axios.get(BASEURL).then((res) => {
      let update = res.data;
      SetCarname(update.carname);
      SetCarnum(update.carnum);
      Setdrivername(update.drivername);
      Setstartkm(update.startkm);
      Setendkm(update.endkm);
      Settotalhr(update.totalhr);
      Settotalkm(update.totalkm);
      Setamount(update.setamount);

      console.log(update);
    });
  }, []);

  const Update = (e) => {
    e.preventDefault();
    const cars = {
      carname,
      carnum,
      drivername,
      startkm,
      endkm,
      totalhr,
      totalkm,
      amount,
    };

    console.log("Cars=>" + JSON.stringify(cars));
    axios
      .put(BASEURL, {
        id: id,
        drivername: drivername,
        carnum: carnum,
        carname: carname,
        startkm: startkm,
        endkm: endkm,
        totalhr: totalhr,
        totalkm: totalkm,
        amount: amount,
      })
      .then((res) => {
        let update = res.data;
        console.log(res.data);
        SetUpdate({
          carname: update.carname,
          carnum: update.carnum,
          drivername: update.drivername,
          startkm: update.startkm,
          endkm: update.endkm,
          totalhr: update.totalhr,
          totalkm: update.totalkm,
          amount: update.amount,
        });
        //
      });
  };

  const cancel = () => {
    history("/cars");
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Update Cars</h3>
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
                <div className="form-group">
                  <label>Start km:</label>
                  <input
                    placeholder="StartKm"
                    name="startkm"
                    className="form-control"
                    value={startkm}
                    onChange={(e) => Setstartkm(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>End Km:</label>
                  <input
                    placeholder="Endkm"
                    name="endkm"
                    className="form-control"
                    value={endkm}
                    onChange={(e) => Setendkm(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Total Hr:</label>
                  <input
                    placeholder="Total hours"
                    name="totalhr"
                    className="form-control"
                    value={totalhr}
                    onChange={(e) => Settotalhr(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Total Km:</label>
                  <input
                    placeholder="Total Kilometers"
                    name="totalkm"
                    className="form-control"
                    value={totalkm}
                    onChange={(e) => Settotalkm(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Amount:</label>
                  <input
                    placeholder="Amount"
                    name="amount"
                    className="form-control"
                    value={amount}
                    onChange={(e) => Setamount(e.target.value)}
                  />
                </div>
                <button className="btn btn-success" onClick={Update}>
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
