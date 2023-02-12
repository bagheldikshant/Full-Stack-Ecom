import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Navbar from "@/components/Navbar";
// import GeneralDashboard from "@/components/dashboard/GeneralDashboard";
import {
  Bars3Icon,
  CalendarIcon,
  ShoppingCartIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  XMarkIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import Products from "./Products";

const navigation = [
  { name: "Products", href: "/products", icon: HomeIcon, current: true },
  { name: "Categories", href: "#", icon: UsersIcon, current: false },
  { name: "Orders", href: "#", icon: FolderIcon, current: false },
  { name: "Your Cart", href: "/cart", icon: ShoppingCartIcon, current: false },
  { name: "Inventory", href: "#", icon: InboxIcon, current: false },
];
const setting = {
  name: "Settings",
  href: "#",
  icon: Cog6ToothIcon,
  current: false,
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function LayoutMain({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                    <div className="flex flex-shrink-0 items-center px-4">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                      />
                    </div>
                    <nav className="mt-5 space-y-1 px-2">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                            "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-gray-500"
                                : "text-gray-400 group-hover:text-gray-500",
                              "mr-4 flex-shrink-0 h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                  <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
                    <a href="#" className="group block flex-shrink-0">
                      <div className="flex items-center">
                        <div>
                          <img
                            className="inline-block h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                            Tom Cook
                          </p>
                          <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                            View profile
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0">
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-[#0C316A]">
            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
              <div className="flex flex-shrink-0 items-center mt-[30px] mb-[40px] px-4">
                <img
                  className="h-8 w-auto rounded-3xl"
                  src="https://images-platform.99static.com//y0rb96b9CUsj6F8lqnkVOPlBuyY=/0x0:999x999/fit-in/500x500/99designs-contests-attachments/109/109048/attachment_109048124"
                  alt="Your Company"
                />
                <h1 className="pl-[12px] font-bold text-[19px] text-[#ffffff]">
                  Ajeeb Store
                </h1>
              </div>
              <nav className="mt-5 flex-1 space-y-1 items-center align-middle">
                {navigation.map((item) => (
                  <a
                    style={{
                      fontFamily: "Mulish",
                      fontSize: "16px",
                    }}
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-[#3d5a88] font-bold text-white"
                        : "text-[#FFFFFF]",
                      "group flex items-center px-2 py-4 text-sm"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current ? "text-white" : "text-[#9FA2B4]",
                        " flex-shrink-0 h-6 w-6 ml-[15px] mr-[20px]"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
                <hr
                  style={{
                    borderTop: "1px solid #DFE0EB",
                  }}
                />
                <a
                  style={{
                    fontFamily: "Mulish",
                    fontSize: "16px",
                  }}
                  key={setting.name}
                  href={setting.href}
                  className={classNames(
                    setting.current ? "bg-[#3d5a88] text-white" : "text-white",
                    "group flex items-center px-2 py-4 text-sm font-medium"
                  )}
                >
                  <setting.icon
                    className={classNames(
                      setting.current ? "text-white" : "text-[#9FA2B4]",
                      " flex-shrink-0 h-6 w-6 ml-[15px] mr-[20px]"
                    )}
                    aria-hidden="true"
                  />
                  {setting.name}
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col md:pl-64">
          <div className="sticky top-0 z-10 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1">
            <div className="">
              <Navbar />
              <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                {children}
              </div>
              {/* <Products /> */}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
