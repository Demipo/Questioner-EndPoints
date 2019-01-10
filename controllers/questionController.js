import questions from '../models/questions.js';

class QuestionController {

    static getAllQuestions(request, response) {
          return response.status(200).json({
                status: 200,
                data: questions,
          });
    }

	static postQuestion(request, response) {
		if (!request.body.title) {
   			return response.status(400).json({
    		status: 400,
    		error: 'title is required',
  			});
   		} 
		if (!request.body.body) {
   			return response.status(400).json({
    		status: 400,
    		error: 'description is required',
  			});	
  		}
		const question = {
  		id: request.body.id,
      createdOn: request.body.createdOn,
      createdBy: request.body.createdBy,
      meetup: request.body.meetup,
      title: request.body.title,
      body: request.body.body,
      votes : 0 ,
		};

	questions.push(question);
	return response.status(200).json({
  		status: 200,
  		message: 'question posted successful'
	});
	};  	
}

export default QuestionController;