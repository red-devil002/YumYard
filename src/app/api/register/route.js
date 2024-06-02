import mongoose from "mongoose";
import { User } from "@/models/User"

export async function POST(req) {
    const body = await req.json()
    mongoose.connect(process.env.MONGO_URL);
    const pass = body.password;
    if (!pass?.length || pass.length < 8) {
        new Error("Password mucst be at least 8 characters");
    }

    const notHashedPassword = user.pass;
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(notHashedPassword, salt);
    const user = await User.create(body)
    return Response.json(user);
}