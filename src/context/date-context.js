import { createContext,useContext, useReducer } from "react";
import { dateReducer } from "../reducer";

const initiaState = {
    destination: "",
    guests: "0",
    checkInDate: null,
    checkOutDate: null,
    isSearchModalOpen: false,
    isSearchResultOpen: true,
};
const DateContext = createContext(initiaState);

const DateProvider = ({children}) => {
    const [{destination,guests, checkInDate, checkOutDate, isSearchModalOpen, isSearchResultOpen}, dateDispatch] = useReducer(dateReducer, initiaState);

    return <DateContext.Provider value={{destination,guests,checkInDate, checkOutDate, isSearchModalOpen,isSearchResultOpen, dateDispatch}}>{children}</DateContext.Provider>;
}

const useDate = () => useContext(DateContext);

export {useDate,DateProvider};