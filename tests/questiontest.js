import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.use(chaiHttp);
chai.should();
describe("Questions", () => {
    describe("GET /api/v1/questions", () => {
        
        it("should get all questions", (done) => {
            chai.request(app)
                .get('/api/v1/questions')
                .end((error, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    done();
                  });
        });
    });


    describe('POST/api/v1/questions' , () => {
        it('should respond with a success message', (done) => {
            chai.request(app)
            .post('/api/v1/questions')
            .send({
                id: 2,
                createdOn: '2019-02-02',
                createdBy: 3,
                meetup: 2,
                title: 'Express.js',
                body: 'This is another question',
                votes : 0
            })
            .end((error, response) => {
                response.should.have.status(200);
                done();
            });
        });
    });

});

