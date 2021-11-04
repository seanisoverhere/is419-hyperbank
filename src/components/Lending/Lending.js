import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";

import BorrowForm from "./BorrowForm";

const Lending = () => {

  let [isOpen, setIsOpen] = useState(false)
  let [isOpen2, setIsOpen2] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  function openModal2() {
    setIsOpen2(true)
  }

  function closeModal2() {
    setIsOpen2(false)
  }

  return (
    <>
      <div className="w-full pt-16 mx-auto lg:px-28">
        <div className="flex flex-col w-full mx-auto mb-2 prose text-left prose-md">
          <div className="mb-5 border-b border-gray-200">
            <div className="flex flex-wrap items-baseline -mt-2">
              <p className="my-1 text-3xl font-black">Peer-to-Peer Lending</p>
            </div>
          </div>
          <p className="text-md mb-3">
            The peer-to-peer lending industry is experiencing tremendous growth,
            benefiting investors as well as borrowers. HyperBank vigorously
            address the associated challenges of this dynamic industry by
            implementing our very own Credit Risk Assessment Metrics™.
          </p>
          <p className="text-md">
            With HyperBank, you can finance your SMEs even by lending from us
            without a hassle. Our platform offers. Our platform also enables
            you, the investor, to not only benefit from gaining access to
            attractive investment opportunities, but also to participate in the
            expansion of an innovative fixed income asset class.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <section>
          <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24">
            <div className="grid grid-cols-1 ">
              <div className="w-full max-w-lg mx-auto my-4 bg-white shadow-xl rounded-xl">
                <div className="p-6 lg:text-center">
                  <span className="flex justify-center text-indigo-500">
                    <GiReceiveMoney size={80} />
                  </span>
                  <h4 className="mt-4 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl ">
                    I am a Borrower
                  </h4>
                  <p className="mt-3 text-base leading-relaxed text-gray-700">
                    I would like to finance my SME for business opportunities
                  </p>
                  <p></p>
                  <div className="mt-6">
                    <button
                      onClick={openModal}
                      className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-indigo-400 rounded-xl hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Borrow Money
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
            <div className="grid grid-cols-1 ">
              <div className="w-full max-w-lg mx-auto my-4 bg-white shadow-xl rounded-xl">
                <div className="p-6 lg:text-center">
                  <span className="flex justify-center text-indigo-500">
                    <GiPayMoney size={80} />
                  </span>
                  <h4 className="mt-4 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl ">
                    I am a Lender/Investor
                  </h4>
                  <p className="mt-3 text-base leading-relaxed text-gray-700">
                    I would like to diversify my investments with returns
                  </p>
                  <p></p>
                  <div className="mt-6">
                    <button
                      onClick={openModal2}
                      className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-indigo-400 rounded-xl hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Lend Money
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto "
          onClose={closeModal}
        >
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Finance Your Loan
                </Dialog.Title>
                <div className="mt-2">
                  <BorrowForm />
                </div>

                <div className="mt-4 flex justify-end mr-14">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-700"
                    onClick={closeModal}
                  >
                    Submit Application
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      <Transition appear show={isOpen2} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal2}
        >
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Lending Money
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    If you'd like to be an investor, drop us an email at hello@hyperbank.com and we will get in touch with you!
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-bold text-white bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-700"
                    onClick={closeModal2}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Lending;
