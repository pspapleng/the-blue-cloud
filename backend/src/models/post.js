const mongoose = require("mongoose")
const { composeWithMongoose } = require("graphql-compose-mongoose")
const moment = require("moment")

const { Schema } = mongoose

const PostSchema = new Schema({
    title: {
        type: "String",
        default: null,
    },
    desc: {
        type: "String",
        default: null,
    },
    timestamp: {
        type: Date,
        default: `${moment().format("YYYY-MM-DD")}T${moment().format("hh:mm:ss")}`,
    },
    images: {
        type: [String],
    },
    post_by: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
})

const PostModel = mongoose.model("Post", PostSchema)

exports.PostModel = PostModel

const PostTC = composeWithMongoose(PostModel)

exports.PostTC = PostTC