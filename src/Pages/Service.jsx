import { Link } from "react-router-dom";

function Service() {
    return (
        <div className="container-fluid py-5 text-center">

            <h1>Service Site</h1>

            <p className="mt-4">
                Coming Soon
            </p>

            <Link 
                to="/#Projects" className="btn btn-secondary mt-4">
                Back To Projects
            </Link>

        </div>
    );
}

export default Service;