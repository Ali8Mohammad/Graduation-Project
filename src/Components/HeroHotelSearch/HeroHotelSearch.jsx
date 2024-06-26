import Hero from "../Hero/Hero"
import"./HeroHotelSearch.css"

export default function HeroHotelSearch() {
    const title ="Make your travel whishlist, we’ll do the rest";
    const para ="Special offers to suit your plan";
    const className="MS_HeroSearch"
  return (
    <>
       <Hero title={title} para={para} className={className} />
    </>
  )
}
