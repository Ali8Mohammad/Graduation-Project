import FlightSearchBook from "../../../Components/FlightSearchBook/FlightSearchBook";
import Footer from "../../../Components/Footer/Footer";
import HeroHotelSearch from "../../../Components/HeroHotelSearch/HeroHotelSearch";
import Newsletter from "../../../Components/Newsletter/Newsletter";
import RecentSearch from "../../../Components/RecentSearch/RecentSearch";
import ShowPlaces from "../../../Components/ShowPlaces/ShowPlaces";
import "./HotelSearch.css"
export default function HotelSearch() {
  return (
    <>
    <main className="MS-main">
        <HeroHotelSearch />
        <ShowPlaces />
        <RecentSearch />
        <FlightSearchBook />
        <Newsletter />
        </main>
        <Footer />
    </>
  )
}

