import React from "react";
import "./Youtube.css";

class YouSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    // this.handleInputText = this.handleInputText.bind(this);
    // this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputText = (e) => {
    this.setState({ text: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.text);
    console.log(this.state.text);
  };

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <label className="search-label">Search Video</label>
            <input
              type="text"
              placeholder="Search"
              value={this.state.text}
              onChange={this.handleInputText}
            />
          </div>
        </form>
        <div></div>
      </div>
    );
  }
}

export default YouSearch;
