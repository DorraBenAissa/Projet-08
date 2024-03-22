// IMPORTS
import React from 'react';
import './Banner.css'; // Ajoutez le style pour la bannière si nécessaire
import PropTypes from 'prop-types'

function Banner({ title, image }) {
 
   return (
      <div className='BannerCont'>
         <img className='BannerImgAbout' alt='Paysage' src={image} /> 
         {title && <h1 className='title'>{title}</h1>}
      </div>);
   }

Banner.propTypes = {
   image : PropTypes.string.isRequired,
   title : PropTypes.string
}

export default Banner;