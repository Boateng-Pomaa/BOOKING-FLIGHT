var express =  require('express')
const router =express.Router()

const controller = require('../controls/flightControl')
 
router.post('/',controller.bookFlight)
router.get('/:id',controller.getFlight)
router.get('/',controller.getFlights)
router.put('/:id',controller.updateFlight)
router.delete('/:id',controller.deleteFlight)

module.exports = router
