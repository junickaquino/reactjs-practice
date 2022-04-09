import "../styles/Meme.css";

import memesData from "../memesData";

function Meme() {
  function getRandomMeme() {
    const memesArray = memesData.data.memes;
    const randomNum = Math.floor(Math.random() * memesArray.length);
    const url = memesData.data.memes[randomNum].url;

    console.log(url);
  }

  return (
    <div className="meme">
      <div className="form" action="">
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
          onClick={getRandomMeme}
          type="submit"
          value="Get a new meme image 🖼"
        />
      </div>
    </div>
  );
}

export default Meme;
