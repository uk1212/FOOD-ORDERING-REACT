// import React from "react";
import { useState } from "react";
const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-lg">{title}</h3>
      {isVisible ? (
        <button
          className="cursor-pointer underline m-2 p-2"
          onClick={() => {
            // setIsVisible(false);
            setIsVisible();
          }}
        >
          Hide
        </button>
       
      ) : (
        <button
          className="cursor-pointer underline m-2 p-2"
          onClick={() => {
            // setIsVisible(true);
            setIsVisible();
            // isVisible=true;
          }}
        >
          Show
        </button>
      )}

      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={"This is the about section of Instamart"}
        isVisible={visibleSection === "about"}
        setIsVisible={() => setVisibleSection("about")}
      />
      <Section
        title={"Careers"}
        description={"This is the career  section of Instamart. "}
        isVisible={visibleSection === "careers"}
        setIsVisible={() => setVisibleSection("careers")}
      />
      <Section
        title={"Team Instamart"}
        description={
          "This is the team section of Instamart. The team has 50 members...."
        }
        isVisible={visibleSection === "team"}
        setIsVisible={() => setVisibleSection("team")}
      />

      {/* <AboutInstamart/>
      <DetailsOfInstaMart/>
      <TeamInstamart/>
      <Product/>
      <Careers/> */}
    </div>
  );
};

export default Instamart;
