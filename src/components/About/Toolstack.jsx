import React from "react";
import {
  SiDocker,
  SiGithub,
  SiLinux,
  SiPostman,
  SiPycharm,
  SiVisualstudiocode,
  SiVscodium,
  SiWindows,
} from "react-icons/si";

import { TbBrandOffice } from "react-icons/tb";

import { Category } from "./Techstack";


export default function Toolstack() {
  return Category({
    title: "The Tools I use",
    children: [
      <SiWindows aria-label="Windows" />,
      <SiLinux aria-label="Linux (Arch, Ubuntu, Debian)" />,
      <SiVisualstudiocode aria-label="VSCode" />,
      <TbBrandOffice aria-label="Microsoft Office" />,
      <SiPostman aria-label="Postman" />,
      <SiGithub aria-label="Github" />,
      <SiDocker aria-label="Docker / Docker Compose" />,
    ],
  });
}
