import "../styles/Card.css";
import pin from "../images/pin.png";

function Card() {
  return (
    <div className="card">
      <div className="card--image">
        <img
          className="image-img"
          src="https://source.unsplash.com/WLxQvbMyfas"
          alt="Picture of Mount Fuji"
        />
      </div>

      <div className="card--content">
        <div className="content--location">
          <div className="location--pin_place">
            <img className="pin_place--pin-img" src={pin} alt="pin icon" />
            <p className="pin_place--place-text">Japan</p>
          </div>

          <div className="location--maps">
            <a className="maps-google" href="#" target="_blank">
              View on Google Maps
            </a>
          </div>
        </div>

        <h1 className="content--title">Mount Fuji</h1>

        <div className="content--subtitle">
          <p className="subtitle--date-start">12 Jan, 2021</p>
          <p>-</p>
          <p className="subtitle--date-end">24 Jan, 2021</p>
        </div>

        <p className="content--description">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </div>
  );
}

export default Card;
