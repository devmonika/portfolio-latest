import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import { RiEarthFill } from "react-icons/ri";
import girl from '../../girl.json';
import Lottie from'lottie-react';
import {motion} from "framer-motion";

const About = () => {
 
    return (
        <div id="about">
            
            <div className="hero min-h-screen">
              <div className="hero-content flex-col lg:flex-row-reverse">
                  <motion.div className="text-center lg:text-left"
                   initial={{ opacity: 0, y: 50 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8 }}>
                    <h1 className="text-5xl font-bold text-[#25729D]">About Me!</h1>
                    <p className="text-justify py-6"> Designing and Coding have been my passion.I have been working in this sector since 2021 as a Web Designer. I enjoy creating beautifully designed, intuitive and functional website. My expertise includes Javascript, React, Express, Node.js,Firebase Auth and MongoDB.
                    As a MERN stack developer, I am excited to embark on this journey and make a positive impact in the world of web development. I am a fast learner, a team player, and I thrive in a challenging and dynamic environment.</p>
                    <button className='text-[#25729D] fontbtn'>
                     <a href="https://github.com/devmonika"> <FaGithub/></a>
                    </button>
                    <button className=' border-[#25729D] mx-3 text-[#25729D] fontbtn'>
                    <a href="https://www.linkedin.com/in/monika-hossan-momi/"><FaLinkedin/></a>
                    </button>
                    <button className=' border-[#25729D] mx-3 text-[#25729D] fontbtn'>
                    <a href="Monika's Resume - Fullstack.pdf"><FaFile/></a>
                    </button>
                    <button className=' border-[#25729D] mx-3 text-[#25729D] fontbtn'>
                    <a href="https://dev-monika-portfoli.netlify.app/"><RiEarthFill/></a>
                    </button>

                  
                  </motion.div>
                  <div className="card flex-shrink-0 w-full max-w-2xl">
                    <motion.div className="card-body"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}>
                    <Lottie className='h-96 mt-10' animationData={girl}/>
                    </motion.div>
                  </div>
                </div>
              </div>
        </div>
    );
};

export default About;