import React from "react";
class Card extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor in first Child");
  }
  componentDidMount() {
    console.log("componentDidMount() in first child");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate() in first child");
  }

  render() {
    const { name, location, image } = this.props;
    console.log("Rendering in first child");
    return (
      <div className="env">
        <img src={image} />
        <h3 className="ho">Name : {name}</h3>
        <h3 className="hi">Location : {location}</h3>
      </div>
    );
  }
}
export default Card;
