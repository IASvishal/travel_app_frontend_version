export const filterReducer = (state,{type, payload}) => {

    switch(type){
        case "SHOW_FILTER_MODAL":
            return{
                    ...state,
                    isFilterModalOpen: !state.isFilterModalOpen,
            };
        case "MINIMUM_PRICE":
            return{
                ...state,
                priceRange: [Math.min(payload.newValue[0], payload.priceRange[1]- payload.minDifference), payload.priceRange[1]]
            };
        case "MAXIMUM_PRICE":
            return{
                ...state,
                priceRange: [payload.priceRange[0], Math.max(payload.newValue[1], payload.priceRange[0] + payload.minDifference)]
            };
        case "BATHROOMS":
            return{
                ...state,
                noOFBathrooms: payload === "Any"? payload : payload === "5+" ? 5 : Number(payload),
            };
        case "BEDROOMS":
            return{
                ...state,
                noOFBedrooms: payload === "Any"? payload : payload === "5+" ? 5 : Number(payload),
            };
        case "BEDS":
            return{
                ...state,
                noOFBeds: payload === "Any" ? payload : payload === "5+" ? 5 : Number(payload),
            };
        case "PROPERTY_TYPE":
            return{
                ...state,
                propertyType: payload
            };
        case "RATING":
            return{
                ...state,
                traveloRating: Number(payload),
            };
        case "CANCELABLE":
            return{
                ...state,
                isCancelable: payload
            };
        case "CLEAR_ALL":
            return{
                ...state,
                priceRange: [300, 20000],
                noOFBathrooms:"Any",
                noOFBedrooms:"Any",
                noOFBeds:"Any",
                propertyType: "Any",
                traveloRating: 1,
                isCancelable: true,
            };
        default:
            return state;
    }
}
