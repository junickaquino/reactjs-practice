import "../styles/Card.css";
import swimmer from "../images/swimmer.png";
import star from "../images/star.png";

function Card() {
  return (
    <div className="experiences">
      <div className="card">
        <div className="card--status">
          <p className="status--text">Sold Out</p>
        </div>

        <img className="card--img" src={swimmer} alt="swimmer" />

        <div className="card--content">
          <div className="content--rates">
            <img className="content--rates-star" src={star} alt="star icon" />
            <p className="content--rates-rating">5.0</p>
            <p className="content--rates-count">(6)</p>
            <p className="content--rates-place">USA</p>
          </div>

          <div className="content--description">
            <p className="description-text">Life lessons with Katie Zaferes</p>
          </div>

          <div className="content--price">
            <p className="price-cost">From $136</p>
            <p>/ person</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
