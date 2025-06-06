import { asyncHandler } from '../utils/asyncHandler.js'
import {ApiError} from "../utils/ApiError.js"
import { User } from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { ApiResponse } from '../utils/Apiresponse.js'

const registerUser = asyncHandler(async (req, res) => {
    //----------Algorithm--Design--steps-------------
    // get user details from frontend 
    // validation - not empty
    // check if user already exists: username , email
    // check for images, check for avatar
    // upload them to cloudinary, check avatar 
    // create user object - create entry in db
    // remove password and refreshtoken field from response
    // check for user creation 
    // return response 

    const {fullName, email, userName, password } = req.body
    console.log("email: ", email);
    if(
        [fullName, email, userName, password ].some((field) => field?.trim() === "")
    ){
            throw new ApiError(400, "All fields are required")
    }
    // res.json({490: "All fields are required"})

    const existedUser = User.findOne({
        $or:[{ userName }, { email }]
    })

    if(existedUser){
        throw new ApiError(409, "User With Email Or Username Allready Exists.")
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;
    console.log(avatarLocalPath);
    console.log(coverImageLocalPath);

    if(!avatarLocalPath){
        throw new ApiError(400, "Avatar is uploaded to cloudinary.")
    }
    
    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if(!avatar) {
        throw new ApiError(400, "Avatar file is required")
    }

    User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: userName.toLowerCase()
    })

    const createdUser = await User.findById(User._id).select(
        "-password -refreshToken"
    )

    if(!createdUser){
        throw new ApiError(500, "Something went wrong while registering the user.")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Successfully.")
    )
    
    
}) 

export { registerUser}