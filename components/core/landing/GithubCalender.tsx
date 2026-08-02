"use client";

import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import type { Activity } from "react-github-calendar";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false },
);

const LAST_MONTHS_TO_SHOW = 9;

const transformToLastMonths = (data: Activity[]) => {
  const cutoffDate = new Date();
  cutoffDate.setMonth(cutoffDate.getMonth() - LAST_MONTHS_TO_SHOW);
  return data.filter((day) => new Date(day.date) >= cutoffDate);
};

// Pulled directly from your CSS variables
const explicitTheme = {
  light: [
    "#f5f5f4", // empty - matches --muted
    "#e7e5e4", // --border
    "#d6d3d1", // stone-300
    "#a8a29e", // stone-400
    "#78716c", // --accent (max)
  ],
  dark: [
    "#29252484", // empty - matches --border dark (slightly visible)
    "#44403c", // stone-700
    "#57534e", // stone-600
    "#78716c", // stone-500
    "#a8a29e", // --muted-foreground dark (max)
  ],
};

export default function GithubCalendar() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="mb-2 w-full rounded-xl p-4">
      <GitHubCalendar
        username="abdulrahman-sde"
        className="github-calendar "
        blockSize={11.7}
        blockRadius={3}
        colorScheme={isDark ? "dark" : "light"}
        blockMargin={4}
        showTotalCount={false}
        showWeekdayLabels={false}
        showColorLegend
        transformData={transformToLastMonths}
        fontSize={13}
        theme={explicitTheme}
      />
    </div>
  );
}
