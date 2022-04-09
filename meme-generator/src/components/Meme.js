import React from "react";
import "../styles/Meme.css";

import memesData from "../memesData";

function Meme() {
  const memesArray = memesData.data.memes;
  const randomNum = Math.floor(Math.random() * memesArray.length);
  const [url, setUrl] = React.useState("memesData.data.memes[randomNum].url");

  function getRandomMeme() {
    setUrl(memesData.data.memes[randomNum].url);
    return url;
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

      <img className="meme--img" src={url} alt="meme" />
    </div>
  );
}

export default Meme;
