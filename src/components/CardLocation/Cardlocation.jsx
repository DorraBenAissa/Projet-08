// IMPORTS
import { Link } from 'react-router-dom'
import './CardLocation.css'
import { useFetch } from '../../useFetch'

// ASSETS
// import DataLocation from '../../assets/logements.json'

// let data = fetch('logements.json');
// console.log('data = ', data)

// const annonces = useFetch(window.location.origin + '/Kasa/annonces.json')

// const DataLocation = fetchData(window.location.origin + '/logements.json');

// console.log('DataLocation = ',DataLocation);
//    async function fetchData(url) {
//          const response = await fetch(url);
//          const data = await response.json();
//          return data;
//    }
   

// Composant CardLocation > Génère des cards avec les images des locations, dynamiquement depuis le fichier JSON
function CardLocation() {
   const DataLocation = useFetch(window.location.origin + '/logements.json');
   console.log('DataLocation.fetchedData.map = ', DataLocation.fetchedData);
   return (
      <section className='ContLocation'>
         {DataLocation.fetchedData && DataLocation.fetchedData.map((location) => (
            <Link to={`/location/${location.id}`} key={location.id}>
               <figure className='ContCard'>
                  <img className='ImgLocation' src={location.cover} alt={location.title} />
                  <div className='GradientLocation'></div>
                  <figcaption className='TitleLocation'>{location.title}</figcaption>
               </figure>
            </Link>
         ))}
      </section>
   );
}

export default CardLocation;