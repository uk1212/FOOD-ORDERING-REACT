// import { Outlet } from "react-router-dom";
import React from "react";
import ProfileFunctional from "./Profile";
import Profile from "./ProfileClass";
// const About2 = () => {
//   return (
//     <div>
//       <h1>About us page.</h1>
//       <p>This is Namaste React Live Course!!</p>
//       {/* <Outlet/> */}
//       <ProfileFunctional name={"Utkarsh"} />
//       <Profile name={"Utkarsh Class"} />
//     </div>
//   );
// };

class About extends React.Component{
  constructor(props){
    super(props);
    console.log("Parent-Constructor");

  }
   componentDidMount(){
   
    console.log("Parent-ComponentDidMount");
    // this.setState()

  }
  render(){
    console.log("Parent-render");
    return (
      <div>
        <h1>About us page.</h1>
        <p>This is Namaste React Live Course!!</p>
        {/* <Outlet/> */}
        {/* <ProfileFunctional name={"Utkarsh"} /> */}
        <Profile name={"First Child"} />
      </div>
    );
  }
}

export default About;
