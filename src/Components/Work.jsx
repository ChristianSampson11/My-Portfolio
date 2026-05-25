import WorkCards from './WorkCards';

function Work() {
    return(
        <section id="Work" className="py-5">
            <div className="container">
                <div className="row justify-content-start">
                    <div className="col-lg-11"> {/* Adding vertical spacing, creating container, and expanding container to 3/4 width of the page */}
                        <div className="shadow rounded p-5 bg-dark bg-gradient">
                            <div className="row align items-center"> {/* Added shadow backdrop and and centered columns */}

                                <div>

                                    <h2 className=" text-start mb-4 fw-bold" style={{color:"#FFFFFF"}}>
                                        My Workflow
                                    </h2>

                                    <p className= "text-start " style={{color:"#FFFFFF"}}>
                                        Presently, I am taking a course in the design and analysis of User Interfaces, educating me on the fundamentals of HTML, CSS, React and Booststrap5.
                                        Additionally, this course outlines the fundamentals of visual design principles such as Visual Communication, Colour, Typography, Icongraphy, and more!
                                        Click below to learn more about the resources that have facilitated my workflow so far throughout this course!
                                    </p>

                                    <button class="btn btn-primary rounded-pill" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Open Workflow Resources</button>

                                    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                    <div class="offcanvas-header">
                                        <h5 className="offcanvas-title fw-bold">Workflow Resources</h5>
                                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div class="offcanvas-body">

                                        <WorkCards 
                                            title = "ChatGPT"
                                            description = "As a beginner in the UI/UX world, ChatGPT has been a large contributer to helping me become familiarized with the syntax, organization, and design conventions of CSS, HTML, Bootstrap, and React. This is a super helpful tool when trying to pick up and explore new coding languages!"
                                            image = "../assets/Chat-GPT-logo.webp"
                                            link = "https://chatgpt.com/"
                                        />

                                        <WorkCards 
                                            title = "Bootstrap"
                                            description = "Bootstrap's documentation has been an incredibly helpful resource when learning how to customize its framework, allowing me to add my own personal touch onto conventional elements."
                                            image = "../assets/bootstrap.jpg"
                                            link = "https://getbootstrap.com/docs/5.0/getting-started/introduction/"
                                        />

                                        <WorkCards 
                                            title = "NetNinja"
                                            description = "Before getting started with ANYTHING UI related, I consulted NetNinja's YouTube playlist on Bootstrap5. This high-level overview taught me about the possible implementations of Bootstrap, what I can do with it, and how powerful it really is."
                                            image = "../assets/NetNinja.png"
                                            link = "https://www.youtube.com/playlist?list=PL4cUxeGkcC9joIM91nLzd_qaH_AimmdAR"
                                        />

                                        <WorkCards 
                                            title = "IxDF - Interaction Design Foundation"
                                            description = "The layout of this website, including its core sections, has been heavily inspired by the provided IxDF article. Using this article as a baseline for the design and content of my portfolio has greatly facilitated my learning in UI/UX design thus far."
                                            image = "../assets/IxDF.png"
                                            link = "http://ixdf.org/literature/article/what-should-a-ux-design-portfolio-contain"
                                        />

                                    </div>
                                    </div>

                                </div>  {/* Text contents, including header style and size, and text */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );

}

export default Work;