import React from "react";

const LightBtn = () => {
  return (
    <>
      <div className="toggle-switch">
        <span id="dark_mode">Dark</span>
        <input type="checkbox" id="switch" />
        <label htmlFor="switch">toggle</label>
        <span id="light-mode">Light</span>
      </div>
    </>
  );
};

export default LightBtn;
