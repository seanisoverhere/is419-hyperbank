import React from "react";

import Advisory from "../../assets/advisory.png";
import Pricing from "./Pricing";

const Cashflow = () => {
  return (
    <div className="container px-6 py-10 mx-auto ">
      <div className="flex flex-col space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center lg:space-x-6">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white lg:text-5xl">
              Cash Flow Management Service
            </h1>
            <p className="mt-5 text-gray-600 dark:text-gray-300 text-lg">
              Let our team of ACCA certified accountants manage your company's
              cash flow.
            </p>
            <div className="grid gap-6 mt-8 sm:grid-cols-2">
              <div className="flex items-center space-x-5 text-black dark:text-gray-200">
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-indigo-500 text-white">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="h-4 w-4"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                  </svg>
                </div>

                <span>Risk Analysis</span>
              </div>

              <div className="flex items-center space-x-5 text-black dark:text-gray-200">
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-indigo-500 text-white">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="h-4 w-4"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                  </svg>
                </div>

                <span>Expenditure Monitoring</span>
              </div>

              <div className="flex items-center space-x-5 text-black dark:text-gray-200">
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-indigo-500 text-white">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="h-4 w-4"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                  </svg>
                </div>

                <span>Cash Flow Projection</span>
              </div>

              <div className="flex items-center space-x-5 text-black dark:text-gray-200">
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-indigo-500 text-white">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="h-4 w-4"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                  </svg>
                </div>

                <span>Cash Flow Budgeting</span>
              </div>

              <div className="flex items-center space-x-5 text-black dark:text-gray-200">
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-indigo-500 text-white">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="h-4 w-4"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                  </svg>
                </div>

                <span>Income Tracking</span>
              </div>

              <div className="flex items-center space-x-5 text-black dark:text-gray-200">
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-indigo-500 text-white">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="h-4 w-4"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                  </svg>
                </div>

                <span>Business Planning</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            className="object-cover w-full h-full max-w-2xl rounded-md"
            src={Advisory}
            alt="Cash Flow"
          />
        </div>
      </div>
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white lg:text-4xl mb-10">
        Get In Touch
      </h1>
      <Pricing />
    </div>
  );
};

export default Cashflow;
