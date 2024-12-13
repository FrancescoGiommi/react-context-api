import { usePostContext } from "../../contexts/PostContext";
import { useState } from "react";

export default function PostList() {
  const { postList } = usePostContext();
  return (
    <>
      <h1>Lista dei post</h1>
    </>
  );
}
