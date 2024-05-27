import { useFilter } from "../../../context";
const ratings = ["1" ,"2", "3", "4", "5"]

export const Ratings = () =>{

    const {traveloRating, filterDispatch} = useFilter();
    const handleRatingsClick = (rating) =>{

        filterDispatch({
            type: "RATING",
            payload: rating,
        })
    }
    return(
        <div className="filter-container">
            <span className="filter-label">Ratings</span>
            <div className="d-flex align-center gap">
                {
                    ratings.map((rating) => (<span 
                    className={`span-label aminity-count star align-center justify-center cursor-pointer on-hover
                    ${traveloRating === rating ? "selected" : ""}` }
                    onClick={() => handleRatingsClick(rating)}
                    key={rating}>
                    {rating} &up</span>))
                }
            </div>
        </div>
    );
};