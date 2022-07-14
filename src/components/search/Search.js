import React from "react";
import "./Search.css";
import Gold from "../../assets/gold.png";

const Search = () => {
  return (
    <div className="search" name="book">
      <div className="container">
        <div className="left">
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p>
            Come experience the very pinnacle of luxury Caribbean all-inclusive
            vacations for couples at Sandals Resorts. Our luxury beach resorts,
            set along the most gorgeous tropical settings and exquisitebeaches
            in Havelock Island, Om Beach, Cherai Beach, Light House Beach,
            Majorda Beach, Wandoor and Baga Beach feature unlimited gourmet
            dining, unique bars serving premium liquors and wines and every land
            and water spoprt, including complimentary green fees at our golf
            resorts and Scuba diving at most resorts. If you are planninga
            wedding, Sandals is the leader in Caribbean destination weddings and
            honeymoon packages.
          </p>
          <div className="search-col-2">
            <div className="box">
              <div>
                <img src={Gold} alt="/" style={{ marginRight: "1rem" }} />
              </div>
              <div>
                <h3>INDIA'S LEADING</h3>
                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
              </div>
            </div>
            <div className="box">
              <div>
                <h3>NO ONE INCLUDES MORE</h3>
                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                <button>View Package</button>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="promo">
            <h4 className="save">GET AN ADDITIONAL 7% OFF</h4>
            <p>12 HOURS LEFT</p>
            <p className="offers">VIEW ALL CURRENT OFFERS</p>
          </div>
          <form>
            <div className="input-wrap">
              <label>DESTINATION</label>
              <select>
                <option value="1">Havelock Island</option>
                <option value="2">Om Beach</option>
                <option value="3">Cherai Beach</option>
                <option value="4">Light House Beach</option>
                <option value="5">Majorda Beach</option>
                <option value="6">Wandoor</option>
                <option value="7">Baga Beach</option>
              </select>
            </div>
            <div className="date">
              <div className="input-wrap">
                <label>Check-In</label>
                <input type="date" />
              </div>
              <div className="input-wrap">
                <label>Check-Out</label>
                <input type="date" />
              </div>
            </div>
            <button>Rates & Availibilities</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
