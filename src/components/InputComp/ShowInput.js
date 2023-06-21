import React from "react";

const ShowInput = (props) => {
  return (
    <>
      <input
        value={props.show}
        onChange={props.handleChange}
        id="showName"
        type="text"
        placeholder="Enter Name"
      />
      <button type="submit" onClick={props.handleClick}>
        Add
      </button>
    </>
  );
};

export default ShowInput;
