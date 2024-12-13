import { createContext, useContext } from "react";

const PostContext = createContext();

/* Esporto il Provider */
export const PostContextProvider = ({ children }) => {
  const postData = {
    postList: [
      {
        id: 1,
        title: "Ciambellone",
        description: "Ricetta ciambellone",
        image: "/images/ciambellone.jpeg",
        published: true,
        tags: ["ciambellone", "ricetta", "dolce"],
      },
      {
        id: 2,
        title: "Cracker alla barbabietola",
        description: "Ricetta cracker alla barbabietola",
        image: "/images/cracker_barbabietola.jpeg",
        published: true,
        tags: ["cracker", "spuntino", "dolce"],
      },
      {
        id: 3,
        title: "Pane fritto dolce",
        description: "Ricetta pane fritto dolce",
        image: "/images/pane_fritto_dolce.jpeg",
        published: true,
        tags: ["pane fritto dolce", "ricetta", "dolce"],
      },
      {
        id: 4,
        title: "Pasta alla barbabietola",
        description: "Ricetta pasta alla barbabietola",
        image: "/images/pasta_barbabietola.jpeg",
        published: true,
        tags: ["pasta alla barbabietola", "ricetta", "pasta"],
      },
      {
        id: 5,
        title: "Torta paesana",
        description: "Ricetta Torta paesana",
        image: "/images/torta_paesana.jpeg",
        published: true,
        tags: ["torta paesana", "ricetta", "dolce"],
      },
    ],
  };
  return (
    <PostContext.Provider value={postData}>{children}</PostContext.Provider>
  );
};

/* Esporto lo use per i consumers */
export const usePostContext = () => useContext(PostListContext);
