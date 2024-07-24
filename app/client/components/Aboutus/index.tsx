import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
    link: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "Модернизация",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: "Do tempor non commodo culpa incididunt eu ex sit. Excepteur dolore sint sunt aute aliqua velit tempor duis officia commodo enim pariatur.",
        link: 'Узнать больше'
    },
    {
        heading: "Повышение квалификации",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: 'Est Lorem pariatur dolor elit occaecat qui do sint consequat commodo ut.Consectetur officia incididunt Lorem est nostrud pariatur officia non.',
        link: 'Узнать больше'
    },
    {
        heading: "Сотрудничество",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'Est commodo est anim sint Lorem in magna officia enim amet aliqua aute.Nulla qui Lorem sint non dolore nulla excepteur est proident eu mollit dolor laborum culpa.',
        link: 'Узнать больше'
    },
]

const Aboutus = () => {
    return (

        <div id="aboutus-section">
            <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative'>
                <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
                <h3 className='text-center text-blue text-lg tracking-widest'>О НАС</h3>
                <h4 className='text-center text-4xl lg:text-65xl font-bold'>Узнайте больше о нашей деятельности.</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-x-16 lg:gap-x-32'>
                    <div className='hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group'>
                        <h4 className='text-2xl font-semibold  text-black mb-5 group-hover:text-white'>Модернизация</h4>
                        <Image src="/images/aboutus/imgOne.svg" alt="/images/aboutus/imgOne.svg" width={100} height={100} className="mb-5" />
                        <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>
                            Узнайте, как модернизация лабораторий в Центральной Азии поднимет научные исследования на новый уровень, улучшит методы работы и приведет к передовым результатам. Подробнее здесь!
                        </h4>
                        <Link href="/client/section1/" className='text-lg font-semibold group-hover:text-white text-blue hover-underline'>
                            Узнать больше...
                            <ChevronRightIcon width={20} height={20} />
                        </Link>
                    </div>
                    <div className='hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group'>
                        <h4 className='text-2xl font-semibold  text-black mb-5 group-hover:text-white'>Повышение квалификации</h4>
                        <Image src="/images/aboutus/imgTwo.svg" alt="/images/aboutus/imgTwo.svg" width={100} height={100} className="mb-5" />
                        <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>
                            Откройте для себя, как программы профессионального развития в лабораториях Центральной Азии улучшают навыки сотрудников и повышают эффективность работы. Подробнее здесь!
                        </h4>
                        <Link href="/client/section2/" className='text-lg font-semibold group-hover:text-white text-blue hover-underline'>
                            Узнать больше...
                            <ChevronRightIcon width={20} height={20} />
                        </Link>
                    </div>
                    <div className='hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group'>
                        <h4 className='text-2xl font-semibold  text-black mb-5 group-hover:text-white'>Сотрудничество</h4>
                        <Image src="/images/aboutus/imgThree.svg" alt="/images/aboutus/imgThree.svg" width={100} height={100} className="mb-5" />
                        <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>
                            Откройте, как сотрудничество между лабораториями в Центральной Азии способствует обмену знаниями, укреплению научных связей и развитию совместных проектов в области науки и технологий. Подробнее на странице!
                        </h4>
                        <Link href="/client/section3/" className='text-lg font-semibold group-hover:text-white text-blue hover-underline'>
                            Узнать больше...
                            <ChevronRightIcon width={20} height={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Aboutus;