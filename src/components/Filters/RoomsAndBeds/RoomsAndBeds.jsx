import { useFilter } from "../../../context";

const numberOfAmenities = ["Any", "1", "2", "3", "4", "5+"];
export const RoomsAndBeds = ()=>{

    const {filterDispatch, noOFBathrooms, noOFBedrooms, noOFBeds} = useFilter();

    console.log({noOFBathrooms, noOFBedrooms, noOFBeds});
    
    const handleBathroomsClick = (number) => {
        filterDispatch({
            type: "BATHROOMS",
            payload: number,
        });
    };
    const handleBedroomsClick = (number) => {
        filterDispatch({
            type: "BEDROOMS",
            payload: number,
        });
    };
    const handleBedsClick = (number) => {
        filterDispatch({
            type: "BEDS",
            payload: number,
        });
    };

    return (
        <div className="filter-container">
            <span className="filter-label">Rooms And Beds</span>
            <div className="d-flex align-center gap-large">
                    <div className="d-flex direction-column gap">
                        <span className="span-label">Bedrooms</span>
                        <span className="span-label">Beds</span>
                        <span className="span-label">Bathroom</span>
                    </div>

                <div className="d-flex direction-column gap">
                    <div>
                        {
                            numberOfAmenities.map((number) => (<span 
                            className={`span-label aminity-count align-center justify-center cursor-pointer on-hover 
                            ${
                                noOFBathrooms.toString() === number ? "selected" : ""
                            }`}
                            onClick={() => handleBathroomsClick(number)} key={number}>{number}</span>))
                        }
                    </div>
                    <div>
                        {
                            numberOfAmenities.map((number) => (<span 
                            className={`span-label aminity-count align-center justify-center cursor-pointer on-hover 
                            ${
                                noOFBedrooms.toString() === number ? "selected" : ""
                            }`} 
                            onClick={() => handleBedroomsClick(number)} key={number}>{number}</span>))
                        }
                    </div>
                    <div>
                        {
                            numberOfAmenities.map((number) => (<span 
                            className={`span-label aminity-count align-center justify-center cursor-pointer on-hover 
                            ${
                                noOFBeds.toString() === number ? "selected" : ""
                            }`} 
                            onClick={() => handleBedsClick(number)} key={number}>{number}</span>))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};