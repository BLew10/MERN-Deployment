const mongoose = require('mongoose');
const PirateSchema = new mongoose.Schema({
    pirateName: { 
        type: String,
        required: [true, "Name is required"],
        minLength: [3, "Name must be longer than 3 characters"]
    },
    imageUrl: { 
        type: String,
        required: [true, "Image Required"],
    },
    treasureChests : {
        type: Number,
        required: [true, "Treasure chest number is required"],

    },
    catchPhrase: {
        type: String,
        required: [true, "Catch phrase is Required"],
    },
    pegLeg: {
        type: Boolean,
    },
    eyePatch: {
        type: Boolean,
    },
    hookHand: {
        type: Boolean,
    },
    position: {
        type: String,
        required: [true, "Position is required"]
    },
}, { timestamps: true });
module.exports.Pirate = mongoose.model('Pirate', PirateSchema);

