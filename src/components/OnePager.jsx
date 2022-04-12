import React from "react";

const OnePager = () => {
  return (
    <div className="onepager-wrapper">
      {/* nav section */}
      <div className="nav-section">
        {/* photo */}
        <img
          className="photo"
          src="https://pbs.twimg.com/profile_images/1419581357211197442/0sVdk2fh_400x400.jpg"
          alt=""
        />
        {/* name */}
        <h1 className="name">
          ahmet <br />
          tanrıkulu
        </h1>

        {/* links */}
        <div className="links">
          <h1 className="link">LinkedIn</h1>
          <h1 className="link">Phone</h1>
          <h1 className="link">CV</h1>
        </div>
      </div>

      {/* grid section */}
      <div className="grid-section">
        {/* grid cards */}
        <div className="grid-card">
          <img
            className="card-image"
            src={require("../images/fitness.png")}
            alt=""
          />
          <p className="title">NFT website</p>
        </div>

        <div className="grid-card">
          <img
            className="card-image"
            src={require("../images/maze.png")}
            alt=""
          />
          <p className="title">NFT website</p>
        </div>

        <div className="grid-card">
          <img
            className="card-image"
            src={require("../images/musicplayer.png")}
            alt=""
          />
          <p className="title">NFT website</p>
        </div>

        <div className="grid-card">
          <img
            className="card-image"
            src={require("../images/nft.png")}
            alt=""
          />
          <p className="title">NFT website</p>
        </div>

        <div className="grid-card">
          <img
            className="card-image"
            src={require("../images/parralax.png")}
            alt=""
          />
          <p className="title">NFT website</p>
        </div>
        <div className="grid-card">
          <img
            className="card-image"
            src={require("../images/realestate.png")}
            alt=""
          />
          <p className="title">NFT website</p>
        </div>
      </div>
    </div>
  );
};

export default OnePager;
