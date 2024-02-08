import React from 'react';
import Styles from "./Portfolio.module.css";
import PageAdressDark from '../../helpers/PageAdressDark/PageAdressDark';
import img1 from "../../assets/images/poert1.png";
import img2 from "../../assets/images/port2.png";
import img3 from "../../assets/images/port3.png";


export default function Portfolio() {
  return (
    <div className={`${Styles.portfolio} mt-5 pt-5 d-flex flex-column  align-items-center `}>
      <PageAdressDark adress='PORTFOLIO COMPONENT' />
      <div className="container">
        <div className="row mb-3">
          <div className="inner col-12 col-md-6 col-lg-4  p-4">
            <div className={`${Styles.content} position-relative rounded-3 overflow-hidden`} >
              <img className='w-100' src={img1} alt="avatar image" />
              <div className={`${Styles.icon} display-1  text-white w-100 h-100 d-flex justify-content-center align-items-center position-absolute top-0`} >
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="inner col-12 col-md-6 col-lg-4 p-4">
            <div className={`${Styles.content} position-relative rounded-3 overflow-hidden`} >
              <img className='w-100' src={img2} alt="avatar image" />
              <div className={`${Styles.icon} display-1 text-white w-100 h-100 d-flex justify-content-center align-items-center position-absolute top-0`} >
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="inner col-12 col-md-6 col-lg-4 p-4">
            <div className={`${Styles.content} position-relative rounded-3 overflow-hidden`} >
              <img className='w-100' src={img3} alt="avatar image" />
              <div className={`${Styles.icon} display-1 text-white w-100 h-100 d-flex justify-content-center align-items-center position-absolute top-0`} >
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="inner col-12 col-md-6 col-lg-4 p-4">
            <div className={`${Styles.content} position-relative rounded-3 overflow-hidden`} >
              <img className='w-100' src={img1} alt="avatar image" />
              <div className={`${Styles.icon} display-1 text-white w-100 h-100 d-flex justify-content-center align-items-center position-absolute top-0`} >
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="inner col-12 col-md-6 col-lg-4 p-4">
            <div className={`${Styles.content} position-relative rounded-3 overflow-hidden`} >
              <img className='w-100' src={img2} alt="avatar image" />
              <div className={`${Styles.icon} display-1 text-white w-100 h-100 d-flex justify-content-center align-items-center position-absolute top-0`} >
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="inner col-12 col-md-6 col-lg-4 p-4">
            <div className={`${Styles.content} position-relative rounded-3 overflow-hidden`} >
              <img className='w-100' src={img3} alt="avatar image" />
              <div className={`${Styles.icon} display-1 text-white w-100 h-100 d-flex justify-content-center align-items-center position-absolute top-0`} >
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>

        </div>
      </div>
    
    </div>
  );
}
