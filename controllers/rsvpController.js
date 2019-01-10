import rsvps from '../models/rsvps.js';

class RsvpController {

    /*static getAllRsvps(request, response) {
          return response.status(200).json({
                status: 200,
                data: rsvps,
          });
    }*/

	static postRsvp(request, response) {
     const id = parseInt(request.params.meetup_mid, 10);
		if (!request.body.status) {
   			return response.status(400).json({
    		status: 400,
    		error: 'status is required',
  			});
   		}  
		const rsvp = {
      meetup: request.body.meetup,
      topic: request.body.topic,
      status: request.body.status,
		};

	rsvps.push(rsvp);
	return response.status(200).json({
  		status: 200,
  		message: 'rsvp status posted successful'
	});
	};  	
}

export default RsvpController;