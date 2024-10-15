import React from 'react';

import SectionBestDeals from './SectionBestDeals';
import SectionBrands from './SectionBrands';
import SectionHeader from './SectionHeader';
import SectionPlatformExplorer from './SectionPlatformExplorer';
import SectionProducts from './SectionProducts';
import SectionTopHeader from './SectionTopHeader';

const page = () => {
  return (
      <div>
        <div className="my-3">
          <SectionTopHeader />
        </div>
        <div className="my-7">
          <SectionHeader />
        </div>

        <div className="mb-24">
          <SectionBestDeals />
        </div>

        <div className="mb-28">
          <SectionPlatformExplorer />
        </div>

        <div className="mb-32">
          <SectionProducts />
        </div>

        <div className="mb-32">
          <SectionBrands />
        </div>
      </div>

  );
};

export default page;
