import CardTariff from "./TariffCard";
import React from "react";

const tariffs = [
  { price: "300", speed: "10" },
  { price: "450", speed: "50" },
  { price: "550", speed: "100" },
  { price: "1000", speed: "200" },
];

function TariffList() {
  return (
    <React.Fragment>
      {tariffs.map((item, index) => {
        return <CardTariff key={index} price={item.price} speed={item.speed} />;
      })}
    </React.Fragment>
  );
}

export default TariffList;
