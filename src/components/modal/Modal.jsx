import { Dialog, Transition } from "@headlessui/react";

import { Fragment } from "react";
import { MdClose } from "react-icons/md";
import * as Icons from "react-icons/md";


export const Modal = ({isOpen, closeModal, title, children, hiddenClose, position, border, customHeader, icon}) => {  
  
  const Icon = ({ icon, ...props }) => {
    const Icon = Icons[icon];
    return <Icon {...props} />;
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-[1000] overflow-y-auto"
          onClose={closeModal}
        >
          <div
            className={`flex min-h-screen 
                        ${
                          position === "top"
                            ? "items-start"
                            : position === "bottom"
                            ? "items-end"
                            : "items-center"
                        }`}
          >
            <div
              className="fixed inset-0 bg-black/30"
              aria-hidden="true"
              onClick={closeModal}
            />

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in-out duration-200"
              leaveFrom="opacity-100 scale-95"
              leaveTo="opacity-0 scale-100"
            >
              <div
                className={`relative mx-auto w-full inline-block text-left align-middle transition-all transform max-w-md`}
              >
                <div className="bg-white shadow-xl rounded-lg">
                  <div
                    className={`w-full flex justify-between items-center px-6 py-6 ${
                      border ? "border-b-2 border-gray-300" : ""
                    }`}
                  >
                    {customHeader}

                    {title && (
                      <Dialog.Title
                        as="h3"
                        className={`text-xl flex items-center gap-2 font-semibold leading-6 text-gray-700${
                          hiddenClose ? " w-full" : ""
                        }`}
                      >
                        {icon && (
                          <Icon 
                            className="w-8 h-8 text-red-500"
                            aria-hidden="true"
                            icon={icon || ''}
                          />
                        )}
                        
                        {title}                        
                      </Dialog.Title>
                    )}

                    {!hiddenClose && (     
                        <button onClick={closeModal}>
                            <MdClose
                                className="text-gray-500 w-5 h-5 cursor-pointer"
                            />
                        </button>             
                    )}
                  </div>

                  <div className="w-full">{children}</div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
