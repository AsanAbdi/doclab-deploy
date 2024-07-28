"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    heading: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        heading: 'Salymbekov University',
        imgSrc: '/images/salym/salym.jpg',
    },
    {
        heading: 'DOC University Clinic',
        imgSrc: '/images/salym/doclab.jpg',
    },
    {
        heading: 'DOC Hospital Clinic',
        imgSrc: '/images/salym/doc.jpg',
    },
]

// CAROUSEL SETTINGS

function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center", background: "rgba(255, 255, 255, 0.3)", padding: "28px", borderRadius: "20px" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center", background: "rgba(255, 255, 255, 0.3)", padding: "28px", borderRadius: "20px" }}
            onClick={onClick}
        />
    );
}


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 2,
            // centerMode: true,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false,
            speed: 500,
            nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
            prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 420,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (
            <div className="bg-bgblue py-4 mt-4">
                <div className='mx-auto max-w-7xl sm:py-3 lg:px-8'>

                    <div className="text-center pt-18 pb-10 md:pt-32">
                        <h3 className="text-3xl sm:text-6xl font-bold text-white my-2">Партнеры и клиники в Кыргызстане</h3>
                    </div>

                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>
                                <div className='bg-transparent m-3 pb-12 my-10 rounded-3xl'>
                                    <div className="w-full h-96 flex justify-center items-center">
                                        <Image src={items.imgSrc} alt="image" width={636} height={620} className="rounded-2xl object-cover h-full w-full" />
                                    </div>
                                    <div className="w-full text-center mt-4">
                                        <h4 className='text-2xl sm:text-3xl font-bold text-white'>{items.heading}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}
