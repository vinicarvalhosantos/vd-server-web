import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import RecoveryPasswordSection from "views/sections/recovery-password/RecoveryPasswordSection.js";

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
        <RecoveryPasswordSection />
      </div>
    </>
  );
}

export default Login;
