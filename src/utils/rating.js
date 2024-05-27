export const getHotelsByRatings = (hotels, rating) =>{
    if (rating === "Any") {
        return hotels;
    }
    const filteredHotels = hotels.filter(hotel => hotel.rating >= rating);
    return filteredHotels;
}