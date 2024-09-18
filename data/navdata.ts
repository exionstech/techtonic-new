import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTelegramFill,
} from "react-icons/ri";

const navdata = [
  {
    title: "Home",
    path: "/",
    target: "",
  },
  {
    title: "About",
    path: "/about",
    target: "",
  },
  {
    title: "Opportunities",
    path: "/dashboard",
    target: "",
  },
 
];
export default navdata;

export const navsocial = [
  {
    title: "GitHub",
    Icon: RiGithubFill,
    path: "https://github.com/Techtonic-Community/site",
  },
  {
    title: "LinkedIn",
    Icon: RiLinkedinBoxFill,
    path: "https://www.linkedin.com/company/techtoniccommunity",
  },
  {
    title: "Telegram",
    Icon: RiTelegramFill,
    path: "https://t.me/techtoniccommunity",
  },
];
