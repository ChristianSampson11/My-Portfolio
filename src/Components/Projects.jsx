import ProjectCards from './ProjectCards';
import { Link } from "react-router-dom";

function Projects() {
    return(
        <section id="Projects" className="py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="shadow rounded p-5 bg-dark bg-gradient">
                            <div className="row align items-center"> {/* Added shadow backdrop and and centered columns */}

                                <div>
                                    <h2 className=" text-start fw-bold" style={{color:"#FFFFFF"}}>
                                        Personal Projects
                                    </h2>

                                    <p className= "text-start " style={{color:"#FFFFFF"}}>
                                        This section contains a variety of personal projects I've been working on, as well as case studies conducted in the Design and Analysis of User Interfaces course.
                                        I welcome you to take a look!
                                    </p>

                                    <div
                                        className="d-flex justify-content-center flex-wrap gap-4">

                                    <ProjectCards 
                                        title = "Quick Cutz - Service Site"
                                        description = "This is my service website, a high-fidelty prototype of a local hairdresser business."
                                        image = "/assets/QuickCutz.png"
                                        Link = "https://quick-cutz.netlify.app/"
                                    />

                                    <ProjectCards
                                        title = "Repeat After Me! - Memory Game"
                                        description = "This is my personal adaptation of Simon Says, called Repeat After Me! A memory game."
                                        image = "../assets/RepeatAfterMe.png"
                                        Link = "https://memory-game-simon-says.netlify.app/"
                                    />

                                    <ProjectCards
                                        title = "Baseball Warehouse - E-Commerce Site"
                                        description = "This is my E-Commerce Site named Baseball Warehouse, an online baseball store."
                                        image = "../assets/BaseballWarehouse.png"
                                        Link = "https://baseball-warehouse.netlify.app/"
                                    />

                                    <ProjectCards
                                        title = "Baseball Analytics"
                                        description = "This deliverable will represent a baseball analytics site, showing the hotters hitters and toughest to hit against pitchers in the MLB!"
                                        image = "../assets/mlb.png"
                                        Link = "/Analytics"
                                    />
                                </div>  {/* Text contents, including header style and size, and text */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>

    );

}

export default Projects;