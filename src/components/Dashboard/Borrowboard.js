import React from "react";
import { Link } from "react-router-dom";

const Borrowboard = () => {
  return (
    <div className="flex items-start justify-between mt-12">
      <div className="flex flex-col w-full md:space-y-4">
        <div className="h-screen pb-24 px-4 md:px-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">
              Good Afternoon, Sean
            </h1>
            <Link to="/borrow">
              <button className="bg-indigo-500 hover:bg-indigo-700 w-32 text-white font-bold py-2 px-4 rounded-full">
                Borrow
              </button>
            </Link>
          </div>
          <h2 className="text-md text-gray-600 mb-4">
            Here's your loan at a glance
          </h2>
          <p className="mb-8">
            The monthly repayment amount will be deducted from your account
            automatically
          </p>
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">
            Overview
          </h1>
          <div className="flex my-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
            <div className="w-full md:w-6/12">
              <div className="shadow-lg w-full rounded-lg bg-white dark:bg-gray-700 relative overflow-hidden">
                <div className="w-full h-full block">
                  <div className="flex items-center justify-between px-4 py-6 space-x-4">
                    <div className="flex items-center">
                      <span className="rounded-full relative p-5 bg-green-100">
                        <svg
                          width="40"
                          fill="currentColor"
                          height="40"
                          className="text-green-500 h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"></path>
                        </svg>
                      </span>
                      <p className="text-sm text-gray-700 dark:text-white ml-2 font-semibold border-b border-gray-200">
                        Total Repayment
                      </p>
                    </div>
                    <div className="border-b border-gray-200 mt-1 md:mt-0 text-black dark:text-white font-bold text-xl">
                      $16,453.39
                    </div>
                  </div>
                  <div className="w-full h-3 bg-gray-100">
                    <div className="w-2/5 h-full text-center text-xs text-white bg-green-400"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12">
              <div className="shadow-lg w-full rounded-lg bg-white dark:bg-gray-700 relative overflow-hidden">
                <div className="w-full h-full block">
                  <div className="flex items-center justify-between px-4 py-6 space-x-4">
                    <div className="flex items-center">
                      <span className="rounded-full relative p-5 bg-yellow-100">
                        <svg
                          width="40"
                          fill="currentColor"
                          height="40"
                          className="text-yellow-500 h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"></path>
                        </svg>
                      </span>
                      <p className="text-sm text-gray-700 dark:text-white ml-2 font-semibold border-b border-gray-200">
                        Total Loan
                      </p>
                    </div>
                    <div className="border-b border-gray-200 mt-1 md:mt-0 text-black dark:text-white font-bold text-xl">
                      $50,000.00
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center w-full md:w-1/2 space-x-4">
              <div className="w-1/2 ">
                <div className="shadow-lg rounded-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                  <p className="text-2xl text-black dark:text-white font-bold">
                    10/24
                    <span className="text-xs md:text-lg pl-2 text-gray-600 dark:text-white font-bold">
                      months
                    </span>
                  </p>

                  <p className="text-gray-400 text-xs">Repayment Period</p>
                </div>
              </div>
              <div className="w-1/2">
                <div className="shadow-lg rounded-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                  <p className="text-2xl text-black dark:text-white font-bold">
                    $3893.76
                  </p>
                  <p className="text-gray-400 text-xs">Monthly Payment</p>
                </div>
              </div>
            </div>
            <div className="flex items-center w-full md:w-1/2 space-x-4">
              <div className="w-1/2 ">
                <div className="shadow-lg rounded-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                  <p className="text-2xl text-black dark:text-white font-bold">
                    9.32%
                  </p>

                  <p className="text-gray-400 text-xs">Interest Rate</p>
                </div>
              </div>
              <div className="w-1/2">
                <div className="shadow-lg rounded-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                  <p className="text-2xl text-black dark:text-white font-bold">
                    $194.13
                  </p>
                  <p className="text-gray-400 text-xs">Monthly Interest</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Borrowboard;
