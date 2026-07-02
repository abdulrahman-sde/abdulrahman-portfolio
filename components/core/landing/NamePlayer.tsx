"use client";
import { useState } from "react";
import { SpeakerIcon } from "@/public/assets/icons/speaker";
import useSound from "use-sound";

export default function NamePlayer() {
  const [play] = useSound("/assets/audios/abdulrahman.m4a");
  const [bouncing, setBouncing] = useState(false);

  return (
    <div
      onClick={() => {
        play();
        setBouncing(true);
        setTimeout(() => setBouncing(false), 200);
      }}
      className="cursor-pointer -ms-2 px-2"
    >
      <SpeakerIcon
        className={`mt-1.5 cursor-pointer ${bouncing ? "animate-bounce-click" : ""}`}
      />
    </div>
  );
}
