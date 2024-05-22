import AboutImg from "../assets/about.png";

const About = () => {
    return (
        <section id="about" className="flex flex-col md:flex-row bg-secondary px-5">

            <div className="py-5 md:w-1/2">
                <img src={AboutImg}/>
            </div>

            <div className="md:w-1/2 flex justify-center">
                <div className="flex flex-col justify-center text-white">
                    <h1 className="text-4xl border-primary text-white border-b-4 mb-5 w-[170px] font-bold">About me</h1> 
                    <p className="pb-5">Recent computer science graduate with a passion for software engineering.</p>
                    <p className="pb-5">Proven ability to learn new technologies quickly and apply them to real-world problems</p>
                    <p>Seeking an entry-level position where I can use my skills and knowledge to contribute to a team and make a positive impact on the company.</p>
                </div>
            </div>
        </section>
    );
}

export default About;