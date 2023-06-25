import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";
// import Watchlist from "./Watchlist";
function App() {
  return (
    <div className="App">
      {/* <Watchlist /> */}
      <Header></Header>
      <MainSection></MainSection>
    </div>
  );
}

export default App;
