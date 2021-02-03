function card(props) {
    return(
        <div className="cardBody row">
            <div className="col-md-4 col-sm-12">
                <img src={props.img} alt={props.title} />
            </div>
            <div className="col-md-8 col-sm-12">
                <div className="cardHeader row">
                    <h3>{props.title}</h3>
                    <p>₹{props.price}</p>
                </div>
                <div className="cardDesc row">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
};

export default card;