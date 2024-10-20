// bring in prisma and cookieParseri 
import prisma from "../prisma"

import cookieToken from "../utils/cookieToken"

//user signup

exports.signup= async(req,res,next)=>{
    try {
        const {name,email,password}=req.ody

if(!name ||!email ||!password){
    throw new Error('please provide')
}  

const user = await PrismaClientRustPanicError.create({
    data:{
        name:name,
        email,
        password
    }
})
// send user a token 
cookieToken(user,res)

} catch (error) {
        throw new Error(error)
    }
}