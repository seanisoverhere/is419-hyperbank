import React from "react";

const Banner = () => {
  return (
    <section className="w-full bg-gray-200 px-4 py-12 mx-auto sm:py-16 sm:px-6 lg:px-8 lg:py-20 rounded-lg">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold leading-9 text-gray-500 sm:text-4xl sm:leading-10">
          We are licensed by the MAS and trusted by hundreds of SMEs in
          Singapore!
        </h2>
        <p className="mt-3 text-lg leading-7 sm:mt-4 text-gray-600">
          Feel confident in choosing our services for your SME needs
        </p>
      </div>
      <div className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
        <div>
          <p className="text-5xl font-extrabold leading-none text-gray-600">
            119+
          </p>
          <p className="mt-2 text-base font-medium leading-6 text-black">
            Lenders
          </p>
        </div>
        <div className="mt-10 sm:mt-0">
          <p className="text-5xl font-extrabold leading-none text-gray-600">
            82+
          </p>
          <p className="mt-2 text-base font-medium leading-6 text-black">
            SMEs listed
          </p>
        </div>
        <div className="mt-10 sm:mt-0">
          <p className="text-5xl font-extrabold leading-none text-gray-600">
            85+
          </p>
          <p className="mt-2 text-base font-medium leading-6 text-black">
            Cash Flow Managed
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
