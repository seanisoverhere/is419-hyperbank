import React from "react";
import { Link } from "react-router-dom";
import Ad from "../../assets/Ad.jpg"
import CashFlow from "../../assets/cashFlow.png";
import Lending from "../../assets/lending.jpg";


const Carousel = () => {
  return (
    <section>
      <div className="relative items-center w-full lg:py-32 py-12 mx-auto ">
        <div className="pb-5">
          <h3 className="sm:text-5xl text-3xl font-bold lg:text-left text-center leading-6 text-neutral-600">
            Services Available
          </h3>
        </div>
        <div className="relative mx-auto w-full ">
          <div className="grid max-w-lg gap-12 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
            <div className="flex flex-col mb-12 overflow-hidden cursor-pointer transform duration-300 hover:scale-105 hover:shadow-lg">
              <Link to="/lending">
                <div className="flex-shrink-0">
                  <img
                    className="object-contain w-full bg-purple-100 h-48 rounded-lg"
                    src={Lending}
                    alt="Lending"
                  />
                </div>

                <div className="flex flex-col justify-between flex-1 bg-white px-6 pb-6 min-h-full">
                  <div className="flex-1">
                    <div className="block mt-2 space-y-6 pt-6">
                      <h3 className="text-2xl font-semibold leading-none tracking-tigh.ll\ter">
                        Peer-to-Peer Lending
                      </h3>
                      <p className="text-lg font-normal">
                        Having difficulties financing for your SME? Our platform allows you to borrow money from individuals, as well as us! Your credit risk rating will be gauged based on HyperBank's Credit Risk Assessment Metrics™
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex flex-col mb-12 overflow-hidden cursor-pointer transform duration-300 hover:scale-105 hover:shadow-lg">
              <Link to="/advisory">
                <div className="flex-shrink-0">
                  <img
                    className="object-contain w-full bg-purple-100 h-48 rounded-lg"
                    src={CashFlow}
                    alt="advisory"
                  />
                </div>
                <div className="flex flex-col justify-between flex-1 bg-white px-6 pb-6 min-h-full">
                  <div className="flex-1">
                    <div className="block mt-2 space-y-6 pt-6">
                      <h3 className="text-2xl font-semibold leading-none tracking-tighter">
                        Cash Flow Management
                      </h3>
                      <p className="text-lg font-normal">
                        Having difficulties managing your cash flow? Speak to our experts today to manage your company's cash flow!
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="flex flex-col mb-12 overflow-hidden cursor-pointer transform duration-300 hover:scale-105 hover:shadow-lg">
              <Link to="/sme">
                <div className="flex-shrink-0">
                  <img
                    className="object-contain bg-purple-100 w-full h-48 rounded-lg"
                    src={Ad}
                    alt="advertisement"
                  />
                </div>

                <div className="flex flex-col justify-between flex-1 bg-white px-6 pb-6 min-h-full">
                  <div className="flex-1">
                    <div className="block mt-2 space-y-6 pt-6">
                      <h3 className="text-2xl font-semibold leading-none tracking-tighter">
                        SME Advertisement
                      </h3>
                      <p className="text-lg font-normal">
                        Want a platform to publicise your company's products? Look no further! You are automatically listed once you use our lending or advisory services!
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
