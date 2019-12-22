import Exam from "./exam.model";
import Exam_Type from "../exam_type/exam_type.model";
const db = require('./src/Models/db');


class ExamController {
  async getAllExams(req, res) {
    db.select("*")
    .from("exam")
    .then(data => {
        if (data.length) {
            let exams = data.map(exam => exam.toJSON())
            res.json(exams);
        } else {
            res.status(400).json("Not found!!");
        }
    })
    .catch(err => res.status(400).json(err));
  }

  async addExam(req, res) {
    
    const { e_type, grade } = req.body;
    db('exam').insert({
        E_TYPE: e_type,
        GRADE: grade,

    })
    .then(function (result) {
        res.json({
            success: true,
            message: 'ok',
            result: result
        }); // respond back to request
    }).catch(err => res.status(400).json(err))
  }


  async updateExam(req, res) {
    const { e_id, newType, newGrade } = req.body;
    db('exam').where({ id: e_id })
    .update({ E_TYPE: newType, GRADE: newGrade })
    .then(function (result) {
        res.json({
            success: true,
            message: 'ok',
            result: result
        }); // respond back to request
    }).catch(err => res.status(400).json(err))
  }

  async deleteExam(req, res) {
    const { e_id } = req.body;
    db('exam').where({ id: e_id })
    .del()
    .then(function (result) {
        res.json({
            success: true,
            message: 'ok',
            result: result
            }); // respond back to request
        }).catch(err => res.status(400).json(err))
    }
}
const examController = new ExamController();
export default examController;
