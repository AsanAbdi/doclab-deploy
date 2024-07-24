import Image from "next/image"; 
 
const Banner = () => { 
    return ( 
        <div className='mx-auto max-w-7xl my-10 sm:py-10 px-6 lg:px-8'> 
            <div className='flex flex-col lg:flex-row items-center gap-10'> 
                 
                {/* COLUMN-1 */} 
                 
                <div className="flex flex-col justify-center text-center lg:text-start lg:w-1/2"> 
                    <div className="py-3"> 
                        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-darkpurple'> 
                            Профессиональный уход за вашим здоровьем! 
                        </h1> 
                    </div> 
                    <div className='text-center lg:text-start'> 
                        <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-darkpurple'> 
                            Добро пожаловать в нашу клинику. <br /> Для нас ваше благополучие - наш главный приоритет. 
                        </p> 
                    </div> 
                </div> 
 
                {/* IMAGE */} 
                 
                <div className='flex justify-center items-center lg:w-1/2'> 
                    <Image src='/images/bunDoc.png' alt="hero-image" width={800} height={642} layout='responsive' /> 
                </div> 
 
            </div> 
        </div> 
    ) 
} 
 
export default Banner;