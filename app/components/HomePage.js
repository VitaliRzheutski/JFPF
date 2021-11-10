import React from "react";
import { Link } from "react-router-dom";

const HomePage = (props) => {
  console.log('props form Home:',props)
  return (
    <div id="homepage" className="row">
       <main>
            <h1>Welcome to my JPFP!!!</h1>
          </main>

    </div>
  );
};

export default HomePage;
