import React from "react";
import {
  SiDiscord,
  SiReact,
  SiSpotify,
  SiTwitch,
  SiMicrosoftazure,
} from "react-icons/si";
import { Category } from "./Techstack";

export default function Knowledgestack() {
  return (
    <Category>
      <SiDiscord aria-label="Discord API" />
      <SiTwitch aria-label="Twitch API" />
      <SiSpotify aria-label="Spotify API" />
      <SiReact aria-label="React Docs" />
      <SiMicrosoftazure  aria-label="Azure and Active Directory" />
    </Category>
  );
}
