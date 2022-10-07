import React, { Component } from 'react'
import Paginate from "@codecraftkit/paginate";

const PaginationLibrary = () => {
  return (
        <Paginate total={50} limit={10} onPageChange={(page)=>console.log(page)} />
    )
}

export default PaginationLibrary