import { Request, Response } from "express";
import {
  createPost,
  createPostInput,
  deletePost,
  getAllPosts,
  getBostById,
  updatePost,
} from "../Service/Post.service";
import { ICreatePostResponse, IGetAllPostsResponse } from "../Types/Post.types";

export const handleCreatePost = async (
  req: Request<{}, {}, createPostInput>,
  res: Response<ICreatePostResponse>,
) => {
  const { title, content, author } = req.body;
  try {
    const post = await createPost({ title, content, author });
    return res.status(201).json({
      status: "success",
      message: "Post Created Successfully",
      currentPosts: {
        title: post.title,
        content: post.content,
        author: post.author,
      },
    });
  } catch (error) {
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
export const handleGetAll = async (
  req: Request,
  res: Response<IGetAllPostsResponse>,
) => {
  try {
    const posts = await getAllPosts();
    return res.status(200).json({
      status: "success",
      message: "All posts retrieved successfully",
      currentPosts: posts.map((post) => ({
        title: post.title,
        content: post.content,
        author: post.author,
      })),
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      status: "failed",
      message: "Internal Server Error",
      currentPosts: [],
    });
  }
};

export const handleGetOnePost = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  try {
    const { id } = req.params;

    const post = await getBostById(id);

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
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }

    return res.status(500).json({
      status: "failed",
      message: "Internal Server Error",
    });
  }
};

export const updateOnePost = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  const { id } = req.params;
  const { title, content, author } = req.body;
  try {
    const post = await updatePost(id, { title, content, author });
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
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    return res.status(500).json({
      status: "failed",
      message: "Internal Server Error",
    });
  }
};

export const deleteOnePost = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  const { id } = req.params;

  try {
    const post = await deletePost(id);

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
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }

    return res.status(500).json({
      status: "failed",
      message: "Internal Server Error",
    });
  }
};