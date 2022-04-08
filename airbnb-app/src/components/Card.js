import "../styles/Card.css";
// import star from "../images/star.png";

function Card(props) {
  console.log(props);

  let showBadge = false;
  if (
    props.experience.openSpots === 0 ||
    props.experience.status === "Online"
  ) {
    showBadge = true;
  }

  return (
    <div className="card">
      {/* <div className="card--status">
        <p className="status--text">{props.experience.status}</p>
      </div> */}

      {showBadge && (
        <div className="card--status">
          <p className="status--text">{props.experience.status}</p>
        </div>
      )}

      <img
        className="card--img"
        src={`./images/${props.experience.coverImg}`}
        alt="swimmer"
      />

      <div className="card--content">
        <div className="content--rates">
          <img
            className="content--rates-star"
            src="../images/star.png"
            alt="star icon"
          />
          <p className="content--rates-rating">
            {props.experience.stats.rating.toFixed(1)}
          </p>
          <p className="content--rates-count">
            ({props.experience.stats.reviewCount}) •{" "}
          </p>
          <p className="content--rates-place">{props.experience.location}</p>
        </div>

        <div className="content--description">
          <p className="description-text">{props.experience.title}</p>
        </div>

        <div className="content--price">
          <p className="price-cost">From ${props.experience.price}</p>
          <p>/ person</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
