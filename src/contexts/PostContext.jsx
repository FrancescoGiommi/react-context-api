import { createContext, useContext, useState, useEffect } from "react";

const PostContext = createContext();

/* Esporto il Provider */
export const PostContextProvider = ({ children }) => {
  const [postData, setPostData] = useState({
    posts: [],
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  /* Fetch data */
  const fetchPosts = () => {
    fetch("http://localhost:3000/posts")
      .then((req) => req.json())
      .then((data) => {
        const posts = data.map((post) => ({
          id: post.id,
          image: post.image,
          title: post.title,
          published: post.published,
          tags: post.tags,
        }));

        const newPostData = { ...postData, posts: posts };
        setPostData(newPostData);
      });
  };

  return (
    <PostContext.Provider value={postData}>{children}</PostContext.Provider>
  );
};

/* Esporto lo use per i consumers */
export const usePostContext = () => useContext(PostContext);
