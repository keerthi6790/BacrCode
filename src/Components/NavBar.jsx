import { Typography } from "antd";
import React from "react";
import Logo from "../Assests/download.png";
const { Title } = Typography;
function NavBar() {
  return (
    <div className="navBarContainer">
      <div
        style={{ maxWidth: "1080px", margin: "0 auto" }}
        className="flex items-center justify-between"
      >
        <img src={Logo} alt="Logo" style={{ width: "100px" }} />
        <Title level={4} className="navBarHeading">
          Bar Code Generator
        </Title>
      </div>
    </div>
  );
}

export default NavBar;
