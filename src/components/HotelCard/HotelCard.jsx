import { useNavigate } from "react-router-dom";
import "./HotelCard.css";
import { useWishlist, useAuth } from "../../context";
import { findHotelInWishlist } from "../../utils";
export const HotelCard = ({hotel}) => {

    const {_id, name, image, address, state, rating, price}= hotel;

    const {wishlistDispatch, wishlist} = useWishlist();

    const {accessToken, authDispatch} = useAuth();
    console.log({accessToken});
    const isHotelInWishlist = findHotelInWishlist(wishlist, _id);



    const navigate = useNavigate();

    const handleHotelCardClick = () => {
        navigate(`/hotels/${name}/${address}--${state}/${_id}/reserve`);
    };

    const handleWishlistClick = () => {
        if(accessToken){

            if(!isHotelInWishlist){
                wishlistDispatch({
                    type: "ADD_TO_WISHLIST", 
                    payload: hotel,
                });
                navigate("/wishlist")
            }else{
                wishlistDispatch({
                    type: "REMOVE_FROM_WISHLIST", 
                    payload: hotel,
                });
            }
        }else{
            authDispatch({
                type: "SHOW_AUTH_MODAL",
                payload: "login"
            })
        }
    }

    return (
        <div className="relative hotelcard-container shadow cursor-pointer">
            <div onClick={handleHotelCardClick}>
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
        
                <button className="button btn-wishlist absolute d-flex align-centre" onClick={handleWishlistClick}>
                    <span className={`material-icons favorite cursor ${isHotelInWishlist ? "fav-selected": ""}`}>favorite</span>
                </button>
            
        </div>
    )
}