/* eslint-disable react/no-unescaped-entities */
import girl from '../../animation_lkgruf7y.json';
import Lottie from'lottie-react';
import { Typewriter } from 'react-simple-typewriter';
const Banner = () => {
   

    return (
        <div className='container mx-auto'
        
        >
            <Lottie className='h-96 mt-10' animationData={girl}/>
            <p className='text-xl text-center text-[#25729D] font-semibold'>Hello, I'm</p>
            <h2 className='text-5xl mb-2 flex justify-center text-[#25729D] font-semibold font-Oleo'> Monika Hossan Momi</h2>
            <div className='text-3xl flex justify-center text-[#25729D] font-semibold'> 
            
            <Typewriter 
              words={['A MERN Stack Developer']}
              loop={7}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
            </div>
            
        </div>
    );
};

export default Banner;