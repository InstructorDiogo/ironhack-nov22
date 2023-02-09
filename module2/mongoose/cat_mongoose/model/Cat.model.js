const mongoose = require("mongoose")
const Schema = mongoose.Schema

const catSchema = new Schema(
    {
        name: {
            type: String,
            default: "puss in boots"
        },
        fur: {
            type: String,
            enum: ["black", "tabby", "white", "gray"]
        },
        behaviour: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            min: 0,
            max: 30,
            required: true
        },
        funny: {
            type: Boolean
        }
    },
    { timestamps: false }
)

const Cat = mongoose.model('Cat', catSchema)

module.exports = Cat