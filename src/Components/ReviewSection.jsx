import Testomonial from "./Testomonial";

const ReviewSection = () => {
    return (
        <div className="w-full  pb-4">
            <div className="text-center">


                <h1>What Our Patients Says</h1>
                <p className="text-center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa <br /> quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

            </div>

            {/* here is the testomonial section */}
            <section className="my-10">
                <Testomonial></Testomonial>
            </section>
            {/* ends */}


            

        </div>
    );
};

export default ReviewSection;