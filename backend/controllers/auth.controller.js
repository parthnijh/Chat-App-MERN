import { error } from "console";
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";
export const signup=async(req,res)=>{
    try {
        console.log("Request Body:", req.body);
        const {fullName,username,password,confirmPassword,gender}=req.body;
        if(password!== confirmPassword){
            return res.status(400).json({error:"password dont match"});
        }
        const user = await User.findOne({username});
        if(user){
            return res.status(400).json({error:"user already exists"});
        }

        //Hash Password
        const salt= await bcryptjs.genSalt(10);
        const hashedPassword= await bcryptjs.hash(password,salt);

        const boyProfilePic=`https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic=`https://avatar.iran.liara.run/public/girl?username=${username}`;
        const newUser= new User({
            fullName,
            username,
            password:hashedPassword,
            gender,
            profilepic: gender== "male" ? boyProfilePic : girlProfilePic
        })

        if(newUser){
            // generate jwt tokens
            generateTokenAndSetCookie(newUser._id,res)
            await newUser.save();
           
            res.status(201).json({_id:newUser._id,fullName:newUser.fullName});

        }
        else{
            res.status(400).json({error:"invalid data"});
        }
        
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

export const login=async(req,res)=>{
    try {
        const {username,password}=req.body;
        const user=await User.findOne({username});
        const isPasswordCorrect=await bcryptjs.compare(password,user?.password || "");
        if(!user || !isPasswordCorrect){
            return res.status(400).json({error:"invalid credentials"});

        }
        generateTokenAndSetCookie(user._id,res);
        res.status(200).json({
            username:user.username,
            _id:user._id,
            fullName:user.fullName,
            profilepic:user.profilepic,
        })

        
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

export const logout=async(req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message:"Logged out sucessfuly"})
    } catch (error) {
        console.log("error in logging out");
        res.status(500).json({error:"internal server error"});
        
    }
    
}