import React from "react";
import ReactDom from "react-dom/client";
import "./style.css";

function App() {
  return (
    <div className="container">
      <section className="firstHalf">
        <Avatar />
        <Content />
      </section>
      <SkillList />
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatarImage"
      src="avatar-jessica.jpeg"
      alt="avatar for social link"
    />
  );
}

function Content() {
  return (
    <>
      <h3 className="name">Jessica Randall</h3>
      <p className="location">London, United Kingdom</p>
      <p className="description">"Front-end developer and avid reader"</p>
    </>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill={"Github"} />
      <Skill skill={"Frontend Mentor"} />
      <Skill skill={"LinkedIn"} />
      <Skill skill={"Twitter"} />
      <Skill skill={"Instagram"} />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill">
      <p>{props.skill}</p>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
