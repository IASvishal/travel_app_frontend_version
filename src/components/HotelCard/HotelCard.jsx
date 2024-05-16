import "./HotelCard.css";
export const HotelCard = ({hotel}) => {

    const {_id, name, image, address, state, rating, price}= hotel;

    return (
        <div className="relative hotelcard-container shadow cursor-pointer">
            <div>
                <img src={image} alt={name}  className="img"/>
                <div className="hotelcard-details">
                    <div className="d-flex align-centre">
                    <span className="location">{address}, {state}</span>
                    <span className="rating d-flex align-centre">
                        <span className="material-icons-outlined">star</span>
                        <span>{rating}</span>
                    </span>
                    </div>
                    <p className="hotel-name">{name}</p>
                    <p className="price-details">
                        <span className="price">{price}</span>
                        <span>night</span>
                    </p>
                </div>
            </div>
        
                <button className="button btn-wishlist absolute d-flex align-centre">
                    <span className="material-icons favorite cursor">favorite</span>
                </button>
            
        </div>
    )
}