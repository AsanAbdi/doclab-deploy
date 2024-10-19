import Image from "next/image";

const Digital = () => {
    return (

        <div className="mx-2">
            <div className='mx-auto max-w-7xl px-4 my-30 pb-20 lg:pb-40 lg:px-8 bg-digital rounded-3xl bg-blue relative'>
                <div className='grid grid-cols-1 lg:grid-cols-2 my-16'>

                    {/* COLUMN-1 */}

                    <div className="pt-24 lg:pl-24 ">
                        {/* <h2 className="text-lg font-normal text-white mb-5 tracking-widest text-center lg:text-start">КТО МЫ</h2> */}
                        <h4 className="text-4xl sm:text-6xl font-bold text-white mb-8 leading-snug text-center lg:text-start"> Первая лаборатория международного
                        <br /> уровня в центральной азии.</h4>
                        {/* <div className="text-center lg:text-start">
                            <button className="text-xl font-semibold text-white bg-btnblue py-4 px-12 hover:bg-hoblue rounded-full">Наш основной сайт</button>
                        </div> */}
                    </div>

                    {/* COLUMN-2 */}

                    <div>
                    <div className="lg:absolute">
                            <Image src=""  // Замените эту ссылку на реальный URL изображения
                                alt="girldoodle" 
                                width={600} 
                                height={491} 
                            />
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Digital;
