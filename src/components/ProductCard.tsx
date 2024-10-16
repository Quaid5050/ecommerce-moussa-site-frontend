import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md'; // Importing cart icon

import type { Product } from '@/types/product';

import LikeButton from './LikeButton';

interface ProductCardProps {
  product: Product;
  className?: string;
  showPrevPrice?: boolean;
}

const ProductCard: FC<ProductCardProps> = ({
  product,
  className,
  // showPrevPrice = false,
}) => {
  return (
    <div
      className={`transitionEffect relative rounded-2xl p-3 shadow-md ${className}`}
    >
      <div className="h-[250px] w-full overflow-hidden rounded-2xl lg:h-[220px] 2xl:h-[300px]">
        {product.isPreorder && (
          <div className="absolute left-6 top-0 rounded-b-lg bg-primary px-3 py-2 text-sm uppercase text-white shadow-md">
            Preorder
          </div>
        )}
        <LikeButton className="absolute right-2 top-2" />
        <Link
          className="h-[250px] w-full lg:h-[220px]"
          href={`/products/${product.kinguinId}`}
        >
          {product?.coverImage ? (
            <Image
              height={200}
              width={200}
              loading="eager"
              src={product.coverImage}
              alt={`${product.name} cover photo`}
              className="size-full object-cover object-bottom"
            />
          ) : (
            <div
              role="status"
              className="mb-5 flex size-full items-center justify-center rounded-lg bg-gray"
            >
              {/* Skeleton for the image */}
              <div className="mb-5 flex h-72 w-full animate-ping items-center justify-center rounded-lg">
                <svg
                  className="stroke-gray-400 h-16 w-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  // xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.2352 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          )}
        </Link>
      </div>
      {/* Content and price/cart area */}
      <div className="mb-10 mt-5">
        {/* Adds space for the fixed price and button */}
        <div className="flex items-center justify-between">
          {/* Use line-clamp to truncate product names cleanly */}
          <h3 className="line-clamp-2 text-base font-semibold lg:line-clamp-1 lg:text-sm">
            {product.name}
          </h3>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-neutral-500">{product.platform}</p>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-3 flex items-center justify-between px-3">
        <p className="text-lg font-medium text-primary">
          ${product.sellPrice?.toFixed(2) || product.price?.toFixed(2)}
        </p>
        <button
          type="button"
          className="hover:bg-primary-dark flex size-10 items-center justify-center rounded-full bg-primary text-white transition"
          aria-label="Add to Cart"
        >
          <MdOutlineShoppingCart size={20} /> {/* Cart Icon */}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
