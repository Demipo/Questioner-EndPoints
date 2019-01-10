import meetups from '../models/meetups.js';

class MeetupController {

    static getAllMeetups(request, response) {
          return response.status(200).json({
                status: 200,
                data: meetups,
          });
    }

    static getAllUpcomingMeetups(request, response) {
    	let upcomingMeetup = [];
  		meetups.map( upcoming => {
   			if (new Date(upcoming.happeningOn) > new Date()){
      			upcomingMeetup.push(upcoming);
   		 	}
  		});
  		(upcomingMeetup)?
    		response.status(200).send({
     			"status": 200,
      			"data": upcomingMeetup,
    		}):
    		response.status(404).send({
      			"status": 404,
     			"error": "No upcoming meetup",
    		}); 
    	}

    static getOneMeetup(request, response) { 
  		const getMeetup = meetups.find( (meetup) => meetup.id === parseInt(request.params.mid, 10));
  		if (getMeetup){
      		return response.status(200).json({
        		status: 200,
        		data: meetups,
     	    });
    	}

        return response.status(404).json({
    		status: 404,
    		error: 'No such meetup',
  		});
	};

	static postOneMeetup(request, response) {
		if (!request.body.location) {
   			return response.status(400).json({
    		status: 400,
    		error: 'location is required',
  			});
   		} 
		if (!request.body.happeningOn) {
   			return response.status(400).json({
    		status: 400,
    		error: 'date for meetup is required',
  			});	
  		}
		if (!request.body.topic) {
   			return response.status(400).json({
    		status: 400,
    		error: 'meetup topic is required',
  			});
   		}
		const meetup = {
  			id: meetups.length + 1,
  			createdOn: request.body.createdOn,
  			topic: request.body.topic,
  			location: request.body.location,
  			happeningOn: request.body.happeningOn,
  			tags: request.body.tags.split(",")
		};

	meetups.push(meetup);
	return response.status(200).json({
  		status: 200,
  		message: 'meetup post was successful'
	});
	};  	

}

export default MeetupController;