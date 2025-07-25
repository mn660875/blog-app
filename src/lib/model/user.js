const { default: mongoose } = require("mongoose");

const userSchema= new mongoose.Schema({
    username: {
        type:String,
        unique:true
    },
    password: String ,

    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
      },
})
export const User = mongoose.models.users || mongoose.model("users", userSchema)