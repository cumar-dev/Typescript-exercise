"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.updatePost = exports.getBostById = exports.getAllPosts = exports.createPost = void 0;
const Post_model_1 = __importDefault(require("../Model/Post.model"));
const createPost = async (data) => {
    try {
        const post = new Post_model_1.default(data);
        await post.save();
        return post;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
        throw error;
    }
};
exports.createPost = createPost;
const getAllPosts = async () => {
    try {
        const Posts = await Post_model_1.default.find();
        return Posts;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
        throw error;
    }
};
exports.getAllPosts = getAllPosts;
const getBostById = async (id) => {
    try {
        const posts = await Post_model_1.default.findById(id);
        return posts;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
        throw error;
    }
};
exports.getBostById = getBostById;
const updatePost = async (id, data) => {
    try {
        const post = await Post_model_1.default.findByIdAndUpdate(id, data, {
            returnDocument: "after",
            runValidators: true,
        });
        return post;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
        throw error;
    }
};
exports.updatePost = updatePost;
const deletePost = async (id) => {
    try {
        const post = await Post_model_1.default.findByIdAndDelete(id);
        return post;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
        throw error;
    }
};
exports.deletePost = deletePost;
//# sourceMappingURL=Post.service.js.map