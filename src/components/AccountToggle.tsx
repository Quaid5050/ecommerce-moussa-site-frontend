'use client';

import { Menu, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react';

import avatar from '@/images/avatar.png';
import ButtonCircle3 from '@/shared/Button/ButtonCircle3';

const AccountToggle = () => {
  return (
    <Menu>
      <div className="relative flex items-center  gap-2 pl-3">
        <Menu.Button as="div">
          <ButtonCircle3 className="overflow-hidden bg-gray" size="w-10 h-10">
            <Image
              src={avatar}
              alt="avatar"
              className="size-full object-cover object-center"
            />
          </ButtonCircle3>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="divide-gray-100 absolute right-0 top-10 mt-2 w-72  origin-top-right divide-y rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="flex flex-col">
              <div className="p-4 text-center">
                <h2 className="text-gray-800 text-lg font-semibold">Welcome</h2>

                {/* Google and Facebook Login Buttons */}
                <div className="mt-4 flex flex-col">
                  <Link
                    href="/login"
                    className="hover:bg-gray-100 mb-2 flex items-center justify-center rounded-md border border-black py-2 transition duration-150 ease-in-out"
                  >
                    <span className="mr-2">Continue with Google</span>
                  </Link>
                  <Link
                    href="/login"
                    className="hover:bg-gray-100 mb-4 flex items-center justify-center rounded-md border border-black py-2 transition duration-150 ease-in-out"
                  >
                    <span className="mr-2">Continue with Facebook</span>
                  </Link>
                </div>

                <Link href="/login">
                  <div className="mb-2 w-full rounded-md bg-primary py-2 text-white transition duration-150 ease-in-out hover:bg-primary/80">
                    Sign In
                  </div>
                </Link>

                <div className="text-gray-500 text-sm">
                  <p>Don't have an account?</p>
                  <Link
                    href="/signup"
                    className="text-primary hover:text-primary/80 hover:underline"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </Menu.Items>
        </Transition>
        <Link href="/signup" className="hidden text-sm lg:block">
          Clark Kent
        </Link>
      </div>
    </Menu>
  );
};

export default AccountToggle;
