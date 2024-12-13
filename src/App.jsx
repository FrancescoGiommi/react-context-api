//! Giorno 1

/*Consegna

 Creiamo il frontend del nostro Blog e le sue pagine!

    Partiamo installando React Router DOM: npm install react-router-dom
    
    Definiamo almeno 3 pagine: una homepage, una pagina “chi siamo” e una pagina con la lista dei post - 
    
    Implementiamo una navbar in comune a tutte le pagine per poter navigare tra loro

Bonus - 

    Centralizzare la Navbar grazie a un Layout

    Gestire la classe active*/

//! Giorno 2

/* Consegna

    Completiamo il nostro routing con l’aggiunta delle pagine di dettaglio!

    Recuperiamo la lista completa dei posts da Express
    
    Aggiungiamo alla lista i link alle pagine di dettaglio dei post
    
    Facciamo quindi in modo di raggiungere la pagina di dettaglio del singolo post


    Bonus

    Gestire l'eliminazione di una risorsa (modificato) */

//! Consegna

/* Partiamo col creare il file relativo al Context come descritto:
        
  Creare il contesto
  Esportare il provider
  Esportare l'oggetto rappresentante il contesto (possiamo inserire qui l'array statico dei post)
  
  Importiamo il Provider in App.jsx e wrappiamoci la nostra applicazione
  
  Se non lo abbiamo già fatto in precedenza, creiamo un componente PostsPage.jsx 
  che conterrà al suo interno un titolo e un componente PostsList.jsx.
    
  Creiamo un file per definire il nostro Context ed esportiamolo
  
  Infine facciamo in modo che il componente PostsList.jsx recuperi i post 
  consumando il Context e crei dunque una card per ciascuno di essi.

La struttura dell’App deve essere

App.jsx > PostsPage.jsx > PostsList.jsx > PostCard.jsx

Bonus

Recuperare la lista delle categorie in App.jsx tramite una chiamata a un’API. */

// import { useState } from 'react'

/* Import pages */
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPages";
import IndexPosts from "./pages/posts/IndexPosts";
import ShowPost from "./pages/posts/ShowPosts";
import StorePost from "./pages/posts/StorePosts";
import PostPage from "./components/PostsPage";
import PostList from "./components/PostsList";

/* Import context */
import { PostContextProvider } from "./contexts/PostContext";

/* Import Outlet */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefoultLayout from "./Layout/DefaultLayout";
import AlternativeLayout from "./Layout/AlternativeLayout";
function App() {
  return (
    <PostContextProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefoultLayout}>
            {/* Home */}
            <Route path="/" Component={HomePage} />
            {/* About */}
            <Route path="/about" Component={AboutPage} />
            {/* Not Found */}
            <Route path="*" Component={NotFoundPage} />
            <Route path="/postsPage" Component={PostPage} />
            <Route path="/postList" Component={PostList} />
          </Route>

          <Route Component={AlternativeLayout}>
            <Route path="/posts">
              {/* Index page */}
              <Route index Component={IndexPosts} />
              {/* Show page */}
              <Route path=":id" Component={ShowPost} />
              {/* Create page */}
              <Route path="store" Component={StorePost} />
              <Route />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </PostContextProvider>
  );
}

export default App;
