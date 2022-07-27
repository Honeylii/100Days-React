import "./Season.css";
import React from "react";

const seasonConfig = {
  winter: {
    text: "Its so chill here",
    rain: "profound",
  },
  summer: {
    text: "Let's hit some beach people !!",
    rain: "profound",
  },
};

function getSeason(lat, month) {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat < 0 ? "winter" : "summer";
  }
}
function Seasonal(props) {
  const date = new Date();
  const month = date.getMonth();
  const son = getSeason(props.lat, month);

  //   const text =
  //     son === "winter" ? "Get ready to hit the beach" : "text cozzzy";

  const { text, rain } = seasonConfig[son];
  console.log(rain);
  return (
    <div>
      <div
        style={{
          width: "full",
          height: "100%",
          backgroundColor: son === seasonConfig[son] ? "green" : "red",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          margin: "1rem",
          padding: " 4rem 2rem",
        }}
      >
        <p>
          It's {son} here, {text}
        </p>
      </div>
    </div>
  );
}

export default Seasonal;
