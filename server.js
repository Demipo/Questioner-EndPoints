import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/meetup';
import questionRoutes from './routes/question';
import rsvpRoutes from './routes/rsvp';

const app = express();
const port = process.env.PORT || 2323;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1', routes);
app.use('/api/v1', questionRoutes);
app.use('/api/v1', rsvpRoutes);
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});


export default app;