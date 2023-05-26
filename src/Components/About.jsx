
import girl from '../assets/docresurces/gitl.png'

import teeth from '../assets/docresurces/teeth.png'

const About = () => {
    return (
        <div className=" px-20 my-10 w-full  flex justify-center">
            <div className="w-1/2">
                <img src={girl} alt="" />
            </div>
            <div className="w-1/2">
                {/* this is service section */}
                <div>
                    <h1 className='text-5xl font-bold'>Our Services</h1>
                    <p className='w-2/3 py-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>

                {/* here is the  teeth section */}
                <div>
                    <img src={teeth} alt="" />
                </div>
                {/* here is teh detailes  */}
                <div className='mt-4 w-[550px]'>
                    <h1 className='text-4xl font-bold'>Electro  Gastrology Therapy</h1>
                    <p className='py-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
                    <p>Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                    <button className='py-4 px-6 border-orange-600 border-2 mt-3 rounded-lg text-orange-300'>
                        More Details

                    </button>
                </div>
            </div>

        </div>
    );
};

export default About;