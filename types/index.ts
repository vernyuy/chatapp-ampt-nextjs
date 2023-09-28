import { ISODateString } from "next-auth";
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

export interface personProps {
  name: string;
  image: string;
  email: string;
}

export interface userInboxProps {
  partnerId: string;
  inboxId: string;
  partnerImage: String;
  partnerName: String;
}

export interface messageSentProps {
  partnerId: String;
  id: String;
  text: String;
  image?: String;
}

export interface messageProps {
  content: string;
  partnerImage?: String;
  time: ISODateString;
}

export interface messageData {
  items: any;
}

export interface postData {
  image?: string;
  content: string;
  owner: string;
  title: string;
}
