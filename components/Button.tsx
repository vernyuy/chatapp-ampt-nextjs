import React from "react";
import { ButtonProps } from "types";

const Button = ({ title, handleClick, btnType, icon }: ButtonProps) => {
  return (
    <div className="btn_container">
      <div className="btn-container ">
        <button
          className="btn cart-btn"
          type={btnType ? btnType : "button"}
          onClick={() => handleClick}
        >
          {title}
        </button>
      </div>
    </div>
  );
};

export default Button;
