import { FaUserAlt } from "react-icons/fa";
import { RiCodeBoxFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { Link } from "react-router-dom";
import '../../../public/Monika-Curriculum_Vitae(React Js Developer).pdf';
import {motion} from "framer-motion";
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
    return (
        <motion.div className="container mx-auto"
        initial={{ opacity: 0, y: 50 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8 }}>
            <div className="navbar bg-base-100 fixed top-0 left-0 w-full z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52">
                        <li><a className="text-2xl text-[#25729D]"><FaUserAlt/> </a></li>
                        <li><a  href="https://github.com/devmonika" className="text-2xl text-[#25729D]"><RiCodeBoxFill/></a></li>
                      
                        <li><a className="text-2xl text-[#25729D]"><MdEmail/></a></li>
                    </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-3xl">
                        {/* <img className=" h-10" src="https://i.postimg.cc/rF4PSRTQ/Vector-6.png"/> */}
                        <img className=" h-8" src="https://i.postimg.cc/m23JMGLq/Vector-5-1.png"/>
                        </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex justify-center align-center">
                    <li className="px-6"><ScrollLink to="about" smooth={true} duration={500} className="text-2xl text-[#25729D]"><FaUserAlt/></ScrollLink></li>
                    {/* <li className="px-6"><a  href="https://github.com/devmonika"><ScrollLink to="contact" smooth={true} duration={500} className="text-3xl text-[#25729D]"><RiCodeBoxFill/></ScrollLink></a></li> */}
                    <li className="px-6"><ScrollLink to="skill" smooth={true} duration={500} className="text-3xl text-[#25729D]"><RiCodeBoxFill/></ScrollLink></li>
                    <li className="px-6"><ScrollLink to="work" smooth={true} duration={500} className="text-3xl text-[#25729D]"><MdWork/></ScrollLink></li>
                    <li className="px-6"><ScrollLink to="project" smooth={true} duration={500} className="text-3xl text-[#25729D]"><MdOutlineSettings/></ScrollLink></li>
                    <li className="px-6"><ScrollLink to="contact" smooth={true} duration={500} className="text-3xl text-[#25729D]"><MdEmail/></ScrollLink></li>
                    
                   
                    </ul>
                </div>
                <div className="navbar-end">
                   <a href="Monika-Curriculum_Vitae(React Js Developer).pdf" download className="btn bg-[#25729D] text-white">Download CV</a> 
                </div>
            </div>
        </motion.div>
    );
};

export default Header;