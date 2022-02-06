import React from "react";
import { INext, IPrev } from "../SVGIcons";

const Pagination = ({ allProps }) => {
  const { limit, skip, setSkip, authorList } = allProps;
  // console.log(allProps.skip);
  const prevClick = () => {
    if (authorList.page > 1) {
      setSkip(skip - limit);
    }
  };
  const nextClick = () => {
    if (authorList.page < authorList.totalPages) {
      setSkip(limit + skip);
    }
  };
  let startIndex = (authorList.count * (authorList.page - 1)) + 1;
  return (
    <div class="flex flex-col items-center">
      <span class="">
        Showing <span class="font-semibold text-gray-900 dark:text-white">{startIndex}</span> to <span class="font-semibold text-gray-900 dark:text-white">{authorList.lastItemIndex}</span> of{" "}
        <span class="font-semibold text-gray-900 dark:text-white">{authorList.totalCount}</span> Entries
      </span>
      <div class="inline-flex mt-2 xs:mt-0 gap-3">
        <button onClick={prevClick}>
          <IPrev></IPrev>
        </button>
        <button className="bg-gray-700 h-8 w-8 rounded-full text-white font-bold">{authorList.page}</button>
        <button onClick={nextClick}>
          <INext></INext>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
