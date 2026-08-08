interface PostData {
    title: string;
    content: string;
    author: string;
}
export interface IGetAllPostsResponse {
    status: string;
    message: string;
    currentPosts: PostData[];
}
export interface ICreatePostResponse {
    status: string;
    message: string;
    currentPosts: {
        title: string;
        content: string;
        author: string;
    };
}
export {};
//# sourceMappingURL=Post.types.d.ts.map