import React from "react";

const OnePager = () => {
  return (
    <div className="onepager-wrapper">
      {/* nav section */}
      <div className="nav-section">
        {/* photo */}
        <img
          className="photo"
          src={require("../images/pp.jpeg")}
          /* src="https://pbs.twimg.com/profile_images/1419581357211197442/0sVdk2fh_400x400.jpg" */
          alt=""
        />
        {/* name */}
        <h1 className="name">
          ahmet <br />
          tanrıkulu
        </h1>

        {/* links */}
        <div className="links">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://tr.linkedin.com/in/atnrkl-cse?original_referer=https%3A%2F%2Fwww.google.com%2F"
          >
            <h1 className="link">LinkedIn</h1>
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com/atnrkl">
            <h1 className="link">Github</h1>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={require("../files/AhmetTanrikuluResume.pdf")}
          >
            <h1 className="link">CV</h1>
          </a>
        </div>
      </div>

      {/* grid section */}
      <div className="grid-section">
        {/* grid cards */}
        <a
          href="https://oxygenrepublic-sport-nextjs.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="grid-card">
            <img
              className="card-image"
              src={require("../images/fitness.png")}
              alt=""
            />
            <p className="title">GYM Website</p>
          </div>
        </a>

        <a
          href="https://the-maze-nine.vercel.app/"
          rel="noreferrer"
          target="_blank"
        >
          <div className="grid-card">
            <img
              className="card-image"
              src={require("../images/maze.png")}
              alt=""
            />
            <p className="title">Maze game (horror)</p>
          </div>
        </a>

        <a
          href="https://musicplayer-kappa.vercel.app/"
          rel="noreferrer"
          target="_blank"
        >
          <div className="grid-card">
            <img
              className="card-image"
              src={require("../images/musicplayer.png")}
              alt=""
            />
            <p className="title">Web Music Player</p>
          </div>
        </a>

        <a
          href="https://www.nightandgale.club/"
          rel="noreferrer"
          target="_blank"
        >
          <div className="grid-card">
            <img
              className="card-image"
              src={require("../images/nft.png")}
              alt=""
            />
            <p className="title">NFT project website</p>
          </div>
        </a>

        <a
          href="https://parralax-scroll-react-app.vercel.app/"
          rel="noreferrer"
          target="_blank"
        >
          <div className="grid-card">
            <img
              className="card-image"
              src={require("../images/parralax.png")}
              alt=""
            />
            <p className="title">Parralax website</p>
          </div>
        </a>

        <a
          href="https://real-estate-react-app.vercel.app/"
          rel="noreferrer"
          target="_blank"
        >
          <div className="grid-card">
            <img
              className="card-image"
              src={require("../images/realestate.png")}
              alt=""
            />
            <p className="title">Luxury real estate website</p>
          </div>
        </a>

        <a
          href="https://www.crofunkylions.club/"
          rel="noreferrer"
          target="_blank"
        >
          <div className="grid-card">
            <img
              className="card-image"
              src={require("../images/funkylions.png")}
              alt=""
            />
            <p className="title">NFT project website</p>
          </div>
        </a>

        <a
          href="https://www.secretcoinflip.com/"
          rel="noreferrer"
          target="_blank"
        >
          <div className="grid-card">
            <img
              className="card-image"
              src={require("../images/scrtcoinflip.png")}
              alt=""
            />
            <p className="title">NFT project website</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default OnePager;
