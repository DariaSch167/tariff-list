import CardTariff from "./TariffCard.jsx";
import React from "react";
import "./tariffCard.css";
import { useState } from "react";

const tariffs = [
  { price: "300", speed: "10" },
  { price: "450", speed: "50" },
  { price: "550", speed: "100" },
  { price: "1000", speed: "200" },
];

function TariffList() {
  const [cardClass, setCardClass] = useState("card");

  const changeStyle = () => {
    if (cardClass !== "card") setCardClass("card");
    else setCardClass("card_chosen");
  };

  return (
    <React.Fragment>
      {tariffs.map((item, index) => {
        return (
          <button className={cardClass} onClick={changeStyle}>
            <CardTariff key={index} price={item.price} speed={item.speed} />
          </button>
        );
      })}
    </React.Fragment>
  );
}

export default TariffList;
