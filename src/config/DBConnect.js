import mongoose from "mongoose";

mongoose.connect('mongodb+srv://lucas:uIgFF1IKaMDb2HuV@lucas.njqy5xr.mongodb.net/adopet')

let db = mongoose.connection;

export default db;