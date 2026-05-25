import { Link } from "react-router-dom";

function ProjectCards(props) {
    return (
        <div className="card border-0 shadow-sm rounded 5 p-3 bg-dark bg-gradient" style={{width: "18rem"} }>

            <img
                src={props.image}
                className="card-img-top rounded-4"
                alt={props.title}
            />
        <div className="card-body">

            <h5 className="card-title fw-bold" style={{color:"#FFFFFF"}}>
                {props.title}
            </h5>

            <p className="card-text text-start" style={{color:"#FFFFFF"}}>
                {props.description}
            </p>
            
            <Link
                className="btn btn-primary"
                to={props.Link}
            >
                Visit {props.title}!
            </Link>

            </div>
        </div>
    );
}

export default ProjectCards;