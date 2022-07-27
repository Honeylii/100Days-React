import React from "react";
import YouSearch from "./YouSearch";

import youtube from "../API/youtube";

import "./Youtube.css";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

export class You extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      video: [],
      selectedVideo: null,
    };
  }

  searchText = async (text) => {
    console.log(text);
    const res = await youtube("/search", {
      params: {
        q: text,
      },
    }).catch((error) => {
      console.log(error.message);
    });

    this.setState({ video: res.data.items });
  };

  onVideoSelected = (video) => {
    console.log(video);

    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div>
        <YouSearch onSubmit={this.searchText} />
        <div className="video-section">
          <div>
            <VideoDetails selectedVideo={this.state.selectedVideo} />
          </div>
          <VideoList
            onVideoSelected={this.onVideoSelected}
            videos={this.state.video}
          />
        </div>
      </div>
    );
  }
}

export default You;
