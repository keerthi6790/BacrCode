import { Typography } from "antd";
import React from "react";
const { Title } = Typography;
function NavBar() {
  return (
    <div className="navBarContainer flex items-center">
      <Title level={4} className="navBarHeading">
        Bar Code Generator
      </Title>
    </div>
  );
}

export default NavBar;
