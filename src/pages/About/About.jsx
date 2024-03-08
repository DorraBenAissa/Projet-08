// IMPORTS
import './about.css'

// COMPONENTS
import Collapses from '../../components/Collapse/Collapse'

// ASSETS
import Banner from '../../components/Banner/Banner'
import data from '../../assets/collapse.json'



// Page About > Contient une bannière et le composant Collapsehome
function About() {
   return (
      <section>
         <Banner />
         <Collapses data={data}/>
      </section>
   )
 }
 
 export default About;
