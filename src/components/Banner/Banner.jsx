// IMPORTS
import React from 'react';
import './Banner.css'; // Ajoutez le style pour la bannière si nécessaire
import PropTypes from 'prop-types'

function Banner({ image }) {
 
   return (
         <img className='BannerImgAbout' alt='Paysage' src={image} /> 
      );
   }

Banner.propTypes = {
   image : PropTypes.string.isRequired
}

export default Banner;