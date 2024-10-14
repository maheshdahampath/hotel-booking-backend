import mongoose from "mongoose";

const roomSchema = mongoose.Schema(
    {
        roomId : {
            type : Number,
            required : true,
            unique : true
        },

        category : {
            type : String,
            required : true
        },

        maxGuests : {
            type : Number,
            required : true,
            defaulr : 3
        },

        available : {
            type : Boolean,
            required : true,
            default : true
        },

        photos : [
            {
                type : String
            }
        ],

        specialDescription : {
            type : String,
            default : ""
        },

        note : {
            type : String,
            default : ""
        }

    }
)

const Room = mongoose.model("room",roomSchema)
export default Room