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
    <nav className="relative bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {categories.map((category) => (
              <div
                key={category.name}
                className="relative flex items-center"
                onMouseEnter={() => handleMouseEnter(category.name)}
                onMouseLeave={handleMouseLeave}
              >
                <button type='button' className="px-3 py-2 text-black rounded-md text-sm font-medium hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                  {category.name}
                </button>
                {activeCategory === category.name && (
                  <div
                    className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg py-1 z-10"
                    onMouseEnter={() => handleMouseEnter(category.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {category.subcategories.map((subcategory) => (
                      <a
                        key={subcategory}
                        href="#"
                        className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                      >
                        {subcategory}
                      </a>
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