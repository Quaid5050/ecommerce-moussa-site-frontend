'use client';

import React, { useEffect, useRef, useState } from 'react';

const SectionTopHeader = () => {
  const categories = [
    {
      name: 'Electronics',
      subcategories: ['Phones', 'Laptops', 'Tablets', 'Accessories'],
    },
    {
      name: 'Clothing',
      subcategories: ['Men', 'Women', 'Kids', 'Accessories'],
    },
    {
      name: 'Home & Garden',
      subcategories: ['Furniture', 'Decor', 'Kitchen', 'Outdoor'],
    },
    {
      name: 'Sports',
      subcategories: ['Football', 'Basketball', 'Tennis', 'Golf'],
    },
  ];

  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (category: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveCategory(category);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveCategory(null);
    }, 300); // Delay to allow moving to subcategory container
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <nav className="bg-gray-800 relative text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            {categories.map((category) => (
              <div
                key={category.name}
                className="relative flex items-center"
                onMouseEnter={() => handleMouseEnter(category.name)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className="hover:bg-gray-700 focus:bg-gray-700 rounded-md px-3 py-2 text-sm font-medium text-black focus:outline-none"
                >
                  {category.name}
                </button>
                {activeCategory === category.name && (
                  <div
                    className="absolute left-0 top-full z-10 w-48 rounded-md bg-white py-1 shadow-lg"
                    onMouseEnter={() => handleMouseEnter(category.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {category.subcategories.map((subcategory) => (
                      <button
                        key={subcategory}
                        type="button"
                        className="hover:bg-gray-100 block w-full px-4 py-2 text-left text-sm text-black"
                      >
                        {subcategory}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SectionTopHeader;
