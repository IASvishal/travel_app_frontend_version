import { useEffect, useState} from "react"
import axios from "axios";
import { DateSelector } from "../DateSelector/DateSelector";
import "./SearchStayWithDate.css";
import { useDate, useCategory } from "../../context";
import { useNavigate } from "react-router-dom";

export const SearchStayWithDate = () => {

    const [hotels, setHotels] = useState([]);
    const {destination, guests,isSearchResultOpen, dateDispatch} = useDate();
    const {hotelCategory} = useCategory();

    const navigate = useNavigate();

    useEffect(() => {
        (async () => {

            try{
                const {data} = await axios.get(`https://travel-app-backend-version-1.onrender.com/api/hotels?category=${hotelCategory}`);
                setHotels(data);
            }catch(err){
                console.log(err);
            }

        })()
    }, [hotelCategory]);

    const handleDestinationChange = (event) =>{
        dateDispatch({
            type: "DESTINATION",
            payload: event.target.value,
        });
    };

    const handleGuestChange =(event)=>{
        dateDispatch({
                type: "GUESTS",
                payload: event.target.value,
            });
    };

    const handleSearchResultClick = (address) => {
        dateDispatch({
            type: "DESTINATION",
            payload: address,
        });
    };

    const handleDestinationFocus =()=>{
        dateDispatch({
            type: "SHOW_SEARCH_RESULT",
        });
    };

    const handleSearchButtonClick = ()=>{
        dateDispatch({
            type: "CLOSE_SEARCH_MODAL",
        })
        navigate(`/hotels/${destination}`)
    }

    const destinationOptions = hotels.filter(({address, city, state, country})=> 
    address.toLowerCase().includes(destination.toLowerCase()) ||
    city.toLowerCase().includes(destination.toLowerCase()) ||
    state.toLowerCase().includes(destination.toLowerCase()) || 
    country.toLowerCase().includes(destination.toLowerCase()));

    return (
        <div className="destination-container">
            <div className="destination-options d-flex align-center absolute">
                <div className="location-conatiner">
                    <label className="lable">Where</label>
                    <input 
                    value={destination} 
                    onChange={handleDestinationChange} 
                    autoFocus className="input search-dest" 
                    placeholder="Search Destination"
                    onFocus={handleDestinationFocus}
                    /> 
                </div>
                <div className="location-conatiner">
                    <label className="lable">Check In</label>
                    <DateSelector  checkIntype="in"/>
                </div>
                <div className="location-conatiner">
                    <label className="lable">Check Out</label>
                    <DateSelector  checkIntype="out"/>
                </div>
                <div className="location-container">
                    <label className="lable">No. of Guest</label>
                    <input value={guests} className="input search-dest" placeholder="Add guests" onChange={handleGuestChange}/>
                </div>
                <div className="search-container d-flex align-center cursor" onClick={handleSearchButtonClick}> 
                    <span className="material-icons-outlined">search</span>
                    <span>Search</span>
                </div>
            </div>
            {
                isSearchResultOpen && (<div className="search-result-conatiner absolute">
                {
                    destinationOptions && destinationOptions.map(({address, city}) => (
                    <p className="p cursor-pointer"
                        onClick={() => handleSearchResultClick(address)}>
                        {address}, {city}
                    </p>)
                )}
            </div>)
            }
            
        </div>
    );
}