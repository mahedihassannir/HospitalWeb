import { useEffect, useState } from "react";
import DoctorTop from "./DoctorTop";
import SingleDoctore from "./SingleDoctore";



const OurDoctors = () => {


    const [data, SetData] = useState([])

    const url = `http://localhost:5000/font`

    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => SetData(data))

    }, [url])




    return (
        <div>
            <DoctorTop></DoctorTop>
            {/* doctor brandin */}

            {/* here is the doctors card */}
            <section className="grid  gap-5 lg:grid-cols-3 ">
                {
                    data.map(res => (
                        <SingleDoctore key={res._id}
                            Single={res}
                        ></SingleDoctore>
                    ))
                }
            </section>


        </div>
    );
};

export default OurDoctors;