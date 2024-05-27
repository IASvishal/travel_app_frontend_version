import axios from "axios";
import { useEffect, useState } from "react";
import { useCategory, useFilter } from "../../context";

import "./Categories.css"
export const Categories = () => {
    const [Categories, setCategories] = useState([]);
    const [numberOfCategoryToShow, setnumberOfCategoryToShow] = useState(0);
    const {hotelCategory, setHotelCategory} = useCategory();

    const{filterDispatch} = useFilter();

    const handleShowMoreRightClick = () => {
        setnumberOfCategoryToShow((prev) => prev + 10);
    };

    const handleShowMoreLeftClick = () => {
        setnumberOfCategoryToShow((prev) => prev - 10);
    };

    const handleFilterClick = () =>{
        filterDispatch({type: "SHOW_FILTER_MODAL"});
    };

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get("http://localhost:3500/api/category");
                const categoriesToShow = data.slice(
                    numberOfCategoryToShow + 10 > data.length ? data.length - 10 : numberOfCategoryToShow,
                    numberOfCategoryToShow  > data.length ? data.length : numberOfCategoryToShow +10
                );
                setCategories(categoriesToShow);
            } catch (err) {
                console.log(err);
            }
        }
        )();
    }, [numberOfCategoryToShow]);


    const handleCategoryClick = (category) => {
        setHotelCategory(category);
    };

    return (<section className="categories d-flex align-centre gap-large cursor-pointer shadow">
        {
            numberOfCategoryToShow >=10 && (<button className="button btn-category btn-left fixed cursor-pointer"
            onClick={handleShowMoreLeftClick}> 
                <span class="material-icons-outlined">chevron_left</span>
            </button>
        )}
        {
            Categories && Categories.map(({_id, category }) => 
            <span className={`${category == hotelCategory ? "border-bottom": ""}`} key={_id} onClick={() => (handleCategoryClick(category))}>{category}</span>)
        }
        {
            numberOfCategoryToShow -10 < Categories.length && (<button className="button btn-category btn-right fixed cursor-pointer"
            onClick={handleShowMoreRightClick}>
                <span class="material-icons-outlined">chevron_right</span>
            </button>
        )}
        <button className="button btn-filter d-flex align-center gap-small cursor-pointer fixed" onClick={handleFilterClick}>
            <span class="material-icons-outlined">filter_alt</span>
            <span>Filter</span>
        </button>
    </section>
    );
};