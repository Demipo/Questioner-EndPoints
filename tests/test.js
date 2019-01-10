import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';
// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Meetups", () => {
    describe("GET /api/v1/meetups", () => {
        
        it("should get all meetups", (done) => {
            chai.request(app)
                .get('/api/v1/meetups')
                .end((error, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    done();
                  });
        });
    });

        it("should get all upcoming meetups", (done) => {
            chai.request(app)
                .get('/api/v1/meetups/upcoming')
                .end((error, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    done();
                });
        });

        it("should get a meetup", (done) => {
            chai.request(app)
                .get('/api/v1/meetups/1')
                .end((error, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    done();
                });
        });

    describe('POST/api/v1/meetups' , () => {
        it('should respond with a success message', (done) => {
            chai.request(app)
            .post('/api/v1/meetups')
            .send({
                id: 3,
                createdOn: '2019-01-09',
                topic: 'Never back down',
                location: 'Epic Center',
                happeningOn: '2019-03-04',
                tags: 'Bernard,Temi,Oluwatofunmi',
            })
            .end((error, response) => {
                response.should.have.status(200);
                done();
            });
        });
    });

});

