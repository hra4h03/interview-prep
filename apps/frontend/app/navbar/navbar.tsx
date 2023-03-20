import React, { useState, useEffect } from "react";
import Link from 'next/link';
// import Link from "@/utils/ActiveLink";
// import { useSelector } from "react-redux";
// import { handleLogout } from "@/utils/auth";
import SearchForm from "../search-form/search-form";

const Navbar = ({ user }) => {
  const [menu, setMenu] = useState(true);

  const toggleNavbar = () => setMenu(!menu);

  useEffect(() => {
    const elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      window.scrollY > 170 ? elementId.classList.add("is-sticky") : elementId.classList.remove("is-sticky");
    });
  });

  const classOne = menu ? "collapse navbar-collapse" : "collapse navbar-collapse show";
  const classTwo = menu ? "navbar-toggler navbar-toggler-right collapsed" : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="blog-nav">
          <div className="container">
            <div className="navbar navbar-expand-lg navbar-light">
              <Link legacyBehavior href="/">
                <a onClick={toggleNavbar} className="navbar-brand">myPrep
                  {/* <img src="/images/prep.svg" alt="logo" /> */}
                </a>
              </Link>

              <button onClick={toggleNavbar} className={classTwo} type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">

                <SearchForm />

                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link legacyBehavior href="/">
                      <a className="nav-link">Home</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link legacyBehavior href="/form">
                      <a className="nav-link"> Create blog </a>
                    </Link>
                  </li>
                </ul>

                <div className="others-option d-flex align-items-center">
                  <div className="option-item">
                    {user ? (
                      <div className="user-dropdown">
                        <Link legacyBehavior href="/">
                          <a onClick={(e) => e.preventDefault()} className="default-btn">
                            <i className="flaticon-user"></i>{" "}
                            {user.name}{" "}
                            <span></span>
                          </a>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link legacyBehavior href="/">
                              {/* <a className="nav-link" onClick={(e) => { e.preventDefault(); handleLogout(); }}> */}
                              <a className="nav-link" onClick={(e) => { e.preventDefault(); }}>
                                Logout
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    ) : (
                      <Link legacyBehavior href="/authentication">
                        <a className="default-btn">
                          <i className="flaticon-user"></i>{" "}
                          Login <span></span>
                        </a>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <hr></hr>
      </div>
    </>
  );
};

export default Navbar;
