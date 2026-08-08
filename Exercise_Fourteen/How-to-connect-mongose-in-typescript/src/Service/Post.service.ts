import Post, { IPost } from "../Model/Post.model";

export type createPostInput = Pick<IPost, "title" | "content" | "author">;
export type updatePostInput = Partial<createPostInput>;
export const createPost = async (data: createPostInput) => {
  try {
    const post = new Post(data);
    await post.save();
    return post;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    throw error;
  }
};

export const getAllPosts = async () => {
  try {
    const Posts = await Post.find();
    return Posts;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    throw error;
  }
};

export const getBostById = async (id: string) => {
  try {
    const posts = await Post.findById(id);
    return posts;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    throw error;
  }
};

export const updatePost = async (id: string, data: updatePostInput) => {
  try {
    const post = await Post.findByIdAndUpdate(id, data, {
      returnDocument: "after",
      runValidators: true,
    });
    return post;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    throw error;
  }
};

export const deletePost = async (id: string) => {
  try {
    const post = await Post.findByIdAndDelete(id);
    return post;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    throw error;
  }
};
