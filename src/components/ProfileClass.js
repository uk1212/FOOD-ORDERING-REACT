import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    //Create State
    this.state={
      userInfo:{
        name:"Dummy",
        location:"Dummy"
      }
    }
    console.log("Child-constructor" + this.props.name);
  }

  async componentDidMount() {
    // API calls
    const data=await fetch("https://api.github.com/users/uk1212");
    const json=await data.json();
    this.setState({
      userInfo:json,
    })
    console.log("Child - componentDidMount()" + this.props.name);
  }

  render() {
    console.log("Child - render" + this.props.name);
    return (
      <div>
        <h1>Profile Class Component</h1>
        <h2>Name: {this.state.userInfo?.name}</h2>
        <img src={this.state.userInfo?.avatar_url}/>
        <h2>Location: {this.state.userInfo?.location}</h2>
       
      </div>
    );
  }
}

export default Profile;
