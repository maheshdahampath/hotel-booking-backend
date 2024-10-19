import express from 'express';
import {
    createBooking,
    deleteBooking,
    getBooking,
    getBookingByEmail,
    updateBooking,
} from '../controllers/bookingController.js';

const bookingRouter = express.Router();

// Create a new booking
bookingRouter.post('/', createBooking);

// Delete a specific booking by ID
bookingRouter.delete('/:bookingId', deleteBooking);

// Update a specific booking by ID
bookingRouter.put('/:bookingId', updateBooking);

// Get all bookings
bookingRouter.get('/', getBooking);

// Get bookings by email
bookingRouter.get('/:email', getBookingByEmail);

export default bookingRouter;
