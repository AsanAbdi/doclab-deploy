"use client"
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Sun from '/public/images/Navbar/sun.png'
// import RusIcon from '/public/images/icons/russian-icon.webp'
import ThemeSwitch from '../ThemeSwitcher/swithcer'


const Contactusform = () => {
    let [isOpen, setIsOpen] = useState(false)

    const [inputValues, setInputValues] = useState({
        input1: '',
        input2: '',
        input3: ''
    });

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setInputValues(prevState => ({ ...prevState, [name]: value }));
    }

    const handleClick = () => {
        alert(`Name: ${inputValues.input1}, Email-address: ${inputValues.input2}, Message: ${inputValues.input3}`);
        setIsOpen(false)
    }

    // FORM SUBMIT
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // handle form submission
    };

    const isDisabled = Object.values(inputValues).some((value) => value === '');


    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }

    function generateWhatsAppLink(name: string, question: string) {
        const phoneNumber = "996706922200"; // Ваш номер WhatsApp
        const message = `Здравствуйте, меня зовут ${name}.\nУ меня вот такой вопрос: "${question}".`;
        const encodedMessage = encodeURIComponent(message);
        const whatsAppLink = document.getElementById("whatsappLink")
        if (whatsAppLink) {whatsAppLink.setAttribute("href", `https://wa.me/${phoneNumber}?text=${encodedMessage}`)}
    }

    return (
        <>
            <div className=" inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto md:ml-6 sm:pr-0">
                <div className='lg:hidden'>
                    <button type="button" className='hidden lg:flex justify-end text-xl font-semibold bg-transparent py-4 px-6 lg:px-12 navbutton rounded-full hover:bg-navyblue hover:text-white whitespace-nowrap w-200' onClick={openModal}>
                        Contact Us
                    </button>
                </div>
                <div className='hidden lg:block' style={{marginRight: '20px'}}>
                    <button type="button" className='justify-end text-xl font-semibold bg-transparent py-4 px-6 lg:px-12 navbutton rounded-full hover:bg-navyblue hover:text-white' onClick={openModal}>
                        Задать вопрос
                    </button>
                </div>
                {/* <div className='pl-10'>
                    <Image src={RusIcon} width={30} height={30} alt='Light'/>
                </div> */}
                <ThemeSwitch/>
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
        </>
    )
}

export default Contactusform;
