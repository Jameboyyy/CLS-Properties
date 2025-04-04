import React, { useState, useEffect } from 'react';
import { fetchTestimonies } from '../../services/api/testimonies';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './testimony.css';

const Testimony = () => {
    const [testimonyData, setTestimonyData] = useState([]);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

    useEffect(() => {
        async function loadTestimonyData() {
            const data = await fetchTestimonies();
            setTestimonyData(data);
        }
        loadTestimonyData();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id='testimony__container'>
            <h2 className="testimony__heading">What Our Clients Say</h2>
            <div className="testimony__wrapper">
                {isMobile ? (
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        loop
                        className="testimony__swiper"
                    >
                        {testimonyData.map((testimony, index) => (
                            <SwiperSlide key={index}>
                                <div className="testimony__card">
                                    <div className="t__img__wrapper">
                                        <img src={testimony.testimony__img__url} alt="" className="t__img" />
                                    </div>
                                    <h4 className="t__name">{testimony.name}</h4>
                                    <p className="t__descr">
                                        James the Goat is a walking disaster on the Rift—a one-man wrecking ball of confusion. 
                                        Trying every role, he somehow manages to feed top, get lost in the jungle, miss every bot lane last hit, 
                                        and spam random pings in mid like it’s a game of Minesweeper. His mechanics are questionable, his macro is a myth, 
                                        and his ability to turn any game around is more like turning a 1v1 into a 4v5. But hey, at least he tries!
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <div className="t__wrapper--container">
                        {testimonyData.slice(0, 3).map((testimony, index) => (
                            <div key={index} className="testimony__card">
                                <div className="t__img__wrapper">
                                    <img src={testimony.testimony__img__url} alt="" className="t__img" />
                                </div>
                                <h4 className="t__name">{testimony.name}</h4>
                                <p className="t__descr">
                                    James the Goat is a walking disaster on the Rift—a one-man wrecking ball of confusion. 
                                    Trying every role, he somehow manages to feed top, get lost in the jungle, miss every bot lane last hit, 
                                    and spam random pings in mid like it’s a game of Minesweeper. His mechanics are questionable, his macro is a myth, 
                                    and his ability to turn any game around is more like turning a 1v1 into a 4v5. But hey, at least he tries!
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Testimony;
