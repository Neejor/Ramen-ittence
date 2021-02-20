function card(props) {
    return(
        <div className="cardBody row">
            <div className="col-md-4 col-sm-12 imageBody">
                <img src={props.img} alt={props.title} />
            </div>
            <div className="col-md-8 col-sm-12 contentBody">
                <div className="cardHeader row">
                    <div className = "contentHeader">
                    <h3>{props.title}</h3>
                    <p>₹{props.price}</p>
                    </div>
                </div>
                <div className="cardDesc row">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
};

export default card;