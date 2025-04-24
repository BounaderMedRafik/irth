import { NavLinksProps } from "./types";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { PiAirplaneInFlight } from "react-icons/pi";

export const navLinks: NavLinksProps[] = [
  {
    title: "Chat",
    link: "/chat",
    icon: <IoChatbubbleEllipsesOutline size={14} />,
  },
  {
    title: "Suggestions",
    link: "/suggestions",
    icon: <PiAirplaneInFlight size={14} />,
  },
];
