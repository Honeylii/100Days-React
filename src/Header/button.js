import React from "react";

// const loc = () => {
//   return window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );
// };
// console.log(loc());

const Aproved = (props) => {
  return (
    <div>
      <button
        type="submit"
        style={{
          backgroundColor: "white",
          color: "green",
          border: "1px solid green",
          padding: "0.5rem",
        }}
      >
        Approved
      </button>
    </div>
  );
};
function Button() {
  return (
    <div>
      <Aproved />
    </div>
  );
}

export default Button;
