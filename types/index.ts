import { MouseEventHandler } from "react";

export interface ButtonProps {
  title: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType: "button" | "submit" | "reset";
  icon?: HTMLOrSVGElement;
}

export interface NavbarProps {
  name: string;
  image: string;
  email: string;
}
