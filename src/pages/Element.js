import React, { useState, useEffect } from "react";
import axios from "axios";
const Element = (props) => {
  switch (props.type) {
    case "Short Text":
      return (
        <div class="input-group m-3">
          <input
            type="text"
            class="form-control"
            placeholder="User Response"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            id={props.title}
          />
        </div>
      );
    case "Long Text":
      return (
        <div class="input-group m-3">
          <textarea
            class="form-control"
            aria-label="With textarea"
            placeholder="User Response"
            id="longtextbox"
          ></textarea>
        </div>
      );
    case "Email":
      return (
        <div class="form-group m-3" style={{ width: "100%" }}>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
      );
    case "Number":
      return (
        <div class="input-group m-3">
          <input
            type="number"
            class="form-control"
            placeholder="Contact Number"
            aria-label="Contact Number"
            aria-describedby="button-addon2"
          />
        </div>
          );
          case "Image":
            return (
                <form>
                <div class="form-group m-3">
                  <input type="file" class="form-control-file" id="image"/>
                </div>
              </form>
          );
      default:
          return null
  }
};

export default Element;
