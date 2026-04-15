import React from 'react';
import JoltHero from '../components/JoltHero';
import JoltProducts from '../components/JoltProducts';

import JoltPromo from '../components/JoltPromo';
import JoltCollections from '../components/JoltCollections';
import JoltNewsletter from '../components/JoltNewsletter';

function Homemain() {
  return (
    <div className="bg-white min-h-screen">
      <JoltHero />
   
      <JoltProducts />
      <JoltPromo />
      <JoltCollections />
      <JoltNewsletter />
    </div>
  );
}

export default Homemain;
