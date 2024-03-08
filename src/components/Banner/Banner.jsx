// IMPORTS
import React from 'react';
import './Banner.css'; // Ajoutez le style pour la bannière si nécessaire

// ASSETS
import BannerImage from '../../assets/banner-about.png';

function Banner() {
   return (
      <img className='BannerCont' alt='Paysage' src={BannerImage} />
   );
}

export default Banner;