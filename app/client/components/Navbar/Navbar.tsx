"use client";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Contactusform from "./Contactus";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
  submenu?: { name: string; href: string }[];
}

const navigation: NavigationItem[] = [
  {
    name: "О центре",
    href: "#",
    current: false,
    submenu: [
      { name: "История", href: "/client/aboutcom" },
      { name: "Документы", href: "/client/docum" },
    ],
  },
  { name: "Лабораторные исследования", href: "/client/services", current: false },
  { name: "Специалистам", href: "/client/services_docs", current: false },
  { name: "Команда", href: "/client/expert", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {/* Фиксированный навбар */}
      <Disclosure as="nav" className="navbar fixed top-0 left-0 right-0 z-10 bg-white shadow">
        <div className="mx-3 md:mx-15 max-w-8xl p-3 md:p-4 lg:px-8">
          <div className="relative flex h-12 sm:h-20 items-center justify-between">
            <div className="flex flex-1 items-center sm:justify-around">
              {/* Логотип */}
              <div className="flex flex-shrink-0 items-center">
                <Link href="/" className="text-2xl sm:text-4xl font-semibold text-black">
                  <h1>DocLab</h1>
                </Link>
              </div>

              {/* Основная навигация для больших экранов */}
              <div className="hidden lg:flex items-center space-x-6">
                <div className="flex justify-end items-center space-x-4">
                  {navigation.map((item) =>
                    item.submenu ? (
                      <Disclosure key={item.name} as="div" className="relative">
                        {({ open, close }) => (
                          <>
                            <Disclosure.Button className="flex items-center text-xl font-semibold text-black hover:text-black">
                              {item.name}
                              <ChevronDownIcon
                                className={`ml-1 h-5 w-5 transition-transform duration-200 ${open ? "transform rotate-180" : ""}`}
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-52 bg-white shadow-lg rounded-md z-10">
                              <div className="py-1">
                                {item.submenu.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="block px-12 py-4 text-gray-700 border border-transparent transition duration-200 hover:bg-gray-100 hover:border-gray-400 hover:shadow-lg hover:shadow-gray-400"
                                    onClick={() => close()} // Закрытие дропдауна при клике
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-800 hover:bg-gray-300",
                          "px-3 py-2 rounded-md text-xl font-semibold text-center flex flex-col",
                          "whitespace-nowrap" // Запрещает перенос текста
                        )}
                        aria-current={item.href ? "page" : undefined}
                      >
                        {item.name === "Лабораторные исследования" ? (
                          <span style={{ lineHeight: "1" }}>
                            Лабораторные<br />исследования
                          </span>
                        ) : (
                          item.name
                        )}
                      </Link>
                    )
                  )}
                </div>
              </div>

              {/* Контактная форма */}
              <Contactusform />
            </div>

            {/* Кнопка мобильного меню */}
            <div className="block lg:hidden">
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
            </div>

            {/* Мобильное меню */}
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>
      </Disclosure>

      {/* Отступ для контента ниже фиксированного навбара */}
      <div style={{ paddingTop: '80px' }}>
        {/* Весь основной контент страницы должен быть внутри этого контейнера */}
      </div>
    </>
  );
};

export default Navbar;
