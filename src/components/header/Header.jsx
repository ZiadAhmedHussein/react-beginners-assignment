import React from 'react';
import { Link } from 'react-router-dom';
import Style from './Header.module.css'


export default function Header() {
  return (
    <>
      <nav className={`${Style.navbar} navbar navbar-expand-lg text-white py-4 fixed-top`}>
        <div className="container">
          <Link className="navbar-brand fs-2 fw-bold" href="/">START FRAMEWORK</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bolder gap-3">
              <li className="nav-item">
                <Link className="nav-link" to="about">ABOUT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="portfolio">PORTFOLIO</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact">CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
