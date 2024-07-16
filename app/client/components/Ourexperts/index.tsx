import Image from "next/image";

interface OurexpertsProps {
    is_main: boolean;
  }

const Ourexperts: React.FC<OurexpertsProps> = ({ is_main }) => {
    let path = is_main ? "/images/doctors/main.jpeg" : '/images/olga.png'
    return (
        <div className="relative">

            <Image src="/images/dedicated/spiral.svg" height={272} width={686} alt="spiral-design" className="absolute left-0 hidden lg:block -z-10" />

            <div className='mx-auto max-w-7xl px-4 my-40 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 my-16'>

                    {/* COLUMN-1 */}
                    <div>
                        <Image src={path} alt="man-icon" width={418} height={530} className="mx-auto md:mx-0" />
                    </div>

                    {/* COLUMN-2 */}
                    <div className="relative">
                        <h2 className="text-4xl lg:text-65xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start">{is_main ? "Наш глав врач": "Ольга Потапова"}</h2>
                        <p className="font-medium text-lightblack text-2xl mt-5 text-center lg:text-start">{is_main ? "Глав врач": "Исполнительный директор"}</p>

                        <h2 className="text-2xl lg:text-55xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat voluptates sit assumenda! Suscipit accusantium totam ipsum doloribus, laboriosam fugit natus quo soluta at deleniti, voluptas animi dolores similique omnis? Accusamus?</h2>
                    </div>

                </div>
            </div>

        </div>
        
    )
}

export default Ourexperts;







