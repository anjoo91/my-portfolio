import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function TestimonialOne() {
    const testimonial = [
        {
            img: "assets/img/avatar-1.jpg",
            title: "Customers and interested parties engaged",
            name: "Alex Brownie",
            designation: "CEO at AI",
            comments: "I found it easy to capture my ideas and sketch visuals to sheare with my clints on the go"

        },
        {
            img: "assets/img/avatar-2.jpg",
            title: "Customers and interested parties engaged",
            name: "Thomas Johana",
            designation: "CEO at Pinterest",
            comments: "I found it easy to capture my ideas and sketch visuals to sheare with my clints on the go"

        },
        {
            img: "assets/img/avatar-3.jpg",
            title: "Customers and interested parties engaged",
            name: "Jennifer Laura",
            designation: "CEO at Dribble",
            comments: "I found it easy to capture my ideas and sketch visuals to sheare with my clints on the go"

        },
        {
            img: "assets/img/avatar-4.jpg",
            title: "Customers and interested parties engaged",
            name: "Limon Kyle",
            designation: "CEO at LinkedIn",
            comments: "I found it easy to capture my ideas and sketch visuals to sheare with my clints on the go"

        },
        {
            img: "assets/img/avatar-1.jpg",
            title: "Customers and interested parties engaged",
            name: "Limon Kyle",
            designation: "CEO at LinkedIn",
            comments: "I found it easy to capture my ideas and sketch visuals to sheare with my clints on the go"

        }
    ]
    return (
        <>
            <div className="container">
                <div className="section-heading">
                    <h3>
                        <span>Testimonials</span>
                    </h3>
                </div>

                <Swiper
                    // install Swiper modules
                    modules={[Autoplay, Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    // navigation={true}
                    className='testimonial'
                    pagination={{
                        dynamicBullets: true,
                        clickable: true
                    }}
                    loop={true}
                    scrollbar={{ draggable: true }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 3,
                        }

                    }}

                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                >
                    {testimonial.map((data, i) => (
                        <SwiperSlide key={i}>
                            <div className="testimonials-box" >
                                <div className="t-lead">
                                    <img src={data.img} alt="title" />
                                </div>
                                <div className="t-text">
                                    <h5>{data.title}</h5>
                                    <p>{data.comments}</p>
                                    <div className="t-avatar">
                                        <h6>{data.name}</h6>
                                        <span>{data.designation}</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div >
        </>
    )
}
