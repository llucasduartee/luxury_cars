"use client";

import { IButtonProps } from "@/types/button";

const Button = ({
  title,
  containerStyles,
  btnType,
  handleClick,
}: IButtonProps) => {
  return (
    <button
      disabled={false}
      type={`${btnType || "button"}`}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default Button;
