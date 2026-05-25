function WorkCards(props) {
    return (
        <div className="card shadow-sm mb-4 bg-dark bg-gradient">

            <img
                src={props.image}
                className="card-img-top"
                alt={props.title}
            />
        <div className="card-body">

            <h5 className="card-title fw-bold" style={{color:"#FFFFFF"}}>
                {props.title}
            </h5>

            <p className="card-text text-start " style={{color:"#FFFFFF"}}>
                {props.description}
            </p>
            
            <a
                href={props.link}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer">
                    Visit {props.title}!
                </a>
            </div>
        </div>
    );
}

export default WorkCards;