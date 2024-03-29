import React from 'react';
import Styles from './Footer.module.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className={`${Styles.footer} text-white text-center pt-5`}>
      <div className='py-5'>
        <div className="container">
          <div className="row">
            <div className="location col-md-4">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="social col-md-4">
              <h3>AROUND THE WEB</h3>
              <ul className='list-unstyled d-flex justify-content-center gap-2'>
                <li className={Styles.icon}>
                  <Link to="/">
                    <i class="fa-brands fa-facebook"></i>
                  </Link>
                </li>
                <li className={Styles.icon}>
                  <Link to="/">
                    <i class="fa-brands fa-twitter"></i>
                  </Link>
                </li>
                <li className={Styles.icon}>
                  <Link to="/">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </Link>
                </li>
                <li className={Styles.icon}>
                  <Link to="/">
                    <i class="fa-solid fa-globe"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="free-lancer col-md-4">
              <h3>ABOUT FREELANCER</h3>
              <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${Styles.copyRight} py-4`}>
        <p className='m-0'>Copyright © Your Website 2021</p>
      </div>
      
    </footer>
  );
}
