const axios = require("axios");

require("dotenv").config();

const BASE_URL =
  "http://4.224.186.213/evaluation-service";

const headers = {
  Authorization: `Bearer ${process.env.TOKEN}`,
};

const getDepots = async () => {

  const response = await axios.get(
    `${BASE_URL}/depots`,
    { headers }
  );

  return response.data.depots;
};

const getVehicles = async () => {

  const response = await axios.get(
    `${BASE_URL}/vehicles`,
    { headers }
  );

  return response.data.vehicles;
};

module.exports = {
  getDepots,
  getVehicles,
};