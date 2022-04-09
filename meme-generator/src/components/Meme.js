import "../styles/Meme.css";

function Meme() {
  return (
    <div className="meme">
      <form className="form" action="">
        <div className="form--text-inputs">
          <input
            className="form--input-text"
            type="text"
            placeholder="Top text"
          />
          <input
            className="form--input-text"
            type="text"
            placeholder="Bottom text"
          />
        </div>
        <input
          className="form--input-submit"
          type="submit"
          value="Get a new meme image 🖼"
        />
      </form>
    </div>
  );
}

export default Meme;
