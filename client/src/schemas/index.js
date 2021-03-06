import { schema } from "normalizr";

export const user = new schema.Entity("users");
export const userList = [user];

export const comment = new schema.Entity("comments");
export const commentList = [comment];

export const posts = new schema.Entity("posts", {
  author: user,
  comments: [comment]
});
export const postList = [posts];

export const pages = new schema.Entity("pages");
export const pageList = [pages];

export const events = new schema.Entity("events", {
  author: user
});
export const eventList = [events];
