import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

    describe('POST/api/v1/questions/1/rsvp', () => {
        it('should respond with a success message', (done) => {
            chai.request(app)
            .post('/api/v1/questions/1/rsvp')
            .send({
                meetup: 1,
                topic: 'Discuss',
                status: 'Yes'
            })
            .end((error, response) => {
                response.should.have.status(200);
                done();
            });
        });
    });

