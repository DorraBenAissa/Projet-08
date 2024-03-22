// IMPORTS
import './about.css'

// COMPONENTS
import Collapses from '../../components/Collapse/Collapse'

// ASSETS
import Banner from '../../components/Banner/Banner'

import data from '../../assets/collapse.json'

import BannerImageAbout from '../../assets/banner-about.png';


// Page About > Contient une bannière et le composant Collapsehome
function About() {
   return (
      <section>
         <Banner image = {BannerImageAbout}/>
         <Collapses data= {data}/>
      </section>
   )
 }
 
 export default About;
