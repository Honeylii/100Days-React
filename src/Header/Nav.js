import React from "react";
import Button from "./button";

function Nav(props) {
  console.log(props);
  const now = new Date();
  const day = now.getHours();
  const time = `${now.getHours()}:${now.getMinutes()}`;

  return (
    <div
      style={{
        width: "30%",
        lineHeight: "10px",
        fontSize: "1rem",
        // border: "1px solid black",
        padding: "20px",
        margin: "10px 0",
        borderRadius: "5px",
        border: "none",
        boxShadow: "0px 3px 12px rgba(0,0,0,0.5)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 3fr",
          gap: "20px",
        }}
      >
        <img src="" alt="" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            alignContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <p style={{ marginRight: "3rem" }}>{props.author}</p>
            <p>
              Today at {time} {day > 12 ? "PM" : "AM"}
            </p>
          </div>
          <div>
            <p>What an educational post !!</p>
          </div>
        </div>
      </div>
      <div>
        <Button />
      </div>
    </div>
  );
}

export default Nav;
