import { Router } from 'express';
import MeetupController from '../controllers/meetupController.js';
const routes = Router();

routes.get('/meetups', MeetupController.getAllMeetups);
routes.get('/meetups/upcoming', MeetupController.getAllUpcomingMeetups);
routes.get('/meetups/:mid', MeetupController.getOneMeetup);
routes.post('/meetups', MeetupController.postOneMeetup);

export default routes;