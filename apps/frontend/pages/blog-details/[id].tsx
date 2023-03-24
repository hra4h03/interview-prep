import { useEffect, useState } from 'react';
import { API_URL } from '../../app/constants';
import { useRouter } from 'next/router';
import SidebarSearch from 'apps/frontend/app/sidebar-search/sidebar-search';
import SidebarPost from 'apps/frontend/app/sidebar-post/sidebar-post';

/* eslint-disable-next-line */
export interface BlogDetailsProps {
  title: string,
  description: string,
  categoryName: [string],
  categoryImage: string
}

const initialProps = {
  title: "",
  description: "",
  categoryName: [],
  categoryImage: ""
}

export async function getBlogId(id) {
  return fetch(`${API_URL}/post/${id}`).then(data => data.json())
}

export function BlogDetails(props: BlogDetailsProps) {
  const router = useRouter();
  const [item, setItem] = useState(initialProps);

  useEffect(() => {
    if (router.isReady) {
      const uid = (router.query.id) as string;
      const blogId = uid?.split('.')[0]
      getBlogId(blogId).then(item => setItem(item))
    }
  }, [router.isReady, router.query.id])

  return (
    <div className="blog-details-area pt-25 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-12">
            <div className="blog-details-desc">
              <div className="article-image">
                {/* <img src="/images/blog/blog1.jpg" alt="image" /> */}
              </div>

              <div className="article-content">
                <div className="entry-meta">
                  <ul>
                    {/* <li>
                      <i className='bx bx-folder-open'></i>
                      <span>Category</span>

                      <Link legacyBehavior href="#">
                        <a>Fashion</a>
                      </Link>
                    </li> */}
                    {/* <li>
                      <i className='bx bx-group'></i>
                      <span>View</span>

                      <Link legacyBehavior href="#">
                        <a>813,454</a>
                      </Link>
                    </li> */}
                    {/* <li>
                      <i className='bx bx-calendar'></i>
                      <span>Last Updated</span>

                      <Link legacyBehavior href="#">
                        <a>25/04/2020</a>
                      </Link>
                    </li> */}
                  </ul>
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                {/* <blockquote className="wp-block-quote">
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                  <cite>Tom Cruise</cite>
                </blockquote> */}

                {/* <p>Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing.</p> */}

                {/* Pull relevant blogs here */}
                {/* <ul className="wp-block-gallery columns-3">
                  <li className="blocks-gallery-item">
                    <figure>
                      <img src="/images/blog/blog15.jpg" alt="image" />
                    </figure>
                  </li>
                  <li className="blocks-gallery-item">
                    <figure>
                      <img src="/images/blog/blog14.jpg" alt="image" />
                    </figure>
                  </li>
                  <li className="blocks-gallery-item">
                    <figure>
                      <img src="/images/blog/blog13.jpg" alt="image" />
                    </figure>
                  </li>
                </ul> */}
              </div>

              <div className="article-footer">
                <div className="article-tags">
                  {/* <span><i className='bx bx-purchase-tag'></i></span> */}

                  {/* <a href="#">Fashion</a>
                  <a href="#">Games</a>
                  <a href="#">Travel</a> */}
                  <a href="#">Category: {item.categoryName}</a>
                  {/* <p>Category: {item.categoryName[0]}</p> */}
                </div>

                <div className="article-share">
                  <ul className="social">
                    <li><span>Share:</span></li>
                    <li><a href="#" className="facebook" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                    <li><a href="#" className="twitter" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                    <li><a href="#" className="linkedin" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                    <li><a href="#" className="instagram" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                  </ul>
                </div>
              </div>

              <div className="article-author">
                <div className="author-profile-header"></div>
                <div className="author-profile">
                  <div className="author-profile-title">
                    <img src="/images/user.png" className="shadow-sm" alt="image" />

                    <div className="author-profile-title-details">
                      <div className="author-profile-details">
                        <h4>Kiriti Komaragiri</h4>
                        <span className="d-block">Trainer, Author, Writer</span>
                      </div>
                    </div>
                  </div>
                  <p>Kiriti is a experienced trainer, author, and writer who brings passion to everything he does.</p>
                </div>
              </div>

              {/* Prev and Next blog post here */}
              {/* <div className="edemy-post-navigation">
                <div className="prev-link-wrapper">
                  <div className="info-prev-link-wrapper">
                    <a href="#">
                      <span className="image-prev">
                        <img src="/images/blog/blog11.jpg" alt="image" />
                        <span className="post-nav-title">Prev</span>
                      </span>

                      <span className="prev-link-info-wrapper">
                        <span className="prev-title">What Is The MLB Summer Slugger Program?</span>
                        <span className="meta-wrapper">
                          <span className="date-post">January 21, 2020</span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>

                <div className="next-link-wrapper">
                  <div className="info-next-link-wrapper">
                    <a href="#">
                      <span className="next-link-info-wrapper">
                        <span className="next-title">28 Student-Centered Instructional Strategies</span>
                        <span className="meta-wrapper">
                          <span className="date-post">January 19, 2020</span>
                        </span>
                      </span>

                      <span className="image-next">
                        <img src="/images/blog/blog12.jpg" alt="image" />
                        <span className="post-nav-title">Next</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div> */}

              {/* <CommentArea /> */}
            </div>
          </div>

          <div className="col-lg-3 col-md-12">
            <div className="widget-area">
              <SidebarSearch />
              <SidebarPost />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
