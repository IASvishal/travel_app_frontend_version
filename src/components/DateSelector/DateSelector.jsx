// import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DateSelector.css";
import { useDate } from "../../context";
// import { type } from "@testing-library/user-event/dist/type";


export const DateSelector = ({placeholder, checkIntype}) => {

    const {checkInDate, checkOutDate,dateDispatch} = useDate();

    const handleDateChange = (date) => {
        dateDispatch({type: checkIntype === "in"? "CHECK_IN" : "CHECK_OUT", payload: date});
    }

    const handleDateFocus = ()=>{
        dateDispatch({
            type : "DATE_FOCUS",
        });
    };

    return (
    <DatePicker
    className="search-dest input" 
    selected={checkIntype === "in" ? checkInDate :checkOutDate}
    onChange={date => handleDateChange(date)}
    onFocus = {handleDateFocus}
    dateFormat="dd/MM/yyyy" 
    placeholderText="Add Dates" 
    closeOnScroll={true} />
    );
};

