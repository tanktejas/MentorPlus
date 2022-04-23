import React from "react";
import "./card.css";
import Circular from "./progress";

function Card({ price, save, ori, content, planid, suit, booked, disc, off }) {
  //   console.log(content);
  const minute = Math.random() % 120;

  return (
    <>
      <div className="maincard">
        <div className="topdiv">
          <div className="left">
            <h2>Flat {parseInt(off * 100)}% off</h2>
            <h3>offer closed</h3>
            <p>
              Welcomed plan based {parseInt(disc * 1000)} within:{" "}
              {parseInt(minute * 100)} minutes
            </p>
          </div>
          <div className="right">
            <Circular booked={booked} />
          </div>
        </div>
        <div className="down">
          <h3 className="plans">Weekly plans</h3>
          <h3>{planid}</h3>
          <p>&#10003; {content[0]}</p>
          <p>&#10003; {content[1]}</p>
          <p>&#10003; {content[2]}</p>
          <p>&#10003; {content[3]}</p>
          <p>&#10003; {suit}</p>
          <p className="discount">flat 30% offer by reffer from subhash</p>
        </div>
        <div className="pricetag">
          <h2> &#8377;{price}</h2>
          <p>save {save}</p>
          <h3> &#8377;{ori}</h3>
        </div>
        <div className="bottombutton">
          <input type="button" value="Buy Now"></input>
        </div>
      </div>
    </>
  );
}

export default Card;
