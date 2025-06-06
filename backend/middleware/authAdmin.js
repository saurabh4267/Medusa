import jwt from 'jsonwebtoken'

//admin authentication middleware
const authAdmin = async (req, res, next) => {
    try {
        
        const {atoken} = req.headers

        if(!atoken) {
            return res.json({success: false, message:"Not Authorized login again"})
        }

        const token_decode = jwt.verify(atoken, process.env.JWT_SECRET)

        if(token_decode.email != process.env.ADMIN_EMAIL) {
            return res.json({success: false, message:"Not Authorized email login again"})
        }

        next()
        
    } catch (error) {
        console.log(error)
        res.json({success: false, message:'Invalid Authtentication token, Login again'})
    }
}

export default authAdmin