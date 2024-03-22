// IMPORTS
import { useParams } from 'react-router-dom';
import './location.css';
import { useFetch } from '../../useFetch';


// COMPONENTS
import LoadingScreen from '../../components/Loading/index';
import Error from '../../pages/Error/Error';
import Slider from '../../components/Slider/Slider';
import Rating from '../../components/Rating/Rating';
import Collapses from '../../components/Collapse/Collapse';

// Page Logement > Contient le Composant Slider, compo Rating et le composant Collapsedescription ainsi que les infos du logement et du propriétaire
function Logement() {

   const DataLocation = useFetch(window.location.origin + '/logements.json');

   const { id } = useParams(); // Récupère l'id du logement dans l'url

   let datas;
   if (DataLocation.fetchedData) {
      datas = DataLocation.fetchedData.find(location => location.id === id);
   }
   
   

   /* Checking if the data is loading and if it is, it will display a loading screen. */
	if (DataLocation.isLoading) {
		return <LoadingScreen />
	}

	/* Checking if there is an error and if there is, it will display the Error component. */
	if (DataLocation.error) {
		return <Error />
	}

   // Crréer un JSON pour le passer en props au composant Collapse
   let data;
      data = [
         {
            title: 'Description',
            text: datas.description
         },
         {
            title: 'Equipements',
            //Créer une liste avec les équipements
            text: datas.equipments.map(equipment => (
               <li className='TextCollapse' key={equipment}>{equipment}</li>
            ))
         }
      ]

   return ( 
      <>
         {datas.pictures && <Slider images={datas.pictures} />}

         <section className='ContInfo'>

            <div className='ContInfoLogement'>
               <h1 className='TittleInfo'>{datas.title}</h1>
               <p className='TextInfo'>{datas.location}</p>
               <ul className='TagUl'>
                  {datas.tags && datas.tags.map(tag => (
                     <li className='TagLi' key={tag}>{tag}</li>
                  ))}
               </ul>
            </div>

            <div className='ContInfoOwner'>
               <div className='TEST'>
                  <p className='TextInfoOwner'>{datas.host.name}</p>
                  <img className='ImgOwner' src={datas.host.picture} alt={datas.host.name} />
               </div>

               <Rating rating={datas.rating} />
            </div>

         </section>

         <Collapses data={data}/>

      </>
  );
}


export default Logement;