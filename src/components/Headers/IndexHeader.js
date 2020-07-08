
import React from "react";

import { Container } from "reactstrap";

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/wallpaper.jpg") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">VDServer</h1>
            </div>
            <h2 className="presentation-subtitle text-center">
              Server IP: jogar.vdserver.net<br/>
              Server Status: Online | Offline
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
          }}
        />
        <h6 className="category category-absolute">
          Edited by Vinicius "Vivi" Santos
        </h6>
      </div>
    </>
  );
}

export default IndexHeader;
