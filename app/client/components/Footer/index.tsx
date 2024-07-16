'use client'

import Image from "next/image";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

// MIDDLE LINKS DATA
interface ProductType {
    id: number;
    section: string;
    link: string[];
}

const products: ProductType[] = [
    {
        id: 1,
        section: "",
        link: [ 'О нас', 'Вакансии', 'Услуги'],
    },
    {
        id: 2,
        section: "   ",
        link: ['Специалисты', "Лицензии и сертификаты", "Наши партнеры",]
    },
    {
        id: 3,
        section: "",
        link: [ "FAQ"]
    },

]

const Footer = () => {
    let [isOpen, setIsOpen] = useState(false);
    
    const [inputValues, setInputValues] = useState({
        input1: "",
        input2: "",
        input3: "",
    });
    
    const handleChange = (e: { target: { name: string; value: string } }) => {
        const { name, value } = e.target;
        setInputValues((prevState) => ({ ...prevState, [name]: value }));
    };
    
    const handleClick = () => {
        alert(
        `Name: ${inputValues.input1}, Email-address: ${inputValues.input2}, Message: ${inputValues.input3}`
        );
        setIsOpen(false);
    };
    
    // FORM SUBMIT
    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        // handle form submission
    };
    
    const isDisabled = Object.values(inputValues).some((value) => value === "");
    
    const closeModal = () => {
        setIsOpen(false);
    };
    
    const openModal = () => {
        setIsOpen(true);
    };
    function generateWhatsAppLink(name: string, question: string) {
        const phoneNumber = "996706922200"; // Ваш номер WhatsApp
        const message = `Здравствуйте, меня зовут ${name}.\nУ меня вот такой вопрос: "${question}".`;
        const encodedMessage = encodeURIComponent(message);
        const whatsAppLink = document.getElementById("whatsappLink")
        if (whatsAppLink) {whatsAppLink.setAttribute("href", `https://wa.me/${phoneNumber}?text=${encodedMessage}`)}
    }

    return (
        <div className="bg-black -mt-50" id="first-section">
            <div className="mx-auto max-w-2xl pt-10 pb-20 px-3 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

                    {/* COLUMN-1 */}

                    <div className='col-span-4'>
                        <h3 className='text-white text-4xl font-semibold leading-9 mb-4 lg:mb-20'>DocLab Laboratory</h3>
                        <div className='flex gap-4'>
                            <div className='footer-icons'>
                                <Link href="https://www.facebook.com/CurelineInc"><Image src={'/images/footer/vec.svg'} alt="facebook" width={15} height={20} /></Link>
                            </div>
                            <div className='footer-icons'>
                                <Link href="https://twitter.com/i/flow/login?redirect_after_login=%2FCureline_Inc"><Image src={'/images/footer/twitter.svg'} alt="twitter" width={15} height={20} /></Link>
                            </div>
                            <div className='footer-icons'>
                                <Link href="https://www.linkedin.com/company/cureline-inc./"><Image src={'/images/footer/linkedin.png'} alt="twitter" width={21} height={30} /></Link>
                            </div>

                        </div>
                    </div>

                    {/* CLOUMN-2/3 */}

                    <div className="group relative col-span-2">
                            <p className="text-white text-xl font-extrabold mb-10">Главная</p>
                            <ul>
                                <li className='mb-5'>
                                    <Link href="/client" className="text-white text-lg font-normal mb-6 space-links">Информация</Link>
                                </li>
                                <li className='mb-5'>
                                    <Link href="/client" className="text-white text-lg font-normal mb-6 space-links">Партнеры</Link>
                                </li>
                                <li className='mb-5'>
                                    <button onClick={openModal} className="text-white text-lg font-normal mb-6 space-links">Обратная связь</button>
                                </li>
                            </ul>
                        </div>

                        <div className="group relative col-span-2">
                            <p className="text-white text-xl font-extrabold mb-10">О нас</p>
                            <ul>
                                <li className='mb-5'>
                                    <Link href="/client/aboutcom" className="text-white text-lg font-normal mb-6 space-links">О нас</Link>
                                </li>
                                <li className='mb-5'>
                                    <Link href="/client/aboutcom" className="text-white text-lg font-normal mb-6 space-links">Оборудование</Link>
                                </li>
                                <li className='mb-5'>
                                    <Link href="/client/aboutcom" className="text-white text-lg font-normal mb-6 space-links">История открытия</Link>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="group relative col-span-2">
                            <p className="text-white text-xl font-extrabold mb-10">Специалисты</p>
                            <ul>
                                <li className='mb-5'>
                                    <Link href="/client/expert" className="text-white text-lg font-normal mb-6 space-links">Наши сотрудники</Link>
                                </li>
                                <li className='mb-5'>
                                    <Link href="/client/expert" className="text-white text-lg font-normal mb-6 space-links">Глав врач</Link>
                                </li>
                                <li className='mb-5'>
                                    <Link href="/client/expert" className="text-white text-lg font-normal mb-6 space-links">Лучший работник</Link>
                                </li>
                            </ul>
                        </div>
                </div>
            </div>

            {/* All Rights Reserved */}

            <div className="mx-auto max-w-2xl lg:max-w-7xl">
                <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-footer">
                    <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
                        <div>
                            <h3 className='text-center md:text-start text-offwhite text-lg'>@2024 - All Rights Reserved by Imbalance duo</h3>
                        </div>
                        <div className="flex justify-center md:justify-end">
                            <Link href="/">
                                <h3 className="text-offwhite pr-6">Политика конфиденциальности</h3>
                            </Link>
                            <Link href="/">
                                <h3 className="text-offwhite pl-6 border-solid border-l border-footer">Условия использования</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
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

                                    <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md">
                                        <div className="flex flex-shrink-0 items-center justify-center">
                                            <Link href="/" className='text-2xl sm:text-4xl font-semibold text-black'>
                                                Заполните форму
                                            </Link>
                                        </div>
                                        <p className="mb-8 lg:mb-16 mt-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Задайте вопрос и получите ответ в течение 4 часов.</p>
                                        <form action="#" className="space-y-8" onSubmit={handleSubmit}>
                                            <div>
                                                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ваше имя</label>
                                                <input
                                                    id="text"

                                                    name="input1"
                                                    value={inputValues.input1}
                                                    onChange={handleChange}

                                                    type="text"
                                                    autoComplete="current-password"
                                                    required
                                                    className="relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="Имя..."
                                                />
                                            </div>
                                            <div className="sm:col-span-2">
                                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Ваш вопрос</label>
                                                <textarea
                                                    id="message"
                                                    name="input3"
                                                    value={inputValues.input3}
                                                    onChange={handleChange}
                                                    className="relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Ваш вопрос..."></textarea>
                                            </div>
                                            <button
                                                style={{color: 'white', backgroundColor: "rgb(74 222 128)"}}
                                                disabled={false}
                                                
                                                className="py-3 px-5 text-sm disabled:opacity-50 font-medium w-full text-center text-black rounded-lg bg-green-400 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                                <a target="_blank" id='whatsappLink' onClick={() => generateWhatsAppLink(inputValues.input1, inputValues.input3)}>Написать на WhatsApp</a></button>

                                        </form>

                                    </div>

                                    {/* <div className='flex justify-end'>
                                        <button type="button"
                                            onClick={closeModal}
                                            className="py-3 px-5 mt-2 text-sm font-medium w-50 text-center text-white rounded-lg bg-red hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Close</button>
                                    </div> */}

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

        </div>

    )
}

export default Footer;
