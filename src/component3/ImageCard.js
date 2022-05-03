import React, { useState, useEffect } from "react";
import "./StyleImage.css";

const ImageCard = (props) => {
  const [img, setImg] = useState({ span: 0 });
  const imageDom = React.createRef();
  const setSpan = () => {
    const height = imageDom.current.clientHeight;
    const spans = Math.ceil(height / 10);
    setImg({ span: spans });
  };

  useEffect(() => {
    imageDom.current.addEventListener("load", setSpan);
  });

  return (
    <div>
      <img
        ref={imageDom}
        key={props.data.id}
        style={{ gridRowEnd: `span  ${img.span}` }}
        alt={props.data.alt_description}
        src={props.data.urls.regular}
      />
    </div>
  );
};

export default ImageCard;
// class ImageCard extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { span: 0 };
//     this.imageDom = React.createRef();
//   }
//   setSpan = () => {
//     const height = this.imageDom.current.clientHeight;
//     const spans = Math.ceil(height / 10);
//     this.setState({ span: spans });
//   };
//   componentDidMount() {
//     this.imageDom.current.addEventListener("load", this.setSpan);
//   }
//   render() {
//     return (
//       <img
//         ref={this.imageDom}
//         key={this.props.data.id}
//         style={{ gridRowEnd: `span  ${this.state.span}` }}
//         alt={this.props.data.alt_description}
//         src={this.props.data.urls.regular}
//       />
//     );
//   }
// }
// export default ImageCard;
