import { FaPhone, FaSearchLocation } from "react-icons/fa";

import '../css/banner.css'

const From = () => {
    return (
        <div>
            <div className=" bg-[#07332F] flex justify-center items-center w-full h-[528px]">

                <div className="flex justify-center gap-20  w-full ">

                    <div className=" ml-4 text-white  ">
                        <h1 className="text-4xl font-bold ">Contact With Us</h1>

                        <p className="py-4">Sed ut perspiciatis unde omnis iste natus error sit <br /> voluptatem accusantium doloremque laudantium, <br /> totam rem aperiam, eaque ipsa quae ab illo inve ntore <br /> veritatis et quasi.</p>
                        {/* contact numbs */}
                        <div>
                            <p className="flex items-center py-2 "> <FaPhone className="mr-2"></FaPhone> +88 01750 14 14 14</p>
                            <p className="flex items-center "> <FaSearchLocation className="mr-2"></FaSearchLocation> Dhanmondi, Dhaka, Bangladesh</p>

                        </div>

                    </div>
                    <div className="grid mr-4 grid-cols-2 gap-4  ">
                        <input className=" text-white  mmc pl-2 rounded-md w-[340px] py-5 " type="text" placeholder="name" />
                        <input className=" text-white  mmc pl-2 rounded-md w-[340px] py-5 " type="text" placeholder="email" />
                        <input className="  text-white mmc pl-2 rounded-md w-[340px] py-5 " type="text" placeholder="Mobile number" />
                        <input className="mmc  text-white  pl-2 rounded-md w-[340px] py-5 " type="text" placeholder="Doctor Name" />
                        <input className="mmc  text-white px-2 rounded-md w-[340px] py-5   " type="date" placeholder="Date" />
                        <input className="mmc px-2 rounded-md w-[340px] py-5  text-white " type="time" placeholder="time" />

                        <button type="submit" className=" bg-[#F7A582] text-center text-white w-full py-3">
                            Book Now
                        </button>
                    </div>


                </div>



            </div>
        </div>
    );
};

export default From;