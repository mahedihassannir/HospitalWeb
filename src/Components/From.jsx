import {FaPhone, FaSearchLocation } from "react-icons/fa";

const From = () => {
    return (
        <div>
            <div className=" bg-[#07332F] flex justify-center items-center w-full h-[528px]">

                <div className="flex w-full ">

                    <div className=" ml-4 text-white w-1/2 ">
                        <h1 className="text-4xl font-bold ">Contact With Us</h1>

                        <p className="py-4">Sed ut perspiciatis unde omnis iste natus error sit <br /> voluptatem accusantium doloremque laudantium, <br /> totam rem aperiam, eaque ipsa quae ab illo inve ntore <br /> veritatis et quasi.</p>
                        {/* contact numbs */}
                        <div>
                            <p className="flex items-center py-2 "> <FaPhone className="mr-2"></FaPhone> +88 01750 14 14 14</p>
                            <p className="flex items-center "> <FaSearchLocation className="mr-2"></FaSearchLocation> Dhanmondi, Dhaka, Bangladesh</p>

                        </div>

                    </div>
                    <div className="grid mr-4 grid-cols-2 gap-4  w-1/2">
                        <input className=" pl-2 rounded-md w-[340px] py-5 " type="text" placeholder="name" />
                        <input className=" pl-2 rounded-md w-[340px] py-5 " type="text" placeholder="email" />
                        <input className=" pl-2 rounded-md w-[340px] py-5 " type="text" placeholder="Mobile number" />
                        <input className=" pl-2 rounded-md w-[340px] py-5 " type="text" placeholder="Doctor Name" />
                        <input className=" px-2 rounded-md w-[340px] py-5 " type="date" placeholder="Date" />
                        <input className=" px-2 rounded-md w-[340px] py-5 " type="time" placeholder="time" />

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