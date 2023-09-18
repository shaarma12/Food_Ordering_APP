import React from "react";
class UserCard extends React.Component {
  constructor() {
    super();
    console.log("second child Component constructor");
  }
  componentDidMount() {
    console.log("ComponentDidMount() in Second Child.");
  }
  componentDidUpdate() {
    console.log("ComponentDidupdate() in Second Child.");
  }
  render() {
    console.log("rendering in second Child.");
    return <div></div>;
  }
}
export default UserCard;
