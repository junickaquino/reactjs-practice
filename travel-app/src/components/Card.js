import "../styles/Card.css";
import pin from "../images/pin.png";

function Card(props) {
  return (
    <div className="card">
      <div className="card--image">
        <img
          className="image-img"
          src={props.place.imageUrl}
          alt={`Picture of ${props.place.title}`}
        />
      </div>

      <div className="card--content">
        <div className="content--location">
          <div className="location--pin_place">
            <img className="pin_place--pin-img" src={pin} alt="pin icon" />
            <p className="pin_place--place-text">{props.place.location}</p>
          </div>

          <div className="location--maps">
            <a
              className="maps-google"
              href={props.place.googleMapsUrl}
              target="_blank"
            >
              View on Google Maps
            </a>
          </div>
        </div>

        <h1 className="content--title">{props.place.title}</h1>

        <div className="content--subtitle">
          <p className="subtitle--date-start">{props.place.startDate}</p>
          <p>-</p>
          <p className="subtitle--date-end">{props.place.endDate}</p>
        </div>

        <p className="content--description">{props.place.description}</p>
      </div>
    </div>
  );
}

export default Card;
