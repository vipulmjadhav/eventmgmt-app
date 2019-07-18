const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const eventRoutes = express.Router();
const PORT = 4000;

let Event = require('./event.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/eventsData', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

eventRoutes.route('/').get(function(req, res) {
    Event.find(function(err, events) {
        if (err) {
            console.log(err);
        } else {
            res.json(events);
        }
    });
});

eventRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Event.findById(id, function(err, event) {
        res.json(event);
    });
});

eventRoutes.route('/add').post(function(req, res) {
    let event = new Event(req.body);
    event.save()
        .then(event => {
            res.status(200).json({'Event': 'Event added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new Event failed');
        });
});

eventRoutes.route('/update/:id').post(function(req, res) {
    Event.findById(req.params.id, function(err, event) {
        if (!event)
            res.status(404).send('data is not found');
        else
            event.event_name = req.body.event_name;
            event.event_address = req.body.event_address;
            event.event_size = req.body.event_size;
            event.event_cost = req.body.event_cost;

            event.save().then(event => {
                res.json('event updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

app.use('/events', eventRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});