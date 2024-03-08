// IMPORTS
import React from 'react';
import './Banner.css'; // Ajoutez le style pour la bannière si nécessaire
import PropTypes from 'prop-types'

// ASSETS
import BannerImageAbout from '../../assets/banner-about.png';
import BannerImageHome from '../../assets/banner-home.png';

function Banner(data) {
   console.log('data = ', data);
   let isHomeBanner = false;
   if (data.data === 'Home') {
      isHomeBanner = true;
   } else {
      isHomeBanner = false;
   }

   return (
      <>
      { !isHomeBanner && <img className='BannerImgAbout' alt='Paysage' src={BannerImageAbout} /> }
      { isHomeBanner && <img className='BannerImgHome' alt='Paysage' src={BannerImageHome} /> }
      </>);
   }

Banner.propTypes = {
   data : PropTypes.string,
}

export default Banner;