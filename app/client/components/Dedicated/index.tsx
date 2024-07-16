import Image from "next/image";
import PartnerMan from "../../../../public/images/dedicated/Olga.png"

const Dedicated = () => {
    return (
        <div className="relative">

            <Image src="/images/dedicated/spiral.svg" height={272} width={686} alt="spiral-design" className="absolute left-0 hidden lg:block -z-10" />

            <div className='mx-auto max-w-7xl px-4 my-40 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 my-16 items-center'>

                    {/* COLUMN-1 */}
                    <div>
                        <Image src={PartnerMan} alt="man-icon" width={418} height={530} className="mx-auto md:mx-0" />
                    </div>

                    {/* COLUMN-2 */}
                    <div className="relative">
                        <h2 className="text-4xl lg:text-65xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start">Наш главный партнер</h2>
                        <h5 className="font-medium text-lightblack text-2xl mt-5 text-center lg:text-start">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est dolore, adipisci exercitationem nobis repellat placeat debitis quisquam velit tempora laudantium natus pariatur a praesentium id. Non modi sint tenetur qui saepe rerum, doloribus perferendis sunt ducimus deleniti, temporibus facere sequi quam quo ex! Delectus modi consectetur iusto, maiores fuga neque!</h5>
                        <p className="text-2xl font-semibold mt-12 lg:ml-32 text-center lg:text-start">&quot;Doc University Clinic&quot;</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Dedicated;
