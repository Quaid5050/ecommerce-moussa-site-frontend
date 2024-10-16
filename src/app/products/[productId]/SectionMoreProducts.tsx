import React from 'react';

import ProductCard from '@/components/ProductCard';
import { productsResponse } from '@/data/products';
import Heading from '@/shared/Heading/Heading';

const SectionMoreProducts = () => {
  const products = productsResponse?.products.slice(13, 19);
  return (
    <div>
      <Heading className="mb-0">Explore more products</Heading>
      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product?.kinguinId}
            product={product}
            className="border-neutral-300"
          />
        ))}
      </div>
    </div>
  );
};

export default SectionMoreProducts;
