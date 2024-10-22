import Image from "next/image";

const Banner = () => {
    return (
        <div
            className="flex flex-col items-center justify-center mb-20"
            style={{
                paddingTop: 'calc(60px + 2rem)', // Учтена высота навбара для отступа сверху
            }}
        >
            <h1
                style={{
                    fontSize: 'clamp(1.5rem, 6vw, 4rem)', // Адаптивный размер текста
                    textAlign: 'center',
                    maxWidth: '85vw',
                    position: 'relative', // Относительное позиционирование
                    zIndex: 1, // Чтобы текст был выше других элементов
                }}
                className="mb-8"
            >
                Уверенность в каждом результате
            </h1>
        </div>
    );
};

export default Banner;
