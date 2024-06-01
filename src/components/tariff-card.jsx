import "./tariff-card.css";

function CardTariff(props) {
  let coloring =
    props.price === "300"
      ? "#32a1c0"
      : props.price === "450"
      ? "#48c783"
      : props.price === "550"
      ? "#ff5b5b"
      : "#302f2f";

  return (
    <div className="card">
      <div className="card__title" style={{ backgroundColor: coloring }}>
        <h2>Безлимитный {props.price}</h2>
      </div>
      <div className="card__price" style={{ backgroundColor: coloring }}>
        <p>руб&ensp;</p>
        <p>
          <span>{props.price}</span>&ensp;/мес
        </p>
      </div>
      <div className="card__speed">
        <p>до {props.speed} Мбит/сек</p>
      </div>
      <div className="card__description">
        <p>Объем включенного трафика не ограничен</p>
      </div>
    </div>
  );
}

export default CardTariff;
