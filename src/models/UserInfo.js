import { Schema, model, models } from "mongoose";

const UserInfoSchema = new Schema({
    email: {type: String, required: true},
    phone: {type: String},
    department: {type: String},
    college: {type: String},
    prn: {type: String},
    sem: {type: String},
    admin: {type: Boolean, default: false},
}, {timestamps: true});

export const UserInfo = models?.UserInfo || model('UserInfo', UserInfoSchema)
