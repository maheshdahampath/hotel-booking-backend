import mongoose from "mongoose";

const categorySchema = mongoose.Schema(
    {
        name : {
            type: String,
            required : true,
            unique : true
        },

        features : [{
             type: String,
            required : true
        
        }],

        description : {
            type: String,
            required : true
        },

        image : {
            type: String,
        },

        price : {
            type: Number,
            required : true
        }
    }
)

const Category = mongoose.model("category",categorySchema)
export default Category