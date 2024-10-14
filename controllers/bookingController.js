import Booking from "../models/booking.js";
import { isCustomerValid } from "./userControllers.js";

export function createBooking(req,res)
{

    if(!isCustomerValid(req))
    {
        res.status(403).json({
            message : "Not a Valid Customer"
        })
        return
    }


    const startingId = 1000;

    Booking.countDocuments({}).then(
       (count)=>{
       const newId = "INV"+startingId + count + 1;

       const newBooking = new Booking({
        bookingId : newId,
        roomId : req.body.roomId,
        email : req.user.email,
        start : req.body.start,
        end : req.body.end,
       })
       newBooking.save().then(
        (result)=>{
            res.json({
                message : "Booking Created",
                result : result
            })
        }
    ).catch(
        (err)=>{
            res.json({
                message : "Booking not Created",
                error : err
            })
        }
    )
       }
    ).catch(
        ()=>{
            res.json({
                message : "Booking Internal Error"
            })
        }
    )
}

export function deleteBooking(req,res)
{
    const BookingId = req.params.BookingId

    Booking.findOneAndDelete({
        BookingId : BookingId
    }).then(
        ()=>{
           res.json({
            message : "Booking Deleted"
           })
        }
    ).catch(
        ()=>{
            res.json({
                message : "Booking not Deleted"
            })
        }
    )
}