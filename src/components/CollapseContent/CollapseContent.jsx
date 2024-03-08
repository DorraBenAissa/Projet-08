// IMPORTS
import React from 'react';
//import './collapse-content.css'; // Ajoutez le style pour le contenu du collapse si nécessaire

// COMPONENTS
import Collapse from '../../components/Collapse/Collapse';

// ASSETS
import CollapseData from '../../assets/collapse.json';

function CollapseContent() {
   const [firstData] = CollapseData; // Sélectionnez le premier (et unique) élément du tableau

   return (
      <section>
         {firstData && <Collapse data={firstData} />}
      </section>
   );
}

export default CollapseContent;