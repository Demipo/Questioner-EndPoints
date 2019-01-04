const request = require("request");

//Test to GET all meetups
const url = "https://localhost:8000/api/v1/meetups";
describe("meetup", () => {
	it ("should return status code 200", (done) => {
		request.get(url, (error, response, body) => {
			expect(response.statusCode).toBe(200);
               done();
		});
	});

});

//Test to GET one meetup
const url1 = "https://localhost:8000/api/v1/meetups";
describe("meetup", () => {
	it ("should return status code 200", (done) => {
		request.get(url1, (error, response, body) => {
			expect(url1).toBe();
               done();
		});
	});

});

//Test to POST one meetup