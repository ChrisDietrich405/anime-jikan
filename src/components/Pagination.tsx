import React, { useEffect, useState } from "react";
import { IPagination } from "../models/model";

const Pagination = (props) => {
    const numberRender = (paginationNumber: number) => {
            for (let i = 1; i <= paginationNumber; i++) {
              return <p>{i}</p>;
            }
          };

return (

    <div>{numberRender(props.pagination?.last_visible_page)}</div>
    )
};



export default Pagination;
