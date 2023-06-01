import React from "react";

const LightBtn = () => {

const handleClick = (e) => {
  
  const bodyPage = document.querySelector(".main-home")
  bodyPage.style.background = "#292929";
 
  
}

  return (
    <>
      <div className="toggle-switch" >
        <span id="dark_mode">Dark</span>
        <input type="checkbox" id="switch" />
        <label htmlFor="switch" onClick={handleClick}>toggle</label>
        <span id="light-mode">Light</span>
      </div>
    </>
  );
};

export default LightBtn;
