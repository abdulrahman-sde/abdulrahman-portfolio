"use client";

import { useEffect, useState } from "react";

import { useTheme } from "next-themes";
import useSound from "use-sound";
import Image from "next/image";
export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [play] = useSound("/assets/audios/switch.ogg", { volume: 0.02 });
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="px-6"></div>;
  }
  return (
    <button
      onClick={() => {
        play();
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }}
      className="mx-2 mt-0.5 rounded-md border border-border bg-transparent p-1.5 transition-[background-color,color]"
    >
      {isDark ? (
        <Image
          src={"/assets/icons/moon.svg"}
          alt="moon"
          width={15}
          height={15}
          className="text-white"
        />
      ) : (
        <Image src={"/assets/icons/sun.svg"} alt="sun" width={15} height={15} />
      )}
    </button>
  );
};
