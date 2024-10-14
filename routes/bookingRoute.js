import express from 'express'
import { createBooking, deleteBooking, updateBooking } from '../controllers/bookingController.js';

const bookingRouter = express.Router()

bookingRouter.post('/', createBooking);
bookingRouter.delete('/', deleteBooking);
bookingRouter.put('/:bookingId', updateBooking);


export default bookingRouter;