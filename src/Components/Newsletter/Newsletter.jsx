import "./Newsletter.css"
import emoji from "./../../assets/images/Subscribe.png"
export default function Newsletter() {
  return (
    <>
      <div className="MS-newsletter container">
        <div>
          <h2>Subscribe Newsletter</h2>
          <h6>The Travel</h6>
          <p>Get inspired! Receive travel discounts, tips and behind the scenes stories.</p>
          <form className="MS-formnewsletter">
            <input type="email" placeholder="Your email address" className="MS-inputnewsletter" />
            <input type="submit" value="Subscribe" className="MS-btnnewsletter" />
          </form>
        </div>
        <img src={emoji} alt="Subscribe" className="MS-imgSubscribe" />
      </div>
    </>
  )
}
