import React, { useContext, useEffect, useState } from "react";
import { checkFavourite, toggleFavourite } from "../APIHelper";
import { FavoritesContext } from "../App";
import { ILoveOutlined } from "../SVGIcons";

const Card = ({ author }) => {
  const [favorites, setFavorites] = useContext(FavoritesContext);
  const { _id, name, description, bio, link } = author;
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    checkFavourite(favorites, author, setIsFavourite)
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
      <div className="flex justify-between items-start">
        <div>
          <a href={link}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#E8594B]">{name}</h5>
          </a>
          <p className="mb-3 font-medium text-gray-700">{description}</p>
        </div>
        <div onClick={() => toggleFavourite(isFavourite, setIsFavourite, favorites, setFavorites, author)} className="mt-2 cursor-pointer">
          <ILoveOutlined isFavourite={isFavourite}></ILoveOutlined>
        </div>
      </div>
      <p className="mb-3 font-normal text-gray-700">{bio}</p>
    </div>
  );
};

export default Card;
