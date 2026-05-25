import LinkedInIcon from '@mui/icons-material/LinkedIn';

function About() {
    return(
        <section id="About" className="py-5">
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-lg-11"> {/* Adding vertical spacing, creating container, and expanding container to 3/4 width of the page */}
                        <div className="shadow rounded p-5 bg-dark bg-gradient">
                            <div className="row align items-center"> {/* Added shadow backdrop and and centered columns */}

                                <div className="col-md-7">

                                    <h2 className=" text-start mb-4 fw-bold" style={{color:"#FFFFFF"}}>
                                        About Me
                                    </h2>

                                    <p className= "text-start " style={{color:"#FFFFFF"}}>
                                        Hello! I'm Christian, a fourth year student studying Computer Engineering at the University of Ottawa, with an option in Engineering Management and Entrepreneurship. 
                                        I've completed three co-op work-terms to date with Fisheries and Oceans, Communications Research Centre, and Lockheed Martin Canada. 
                                        My main interests currently reside in the Digital Logic field, specifically within Digital Design, Verification, ASIC design and verification, and the FPGA domain. 
                                        Throughout my journey, I've had the opportunity to fascinate myself with the design process including RTL, gate-level logic, synchronous and asynchronous design, as well as exploring the Hardware to Software relationship. 
                                        Outside of work and school, you can find me eagerly watching the Toronto Blue Jays!
                                    </p>
                                </div>  {/* Text contents, including header style and size, and text */}

                                <div className="col-md-5 text-center">
                                    <img
                                        src="../assets/Christian_Sampson_Headshot.jpeg"
                                        alt="Christian Sampson Headshot"
                                        className="img-fluid rounded"
                                        style={{margin: "75px 0 0 0"}}
                                    />
                                </div> {/* Image section, including image placement, source, scaling with container, soft corners */}

                            </div>
                            <div className="col-md-12 text-center" style={{margin: "40px 0 0 0"}}>
                                <a
                                    href="https://www.linkedin.com/in/christian-sampson-82179b355/"
                                    target="_blank"
                                    role="button" 
                                    className="btn btn-primary rounded-pill btn-md">
                                        <i 
                                        className="bi bi-plus-lg"><LinkedInIcon/>
                                        </i>
                                        Connect with me on LinkedIn! 
                                </a>                                 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );

}

export default About;