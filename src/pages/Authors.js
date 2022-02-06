import React, { useEffect, useState } from "react";
import { getAuthorList } from "../APIHelper";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import { ILoadingSpinner } from "../SVGIcons";

const Authors = () => {
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [authorList, setAuthorList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAuthorList(limit, skip, setAuthorList, setLoading);
  }, [limit, skip]);

  return (
    <>
      {loading ? (
        <ILoadingSpinner></ILoadingSpinner>
      ) : authorList?.results?.length !== 0 ? (
        <>
          <h1 className="font-bold text-2xl text-center">Author List</h1>
          <label for="cars" className="font-semibold text-gray-900">Show</label>
          <select name="cars" id="cars" className="mx-5" onChange={e => { setLimit(parseInt(e.target.value)); setSkip(0) }} defaultValue={limit}>
            <option value="10" >10</option>
            <option value="20" >20</option>
            <option value="30" >30</option>
            <option value="40" >40</option>
          </select>
          <label for="cars" className="font-semibold text-gray-900 dark:text-white">Entries</label>
          <div className="my-10 lg:my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8">
            {authorList?.results?.map((author) => (
              <Card key={author._id} author={author}></Card>
            ))}
          </div>
          <Pagination allProps={{ limit, skip, setSkip, authorList }}></Pagination>
        </>
      ) : (
        <h1 className="font-bold text-2xl text-center">No Data Found.</h1>
      )}
    </>
  );
};

export default Authors;
