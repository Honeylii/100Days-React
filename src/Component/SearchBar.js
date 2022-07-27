import "./index1.css";
import React, { useState } from "react";

function SearchBar(props) {
  const [inputText, setInputText] = useState("");

  function handleChangedText(e) {
    setInputText(e.target.value);
  }
  return (
    <div className="search">
      <div className="search-bar ">Search Bar</div>
      <div className="flex">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.onSubmit(inputText);
          }}
          className="flex"
        >
          <input
            type="text"
            placeholder="Search"
            value={inputText}
            onChange={handleChangedText}
            className="input-search"
          />
        </form>
      </div>
    </div>
  );
}

export default SearchBar;

// Review

// class Car {
//   constructor() {
//     this.brandSound = this.alertSound(this);
//   }
//   alertSound(sound) {
//     this.sound = sound;
//   }

//   brandSound() {
//     return this.sound;
//   }
// }

// const car = new Car();
// car.alertSound("VMOOR");
// car.brandSound();
