import React from "react";
import FormCard from "./FormCard";

const Form = () => {
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexFlow: "row wrap",
          alignItems: "center",
          maxWidth: "70%",
          border: "2px solid gray",
          padding: "10px",
          borderRadius: "10px",
          borderTop: "5px solid blue",
          boxShadow: "0 4px 4px 0.75",
          marginTop: "5%",
        }}
      >
        <div>
          <h1>
            <input
              id="formName"
              style={{ border: "none", width: "100%" }}
              placeHolder="Title"
            />
          </h1>
          <p>
            <input
              id="formDescription"
              style={{ border: "none" }}
              placeHolder="Description"
            />
          </p>
        </div>

        <button className="btn btn-primary">Send</button>
      </div>
      <div >
        <FormCard />
      </div>
    </>
  );
};

export default Form;
