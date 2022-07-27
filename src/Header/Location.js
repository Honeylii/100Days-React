import React, { useState } from "react";
import Seasonal from "./Seasonal";

function Loc() {
  const [lats, setLats] = useState({ lat: 0, log: 0 });

  function handleLocation() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        setLats({
          ...lats,
          lat: position.coords.latitude,
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  return (
    <div>
      <div>
        <p>
          Location Latitude: {lats.lat}
          {lats.lat ? "🚴🏼‍♂️" : "🤚🏼🤚🏼"}
        </p>
        <button onClick={handleLocation}>Click To Change Loction</button>
      </div>
    </div>
  );
}

class Location extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     long: null,
  //   };
  // }
  state = { long: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ long: position.coords.longitude });
      },
      (err) => {
        this.setState({ ...this.state, errorMessage: err.message });
      }
    );
    console.log("Component Loaded");
  }

  componentDidUpdate() {
    console.log("Update occured");
  }

  render() {
    if (this.state.long && !this.state.errorMessage) {
      return (
        <>
          <div>
            <p>Location longitude: {this.state.long} </p>
            <div>
              <Loc />
              <Seasonal lat={this.state.lat} />
            </div>
          </div>
        </>
      );
    } else if (this.state.errorMessage) {
      return (
        <>
          <div>{this.state.errorMessage}</div>
        </>
      );
    }

    return (
      <div>
        <div>
          <p> Loading Location latitude </p>
        </div>
        <div>
          <Loc />
          <Seasonal lat={this.state.lat} />
        </div>
      </div>
    );
  }
}

export default Location;
