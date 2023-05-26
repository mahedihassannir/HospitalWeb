import { useLoaderData } from "react-router-dom";

const DoctorDetailes = () => {

    const data = useLoaderData()


    return (
        <div>
            <img src={data.img} alt="" />
            <h1>{data.name}</h1>
        </div>
    );
};

export default DoctorDetailes;