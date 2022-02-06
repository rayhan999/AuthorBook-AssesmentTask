import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
// import Authors from "./pages/Authors";
// import FavoriteAuthors from "./pages/FavoriteAuthors";
import { createContext, lazy, Suspense, useEffect, useMemo, useState } from "react";
import { ILoadingSpinner } from "./SVGIcons";
const Authors = lazy(() => import('./pages/Authors'));
const FavoriteAuthors = lazy(() => import('./pages/FavoriteAuthors'));

export const FavoritesContext = createContext();

function App() {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    let data = JSON.parse(window.localStorage.getItem('favorites'));
    if (data) {
      setFavorites(data);
    } else {
      setFavorites([]);
    }
  }, []);
  useEffect(() => {
    window.localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);
  // const value = useMemo(() => ({ favorites, setFavorites }), [favorites]);
  return (
    <div className=" min-h-screen md:flex">
      <FavoritesContext.Provider value={[favorites, setFavorites]}>
        <BrowserRouter>
          <Navbar></Navbar>
          <main className="flex-1 p-6 lg:px-8 overflow-y-scroll max-w-7xl mx-auto">
          <Suspense fallback={<ILoadingSpinner></ILoadingSpinner>}>
            <Routes>
              <Route exact path="/" element={<h1>Welcome</h1>} />
              <Route path="/authors" element={<Authors />} />
              <Route path="/favorite-authors" element={<FavoriteAuthors />} />
              <Route path="*" element={<h1>Error</h1>} />
            </Routes>
        </Suspense>
          </main>
        </BrowserRouter>
      </FavoritesContext.Provider>
    </div>
  );
}

export default App;
