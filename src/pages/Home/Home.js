import { Fragment, useEffect, useState} from "react"
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { Navbar, HotelCard, Categories, SearchStayWithDate, } from "../../components";
import "./Home.css";
import { useCategory, useDate } from "../../context";

export const Home = () => {

    const [hasMore, setHasMore] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(16);
    const [testData, setTestData] = useState([]); 
    // const [hotelsToShow, setHotelsToShow] = useState([]);
    const [hotels, setHotels] = useState([]);
    const {hotelCategory} = useCategory();
    const {isSearchModalOpen} = useDate();

    useEffect(() => {
        (async () => {

            try{
                const {data} = await axios.get(`http://localhost:3500/api/hotels?category=${hotelCategory}`);
                setTestData(data);
                setHotels(data ? data.slice(0, 16) : []);
            }catch(err){
                console.log(err);
            }

        })()
    }, [hotelCategory]);

    const fetchMoreData = () => {
        if(hotels.length >= testData.length){
            setHasMore(false);
            return;
        }
        setTimeout(()=>{
            if(hotels && hotels.length>0){
                setHotels(hotels.concat(testData.slice(currentIndex, currentIndex+16)));
                setCurrentIndex(prev => prev+16);
            }else{
                setHotels([]);
            }
        }, 1000)
    };

    return (
        <div className="relative">
            <Navbar />
            <Categories/>
                {
                    hotels && hotels.length > 0 ? (
                        <InfiniteScroll
                            dataLength={hotels.length}
                            next={fetchMoreData}
                            hasMore={hasMore}
                            loader={hotels.length > 0 && <h3 className="alert-text">loading...</h3>}
                            endMessage={
                                <p className="alert-text">
                                    <b>Yay! You have seen it all</b>
                                </p>
                            }
                        >
                            <main className="main d-flex align-centre wrap gap-larger">
                                {
                                    hotels && hotels.map(hotel => <HotelCard key={hotel._id} hotel={hotel}/>)
                                }
                            </main>
                        </InfiniteScroll>
                    ) :(<></>)
                }
                {
                    isSearchModalOpen && <SearchStayWithDate/>
                }

        </div>

    );
};