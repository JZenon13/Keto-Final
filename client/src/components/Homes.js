import React from "react";

function Homes({ user }) {
  if (user) {
    return <> </>;
  } else {
    return <h1 className="centerStuff">Login/SignUp</h1>;
  }
}

export default Homes;
