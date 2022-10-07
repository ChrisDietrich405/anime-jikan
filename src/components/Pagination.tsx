import React, { useEffect, useState } from "react";
import { IPagination } from "../models/model";

interface PaginationProps {
  animeDataPagination?: IPagination | null | undefined;
  animePage: number;
  setAnimePage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({
  animeDataPagination,
  animePage,
  setAnimePage,
}: PaginationProps) => {

  const pages = () => {
    const buttonPages: any[] = [];
    for (let i = 1; i <= animeDataPagination?.last_visible_page; i++) {
      buttonPages.push(<button onClick={() => setAnimePage(i)}>{i}</button>);
      
    }
    
    return buttonPages;
  };

  return (
    <>{pages().map((btn) => btn)}</>  
  
  );
};

export default Pagination;
