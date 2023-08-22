

const Assignments = () => {
    return (
        <div className="container mx-auto" id="project">
            <h1 className='text-5xl font-bold text-[#25729D] text-center mb-32'>Projects</h1>
            <div className="grid lg:grid-cols-2 gap-10  mx-16">
            <a href="#" className="block">
                <img
                    alt="Signage"
                    src="https://i.postimg.cc/3NyXJnj2/Screenshot-29.png"
                    className="h-56 border-2 border-[#25729D] w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                />

                <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                    <strong className="font-medium">Havenly</strong>

                    <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-[#25729D]"></span>

                    <p className="mt-0.5 opacity-50 sm:mt-0">House Rent Website</p>
                </div>
                </a>
            <a href="#" className="block">
                <img
                    alt="Signage"
                    src="https://i.postimg.cc/2yZfFNFy/screencapture-iq-shake-netlify-app-2023-07-25-17-50-42.png"
                    className="h-56 border-2 border-[#25729D] w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                />

                <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                    <strong className="font-medium">IQ-Shake</strong>

                    <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-[#25729D]"></span>

                    <p className="mt-0.5 opacity-50 sm:mt-0">Quiz Website</p>
                </div>
                </a>
            <a href="#" className="block">
                <img
                    alt="Signage"
                    src="https://i.postimg.cc/FK5NPRnv/Screenshot-19.png"
                    className="h-56 border-2 border-[#25729D] w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                />

                <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                    <strong className="font-medium">Tree-Pagla</strong>

                    <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-[#25729D]"></span>

                    <p className="mt-0.5 opacity-50 sm:mt-0">Garden Service Provider Webside</p>
                </div>
                </a>
            <a href="#" className="block">
                <img
                    alt="Signage"
                    src="https://i.postimg.cc/tCprzHzc/Screenshot-30.png"
                    className="h-56 border-2 border-[#25729D] w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                />

                <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                    <strong className="font-medium">Book Express</strong>

                    <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-[#25729D]"></span>

                    <p className="mt-0.5 opacity-50 sm:mt-0">Book reselling Website</p>
                </div>
                </a>
            </div>
        </div>
    );
};

export default Assignments;