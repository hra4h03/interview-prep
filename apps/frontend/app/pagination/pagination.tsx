import React from 'react'

/* eslint-disable-next-line */
export interface PaginationProps { }

export function Pagination(props: PaginationProps) {

    return (
        <div className="widget-area">
            <div className="pagination-area text-center">
                <a href="#" className="prev page-numbers">
                    <i className='bx bx-chevrons-left'></i>
                </a>
                <span className="page-numbers current" aria-current="page">1</span>
                <a href="#" className="page-numbers">2</a>
                <a href="#" className="page-numbers">3</a>
                <a href="#" className="page-numbers">4</a>
                <a href="#" className="next page-numbers">
                    <i className='bx bx-chevrons-right'></i>
                </a>
            </div>
        </div>
    );
}

export default Pagination;


