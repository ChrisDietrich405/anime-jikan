import React, { useEffect, useState } from "react";
import { IPagination } from "../models/model";

const Pagination = (props) => {
  const numberRender = (paginationNumber: number) => {
    let paginationString = ""
    for (let i = 1; i <= 100; i++) {
      paginationString += `<button onClick=${() => props.setAnimePage(i)}>${i}</button>`
    }
    return paginationString
  };



  return <div dangerouslySetInnerHTML={{__html: numberRender(props.pagination?.last_visible_page)}}>

  </div>;
};

export default Pagination;



