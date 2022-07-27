import React, { Component } from "react";
import unsplash from "./API/unsplash";
import Index1 from "./Component/Index1";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  onSearchSubmit = async (text) => {
    const res = await unsplash.get("/search/photos", {
      params: {
        query: text,
      },
    });

    this.setState({ images: res.data.results });
  };

  render() {
    return (
      <div>
        <Index1 onSubmit={this.onSearchSubmit} image={this.state.images} />
      </div>
    );
  }
}

export default App;
