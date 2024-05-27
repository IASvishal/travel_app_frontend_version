import { createContext, useContext, useReducer } from "react";
import {filterReducer} from "../reducer";



const initialValue = {
    isFilterModalOpen : false,
    priceRange: [300, 20000],
    noOFBathrooms:"Any",
    noOFBedrooms:"Any",
    noOFBeds:"Any",
    propertyType: "Any",
    traveloRating: 1,
    isCancelable: true,
}

const FilterContext = createContext(initialValue);

const FilterProvider = ({ children }) => {

    const [{isFilterModalOpen, priceRange, noOFBathrooms,noOFBedrooms,noOFBeds, propertyType,traveloRating,isCancelable}, filterDispatch] = useReducer(filterReducer, initialValue)
    return (
        <FilterContext.Provider value={{isFilterModalOpen,priceRange,noOFBathrooms,noOFBedrooms,noOFBeds, propertyType,traveloRating,isCancelable,filterDispatch}}>{children}</FilterContext.Provider>
    )
}

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };