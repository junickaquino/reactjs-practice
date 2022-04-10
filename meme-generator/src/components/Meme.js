import React from "react";
import "../styles/Meme.css";

import memesData from "../memesData";

function Meme() {
  const meme = {
    topText: " ",
    bottomText: " ",
    randomImage: "https://i.imgflip.com/39t1o.jpg",
  };

  const [memeCaption, setMemeCaption] = React.useState(meme);

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getRandomMeme() {
    const memesArray = allMemeImages.data.memes;

    // Gets a random image url from the memesData.
    const randomNum = Math.floor(Math.random() * memesArray.length);
    const randomUrl = memesArray[randomNum].url;
    console.log("Retrieved meme url: " + randomUrl);

    // Update Meme caption with the new url.
    setMemeCaption((prevMemeCaption) => ({
      ...prevMemeCaption,
      randomImage: randomUrl,
    }));

    return memeCaption;
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

      <img className="meme--img" src={memeCaption.randomImage} alt="meme" />
    </div>
  );
}

export default Meme;
