const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student schema & model
const GardenMoistureSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name field is required']
    },
    group: {
        type: String,
        required: [true, 'group field is required']
    },
    moisture: {
        type: Number,
        required: [true, 'moisture field is required']
    },
    entrydate: {
        type: Date,
        required: [true, 'date field is required']
    }
});

const GardenMoisture = mongoose.model('gardenmoisture',GardenMoistureSchema);
module.exports = GardenMoisture;