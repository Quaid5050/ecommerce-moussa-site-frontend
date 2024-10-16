'use client';

import React from 'react';

import { productsResponse } from '@/data/products';
import Slider from '@/shared/Slider/Slider';

import ProductCard from './ProductCard';

const data = productsResponse?.products.slice(1, 9);

const ProductSlider = () => {
  return (
    <div className="">
      <Slider
        itemPerRow={4}
        data={data}
        renderItem={(item) => {
          if (!item) {
            return null;
          }
          return (
            <ProductCard showPrevPrice product={item} className="bg-white" />
          );
        }}
      />
    </div>
  );
};

export default ProductSlider;
