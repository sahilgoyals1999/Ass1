const HouseInfo = (props) => {
    return (
        <div>
    <div className="card mb-3" style={{width:"50%",height:"30%"}}>
    <img className="card-img w-100 h-100"  src={props.imageUrl} alt="..." />
        <h3 className="card-header">{props.size}</h3>
        <div className="card-body">
        </div>
        <div className="card-body">
            <p className="card-text">{props.loc}</p>
        </div>
        <button>View More</button>
        <button>Submit</button>
    </div>
</div>
    )
}

export default HouseInfo;