import { usePostContext } from "../contexts/PostContext";
import { useState } from "react";

export default function PostList() {
  const { postList } = usePostContext();
  return (
    <>
      <h1>Lista dei post</h1>
      <div className="container">
        {postList.map((post) => (
          <div className="card mb-3 mt-5" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={post.image} alt="" />
              </div>
              <div className="col-md-8 d-flex align-items-center">
                <div className="card-body">
                  <h5 className="card-title h1">{post.title}</h5>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      {post.tags.map((tag) => (
                        <span className="badge text-bg-primary m-1">{tag}</span>
                      ))}
                    </small>
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => removePost(post.id)}
                    className="btn btn-danger m-2 "
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
