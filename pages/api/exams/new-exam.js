import connectDB from "../../../server/middlewares/db/connectDB";
// controllers
import createExam from "../../../server/controllers/exams/createExamCont";
import errorController from "../../../server/controllers/errorCont";

const reqHandler = (req, res) => {
  const method = req.method;
  if (method === "POST") createExam(req, res);
  else {
    errorController(422, "req_method_not_supported", res);
  }
};

export default connectDB(reqHandler);