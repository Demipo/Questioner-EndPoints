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

	it ("should return the meetups", (done) => {
		request.get(url, (error, response, body) => {
			expect(body).toBe(get_meetups);
            done();
		});
	});

	it ("it should  fail if location is undefined", (done) => {
		request.post(url, post_meetup, (error, response) => {
			expect(post_meetup.location).not.toBeUndefined();
            done();
		});
	});
});

//Test to GET one meetup

//Test to POST one meetup