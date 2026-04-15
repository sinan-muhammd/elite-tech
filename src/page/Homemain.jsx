import React from 'react';
import PhloxHero from '../components/PhloxHero';
import PhloxProducts from '../components/PhloxProducts';

import PhloxPromo from '../components/PhloxPromo';
import PhloxCollections from '../components/PhloxCollections';
import PhloxNewsletter from '../components/PhloxNewsletter';

function Homemain() {
  return (
    <div className="bg-white min-h-screen">
      <PhloxHero />

      <PhloxProducts />
      <PhloxPromo />
      <PhloxCollections />
      <PhloxNewsletter />
    </div>
  );
}

export default Homemain;
