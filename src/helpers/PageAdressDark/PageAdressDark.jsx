import React from 'react';
import Styles from './PageAdressDark.module.css';

export default function PageAdressDark(props) {
  return (
    <div className={`py-3 mb-1 d-flex flex-column align-items-center  `}>
      <h2 className={`${Styles.PageAdressDark} position-relative fw-bolder h1 py-4`}>
        { props.adress }
        <i className="fa-solid fa-star position-absolute top-100 start-50 fs-6 translate-middle "></i>
      </h2>
      
    </div>
  );
}