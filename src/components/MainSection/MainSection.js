import React, { useState } from "react";
import "./mainpage.css";
import ShowInput from "../InputComp/ShowInput";
import Filter from "../FilterComp/Filter";

const MainSection = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [show, setShow] = useState("");
  const [listItems, setlist] = useState([]);
  const [filterClick, setfilterClick] = useState(false);
  const filter = ["all", "anime", "series", "movies"];
  let filteredList = [];
  // const [filteredList, setfilteredList] = useState([]);
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleChange = (event) => {
    setShow(event.target.value);
  };

  const handleClick = () => {
    if (show != "" && selectedOption != "") {
      const newItem = {
        input: show,
        type: selectedOption,
      };
      setlist((prevList) => [...prevList, newItem]);
    }
    // setlist((prevList) => [...prevList, show]);
    setShow("");
    setSelectedOption("");
  };
  const handleFilter = (event) => {
    // const listFilterType = listItems.map((item, index) => item.type);
    setfilterClick(true);
    const buttonFilterType = event.target.value;

    if (buttonFilterType == "series") {
      filteredList = listItems.filter((item) => item.type === "series");
      console.log(filteredList);
    } else if (buttonFilterType == "anime") {
      filteredList = listItems.filter((item) => item.type === "anime");

      // console.log(filteredList);
    } else if (buttonFilterType == "movies") {
      filteredList = listItems.filter((item) => item.type === "movies");

      // console.log(filteredList);
    } else if (buttonFilterType == "all") {
      setfilterClick(false);
    }
  };

  return (
    <div className="mainpage">
      <ShowInput
        show={show}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      <div>
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="">Select an option</option>
          <option value="anime">Anime</option>
          <option value="series">Series</option>
          <option value="movies">Movies</option>
        </select>
        <p>Selected option: {selectedOption}</p>
      </div>
      <br />
      <Filter onClick={handleFilter} buttonValue={filter} />
      <ul>
        {filterClick
          ? filteredList.map((item, index) => <li key={index}>{item.input}</li>)
          : listItems.map((item, index) => <li key={index}>{item.input}</li>)}
      </ul>
    </div>
  );
};

export default MainSection;
