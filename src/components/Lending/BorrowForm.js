import React from "react";

import Dropdown from "./Dropdown";

const loan = [
  { id: 1, name: "$25,000 - $49,999" },
  { id: 2, name: "$50,000 - $99,999" },
  { id: 3, name: "$100,000 - $199,999" },
  { id: 4, name: "$200,000 - $499,999" },
  { id: 5, name: "$500,000+" },
];

const BorrowForm = () => {
  return (
    <section>
      <form className="container w-full">
        <div className="space-y-6 bg-white">
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3">Amount Required</h2>
            <div className="max-w-sm mx-auto md:w-2/3">
              <div className=" relative ">
                <Dropdown list={loan} />
              </div>
            </div>
          </div>

          <hr />
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3">Loan Period (Months)</h2>
            <div className="max-w-sm mx-auto md:w-2/3">
              <div className="relative">
                <input
                  type="number"
                  id="user-info-name"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Months"
                />
              </div>
            </div>
          </div>

          <hr />
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3">Contact Information</h2>
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
              <div>
                <div className="relative">
                  <input
                    type="text"
                    id="user-info-name"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Company Name"
                  />
                </div>
              </div>
              <div>
                <div className="relative">
                  <input
                    type="text"
                    id="user-info-phone"
                    className="mb-4 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Business Phone Number"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="user-info-phone"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Business Email"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default BorrowForm;
