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
      <div className="flex flex-col bg-gray-200 rounded-xl md:w-64 w-[65rem] items-center font-bold hover:scale-y-105 transition-all duration-300 cursor-pointer">
        <img className="md:w-64 w-[65rem] md:mx-0 mx-[42rem] md:h-72 h-[65rem] rounded-t-xl" src={image} />
        <h3 className="my-2 md:text-base text-7xl">Name : {name}</h3>
        <h3 className="mr-9 md:mb-4 mb-24 md:text-base text-7xl">Location : {location}</h3>
      </div>
    );
  }
}
export default Card;
