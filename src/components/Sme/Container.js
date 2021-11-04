import React from "react";
import SmeAll from "./SmeAll";

import { TiSortAlphabeticallyOutline } from "react-icons/ti";
import { GiHealthPotion } from "react-icons/gi";
import { MdOutlineChair, MdOutlineFastfood } from "react-icons/md";

const Container = () => {
  return (
    <>
      <div class="flex h-screen overflow-hidden bg-white rounded-lg">
        <div class="hidden md:flex md:flex-shrink-0">
          <div class="flex flex-col w-64">
            <div class="flex flex-col flex-grow pt-5 overflow-y-auto border-r  bg-neutral-800">
              <div class="flex flex-col items-center flex-shrink-0 px-4">
                <div class="px-4 text-left focus:outline-none">
                  <h2 class="block text-xl font-medium tracking-tighter transition duration-500 ease-in-out transform cursor-pointer text-neutral-200 hover:text-neutral-200">
                    SME Advertising Platform
                  </h2>
                </div>
                <button class="hidden rounded-lg focus:outline-none focus:shadow-outline">
                  <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                    <path
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="flex flex-col flex-grow px-4 mt-5">
                <nav class="flex-1 space-y-1 bg-neutral-800">
                  <p class="px-4 pt-4 font-medium uppercase text-neutral-200">
                    Filter By
                  </p>
                  <ul>
                    <li>
                      <div
                        class="inline-flex items-center w-full px-4 py-2 mt-1 text-base transition duration-500 ease-in-out transform border rounded-lg  text-neutral-200 bg-neutral-900 border-neutral-900 focus:shadow-outline hover:bg-gray-100"
                        href="#"
                      >
                        <TiSortAlphabeticallyOutline />
                        <span class="ml-4"> All</span>
                      </div>
                    </li>
                    <li>
                      <div
                        class="inline-flex items-center w-full px-4 py-2 mt-1 text-base transition duration-500 ease-in-out transform border rounded-lg  text-neutral-200 border-neutral-800 hover:border-neutral-800 focus:shadow-outline hover:bg-neutral-900 hover:bg-gray-100"
                        href="#"
                      >
                        <MdOutlineChair />
                        <span class="ml-4">Furniture</span>
                      </div>
                    </li>
                    <li>
                      <div
                        class="inline-flex items-center w-full px-4 py-2 mt-1 text-base transition duration-500 ease-in-out transform border rounded-lg  text-neutral-200 border-neutral-800 hover:border-neutral-800 focus:shadow-outline hover:bg-neutral-900 hover:bg-gray-100"
                        href="#"
                      >
                        <GiHealthPotion />
                        <span class="ml-4">Health</span>
                      </div>
                    </li>
                    <li>
                      <div
                        class="inline-flex items-center w-full px-4 py-2 mt-1 text-base transition duration-500 ease-in-out transform border rounded-lg  text-neutral-200 border-neutral-800 hover:border-neutral-800 focus:shadow-outline hover:bg-neutral-900 hover:bg-gray-100"
                        href="#"
                      >
                        <MdOutlineFastfood />
                        <span class="ml-4">Food & Beverages</span>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col flex-1 w-0 overflow-hidden">
          <main class="relative flex-1 overflow-y-auto focus:outline-none">
            <SmeAll />
          </main>
        </div>
      </div>
    </>
  );
};

export default Container;
