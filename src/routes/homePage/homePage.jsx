import ScrollingList from "../../components/scrollingList/ScrollingList";
import SearchBar from "../../components/searchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import "./homePage.scss";

import { listData } from "../../lib/dummydata";

function HomePage() {
  console.log("listData:", listData);

  const navigate = useNavigate(); // To navigate to the /list page

  const handleButtonClick = () => {
    navigate("/list"); // Navigate to the /list page when button is clicked
  };

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            explicabo suscipit cum eius, iure est nulla animi consequatur
            facilis id pariatur fugit quos laudantium temporibus dolor ea
            repellat provident impedit!
          </p>

          {/* Offers Section */}
        <div className="offers-section">
          <h2>Exclusive Offers</h2>
          <div className="offers-cards">
            <div className="offer-card">
              <img src="https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Offer 1" />
              <h3>Luxury Villa - 20% Off</h3>
              <p>Book now and save 20% on this stunning luxury villa in a prime location.</p>
              <button className="offer-button">View Offer</button>
            </div>
            <div className="offer-card">
              <img src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Offer 2" />
              <h3>Modern Apartment - No Deposit</h3>
              <p>Move into a modern apartment with no deposit required. Limited time offer!</p>
              <button className="offer-button">View Offer</button>
            </div>
            <div className="offer-card highlighted-offer">
              <img src="https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Offer 3" />
              <h3>Exclusive Penthouse Deal</h3>
              <p>Get this penthouse at a special price with additional perks included!</p>
              <button className="offer-button">View Offer</button>
            </div>
          </div>
        </div>

          <button className="cta-button" onClick={handleButtonClick}>
            Explore Listings
          </button>

        </div>
      </div>
      <div className="imgContainer">
        <ScrollingList properties={listData} direction="bottom-to-top" />
      </div>
    </div>
  );
}

export default HomePage;
