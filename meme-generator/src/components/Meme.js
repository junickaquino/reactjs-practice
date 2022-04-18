import React from "react";
import "../styles/Meme.css";

// import memesData from "../memesData";

function Meme() {
  const meme = {
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/39t1o.jpg",
  };

  const [memeCaption, setMemeCaption] = React.useState(meme);

  const [allMemes, setAllMemes] = React.useState({});

  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }

    getMemes();

    console.log(allMemes);
  }, []);

  function getRandomMeme() {
    // Gets a random image url from the memesData.
    const randomNum = Math.floor(Math.random() * allMemes.length);
    const randomUrl = allMemes[randomNum].url;
    console.log("Retrieved meme url: " + randomUrl);

    // Update Meme caption with the new url.
    setMemeCaption((prevMemeCaption) => ({
      ...prevMemeCaption,
      randomImage: randomUrl,
    }));

    return memeCaption;
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setMemeCaption((prevMemeCaption) => ({
      ...prevMemeCaption,
      [name]: value,
    }));
  }

  return (
    <div className="meme">
      <div className="form" action="">
        <div className="form--text-inputs">
          <input
            className="form--input-text"
            type="text"
            placeholder="Top text"
            name="topText"
            value={memeCaption.topText}
            onChange={handleChange}
          />
          <input
            className="form--input-text"
            type="text"
            placeholder="Bottom text"
            name="bottomText"
            value={memeCaption.bottomText}
            onChange={handleChange}
          />
        </div>
        <input
          className="form--input-submit"
          onClick={getRandomMeme}
          type="submit"
          value="Get a new meme image 🖼"
        />
      </div>

      <div className="meme-image">
        <img className="meme--img" src={memeCaption.randomImage} alt="meme" />
        <h1 className="meme--caption-top">{memeCaption.topText}</h1>
        <h1 className="meme--caption-bottom">{memeCaption.bottomText}</h1>
      </div>
    </div>
  );
}

export default Meme;
