import { Router } from "express";
import examController from "../Controllers/examController";
const routes = Router();

routes
  .route("/")
  .get(examController.getAllExams)
  .post(examController.addExam)
  .put(examController.updateExam)
  .delete(examController.deleteExam);

export default routes;
