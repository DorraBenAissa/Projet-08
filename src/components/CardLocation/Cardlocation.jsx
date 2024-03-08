// IMPORTS
import { Link } from 'react-router-dom'
import './CardLocation.css'
import { useFetch } from '../../useFetch'
import LoadingScreen from '../../components/Loading/index';
import Error from '../../pages/Error/Error';

// Composant CardLocation > Génère des cards avec les images des locations, dynamiquement depuis le fichier JSON
function CardLocation() {
   const DataLocation = useFetch(window.location.origin + '/logements.json');

   if (DataLocation.isLoading) {
		return <LoadingScreen />
	}

	/* Checking if there is an error and if there is, it will display the Error component. */
	if (DataLocation.error) {
		return <Error />
	}

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