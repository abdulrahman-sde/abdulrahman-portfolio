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
      className="cursor-pointer -ms-2 p-2"
    >
      <SpeakerIcon
        className={`w-3.5 -ms-0.5  mt-2 cursor-pointer ${bouncing ? "animate-bounce-click" : ""}`}
      />
    </div>
  );
}
