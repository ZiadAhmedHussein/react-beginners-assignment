import React from 'react';
import PageAdress from "../../helpers/PageAdress/PadgeAdress";
import Styles from "./About.module.css";

export default function About() {
  return (
    <div className={`${Styles.about} mt-4 text-white d-flex justify-content-center align-items-center  `}>
      <div className="container">
        <PageAdress adress="ABOUT COMPONENT" />
        <div className="row">
          <div className="inner col-12 col-sm-6 px-4">
            <p className=' ps-5 '>
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div className="inner col-12 col-sm-6 px-4">
            <p className='pe-5'>
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
        </div>
      </div>
    </div> 
  );
}
