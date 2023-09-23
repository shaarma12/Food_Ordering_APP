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
      <div className="flex flex-col bg-gray-200 rounded-xl w-64  items-center font-bold hover:scale-y-105 transition-all duration-300 cursor-pointer">
        <img className="w-64 h-72 rounded-t-xl" src={image} />
        <h3 className="my-2">Name : {name}</h3>
        <h3 className="mr-9 mb-4">Location : {location}</h3>
      </div>
    );
  }
}
export default Card;
