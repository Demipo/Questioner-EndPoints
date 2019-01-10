import { Router } from 'express';
import QuestionController from '../controllers/questionController.js';
const questionRoutes = Router();

questionRoutes.get('/questions', QuestionController.getAllQuestions);
questionRoutes.post('/questions', QuestionController.postQuestion);

export default questionRoutes;