import connectDB from "../../../server/middlewares/db/connectDB";
// controllers
import createExam from "../../../server/controllers/exams/createExamCont";
import readExam from "../../../server/controllers/exams/readExamCont";
import errorController from "../../../server/controllers/errorCont";

const reqHandler = async (req, res) => {
  switch (req.method) {
    case "POST":await createExam(req, res); break;
    case "GET": await readExam(req, res); break;
    default: errorController(405, "method_not_allowed", res);
  }
};

export default connectDB(reqHandler);