import { Router } from 'express';
import RsvpController from '../controllers/rsvpController.js';
const rsvpRoutes = Router();

//rsvpRoutes.get('/questions', QuestionController.getAllQuestions);
rsvpRoutes.post('/meetups/:mid/rsvp', RsvpController.postRsvp);

export default rsvpRoutes;