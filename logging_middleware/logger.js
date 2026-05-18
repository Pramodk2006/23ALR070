const axios = require("axios");
require("dotenv").config();
const createLogger = (stack) => {
  return async (level, pkg, message) => {
    try {
      const response = await axios.post(
        "http://4.224.186.213/evaluation-service/logs",
        {
          stack,
          level,
          package: pkg,
          message,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.YOUR_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Log sent");
    } catch (error) {

  console.log("Status:",
    error.response?.status
  );

  console.log("Data:",
    error.response?.data
  );

  console.log("Message:",
    error.message
  );
};}
};

module.exports = createLogger;