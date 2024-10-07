import SearchBar from "../searchBar/SearchBar"
import "./homePage.scss"

function HomePage() {
    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">
                    Discover Your Ideal Property & Book Luxury Stays
                    </h1>

                    <p className="description">
                         Explore the best real estate options and discover your dream home or perfect vacation spot. Whether you're looking for a property to call your own or booking a luxurious stay at top hotels, we've got you covered with tailored options to fit every lifestyle and budget. Start your journey to a better living today!
                    </p>

                    <SearchBar/>

                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className="box">
                            <h1>2000+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
    
}

export default HomePage