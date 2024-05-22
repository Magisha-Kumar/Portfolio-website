import ProjectImg1 from "../assets/projects1.png";
import ProjectImg2 from "../assets/projects2.png";
import ProjectImg3 from "../assets/projects3.png";

const Projects = () => {

    const config = {
        projects : [
            {
                image : ProjectImg1,
                description : "A Rock-Paper-Scissors game built with HTML,CSS and JavaScript",
                link : "https://rock-paper-scissors-60028056317.development.catalystserverless.in/app/index.html"
            },
            {
                image : ProjectImg2,
                description : "Portfolio website built with React and Tailwind Css",
                link : ""
            },
            {
                image : ProjectImg3,
                description : "Register and Login using React and Firebase",
                link : "https://github.com/Magisha-Kumar/Login-And-Register-Using-React"
            }
        ]
    }

    return(
        <section id="projects" className="flex flex-col px-5 py-20 justify-center bg-primary text-white">
            <div className="w-full">
                <div className="flex flex-col px-10 py-5">
                    <h1 className="text-4xl border-secondary text-white border-b-4 mb-5 w-[150px] font-bold">Projects</h1>
                    <p>These are some of my projects that are built using HTML, CSS, JavaScript and React</p>
                </div>
                
            </div>
            <div className="w-full">
                <div className="flex flex-col md:flex-row px-10 gap-5">
                    {config.projects.map ( (project) => (
                            <div className="relative">
                                <img className="h-[200px] w-[500px]" src={project.image}/>
                                <div className="project-desc">
                                    <p className="text-center px-5 py-5">{project.description}</p>
                                    <div className="flex justify-center">
                                        <a className="btn" target="_blank" href={project.link}>View Project</a>
                                    </div>
                                </div>
                            </div> 
                    ))
                    }
                </div>
                
            </div>
        </section>
    );
}

export default Projects;