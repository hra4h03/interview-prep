import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Sidebar from '../../app/sidebar/sidebar';
import { useRouter } from 'next/router';
import { API_URL } from '../../app/constants';
import axios from 'axios';
import Pagination from '../../app/pagination/pagination';


/* eslint-disable-next-line */
export interface SearchProps { }
export function Search(props: SearchProps) {
    const router = useRouter();
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    const [recordsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = articles.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(articles.length / recordsPerPage);

    useEffect(() => {
        if (router.isReady) {
            const searchStr = (router.query.q) as string;
            const url = `${API_URL}/search?title=${searchStr}`;
            (async function (url) {
                const response = await axios.get(url)
                console.log('search results ', response.data);
                setArticles(response.data?.results)
                setLoading(false)
            })(url);
        }
    }, [router.isReady, router.query.q])


    return (
        <div className="blog-area pt-25 pb-100">
            <div className="container">
                <div className="row">

                    <div className="col-lg-9 col-md-12">
                        <div className="row" >
                            {loading && <div>Loading...</div>}
                            {!loading && articles.length === 0 && <div>No data in this category...</div>}
                            {!loading && articles.length > 0 ? (
                                <>
                                    {articles.map((item) => {
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

export default Search;
