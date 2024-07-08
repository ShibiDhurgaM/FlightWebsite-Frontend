import React, { useState } from "react";
import { PiCaretCircleDoubleLeftBold, PiCaretCircleDoubleRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import SeaterTypeDropdown from "./SeaterTypeDropdown"; 

const Home = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const [seaterType, setSeaterType] = useState("");
  const seaterOptions = [
    { label: "Economy", value: "Economy" },
    { label: "Premium Economy", value: "Premium Economy" },
    { label: "Business class", value: "Business Class" },
    { label: "First Class", value: "First Class" }
  ];

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <div className="slide">
        <div className="control-btn">
          <button className="prev" onClick={prevSlide}>
            <PiCaretCircleDoubleLeftBold />
          </button>
          <button className="next" onClick={nextSlide}>
            <PiCaretCircleDoubleRightBold />
          </button>
        </div>

        <img src={slides[current].images} alt="Slide" />
        
        <div className="slide-form">
          <div className="form-container">
            <h2>Your Holiday Is a Flight Away!</h2>
            <span>Search and Book Your Tickets</span>

            <form>
              <input type="text" placeholder="Departure airport" />
              <input type="text" placeholder="Arrival airport" />
              <div className="date-inputs">
                <input type="date" placeholder="Departing" />
                <input type="date" placeholder="Returning" />
              </div>
              <input type="number" placeholder="Passengers" />
              <SeaterTypeDropdown
                value={seaterType}
                onChange={(value) => setSeaterType(value)}
                options={seaterOptions}
              />
              <Link to="/login">
                <input type="submit" value="Search" className="submit" />
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
