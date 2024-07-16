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
        heading: "Немного о нас.",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: "Do tempor non commodo culpa incididunt eu ex sit. Excepteur dolore sint sunt aute aliqua velit tempor duis officia commodo enim pariatur.",
        link: 'Узнать больше'
    },
    {
        heading: "Специалисты UNIM.",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: 'Est Lorem pariatur dolor elit occaecat qui do sint consequat commodo ut.Consectetur officia incididunt Lorem est nostrud pariatur officia non.',
        link: 'Узнать больше'
    },
    {
        heading: "Сотрудничество.",
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
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group'>
                            <h4 className='text-2xl font-semibold  text-black mb-5 group-hover:text-white'>{item.heading}</h4>
                            <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" />
                            <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>{item.paragraph}</h4>
                            <Link href="#" className='text-lg font-semibold group-hover:text-white text-blue hover-underline'>
                                {item.link}
                                <ChevronRightIcon width={20} height={20} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Aboutus;