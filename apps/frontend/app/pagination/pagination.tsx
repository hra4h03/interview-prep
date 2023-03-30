import React, { useState } from 'react'

/* eslint-disable-next-line */
export interface PaginationProps { }

export function Pagination(props) {

    const { nPages, currentPage, setCurrentPage } = props;

    const pageNumbers = Array.from(Array(nPages + 1).keys()).slice(1);

    const prevPage = () => {
        if (currentPage !== 1)
            setCurrentPage(currentPage - 1)
    }

    const nextPage = () => {
        if (currentPage !== nPages)
            setCurrentPage(currentPage + 1)
    }

    return (
        <div className="widget-area">
            <div className="pagination-area text-center">
                <a href="#" className="prev page-numbers" onClick={prevPage}>
                    <i className='bx bx-chevrons-left'></i>
                </a>
                {pageNumbers.map((pageNumber, index) => {
                    return (
                        <span key={index}>
                            <a href="#" onClick={() => setCurrentPage(pageNumber)} className={`page-numbers ${currentPage == pageNumber ? 'current' : ''}`}>{pageNumber}</a>
                        </span>
                    )
                })}
                <a href="#" className="next page-numbers" onClick={nextPage}>
                    <i className='bx bx-chevrons-right'></i>
                </a>
            </div>
        </div>
    );
}

export default Pagination;


