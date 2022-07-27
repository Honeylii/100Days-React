import React, { Component } from "react";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

export class Index1 extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <SearchBar onSubmit={this.props.onSubmit} />
        <ImageList images={this.props.image} />
      </div>
    );
  }
}

export default Index1;
