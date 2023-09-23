import React from "react";
import Card from "./Card";
import UserCard from "./UserCard";
import { ABOUT_API } from "../utils/constant";
class About extends React.Component {
  constructor() {
    console.log("Constructor in Parent");
    super();
    this.state = {
      userInfo: {
        name: "XYZ",
        location: "default",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch(ABOUT_API);
    const response = await data.json();
    console.log("componentdidMount() in Parent.");
    this.setState({
      userInfo: response,
    });
  }
  componentDidUpdate() {
    console.log("componentDidUpdate() in Parent");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    console.log("Rendering in Parent");
    return (
      <div className="flex m-32">
        <Card name={name} location={location} image={avatar_url} />
        <UserCard />
      </div>
    );
  }
}
export default About;
