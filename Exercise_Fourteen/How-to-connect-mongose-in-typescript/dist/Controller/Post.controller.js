"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOnePost = exports.updateOnePost = exports.handleGetOnePost = exports.handleGetAll = exports.handleCreatePost = void 0;
const Post_service_1 = require("../Service/Post.service");
const handleCreatePost = async (req, res) => {
    const { title, content, author } = req.body;
    try {
        const post = await (0, Post_service_1.createPost)({ title, content, author });
        return res.status(201).json({
            status: "success",
            message: "Post Created Successfully",
            currentPosts: {
                title: post.title,
                content: post.content,
                author: post.author,
            },
        });
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
            throw error;
        }
        return res.status(500).json({
            status: "failed",
            message: "Internal Server Error",
            currentPosts: {
                title: "",
                content: "",
                author: "",
            },
        });
    }
};
exports.handleCreatePost = handleCreatePost;
const handleGetAll = async (req, res) => {
    try {
        const posts = await (0, Post_service_1.getAllPosts)();
        return res.status(200).json({
            status: "success",
            message: "All posts retrieved successfully",
            currentPosts: posts.map((post) => ({
                title: post.title,
                content: post.content,
                author: post.author,
            })),
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            status: "failed",
            message: "Internal Server Error",
            currentPosts: [],
        });
    }
};
exports.handleGetAll = handleGetAll;
const handleGetOnePost = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await (0, Post_service_1.getBostById)(id);
        if (!post) {
            return res.status(404).json({
                status: "failed",
                message: "Post not found",
            });
        }
        return res.status(200).json({
            status: "success",
            message: "Post retrieved successfully",
            currentPost: {
                title: post.title,
                content: post.content,
                author: post.author,
            },
        });
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
        return res.status(500).json({
            status: "failed",
            message: "Internal Server Error",
        });
    }
};
exports.handleGetOnePost = handleGetOnePost;
const updateOnePost = async (req, res) => {
    const { id } = req.params;
    const { title, content, author } = req.body;
    try {
        const post = await (0, Post_service_1.updatePost)(id, { title, content, author });
        if (!post) {
            return res
                .status(404)
                .json({ status: "failed", message: "Post not found" });
        }
        return res.status(200).json({
            status: "success",
            message: "Post updated successfully",
            currentPost: {
                title: post.title,
                content: post.content,
                author: post.author,
            },
        });
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
        return res.status(500).json({
            status: "failed",
            message: "Internal Server Error",
        });
    }
};
exports.updateOnePost = updateOnePost;
const deleteOnePost = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await (0, Post_service_1.deletePost)(id);
        if (!post) {
            return res.status(404).json({
                status: "failed",
                message: "Post not found",
            });
        }
        return res.status(200).json({
            status: "success",
            message: "Post deleted successfully",
            deletedPost: {
                title: post.title,
                content: post.content,
                author: post.author,
            },
        });
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
        return res.status(500).json({
            status: "failed",
            message: "Internal Server Error",
        });
    }
};
exports.deleteOnePost = deleteOnePost;
//# sourceMappingURL=Post.controller.js.map