import ResumeImg from "../assets/resume.png";

const Resume = () => {

    const config = {
        link : "https://drive.google.com/file/d/1q6_E16ey8MXE-5B4V8anlFxrqANejx2k/view?usp=sharing"
    }

    return (
        <section id="resume" className="flex flex-col md:flex-row bg-secondary px-5">

            <div className="py-5 md:w-1/2 flex justify-center md:justify-end">
                <img className="w-[300px]" src={ResumeImg}/>
            </div>

            <div className="md:w-1/2 flex justify-center">
                <div className="flex flex-col justify-center text-white">
                    <h1 className="text-4xl border-primary text-white border-b-4 mb-5 w-[140px] font-bold">Resume</h1> 
                    <p className="pb-5">You can view my resume <a className="btn" href={config.link}>Download</a></p>
                    
                </div>
            </div>
        </section>
    );
}

export default Resume;