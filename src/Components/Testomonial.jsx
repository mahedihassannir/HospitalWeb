
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";

const Testomonial = () => {
    return (
        <>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>

                    <div className="w-[558px] h-[290px]">
                        <div className="flex justify-between ">
                            <div>

                                <div >
                                    {/* <img src={ } alt="" /> */}

                                </div>
                                <div>
                                    <p>Awlad Hossain</p>
                                    <p>Product Designer</p>
                                </div>
                            </div>
                            <div className="">

                            </div>
                        </div>
                        {/* top end */}
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                  


                </SwiperSlide>
                <SwiperSlide>



                </SwiperSlide>
                <SwiperSlide>



                </SwiperSlide>
                <SwiperSlide>



                </SwiperSlide>
                <SwiperSlide>



                </SwiperSlide>
            </Swiper>

        </>
    );

};

export default Testomonial;