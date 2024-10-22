import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const Aboutus = () => {
  return (
    <div id="aboutus-section">
      <div className="mx-auto max-w-5xl px-4 py-16 my-24 lg:px-8 bg-lightgrey rounded-3xl relative">
        {/* Заголовок по центру, больший размер и меньше отступов */}
        <h2 className="text-center text-5xl font-bold text-black mb-12">DocLab</h2>
        
        {/* Декоративное изображение */}
        <Image
          src="/images/aboutus/dots.svg"
          width={100}
          height={100}
          alt="dots-image"
          className="absolute bottom-1 -left-20"
        />

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-3xl">
            {/* Первый блок */}
            <div className="hover:bg-navyblue bg-white rounded-3xl p-6 shadow-xl group max-w-xs mx-auto">
              <h4 className="text-2xl font-semibold text-black mb-5 group-hover:text-white">DocLab</h4>
              <h4 className="text-lg font-normal text-black group-hover:text-offwhite mb-5">
                Миссия <b>DocLab Pathology</b> — высокая точность диагностики в соответствии с международными стандартами и
                протоколами. Мы следуем всем необходимым нормам и правилам, обеспечивая высокое
              </h4>
              <Link
                href="/client/section1/"
                className="text-lg font-semibold group-hover:text-white text-blue hover-underline"
              >
                Узнать больше...
                <ChevronRightIcon width={20} height={20} />
              </Link>
            </div>

            {/* Второй блок */}
            <div className="hover:bg-navyblue bg-white rounded-3xl p-6 shadow-xl group max-w-xs mx-auto">
              <h4 className="text-2xl font-semibold text-black mb-5 group-hover:text-white">Digital pathology</h4>
              <h4 className="text-lg font-normal text-black group-hover:text-offwhite mb-5">
                Цифровая патология (<b>Digital Pathology</b>) — это область патологии, которая использует цифровые
                технологии для анализа образцов тканей и клеток. Вместо традиционных методов исследования
              </h4>
              <Link
                href="/client/section2/"
                className="text-lg font-semibold group-hover:text-white text-blue hover-underline"
              >
                Узнать больше...
                <ChevronRightIcon width={20} height={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
