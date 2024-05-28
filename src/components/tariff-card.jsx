import "./tariff-card.css";

function CardTariff(props) {
  let coloring =
    props.price === "300"
      ? "#5bdbff"
      : props.price === "450"
      ? "#5bffa8"
      : props.price === "550"
      ? "#ff5b5b"
      : "#302f2f";

  return (
    <div className="card">
      <div className="card__title" style={{ backgroundColor: coloring }}>
        <h2>Безлимитный {props.price}</h2>
      </div>
      <div className="card__price" style={{ backgroundColor: coloring }}>
        <p>руб</p>
        <p>
          <span>{props.price}</span> / мес
        </p>
      </div>
      <div className="card__speed">
        <p>До {props.speed} Мбит/сек</p>
      </div>
      <div className="card__description">
        <p>Объем включенного трафика не ограничен</p>
      </div>
    </div>
  );
}

export default CardTariff;
