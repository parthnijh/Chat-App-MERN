import User from "../models/user.model.js";

export const getUsersForSidebar =async(req,res)=>{
    try {
        const loggedInUserId=req.user._id;
        const allUsers=await User.find().select("-password");

        res.status(200).json(allUsers);

        
    } catch (error) {
        console.error("error in sidebar func",error.message)
        res.status(200).json({error:"Internal server error"});
        
    }
}