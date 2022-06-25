var express = require('express')
const {json} = require('express')
 const flight = require("./router/flightRoute");
var app = express()


app.use(json());
 app.use('/flight',flight);
 
app.get('/',(req,res) =>{

    res.send('Flight Booking API')

})

app.listen(3000,() => console.log('serving on port $(PORT)'))