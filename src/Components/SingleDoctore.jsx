import { FaCalendar, FaMonero, FaMoneyBill, FaSearchLocation } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleDoctore = ({ Single }) => {

    console.log(Single);

    const { img, name, quelaty, avleavle, location, money } = Single


    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="pl-4 mt-10">
                    <h5>{name}</h5>
                    <p>{quelaty}</p>
                    <div className="mt-10">
                        <h4 className="flex items-center"><FaSearchLocation className="mr-3" />{location}</h4>

                        <p className=" py-3 flex items-center"><FaCalendar className="mr-3"></FaCalendar>{avleavle}</p>
                        <p className="flex items-center"><FaMoneyBill className="mr-3"></FaMoneyBill>{money}</p>

                    </div>

                    <div className="pb-10 mt-10">
                        <Link to={`/checkout/${Single._id}`}>
                            <button className=" w-11/12 py-3 text-[#F7A582] hover:text-white font-bold rounded-md hover:bg-[#F7A582] mx-auto border-2 border-[#F7A582]">
                                View Profile
                            </button>
                        </Link>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default SingleDoctore;