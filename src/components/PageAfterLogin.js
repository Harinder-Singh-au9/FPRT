import React from "react";
import { Link } from "react-router-dom";
const PageAfterLogin = ({ history }) => {
  return (
      <div
          className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        flexFlow: "row wrap",
        alignItems: "center",
        marginTop: "10%",
      }}
    >
          <Link to="/createform">
        <img
          src="https://ssl.gstatic.com/docs/templates/thumbnails/forms-blank-googlecolors.png"
          className="img-thumbnail"
          style={{ maxWidth: "50%" }}
        />
      </Link>
      </div>
      

  );
};
export default PageAfterLogin;
