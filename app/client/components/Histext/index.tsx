import Image from "next/image";


const Histext = () => {
    return (
        <div className="relative">

            <Image src="/images/dedicated/spiral.svg" height={272} width={686} alt="spiral-design" className="absolute left-0 hidden lg:block -z-10" />

            <div className='mx-auto max-w-7xl px-4 my-40 sm:py-20 lg:px-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 my-16'>

                    {/* COLUMN-1 */}
                    <div>
                        <Image src="/images/olga.png" alt="man-icon" width={480} height={630} className="mx-auto md:mx-0 " />
                    </div>

                    {/* COLUMN-2 */}
                    <div className="relative">
                        <h2 className="text-4xl lg:text-65xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start">Первое открытие</h2>
                        <h2 className="text-2xl lg:text-55xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start"> <br/> заполнить текстом и поменять фотку </h2>
                        
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Histext;