import jwt  from "jsonwebtoken"
import User from "../models/UserModel.js"
import createError from "../utils/createError.js"

export const deleteUser = async (req, res, next) => {
    try{    
        const user = await User.findById(req.params.id)
            if(req.userId !== user._id.toString()){
                return next(createError(403, "You can only delete your account..."))
            }
            await User.findByIdAndDelete(req.params.id)
            res.status(200).send("Account deleted successfully...")

    } catch(error){
        res.status(400).send("an error occurred...")
    }
}