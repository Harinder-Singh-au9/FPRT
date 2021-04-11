import React from "react";
import PageAfterLogin from "./PageAfterLogin";

const Home = () => {
    const user = "Harry"
  return (
    <>
      {user === null ? (
        <>
          <img
            src="https://community.atlassian.com/t5/image/serverpage/image-id/60179i3864BB4EC3935DF7/image-size/large?v=1.0&px=999"
                      alt="imagecheck"
                      style={{width:"100%",height:"100vh"}}
          />
        </>
      ) : (
        <PageAfterLogin/>
      )}
    </>
  );
};

export default Home;
