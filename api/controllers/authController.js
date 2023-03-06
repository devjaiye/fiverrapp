import User from '../models/UserModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import createError from '../utils/createError.js'


export const register = async (req, res, next)=> {
    try{
        const hash = bcrypt.hashSync(req.body.password, 7)
        const newUser = new User({
            ...req.body,
            password: hash
        })

        await newUser.save() 
        res.status(201).send("data saved successfully")

    } catch(error){
       next(error)
    }
}

export const login = async(req, res, next)=> {
    try{
        const user = await User.findOne({username: req.body.username}) 
        
        if (!user) return next(createError(404, "User does not exist..."))
        
        const userPassword = bcrypt.compareSync(req.body.password, user.password)
        if (!userPassword) return next(createError(404, "username or password is incorrect..."))

        const token = jwt.sign({
            id: user._id, 
            isSeller: user.isSeller
        }, process.env.JWT_KEY)

        const {password, ...userInfo} = user._doc

        res.cookie("accessToken", token, {
            httpOnly: true,
        }).status(200).send(userInfo)

    } catch(error){
        res.status(400).send(error)
    }
}


export const logout = async (req, res) =>{
    res.clearCookie("accessToken", {
        sameSite: "none",
        secure: true,
    }).status(200).send("User logged out successfully..")
}
