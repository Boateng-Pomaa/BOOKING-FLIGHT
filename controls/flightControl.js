
const {flights} = require('../model/Flights')
const {v4: uuid} = require('uuid')


//add/booking flight
exports.bookFlight = async(req,res) =>{
    try{

        const {Title, Price} = await req.body;
        const newFlight = {
            id: uuid(),
            Title,
            Price,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()

        }
         flights.push(newFlight)
        res.status(201).json({
            message: "Flight Created",
            newFlight,
    });
    }
    catch(err){
        res.status(501).json({message: err.message})
    }
}
 // getting All flights
exports.getFlights = async(req, res) =>{

    try{
        const Flight =flights;
    res.status(200).json({
        message: "All Flights",
        Flight
    })
    }
    catch(err){
        res.status(404).json({
            message:err
        })
    }
}

//getting a single flight
exports.getFlight = async(req,res) =>{
    try{

        let id = req.params.id
        const flight =flights.find((flight) => flight.id === id);
        res.status(200).json({
            message: "Flight Found",
            flight,
        }) 
    }
    catch(err){
        res.status(404).json({
            message:err
        })
    }
}

//updating a flight
exports.updateFlight = async(req,res) =>{
    try{
        let id = req.params.id
    const flight =flights.find((flight) => flight.id === id);
    const {Title, Price} = await req.body
    flight.Tiltle =Title
    flight.Price = Price

    res.status(201).json({
        message: "Flight updated",
        user,
    })
    }
    catch(err){
        res.status(404).json({
            message:err
        })
    }
}

// deleting a flight
exports.deleteFlight = async(req, res) =>{
    try{
        let id = req.params.id
        const flight =flights.find((flight) => flight.id === id);
        flights.splice(flights.indexOf(flight),1)

        res.status(201).json({
            message: "Flight deleted",
            flight,
    })
    }
    catch(err){
        res.status(404).json({
            message:err
        })
    }
}