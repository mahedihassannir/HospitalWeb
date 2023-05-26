import { useEffect, useState } from "react";
import DoctorTop from "./DoctorTop";
import SingleDoctore from "./SingleDoctore";


const OurDoctors = () => {

    const url = `Doctors.json`

    const [data, SetData] = useState([])

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
            <section>
                {
                    data.map(res => {
                        console.log(res);
                    })
                }
            </section>


        </div>
    );
};

export default OurDoctors;