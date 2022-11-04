
const { Pirate } = require('../models/pirate.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
// The method below is new
// module.exports.createPirate = (request, response) => {
//     console.log("here")
//     Pirate.create({ ...request.body })
//         .then(pirate => response.json(pirate))
//         .catch(err => response.status(400).json(err));
// }


module.exports.findAllPirates = (request, response) => {
    Pirate.find()
        .then(pirate => response.json(pirate))
        .catch(err => response.json(err));
}

module.exports.getPirate = (request, response) => {
    Pirate.find({ _id: request.params.id })
        .then(pirate => response.json(pirate))
        .catch(err => response.json(err));
}

module.exports.updatePirate = (request, response) => {
    Pirate.findOneAndUpdate({ _id: request.params.id }, { ...request.body }, { new: true, runValidators: true })
        .then(updatedPirate => response.json(updatedPirate))
        .catch(err => response.status(400).json(err))
}

module.exports.deletePirate = (request, response) => {
    Pirate.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}


module.exports.createPirate = (request, response) => {
    if (request.body.position === "Captain") {
        Pirate.exists({ position: request.body.position })
            .then(userExists => {
                console.log(userExists, "here")
                if (userExists) {
                    response.json({ message: "Captain already exists" })
                } else {
                    Pirate.create({ ...request.body })
                        .then(user => response.json(user))
                        .catch(err => response.status(400).json(err));

                }
            })
    } else {

                Pirate.create({ ...request.body })
                    .then(user => response.json(user))
                    .catch(err => response.status(400).json(err));

            }

}



