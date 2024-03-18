// IMPORTS
import './home.css'

// ASSETS
import Banner from '../../components/Banner/Banner'
import BannerImageHome from '../../assets/banner-home.png';

// COMPONENTS
import Cardlocation from '../../components/CardLocation/Cardlocation'



// Page d'acceuil > Contient une bannière et le composant Cardlocation
function Home() {
   return (
      <section>
         
         <div className='BannerCont'>
            <Banner  image={BannerImageHome}/>
         </div>
         
         <Cardlocation />

      </section>
   )
 }
 
 export default Home
