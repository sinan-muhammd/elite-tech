import React from 'react';
import WebsiteIntro from '../components/WebsiteIntro';
import PhloxProducts from '../components/PhloxProducts';

import PhloxPromo from '../components/PhloxPromo';
import PhloxCollections from '../components/PhloxCollections';
import PhloxNewsletter from '../components/PhloxNewsletter';

function Homemain() {
  return (
    <div className="bg-white min-h-screen">
      <WebsiteIntro />

      <PhloxProducts />
      <PhloxPromo />
      <PhloxCollections />
      <PhloxNewsletter />
    </div>
  );
}

export default Homemain;
