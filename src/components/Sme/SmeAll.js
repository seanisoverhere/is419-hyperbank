import React from "react";

import { SmeList } from "./SmeList";
import Pfp from "../../assets/pfp.jpeg";

const SmeAll = () => {
  return (
    <div className="mx-auto px-4 sm:px-8 w-full">
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Company
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Category
                  </th>
                </tr>
              </thead>
              <tbody>
                {SmeList.map((value, key) => {
                  return (
                    <tr key={key}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm transform hover:bg-gray-100">
                        <a href={value.link} target="_blank" rel="noreferrer" className="flex items-center">
                          <div className="flex-shrink-0">
                            <div className="block relative">
                              <img
                                alt="profile"
                                src={Pfp}
                                className="mx-auto object-cover rounded-full h-10 w-10 "
                              />
                            </div>
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {value.name}
                            </p>
                          </div>
                        </a>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {value.description}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden="true"
                            className={`absolute inset-0 bg-${value.color}-200 opacity-50 rounded-full`}
                          ></span>
                          <span className="relative">{value.category}</span>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmeAll;
