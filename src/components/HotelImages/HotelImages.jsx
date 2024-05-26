import "./HotelImages.css"
export const HotelImages = ({singleHotel}) => {

    const {image, imageArr} = singleHotel || {};
    return (
        <div className="hotel-image-box d-flex gap-sml">
            <div className="priamry-image-box">
                <img className="primary-hero-pic" src={image} alt="primary-img" />
            </div>
            <div className="d-flex wrap gap-sml">
            { imageArr && imageArr.map((image) => (<img key={image} className="hotel-pic" src={image} 
                alt="hotel-img"/>
                ))}
            </div>
        </div>
    );
};