import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.divRef = React.createRef();
    this.state = {
      span: 0,
    };
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpan);
    console.log(this.divRef);
  }

  setSpan = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ span: spans });
  };
  render() {
    const { description, urls } = this.props.data;
    return (
      <div
        ref={(elem) => (this.divRef = elem)}
        style={{ gridRowEnd: `span ${this.state.span}` }}
      >
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
