import express from 'express';
import db from './db/db';
import questions_db from './db/questions_db';
import rsvp_db from './db/rsvp_db';
import bodyParser from 'body-parser';

const app = express();

//Parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//..................MEETUP SECTION...................


//To get all meetups
app.get('/api/v1/meetups', (request, response) => {
	response.status(200).send({
		"status": 200,
		"meetups": db
	});
});





app.listen(8000);