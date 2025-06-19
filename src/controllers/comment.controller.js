import mongoose from "mongoose"
import { Comment } from "../models/comment.model.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/Apiresponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { Video } from "../models/video.model.js"

const getVideoComments = asyncHandler(async (req, res) => {
    //TODO: get all comments for a video
    const { videoId } = req.params
    const { page = 1, limit = 10 } = req.query
    
    if(!mongoose.Types.ObjectId.isValid(videoId)){
        throw new ApiError(400, "Invalid Video Id")
    }
    const skip = (page-1)*10;

    const video = await Video.findById(videoId);
    if(!video){
        throw new ApiError(401, "Video dosen't exists.")
    }

    const comments = await Comment.find({video: videoId})
    .skip(skip)
    .limit(Number(limit))
    .sort({CreatedAt: -1});

    const totalComments = await Comment.countDocuments({video: videoId})

    const totalpages = Math.ceil(totalComments/limit);

    return res(200).json(
        new ApiResponse(200, {video, comments, totalComments, totalpages},"Comments fetched successfully")
    )

})

const addComment = asyncHandler(async (req, res) => {
    // TODO: add a comment to a video

    
})

const updateComment = asyncHandler(async (req, res) => {
    // TODO: update a comment
})

const deleteComment = asyncHandler(async (req, res) => {
    // TODO: delete a comment
})

export {
    getVideoComments,
    addComment,
    updateComment,
    deleteComment
}