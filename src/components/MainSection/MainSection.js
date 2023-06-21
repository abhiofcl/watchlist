import React, { useState } from "react";
import "./mainpage.css";
import ShowInput from "../InputComp/ShowInput";

const MainSection = () => {
  const [show, setShow] = useState("");
  const [listItems, setlist] = useState([]);
  const handleChange = (event) => {
    setShow(event.target.value);
  };
  const handleClick = () => {
    setlist((prevList) => [...prevList, show]);
    setShow("");
  };
  return (
    <div className="mainpage">
      <ShowInput
        show={show}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default MainSection;
