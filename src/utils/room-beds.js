export const getHotelsByRoomsAndBeds = (hotels, noOFBathrooms, noOFBedrooms, noOFBeds,) => {
    if (noOFBathrooms === "Any" || noOFBedrooms === "Any" || noOFBeds === "Any") {
        return hotels;
    }
    const filteredHotels = hotels.filter(({numberOfBathrooms, numberOfBedrooms, numberOfBeds}) =>
        numberOfBathrooms === noOFBathrooms || numberOfBedrooms === noOFBedrooms || numberOfBeds === noOFBeds
    );
    return filteredHotels;
}