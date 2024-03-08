// IMPORTS
import './home.css'

// ASSETS
import Banner from '../../components/Banner/Banner'

// COMPONENTS
import Cardlocation from '../../components/CardLocation/Cardlocation'



// Page d'acceuil > Contient une bannière et le composant Cardlocation
function Home() {
   return (
      <section>
         
         <div className='BannerCont'>
            <Banner  data={"Home"}/>
         </div>
         
         <Cardlocation />

      </section>
   )
 }
 
 export default Home
