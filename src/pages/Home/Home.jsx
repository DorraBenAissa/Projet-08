// IMPORTS
import './home.css'

// ASSETS
import Banner from '../../components/Banner/Banner'
import BannerImageHome from '../../assets/banner-home.png';

// COMPONENTS
import Cardlocation from '../../components/CardLocation/Cardlocation'



// Page d'acceuil > Contient une bannière et le composant Cardlocation
function Home() {
   const title = 'Chez vous, partout et ailleurs';
   return (
      <section>

            <Banner title={title} image={BannerImageHome}/>

         
         <Cardlocation />

      </section>
   )
 }
 
 export default Home
