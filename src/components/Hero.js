import HeroImg from "../assets/woman.png";
import { AiOutlineLinkedin , AiOutlineGithub } from "react-icons/ai";

const Hero = () => {

    const config = {
        linkedIn : "https://www.linkedin.com/in/magisha-kumar-3a7383213/",
        github : "https://github.com/Magisha-Kumar"
    }

    return (
        <section id="home" className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center">
            <div className="md:w-1/2 flex flex-col">
                <h1 className=" text-white text-5xl font-hero-font">
                    Hi, <br/> I am <span className="text-black">Magisha</span>
                    
                </h1>
                <div className="flex py-10">
                    <a href={config.linkedIn} className="pr-5 hover:text-white"><AiOutlineLinkedin size={40}/></a>
                    <a href={config.github} className="hover:text-white"><AiOutlineGithub size={40}/></a>
                </div>
            </div>
            
            <img className="md:w-1/3" src={HeroImg}/>
        </section>
    );
}

export default Hero;