import man from '../../man comp 2 (2).json';
import Lottie from'lottie-react';
import {FaStar} from'react-icons/fa'
const Projects = () => {
    return (
        <div id="work">
            <h1 className='text-5xl font-bold text-[#25729D] text-center mb-[-10] mt-40'>Experiences</h1>
           <div className="h-screen flex items-center justify-center px-6 sm:px-12 lg:px-20">
            <section className="w-full xl:container mx-auto" style={{opacity: '1', transform: 'none'}}>
                <div className="flex items-center lg:space-x-10 w-full">
                <div className="w-full lg:w-1/2 px-6 font-raleway">
                    <div>
                    <ol className="relative border-l border-[#25729D] dark:border-neutral-800 mt-6 w-full">
                        <li className="mb-10 ml-8">
                        <span className="absolute flex items-center justify-center w-10 h-10 border border-[#25729D] rounded-full -left-5 dark:bg-neutral-800">
                            <FaStar className='text-[#25729D] text-xl'/>
                        </span>
                        <div className="p-4 border border-[#25729D] dark:border-neutral-800 rounded-lg shadow-sm">
                            <time className="md:hidden mb-1 text-xs font-normal font-sans dark:text-neutral-400 text-gray-400 sm:order-last sm:mb-0">Jan,2023 - Feb,2023</time>
                            <div className="md:flex lg:block xl:flex xl:space-x-2 items-center justify-between font-raleway">
                            <div className="md:flex lg:block md:space-x-2 lg:space-x-0 items-center  font-raleway">
                                <p className="font-raleway text-base sm:text-lg font-medium text-black dark:text-neutral-300">TechWarrior IT</p>
                                <p className="font-raleway text-sm sm:text-base xl:text-sm font-normal text-black dark:text-neutral-400">Front-End Developer</p>
                            </div>
                            <time className="hidden md:block mb-1 xl:text-xs font-normal font-sans text-gray-400 dark:text-neutral-400 sm:order-last sm:mb-0">Jan,2023 - Feb,2023</time>
                            </div>
                            <p className="hidden md:block lg:hidden xl:block font-raleway text-gray-500 dark:text-neutral-500 text-sm mt-1">Was responsible for designing, Developing projects in Mern Stack, continuously improving performance and functionality.</p>
                        </div>
                        </li>
                        <li className="mb-10 ml-8">
                        <span className="absolute flex items-center justify-center w-10 h-10 border border-[#25729D] rounded-full -left-5 dark:bg-neutral-800">
                            <FaStar className='text-[#25729D] text-xl'/>
                        </span>
                        <div className="p-4 border border-[#25729D] dark:border-neutral-800 rounded-lg shadow-sm">
                            <time className="md:hidden mb-1 text-xs font-normal font-sans dark:text-neutral-400 text-gray-400 sm:order-last sm:mb-0">August,2021 - May,2022</time>
                            <div className="md:flex lg:block xl:flex xl:space-x-2 items-center justify-between font-raleway">
                            <div className="md:flex lg:block md:space-x-2 lg:space-x-0 items-center  font-raleway">
                                <p className="font-raleway text-base sm:text-lg font-medium text-black dark:text-neutral-300">Sylloo</p>
                                <p className="font-raleway text-sm sm:text-base xl:text-sm font-normal text-black dark:text-neutral-400">Jr. Laravel Developer</p>
                            </div>
                            <time className="hidden md:block mb-1 xl:text-xs font-normal font-sans text-gray-400 dark:text-neutral-400 sm:order-last sm:mb-0">August,2021 - May,2022</time>
                            </div>
                            <p className="hidden md:block lg:hidden xl:block font-raleway text-gray-500 dark:text-neutral-500 text-sm mt-1">Was responsible for website developing and maintaining, improving customer satisfaction and increasing user engagement.</p>
                        </div>
                        </li>

                        <li className="mb-10 ml-8">
                        <span className="absolute flex items-center justify-center w-10 h-10 border border-[#25729D] rounded-full -left-5 dark:bg-neutral-800">
                            <FaStar className='text-[#25729D] text-xl'/>
                        </span>
                        <div className="p-4 border border-[#25729D] dark:border-neutral-800 rounded-lg shadow-sm">
                            <time className="md:hidden mb-1 text-xs font-normal font-sans dark:text-neutral-400 text-gray-400 sm:order-last sm:mb-0">August,2023 - Present</time>
                            <div className="md:flex lg:block xl:flex xl:space-x-2 items-center justify-between font-raleway">
                            <div className="md:flex lg:block md:space-x-2 lg:space-x-0 items-center  font-raleway">
                                <p className="font-raleway text-base sm:text-lg font-medium text-black dark:text-neutral-300">Flytonic</p>
                                <p className="font-raleway text-sm sm:text-base xl:text-sm font-normal text-black dark:text-neutral-400">Web Developer</p>
                            </div>
                            <time className="hidden md:block mb-1 xl:text-xs font-normal font-sans text-gray-400 dark:text-neutral-400 sm:order-last sm:mb-0">August,2023 - Present</time>
                            </div>
                            <p className="hidden md:block lg:hidden xl:block font-raleway text-gray-500 dark:text-neutral-500 text-sm mt-1">Responsible for devoloping websites.</p>
                        </div>
                        </li>
                    </ol>
                    </div>
                </div>
                <div className="hidden lg:block w-1/2 xl:w-1/2 rounded-2xl xxl:mx-auto" style={{opacity: '1', transform: 'none'}}>
                <Lottie className='h-96' animationData={man}/>
                </div>
                </div>
            </section>
            </div>
        </div>
    );
};

export default Projects;