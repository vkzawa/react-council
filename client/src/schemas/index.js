import { schema } from "normalizr";

export const user = new schema.Entity("users");
export const userList = [user];

export const comment = new schema.Entity("comments");
export const commentList = [comment];

export const post = new schema.Entity("posts", {
  author: user,
  comments: [comment]
});
export const postList = [post];

export const page = new schema.Entity("pages");
export const pageList = [page];

export const event = new schema.Entity("events", {
  author: user
});
export const eventList = [event];
