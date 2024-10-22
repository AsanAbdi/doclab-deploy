import React from 'react';
import Head from 'next/head';

const Section1: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 pt-10 md:pt-20">
            <Head>
                <title>DocLab Pathology</title>
            </Head>
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Миссия DocLab Pathology</h1>
            <div className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed space-y-4">
                <p>
                    Миссия DocLab Pathology — высокая точность диагностики в соответствии с международными стандартами и протоколами. Мы следуем всем необходимым нормам и правилам, обеспечивая высокое качество исследований.
                </p>
                <p>
                    DocLab предлагает медицинскому сообществу Кыргызской Республики широкие диагностические возможности в области онкологии, включая стандартизированные виды гистологических и иммуногистохимических исследований, выполненные с применением современных технологий.
                </p>
                <p>
                    Наша лаборатория оснащена современным оборудованием от ведущих производителей США, Германии, Южной Кореи. Мы рады сотрудничать с государственными и частными медицинскими учреждениями, научными центрами, а также со страховыми компаниями.
                </p>
            </div>
        </div>
    );
};

export default Section1;
