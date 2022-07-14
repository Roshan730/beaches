import React from "react";
import "./Selects.css";

import BoraBora from "../../assets/borabora.jpg";
import BoraBora2 from "../../assets/borabora2.jpg";
import Maldives from "../../assets/maldives.jpg";
import Maldives2 from "../../assets/maldives2.jpg";
import Maldives3 from "../../assets/maldives3.jpg";
import KeyWest from "../../assets/keywest.jpg";
import SelectsImg from "../SelectsImg/SelectsImg";

function Selects() {
  return (
    <div className="selects" name="views">
      <div className="container">
        <SelectsImg bgImg={BoraBora} text="Havelock Island" />
        <SelectsImg bgImg={BoraBora2} text="Om Beach" />
        <SelectsImg bgImg={Maldives} text="Cherai Beach" />
        <SelectsImg bgImg={Maldives2} text="Light House Beach" />
        <SelectsImg bgImg={Maldives3} text="Majorda Beach" />
        <SelectsImg bgImg={KeyWest} text="Baga Beach" />
      </div>
    </div>
  );
}

export default Selects;
