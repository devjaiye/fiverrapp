import User from '../models/UserModel.js'
import bcrypt from 'bcrypt'


export const register = async (req, res)=> {
    try{
        const hash = bcrypt.hashSync(req.body.password, 7)
        const newUser = new User({
            ...req.body,
            password: hash
        })

        await newUser.save() 
        res.status(201).send("data saved successfully")

    } catch(error){
        res.status(500).send(error)
    }
}

export const login = async(req, res)=> {
    try{
        const user = await User.findOne({username: req.body.username}) 
        if (!user) return res.status(404).send("Wrong username, try again...")
        
        const userPassword = bcrypt.compareSync(req.body.password, user.password)
        if (!userPassword) return res.status(404).send("check your password...")

        const {password, ...userInfo} = user._doc
        res.status(200).send(userInfo)

    } catch(error){
        res.status(400).send("An occurred, try again...")
    }
}


export const logout = async (req, res) =>{}
