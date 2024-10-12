'use client';

import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import nike_profile from '@/images/nike_profile.jpg';

const platforms = [
  { id: 1, name: 'PlayStation', logo: nike_profile },
  { id: 2, name: 'Xbox', logo: nike_profile },
  { id: 3, name: 'Nintendo Switch', logo: nike_profile },
  { id: 4, name: 'PC', logo: nike_profile },
  { id: 5, name: 'Steam', logo: nike_profile },
  { id: 6, name: 'Epic Games Store', logo: nike_profile },
  { id: 7, name: 'Google Stadia', logo: nike_profile },
  { id: 8, name: 'Apple Arcade', logo: nike_profile },
  { id: 9, name: 'Amazon Luna', logo: nike_profile },
  { id: 10, name: 'GeForce Now', logo: nike_profile },
  { id: 11, name: 'PlayStation Now', logo: nike_profile },
  { id: 12, name: 'Xbox Game Pass', logo: nike_profile },
  { id: 13, name: 'Origin', logo: nike_profile },
  { id: 14, name: 'Uplay', logo: nike_profile },
  { id: 15, name: 'Itch.io', logo: nike_profile },
  { id: 16, name: 'GOG', logo: nike_profile },
];

const SectionPlatformExplorer = () => {
  return (
    <div className="mx-auto w-full max-w-4xl bg-white p-6">
      <h2 className="mb-6 text-center text-3xl font-bold text-black">
        Explore By Platforms
      </h2>
      <Carousel className="w-full" plugins={[Autoplay({ delay: 2000 })]}>
        <CarouselContent>
          {platforms.map((platform) => (
            <CarouselItem
              key={platform?.id}
              className="md:basis-1/3 lg:basis-1/5"
            >
              <Card className="bg-gray-100">
                <CardContent className="flex items-center justify-center p-6">
                  <Image
                    src={nike_profile}
                    alt={`${platform.name} logo`}
                    width={100}
                    height={100}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default SectionPlatformExplorer;
