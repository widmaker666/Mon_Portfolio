import React from "react";

const LightBtn = () => {
  return (
    <>
      <div className="toggle-switch">
        <span>Dark</span>
        <input type="checkbox" id="switch" />
        <label htmlFor="switch">toggle</label>
        <span>Light</span>
      </div>
    </>
  );
};

export default LightBtn;
