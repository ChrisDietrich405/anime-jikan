import React, { Component } from "react";
// @ts-ignore
import Paginate from "@codecraftkit/paginate"  


interface PaginationLibraryProps {
  itemsPerPage: number; 
  pageTotal: number;
  setAnimePage:  React.Dispatch<React.SetStateAction<number>>
}

interface IPage {
  selected: number
}

const PaginationLibrary = ({ itemsPerPage, pageTotal, setAnimePage}: PaginationLibraryProps) => {
  return (
    <>
    {JSON.stringify({itemsPerPage, pageTotal})}
    <Paginate
    
      total={pageTotal} //total number of pages
      limit={itemsPerPage} //
      onPageChange={(page: IPage) => setAnimePage(page.selected)}
      
      />
      </>
  );
};

export default PaginationLibrary;
