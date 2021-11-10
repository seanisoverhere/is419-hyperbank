import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const industry = [
  { id: 1, name: "Energy" },
  { id: 2, name: "Manufacturing" },
  { id: 3, name: "Food & Beverages" },
  { id: 4, name: "Healthcare" },
  { id: 5, name: "Chemical" },
  { id: 6, name: "Electronics" },
  { id: 7, name: "Media" },
];

const BorrowForm = () => {
  return (
    <section>
      <form className="container w-full mt-8">
        <h1 className="text-3xl font-semibold max-w-sm px-8 text-gray-800 dark:text-white mb-4">
          Invest
        </h1>
        <div className="space-y-6 text-lg">
          <div className="items-center w-full p-4 space-y-4 text-gray-800 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3">Industry</h2>
            <div className="max-w-sm mx-auto md:w-2/3">
              <div className="relative mb-6">
                <Dropdown list={industry} />
              </div>
              <h3 className="text-lg px-1 text-green-800">
                Interest Rate: 11.2%
              </h3>
            </div>
          </div>
          <hr />
          <div className="items-center w-full p-4 space-y-4 text-gray-800 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3">Loan Amount ($)</h2>
            <div className="max-w-sm mx-auto md:w-2/3">
              <div className="relative">
                <input
                  type="number"
                  id="user-info-name"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Amount"
                />
              </div>
            </div>
          </div>
          <div className="items-center w-full p-4 space-y-4 text-gray-800 md:inline-flex md:space-y-0">
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
          <div className="flex items-center justify-center">
            <Link to="/lending">
              <button className="bg-indigo-500 hover:bg-indigo-700 w-full text-white font-bold py-2 px-4 rounded-full">
                Submit Application
              </button>
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
};

export default BorrowForm;
