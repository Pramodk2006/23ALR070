const {
  getDepots,
  getVehicles,
} = require("./services/apiService");

const solveKnapsack = require(
  "./services/schedulerService"
);

const createLogger = require(
  "../logging_middleware/logger"
);

const log = createLogger("backend");

const runScheduler = async () => {

  try {

    await log(
      "info",
      "service",
      "Fetching depot data"
    );

    const depots = await getDepots();

    await log(
      "info",
      "service",
      "Fetching vehicle data"
    );

    const vehicles = await getVehicles();

    for (const depot of depots) {

      const maxImpact = solveKnapsack(
        vehicles,
        depot.MechanicHours
      );

      console.log(
        `Depot ${depot.ID}`
      );

      console.log(
        `Mechanic Hours: ${depot.MechanicHours}`
      );

      console.log(
        `Maximum Impact: ${maxImpact}`
      );

      console.log("----------------");
    }

    await log(
      "info",
      "service",
      "Scheduling completed successfully"
    );

  } catch (error) {

    await log(
      "error",
      "service",
      error.message
    );

    console.log(error.message);
  }
};

runScheduler();