"use client";

import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";

type AnimationStart = "top-left" | "top-right" | "bottom-left" | "bottom-right";

interface Animation {
  name: string;
  css: string;
}

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => void;
};

const createAnimation = (
  start: AnimationStart = "top-left",
  blur = false,
): Animation => {
  const getPolygonClipPaths = (position: AnimationStart) => {
    switch (position) {
      case "top-left":
        return {
          darkFrom: "polygon(50% -71%, -50% 71%, -50% 71%, 50% -71%)",
          darkTo: "polygon(50% -71%, -50% 71%, 50% 171%, 171% 50%)",
          lightFrom: "polygon(171% 50%, 50% 171%, 50% 171%, 171% 50%)",
          lightTo: "polygon(171% 50%, 50% 171%, -50% 71%, 50% -71%)",
        };
      case "top-right":
        return {
          darkFrom: "polygon(150% -71%, 250% 71%, 250% 71%, 150% -71%)",
          darkTo: "polygon(150% -71%, 250% 71%, 50% 171%, -71% 50%)",
          lightFrom: "polygon(-71% 50%, 50% 171%, 50% 171%, -71% 50%)",
          lightTo: "polygon(-71% 50%, 50% 171%, 250% 71%, 150% -71%)",
        };
      case "bottom-left":
        return {
          darkFrom: "polygon(-71% 50%, 50% -71%, 50% -71%, -71% 50%)",
          darkTo: "polygon(-71% 50%, 50% -71%, 171% 50%, 50% 171%)",
          lightFrom: "polygon(50% 171%, 171% 50%, 171% 50%, 50% 171%)",
          lightTo: "polygon(50% 171%, 171% 50%, 50% -71%, -71% 50%)",
        };
      case "bottom-right":
        return {
          darkFrom: "polygon(171% 50%, 50% -71%, 50% -71%, 171% 50%)",
          darkTo: "polygon(171% 50%, 50% -71%, -71% 50%, 50% 171%)",
          lightFrom: "polygon(50% 171%, -71% 50%, -71% 50%, 50% 171%)",
          lightTo: "polygon(50% 171%, -71% 50%, 50% -71%, 171% 50%)",
        };
      default:
        return {
          darkFrom: "polygon(50% -71%, -50% 71%, -50% 71%, 50% -71%)",
          darkTo: "polygon(50% -71%, -50% 71%, 50% 171%, 171% 50%)",
          lightFrom: "polygon(171% 50%, 50% 171%, 50% 171%, 171% 50%)",
          lightTo: "polygon(171% 50%, 50% 171%, -50% 71%, 50% -71%)",
        };
    }
  };

  const clipPaths = getPolygonClipPaths(start);

  return {
    name: `polygon-${start}${blur ? "-blur" : ""}`,
    css: `
      ::view-transition-group(root) {
        animation-duration: 0.7s;
        animation-timing-function: var(--expo-out);
      }

      ::view-transition-new(root) {
        animation-name: reveal-light-${start}${blur ? "-blur" : ""};
        ${blur ? "filter: blur(2px);" : ""}
      }

      ::view-transition-old(root),
      .dark::view-transition-old(root) {
        animation: none;
        z-index: -1;
      }

      .dark::view-transition-new(root) {
        animation-name: reveal-dark-${start}${blur ? "-blur" : ""};
        ${blur ? "filter: blur(2px);" : ""}
      }

      @keyframes reveal-dark-${start}${blur ? "-blur" : ""} {
        from {
          clip-path: ${clipPaths.darkFrom};
          ${blur ? "filter: blur(8px);" : ""}
        }
        ${blur ? "50% { filter: blur(4px); }" : ""}
        to {
          clip-path: ${clipPaths.darkTo};
          ${blur ? "filter: blur(0px);" : ""}
        }
      }

      @keyframes reveal-light-${start}${blur ? "-blur" : ""} {
        from {
          clip-path: ${clipPaths.lightFrom};
          ${blur ? "filter: blur(8px);" : ""}
        }
        ${blur ? "50% { filter: blur(4px); }" : ""}
        to {
          clip-path: ${clipPaths.lightTo};
          ${blur ? "filter: blur(0px);" : ""}
        }
      }
    `,
  };
};

const useThemeToggle = ({
  start = "top-left",
  blur = false,
}: {
  start?: AnimationStart;
  blur?: boolean;
} = {}) => {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const isReady = typeof resolvedTheme !== "undefined";

  const styleId = "theme-transition-styles";

  const updateStyles = useCallback((css: string) => {
    if (typeof window === "undefined") {
      return;
    }

    let styleElement = document.getElementById(
      styleId,
    ) as HTMLStyleElement | null;
    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }

    styleElement.textContent = css;
  }, []);

  const toggleTheme = useCallback(() => {
    const nextIsDark = !isDark;

    const animation = createAnimation(start, blur);
    updateStyles(animation.css);

    if (typeof window === "undefined") {
      return;
    }

    const doc = document as ViewTransitionDocument;
    const switchTheme = () => {
      setTheme(nextIsDark ? "dark" : "light");
    };

    if (!doc.startViewTransition) {
      switchTheme();
      return;
    }

    doc.startViewTransition(switchTheme);
  }, [blur, isDark, setTheme, start, updateStyles]);

  return {
    isReady,
    isDark,
    toggleTheme,
  };
};

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { isReady, isDark, toggleTheme } = useThemeToggle({
    start: "top-left",
    blur: false,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isReady) {
    return <div className="h-9 w-9" />;
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <motion.svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0, rotate: -25, scale: 0.85 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </motion.svg>
      ) : (
        <motion.svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0, rotate: 25, scale: 0.85 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </motion.svg>
      )}
    </button>
  );
}
