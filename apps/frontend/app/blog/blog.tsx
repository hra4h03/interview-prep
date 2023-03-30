import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../sidebar/sidebar';
import { AppDispatch, RootState } from '../store/store';
import { getArticles, getSlice } from '../store/slices/blogSlice';
import Pagination from '../pagination/pagination';


/* eslint-disable-next-line */
export interface BlogProps { }
export function Blog(props: BlogProps) {
  const blog = useSelector((store: RootState) => store.blog);
  const dispatch = useDispatch<AppDispatch>();
  const [recordsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = blog.articles.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(blog.articles.length / recordsPerPage);

  useEffect(() => {
    dispatch(getArticles())
    // dispatch(getSlice(0, 10))
  }, [dispatch])


  return (
    <div className="blog-area pt-25 pb-100">
      <div className="container">
        <div className="row">

          <div className="col-lg-9 col-md-12">
            <div className="row" >
              {blog.loading && <div>Loading...</div>}
              {!blog.loading && blog.error === '' && blog.articles.length === 0 && <div>No data in this category...</div>}
              {!blog.loading && blog.error ? <div>Error: {blog.error}</div> : null}
              {!blog.loading && blog.error === '' && blog.articles.length > 0 ? (
                <>
                  {currentRecords.map((item) => {
                    return (
                      <div className="col-lg-4 col-md-6" key={item._id}>
                        <div className="single-blog-post-box">
                          <div className="post-image">
                            <Link legacyBehavior href={`/blog-details/${item._id}`}>
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
                                {/* <i className='flaticon-calendar'></i> {item.updatedAt.split('T')[0]} */}
                                <i className='flaticon-calendar'></i> {item.updatedAt}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </>
              ) : null}
            </div>

            {/* Pagination */}
            <div className="col-lg-12 col-md-12">
              <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
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
