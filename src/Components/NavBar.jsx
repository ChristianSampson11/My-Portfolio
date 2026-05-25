function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg shadow-sm py-0 fixed-top"> {/* Style Control */}
            <div className="container-fluid bg-dark bg-gradient">
                <div className="w-100 d-flex align-items-start justify-content-between">

                        <button
                            className="navbar-toggler align-items-start border-0"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >

                            <span className="navbar-toggler-icon"></span>

                        </button>

                        <div className="collapse navbar-collapse mt-5" id="navbarNav">
                            <div className="navbar-nav">
                                <a className="nav-link active fw-bold" style={{ color: "#FFFFFF" }} aria-current="page" href="#About">About Me</a>
                                <a className="nav-link active fw-bold" style={{ color: "#FFFFFF" }} href="#Work">Workflow</a>
                                <a className="nav-link active fw-bold" style={{ color: "#FFFFFF" }} href="#Projects">Projects</a>
                            </div>
                        </div>
                    </div>
                    <a className="navbar-brand fw-bold ms-auto d-lg-block" style={{ color: "#FFFFFF" }} href="#">
                        Christian Sampson
                    </a>
                </div>

        </nav>
    );
}

export default NavBar