
import '../css/banner.css'
import docs from '../assets/docresurces/docs.png'
import About from '../Components/About';
import Card from '../Components/Card';
import ReviewSection from '../Components/ReviewSection';
import OurDoctors from '../Components/OurDoctors';


const Home = () => {
    return (
        <div>
            {/* here is teh banner of the home  */}
            <section id="bannerImg" className=" px-10 -mt-20 lg:flex  items-center  w-full h-screen">


                <div className='md:w-1/2 text-white'>
                    <h1 className=' text-5xl font-bold'>Your Best Medical <br /> Help Center</h1>
                    <p className='py-5'>Lorem Ipsum is simply dummy text they are printing <br /> typesetting has been the industry’s stardard.</p>
                    <button className=' rounded-lg bg-[#F7A582] py-5 px-7 bg-'>
                        All Service
                    </button>
                </div>
                {/* here is the laft section of the banner */}

                <div className='md:w-1/2'>


                    <img data-aos="zoom-in-down" src={docs} alt="" />


                </div>



            </section>
            {/* banner section end */}

            {/* is the atractiong client section */}
            <section>
                <About></About>
            </section>
            {/* here is teh card section */}
            <section>
                <Card></Card>
            </section>
            {/* here is the review section */}

            <section>
                <ReviewSection></ReviewSection>
            </section>
            {/* ends */}

            {/* here is the our experts doctors */}
            <section>
                <OurDoctors></OurDoctors>
            </section>
            {/* here is the our experts doctors  ends*/}



        </div>
    );
};

export default Home;