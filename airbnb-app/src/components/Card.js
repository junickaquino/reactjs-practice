import "../styles/Card.css";
// import swimmer from "../images/swimmer.png";
import star from "../images/star.png";

function Card(props) {
  console.log(props);

  return (
    <div className="card">
      <div className="card--status">
        <p className="status--text">Sold Out</p>
      </div>

      <img
        className="card--img"
        src={props.img}
        //   src={`../images/${props.img}`}
        alt="swimmer"
      />

      <div className="card--content">
        <div className="content--rates">
          <img className="content--rates-star" src={star} alt="star icon" />
          <p className="content--rates-rating">{props.rating.toFixed(1)}</p>
          <p className="content--rates-count">({props.reviewCount}) • </p>
          <p className="content--rates-place">{props.country}</p>
        </div>

        <div className="content--description">
          <p className="description-text">{props.title}</p>
        </div>

        <div className="content--price">
          <p className="price-cost">From ${props.price}</p>
          <p>/ person</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
