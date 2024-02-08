import React from 'react';
import Styles from "./Home.module.css";
import PageAdress from '../../helpers/PageAdress/PadgeAdress';

export default function Home() {
  return (
    <div className={`${Styles.home} mt-4 d-flex justify-content-center align-items-center  `}>
      <div className=" d-flex  flex-column  align-items-center ">
        <div className={Styles.img}>
        <img className='w-100' src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg"  alt="avatar image" />
        </div>
        <PageAdress adress='START FRAMEWORK'/>
        <p className=' m-0 '>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    
    </div>
  );
}
