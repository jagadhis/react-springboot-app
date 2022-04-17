import React from "react";
import axios from "axios";

const CARS_API_BASE_URL = "http://localhost:8080/api/v1/cars";

const CarService = {
  getCars() {
    return axios.get(CARS_API_BASE_URL);
  },
};

export default CarService;
