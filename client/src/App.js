import React from "react";
import FileUpload from "./components/FileUpload";
import "./App.css";
import Img from "./react.png";

const App = () => (
  <div className="container mt-4">
    <h4 className="display-4 text-center mb-4">
      <img src={Img} alt="react" style={{ width: "7rem" }}></img> React File
      Upload
    </h4>

    <FileUpload />
  </div>
);

export default App;
