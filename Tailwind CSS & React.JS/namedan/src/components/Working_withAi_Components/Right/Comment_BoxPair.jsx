import React from "react";
import Comment_Box from "./Comment_Box";
import { CommentContext } from "../../../context/CommentContext";

export default function Comment_BoxPair({ commentBox_data }) {
  return (
    <div className="flex gap-[20px] w-full flex-shrink-0">
      {commentBox_data.map((data, index) => (
        <CommentContext.Provider value={data} key={index}>
          <Comment_Box />
        </CommentContext.Provider>
      ))}
    </div>
  );
}
