import React, { useState } from "react";
import "./mainpage.css";
const MainSection = () => {
  const [show, setShow] = useState("");
  const handleChange = (event) => {
    setShow(event.target.value);
  };
  const handleClick = () => {
    alert(show);
  };
  return (
    <div className="mainpage">
      <input
        value={show}
        onChange={handleChange}
        id="showName"
        type="text"
        placeholder="Enter Name"
      />
      <button type="submit" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default MainSection;
