import Image from "next/image";


const index = () => {
    return (
        <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 mb-16'>
            <h2 className="text-4xl sm:text-65xl font-bold text-center">Более сотни проверенных <br />клинических партнеров в 20 странах.</h2>
            <h3 className="text-2xl font-medium text-center pt-10 opacity-50">Международная аккредитация и использование<br />диагностических возможностей других стран.</h3>
            <div className='grid grid-cols-1 my-16'>
                <Image src="/images/team/PartnersIcon.png" alt="office-image" height={684} width={1296} />
            </div>
        </div>
    )
}

export default index;
