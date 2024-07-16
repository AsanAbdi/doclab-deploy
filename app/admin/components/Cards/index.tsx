"use client";

import Image from "next/image";
import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface datatype {
  heading: string;
  details: string;
  result: string;
}

interface EditModalProps {
  closeModal: () => void;
}

const Cardsdata: datatype[] = [
  {
    heading: "Анализ крови",
    result: "Норма",
    details:
      "Общий анализ крови в норме. Уровень гемоглобина и количества лейкоцитов находится в пределах нормы.",
  },
  {
    heading: "Анализ мочи",
    result: "Норма",
    details:
      "Анализ мочи не выявил патологий. Уровень белка и глюкозы в моче находится в пределах нормы.",
  },
  {
    heading: "УЗИ",
    result: "Патологий не выявлено",
    details:
      "Ультразвуковое исследование показало отсутствие патологий в органах брюшной полости и малого таза.",
  },
  {
    heading: "ЭКГ",
    result: "Норма",
    details:
      "ЭКГ без отклонений. Ритм сердца регулярный, отсутствуют аномалии в проводимости и состоянии миокарда.",
  },
  {
    heading: "Рентген грудной клетки",
    result: "Норма",
    details:
      "Рентгеновское исследование грудной клетки не выявило патологий. Легкие чистые, сердце не увеличено.",
  },
];

const Cards = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = React.useState<number | null>(null);

  const openModal = (index: number) => {
    setIsOpen(true);
    setSelectedItemIndex(index);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedItemIndex(null);
  };

  return (
    <>
      {isOpen && selectedItemIndex !== null && (
        <EditModal closeModal={closeModal} />
      )}

      <div id="aboutus-section">
        <div className="mx-auto max-w-7xl px-4 my-7 lg:px-10 rounded-3xl relative">
          <Image
            src="/images/aboutus/dots.svg"
            width={100}
            height={100}
            alt="dots-image"
            className="absolute bottom-1 -left-20"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 my-16 gap-x-4 lg:gap-x-4">
            {Cardsdata.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl mt-16 pt-10 pl-8 pb-12 pr-6 shadow-xl group relative"
              >
                <h4 className="text-3xl font-semibold  text-black mb-5">
                  {item.heading}
                </h4>
                <h4 className="text-lg font-normal text-black mb-5">
                  Результат: {item.result}
                </h4>
                <h4 className="text-lg font-normal text-black mb-5">
                  {item.details}
                </h4>
                <div className="absolute bottom-4 left-7 flex gap-3">
                  <div className="text-lg font-semibold text-white hover:scale-110 duration-150">
                    <button
                      onClick={() => openModal(i)}
                      className="bg-[green] px-3 py-1 rounded-lg"
                    >
                      Изменить
                    </button>
                  </div>
                  <div className="text-lg font-semibold text-white hover:scale-110 duration-150">
                    <button className="bg-[red] px-2 py-1 rounded-lg">
                      Удалить
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;

const EditModal: React.FC<EditModalProps> = ({ closeModal }) => {
  return (
    <Transition appear show={true} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Payment successful
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Your payment has been successfully submitted. We’ve sent you
                    an email with all of the details of your order.
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
