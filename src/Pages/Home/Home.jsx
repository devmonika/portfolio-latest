import Footer from "../../component/Header/Footer";
import About from "./About";
import Assignments from "./Assignments";
import Banner from "./Banner";
import Contact from "./Contact";
import Projects from "./Projects";
import Work from "./Work";


const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Work/>
            <Projects/>
            <Assignments/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;