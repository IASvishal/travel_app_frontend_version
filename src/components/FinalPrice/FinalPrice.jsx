import "./FinalPrice.css";
import {useDate} from "../../context";
import {DateSelector} from "../DateSelector/DateSelector";
import { useNavigate } from "react-router-dom";



export const FinalPrice = ({singleHotel}) =>{

    const{_id, price, rating} = singleHotel;

    const navigate = useNavigate(); 

    const {guests, dateDispatch, checkInDate, checkOutDate} = useDate()

    const numberOfNights =
    checkInDate && checkOutDate
        ? (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 3600 * 24)
        : 0;
    
        const totalPayableAmount = price * numberOfNights + 200;

    const handleGuestChange = (event) =>{
        dateDispatch({type: "GUESTS", 
        payload: event.target.value,
    });
    };
    const handleReserveClick = () =>{
        navigate(`/confirm-booking/stay/${_id}`);
    }

    return(
        <div className="price-details-conatiner d-flex direction-column gap shadow">
            <div className="price-rating d-flex align-center justify-space-between">
                <p>
                    <span className="fs-bold fs-large">Rs. {price}</span>/Night
                </p>
                <span className="rating d-flex align-centre ">
                    <span className="material-icons-outlined">star</span><span>{rating}</span>
                </span>                
            </div>
            <div className="d-flex direction-column">
                <div className="grid-container-two-col selected-dates">
                    <div className="checkin loc-container">
                        <label className="label">Check In</label>
                        <DateSelector checkIntype="in"/>
                    </div>
                    <div className="checkin loc-container">
                        <label className="label">Check Out</label>
                        <DateSelector checkIntype="out"/>
                    </div>
                </div>
                <div className="guests gutter-sm">
                    <p>GUESTS</p>
                    {
                        guests <= 0 ? (<input className="guest-count-input" type="number" placeholder="Add Guests" value={guests} 
                        onChange={handleGuestChange} />) : (<span>{guests} guests</span>)
                    }
                </div>
            </div>
            <div>
                <button className="button btn-reserve btn-primary cursor" 
                onClick={handleReserveClick}
                disabled={checkInDate && checkOutDate && guests > 0 ? false : true}
                >Reserve</button>
            </div>
            <div className="price-distribution d-flex direction-column">
                <div className="final-price d-flex align-center justify-space-between">
                    <span className="span">Rs. {price} x {numberOfNights}</span>
                    <span className="span">Rs.{price * numberOfNights}</span>
                </div>
                <div className="final-price d-flex align-center justify-space-between">
                    <span className="span">Service Fee</span>
                    <span className="span">Rs. 200</span>
                </div>
                <div className="final-price d-flex align-center justify-space-between">
                    <span className="span">Tottal</span>
                    <span className="span">Rs. {totalPayableAmount}</span>
                </div>
            </div>
        </div>
    );
}