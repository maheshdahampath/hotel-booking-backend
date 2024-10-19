import Booking from "../models/booking.js";
import { isCustomerValid, isAdminValid } from "./userControllers.js";

export function createBooking(req, res) {
    if (!isCustomerValid(req)) {
        return res.status(403).json({
            message: "Not a Valid Customer"
        });
    }

    const startingId = 1000;

    Booking.countDocuments({}).then(count => {
        console.log(count);
        const newId = "INV" + (startingId + count + 1);

        const newBooking = new Booking({
            bookingId: newId,
            roomId: req.body.roomId,
            email: req.user.email,
            start: req.body.start,
            end: req.body.end,
        });

        return newBooking.save();
    }).then(result => {
        res.json({
            message: "Booking Created",
            result: result
        });
    }).catch(err => {
        res.json({
            message: "Booking not Created",
            error: err
        });
    });
}

export function deleteBooking(req, res) {
    const bookingId = req.params.bookingId; // Corrected from BookingId to bookingId

    Booking.findOneAndDelete({ bookingId: bookingId }).then(() => {
        res.json({
            message: "Booking Deleted"
        });
    }).catch(() => {
        res.json({
            message: "Booking not Deleted"
        });
    });
}

export function updateBooking(req, res) {
    if (!isAdminValid(req)) {
        return res.json({
            message: "Sign in again"
        });
    }

    const bookingId = req.params.bookingId;

    // First find the booking by bookingId
    Booking.findOne({ bookingId: bookingId }).then(booking => {
        if (!booking) {
            return res.json({
                message: "Booking not found"
            });
        }

        // Proceed to update the booking
        return Booking.updateOne({ bookingId: bookingId }, req.body);
    }).then(() => {
        res.json({
            message: "Booking Updated",
            result: req.body
        });
    }).catch(() => {
        res.json({
            message: "Booking not Updated"
        });
    });
}

export function getBooking(req, res) {
    if (isAdminValid(req)) {
        Booking.find().then(result => {
            if (result.length === 0) {
                return res.json({
                    message: "Booking not Found"
                });
            }
            res.json({
                Booking: result
            });
        }).catch(() => {
            res.json({
                message: "Booking not Found"
            });
        });
    }
}

export function getBookingByEmail(req, res) {
    if (!isAdminValid(req)) {
        const email = req.params.email;

        Booking.find({ email: email }).then(result => {
            if (result.length === 0) {
                return res.json({
                    message: "Booking not Found"
                });
            }
            res.json({
                booking: result
            });
        }).catch(() => {
            res.json({
                message: "Failed to get Booking"
            });
        });
        return;
    }

    res.json({
        message: "You are an Admin"
    });
}
