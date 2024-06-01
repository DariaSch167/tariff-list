import CardTariff from "./tariffCard";
import React from "react";

function TariffList() {
  return (
    <React.Fragment>
      <CardTariff price="300" speed="10" />
      <CardTariff price="450" speed="50" />
      <CardTariff price="550" speed="100" />
      <CardTariff price="1000" speed="200" />
    </React.Fragment>
  );
}

export default TariffList;
