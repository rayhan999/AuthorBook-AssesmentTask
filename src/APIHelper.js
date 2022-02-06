import axios from "axios";

export const getAuthorList = async (limit, skip, setter, setLoading) => {
  setLoading && setLoading(true);
  try {
    const res = await axios.get(`https://api.quotable.io/authors?limit=${limit}&skip=${skip}`);
    setter(res?.data);
    setLoading && setLoading(false);
  } catch (error) {
    alert("Something went wrong");
    setLoading && setLoading(false);
  }
};

export const checkFavourite = (favorites, author, setter) => {
  let found = favorites?.find((item) => item._id === author._id);
    if (found) {
      setter(true);
    } else {
      setter(false);
    }
}
export const toggleFavourite = (isFavourite, setter, favorites, setFavorites, author) => {
  if (isFavourite) {
    let arr = favorites?.filter((item) => item._id !== author._id);
    setFavorites(arr);
    setter(false);
  } else {
    setFavorites([...favorites, author]);
    setter(true);
  }
};
