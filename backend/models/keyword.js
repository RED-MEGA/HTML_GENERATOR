import mongoose from "mongoose";

const KeywordSchema = new mongoose.Schema({
    keyword: {
        type: String,
        required: true,
        unique: true
    },
    html: {
        type: String,
        required: true,
    }
})

export const Keyword = mongoose.model('Keyword', KeywordSchema)