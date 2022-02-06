import React, { useContext, useEffect, useState } from "react";
import { FavoritesContext } from "../App";
import Card from "../components/Card";
import { ILoadingSpinner } from "../SVGIcons";

const FavoriteAuthors = () => {
  const [favorites, setFavorites] = useContext(FavoritesContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      {loading ? (
        <ILoadingSpinner></ILoadingSpinner>
      ) : favorites.length !== 0 ? (
        <>
          <h1 className="font-bold text-2xl text-center">Favorite Author List</h1>
          <div class="mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8">
            {favorites?.map((author) => (
              <Card key={author._id} author={author}></Card>
            ))}
          </div>
        </>
      ) : (
        <h1 className="font-bold text-2xl text-center">No Data Found.</h1>
      )}
    </>
  );
};

export default FavoriteAuthors;
