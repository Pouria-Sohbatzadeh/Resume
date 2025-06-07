import { createContext } from "react";

export const CommentContext = createContext({
  imgAddress: "",
  name: "",
  date: "",
  comment: "",
  rating: 5,
});
