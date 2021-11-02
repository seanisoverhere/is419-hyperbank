import React from "react";
import Hero from "../../assets/hero.png";

const Main = () => {
  return (
    <section class="body-font">
      <div class="container mx-auto flex px-5 md:flex-row flex-col items-center">
        <div class="lg:flex-shrink md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-7xl text-3xl mb-4 font-black text-gray-900">
            Supercharge your Finance
          </h1>
          <p class="mb-8 sm:text-lg leading-relaxed">
            Your one-stop platform for SME financing - you can advertise your
            SME to boost revenue, have an expert manage your cash flow, and
            borrow money from others through our P2P Platform!
          </p>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg">
              Learn More 
            </button>
          </div>
        </div>
        <div class="flex flex-grow lg:w-1/2">
          <img
            class="object-cover object-center rounded"
            src={Hero}
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
};

export default Main;
