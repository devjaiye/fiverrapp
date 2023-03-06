import createError from "../utils/createError.js"

export const verifyToken = async(req, res, next)=>{
    try{
        const token = req.cookies.accessToken
        if (!token) return res.next(createError(401, "You are not authenticated..."))

        jwt.verify(token, process.env.JWT_KEY, async(error, payload) =>{
            if(error) return res.next(createError(403, "Your token is invalid"))
            req.userId = payload.id,
            req.isSeller = payload.isSeller_kd
            
            next()
        })
    }catch(error){
        res.status(400).send(error)
    }
}