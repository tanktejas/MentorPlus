import React from "react";
import Card from "./card/card";
import "./body.css";
import { useEffect } from "react";
import { useState } from "react";

function Body() {
  const [data, setState] = useState([]);
  useEffect(() => {
    fetch("http://demo3755793.mockable.io/plans", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (data) => data.json())
      .then((data) => {
        setState(data);
        console.log(data);
      });
  }, []);
  if (data.length == 0) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }
  return (
    <>
      <div className="mainbody">
        {data.map((item) => {
          return (
            <Card
              price={item.price}
              save={item.save}
              ori={item.originalPrice}
              content={item.content}
              planid={item.planId}
              suit={item.suit}
              booked={Math.random() % 100}
              disc={Math.random() % 1000}
              off={Math.random() % 1000}
            />
          );
        })}
      </div>
    </>
  );
}

export default Body;
