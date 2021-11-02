import React from "react";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <section>
      <div className="relative items-center w-full lg:py-40 py-12 mx-auto ">
        <div className="pb-5">
          <h3 className="sm:text-5xl text-3xl font-bold leading-6 text-neutral-600">
            Services Available
          </h3>
        </div>
        <div className="relative mx-auto w-full">
          <div className="grid max-w-lg gap-12 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
            <div className="flex flex-col mb-12 overflow-hidden cursor-pointer">
              <Link to="/lending">
                <div className="flex-shrink-0">
                  <img
                    className="object-cover w-full h-48 rounded-lg"
                    src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                    alt=""
                  />
                </div>

                <div className="flex flex-col justify-between flex-1 bg-white px-6 pb-6 min-h-full">
                  <div className="flex-1">
                    <div className="block mt-2 space-y-6 pt-6">
                      <h3 class="text-2xl font-semibold leading-none tracking-tighter">
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
            <div className="flex flex-col mb-12 overflow-hidden cursor-pointer">
              <Link to="/advisory">
                <div className="flex-shrink-0">
                  <img
                    className="object-cover w-full h-48 rounded-lg"
                    src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2074&q=80"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-between flex-1 bg-white px-6 pb-6 min-h-full">
                  <div className="flex-1">
                    <div className="block mt-2 space-y-6 pt-6">
                      <h3 class="text-2xl font-semibold leading-none tracking-tighter">
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

            <div className="flex flex-col mb-12 overflow-hidden cursor-pointer">
              <Link to="/sme">
                <div className="flex-shrink-0">
                  <img
                    className="object-cover w-full h-48 rounded-lg"
                    src="https://images.unsplash.com/photo-1513757378314-e46255f6ed16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                    alt=""
                  />
                </div>

                <div className="flex flex-col justify-between flex-1 bg-white px-6 pb-6 min-h-full">
                  <div className="flex-1">
                    <div className="block mt-2 space-y-6 pt-6">
                      <h3 class="text-2xl font-semibold leading-none tracking-tighter">
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
