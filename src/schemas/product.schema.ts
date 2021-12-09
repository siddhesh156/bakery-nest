import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    id: Number,
    name: String,
    quantity: Number,
    intro: String,
    description: String,
});