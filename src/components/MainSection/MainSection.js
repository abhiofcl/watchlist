import React, { useState, useEffect } from "react";
import "./mainpage.css";
import ShowInput from "../InputComp/ShowInput";
import Filter from "../FilterComp/Filter";

const MainSection = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [show, setShow] = useState("");
  const [listItems, setListItems] = useState([]);
  const [filterClick, setfilterClick] = useState(false);
  const filter = ["all", "anime", "series", "movies"];
  let filteredList = [];
  const [filteredListFinal, setfilteredListFinal] = useState([]);

  useEffect(() => {
    // Retrieve data from localStorage
    const storedItems = localStorage.getItem("listItems");
    if (storedItems) {
      setListItems(JSON.parse(storedItems));
    }
    console.log(listItems);
  }, []);

  //handling the options for the type of show
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // getting the value of the entered input when changed
  const handleChange = (event) => {
    setShow(event.target.value);
  };

  // Add button functionality to add items to the listItem
  const handleClick = () => {
    if (show != "" && selectedOption != "") {
      const newItem = {
        input: show,
        type: selectedOption,
      };
      const updatedList = [...listItems, newItem].sort((a, b) =>
        a.input.localeCompare(b.input)
      );
      setListItems(updatedList);
      setShow("");
      setSelectedOption("");
      localStorage.setItem("listItems", JSON.stringify(updatedList));
    }
  };

  const handleFilter = (event) => {
    setfilterClick(true);
    const buttonFilterType = event.target.value;

    if (buttonFilterType == "series") {
      filteredList = listItems.filter((item) => item.type === "series");

      setfilteredListFinal(filteredList);
    } else if (buttonFilterType == "anime") {
      filteredList = listItems.filter((item) => item.type === "anime");
      setfilteredListFinal(filteredList);
    } else if (buttonFilterType == "movies") {
      filteredList = listItems.filter((item) => item.type === "movies");
      setfilteredListFinal(filteredList);
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
      </div>
      <br />
      <Filter onClick={handleFilter} buttonValue={filter} />
      <ol>
        {filterClick
          ? filteredListFinal.map((item, index) => (
              <li key={index}>
                {item.input} : {item.type}
              </li>
            ))
          : listItems.map((item, index) => (
              <li key={index}>
                {item.input} : {item.type}
              </li>
            ))}
      </ol>
    </div>
  );
};

export default MainSection;
