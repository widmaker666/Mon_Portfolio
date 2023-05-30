import { IconCircleChevronUp } from "@tabler/icons-react";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <a href="#formation">
        <IconCircleChevronUp size={51} color="black" stroke={1} />
      </a>
      <div className="copyright">
        <p>Copyright - Alexandre Hontcharouk Ltd 2023 - Crafted By Alexandre Hontcharouk</p>
      </div>
    </div>
  );
};

export default Footer;
