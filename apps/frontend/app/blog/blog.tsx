import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { API_URL } from '../constants';
import Sidebar from '../sidebar/sidebar';

/* eslint-disable-next-line */
export interface BlogProps { }

const getList = async () => await (await fetch(`${API_URL}/posts`)).json()

export function Blog(props: BlogProps) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getList().then(items => setItems(items))
  }, [])

  return (
    <div className="blog-area pt-25 pb-100">
      <div className="container">
        <div className="row">

          <div className="col-lg-9 col-md-12">
            <div className="row" >
              {items.map((item) => {
                return (
                  <div className="col-lg-4 col-md-6" key={item._id}>
                    <div className="single-blog-post-box">
                      <div className="post-image">
                        <Link legacyBehavior href={`/blog-details/${item._id}.tsx`}>
                          <a className="d-block">
                            <img src={item.categoryImage} alt="image" />
                          </a>
                        </Link>
                      </div>
                      <div className="post-content">
                        <Link legacyBehavior href="#">
                          <a className="category">{item.categoryName}</a>
                        </Link>
                        <h3>
                          <Link legacyBehavior href={`/blog-details/${item._id}`}>
                            <a>{item.title}</a>
                          </Link>
                        </h3>
                        <ul className="post-content-footer d-flex justify-content-between align-items-center">
                          {/* <li>
                            <div className="post-author d-flex align-items-center">
                              <img src="/images/user1.jpg" className="rounded-circle" alt="image" />
                              <span>{item.author}</span>
                            </div>
                          </li> */}
                          <li>
                            <i className='flaticon-calendar'></i> {item.updatedAt.split('T')[0]}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })}

            </div>
            {/* Pagination */}
            <div className="col-lg-12 col-md-12">
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
            {/* </div> */}

          </div>


          <div className="col-lg-3 col-md-6">
            <Sidebar />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Blog;
