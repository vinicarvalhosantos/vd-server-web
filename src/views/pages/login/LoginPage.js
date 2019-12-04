import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import LoginSection from "views/sections/login/LoginSection.js"

function Login() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="main">
        <LoginSection />
      </div>
    </>
  );
}

export default Login;
