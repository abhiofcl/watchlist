import React from "react";

const Filter = (props) => {
  return (
    <>
      <button onClick={props.onClick} value={props.buttonValue[0]}>
        All
      </button>
      <button onClick={props.onClick} value={props.buttonValue[1]}>
        Anime
      </button>
      <button onClick={props.onClick} value={props.buttonValue[2]}>
        Series
      </button>
      <button onClick={props.onClick} value={props.buttonValue[3]}>
        Movies
      </button>
    </>
  );
};

export default Filter;
