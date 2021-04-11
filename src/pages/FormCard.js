import React, { useState, useEffect } from "react";
import Element from "./Element";
const FormCard = () => {
  const [options, setOptions] = useState([
    "Short Text",
    "Long Text",

    "Email",
    "Number",
    "Image",
  ]);

  const [optionSelected, setSelectedOption] = useState("Short Text");
 
  return (
    <div
      className="container"
      style={{
        // display: "flex",
        // justifyContent:"column",
        width: "70%",
        border: "2px solid gray",
        padding: "10px",
        borderRadius: "10px",
        border: "2px solid gray",
        boxShadow: "0 6px 6px 0.75",
        marginTop: "2%",
        borderLeft: "10px solid red",
      }}
    >
      {" "}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "4px",
        }}
      >
        <input
          placeholder="Untitled Question"
          style={{
            borderBottom: "2px solid black",
            border: "none",
            textDecoration: "underline",
            width: "40%",
          }}
        />

        <select
          value={optionSelected}
          onChange={(e) => setSelectedOption(e.target.value)}
          style={{ width: "40%" }}
        >
          {options.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "3px",
        }}
      >
        <Element type={optionSelected} />
        <h3 style={{ display:"flex",justifyContent:"center",alignItems:"center"}}>
          <i class="fas fa-plus-circle" style={{color:"red"}} ></i>
        </h3>
      </div>
    </div>
  );
};

export default FormCard;
