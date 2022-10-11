import React, { Component } from "react";
import Paginate from "@codecraftkit/paginate";

interface PaginationLibraryProps {
  
} 

const PaginationLibrary = () => {
  return (
    <Paginate
      total={last_visible_page} //total number of pages
      limit={10} //
      onPageChange={(page) => console.log(page)}
    />
  );
};

export default PaginationLibrary;
