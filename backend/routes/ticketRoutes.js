const express = require('express');
const router = express.Router();
const {
  getTicket,
  createTicket,
} = require('../controllers/ticketController');

const { protect } = require('../middleware/authMiddleware');


router.route('/').get(protect,getTicket).post(protect,createTicket)