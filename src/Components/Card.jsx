import { FaDailymotion } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
const Card = () => {
    return (
        <div className="  w-full gap-5 grid text-white lg:grid-cols-3 justify-center items-center  my-20" data-aos="fade-up">

            <div className="w-[364px] h-[202px]  bg-[#07332F] rounded-lg ">
                <div className="flex mt-[75px] justify-center ">

                    <div className="pt-3">
                        <FaClock className="text-4xl text-white"></FaClock>
                    </div>
                    <div className="ml-3">
                        <h3 className="text-2xl font-bold">Opening Hours</h3>
                        <p>Open 9.00 am to 5.00pm <br /> Everyday</p>
                    </div>
                </div>
            </div>


            <div className="w-[364px] h-[202px]  bg-[#F7A582] rounded-lg ">
                <div className="flex mt-[75px] justify-center ">

                    <div className="pt-3">
                        <FaSearchLocation className="text-4xl text-white"></FaSearchLocation>
                    </div>
                    <div className="ml-3">
                        <h3 className="text-2xl font-bold">Our Locations</h3>
                        <p>Dhanmondi 17, Dhaka <br /> -1200, Bangladesh</p>
                    </div>
                </div>
            </div>
            <div className="w-[364px] h-[202px]  bg-[#07332F] rounded-lg ">
                <div className="flex mt-[75px] justify-center ">

                    <div className="pt-3">
                        <FaPhone className="text-4xl text-white"></FaPhone>
                    </div>
                    <div className="ml-3">
                        <h3 className="text-2xl font-bold">Contact Us</h3>
                        <p>+88 01750 00 00 00 <br />
                            +88 01750 00 00 00</p>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Card;