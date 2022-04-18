const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Ticket = require('../models/ticketModel');


// @desc    Get user tickets
// @route   GET /api/tickets
// @access  Private

const getTicket=asyncHandler(async(req,res)=>{

    res.status(200).json({message:"get Ticket!"})

})


// @desc    Create new ticket
// @route   POST /api/tickets
// @access  Private

const createTicket = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'create Ticket!' });
});

module.exports={
    getTicket,
    createTicket
}
