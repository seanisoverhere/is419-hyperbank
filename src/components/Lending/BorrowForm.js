import React from "react";
import Dropdown from "./Dropdown";

import { Link } from "react-router-dom";
import { MdCloudUpload } from "react-icons/md";

const industry = [
  { id: 1, name: "P2P Lending" },
  { id: 2, name: "Direct Financing" },
];

const BorrowForm = () => {
  return (
    <section>
      <form className="container w-full mt-8">
        <h1 className="text-3xl font-semibold max-w-sm px-8 text-gray-800 dark:text-white mb-4">
          Borrow
        </h1>
        <div className="space-y-6 text-lg">
          <div className="items-center w-full p-4 space-y-4 text-gray-800 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3">Type of Loan</h2>
            <div className="max-w-sm mx-auto md:w-2/3">
              <div className="relative mb-6">
                <Dropdown list={industry} />
              </div>
            </div>
          </div>
          <hr />
          <div className="items-center w-full p-4 space-y-4 text-gray-800 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3">Amount Required</h2>
            <div className="max-w-sm mx-auto md:w-2/3">
              <div className=" relative ">
                <div>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-800 sm:text-sm">$</span>
                    </div>
                    <input
                      type="text"
                      name="price"
                      id="price"
                      className="focus:ring-indigo-500 border-l border-b border-t border-gray-300 py-2 px-4 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm rounded-md"
                      placeholder="0.00"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                      <label for="currency" className="sr-only">
                        Currency
                      </label>
                      <select
                        id="Currency"
                        name="currency"
                        className="focus:ring-indigo-500 py-2 px-4 border-t border-r border-gray-300 border-b bo focus:border-indigo-500 h-full pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-r-md"
                      >
                        <option>SGD</option>
                        <option>USD</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr />
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
          <div className="items-center w-full p-4 space-y-4 text-gray-800 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3">Purpose of Loan</h2>
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
              <label className="text-gray-700" for="name">
                <textarea
                  className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  id="comment"
                  placeholder="Loan Purpose"
                  name="comment"
                  rows="5"
                  cols="40"
                ></textarea>
              </label>
            </div>
          </div>
          <hr />
          <div className="items-center w-full p-4 space-y-4 text-gray-800 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3">
              Social Media Information
            </h2>
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
              <div>
                <div class="flex relative ">
                  <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    https://
                  </span>
                  <input
                    type="text"
                    id="with-email"
                    class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="url"
                    placeholder="www.google.com"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="items-center w-full p-4 space-y-4 text-gray-800 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3">
              Upload your Company Bills
            </h2>
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
              <div>
                <label
                  className="
                        w-full
                        flex flex-col
                        items-center
                        px-4
                        py-6
                        bg-white
                        rounded-md
                        shadow-md
                        tracking-wide
                        uppercase
                        border border-blue
                        cursor-pointer
                        hover:bg-purple-600 hover:text-white
                        text-purple-600
                        ease-linear
                        transition-all
                        duration-150
                      "
                >
                  <MdCloudUpload size={50} />
                  <span className="mt-2 text-base leading-normal">
                    Select a file
                  </span>
                  <input type="file" className="hidden" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="flex items-center justify-center">
        <Link to="/lending">
          <button className="bg-indigo-500 mt-6 hover:bg-indigo-700 w-full text-white font-bold py-2 px-4 rounded-full">
            Submit Application
          </button>
        </Link>
      </div>
    </section>
  );
};

export default BorrowForm;
