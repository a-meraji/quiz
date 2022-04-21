import connectDB from "../../../server/middlewares/db/connectDB";
// controllers
import createResult from "../../../server/controllers/results/createResultCont";
import errorController from "../../../server/controllers/errorCont";

const reqHandler = async (req, res) => {
  switch (req.method) {
    case "POST":await createResult(req, res); break;
    default: errorController(405, "method_not_allowed", res);
  }
};

export default connectDB(reqHandler);