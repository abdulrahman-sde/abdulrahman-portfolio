"use client";
import React from "react";

interface RaisedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
}

const RaisedButton = React.forwardRef<HTMLButtonElement, RaisedButtonProps>(
  ({ color = "#2563eb", style, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        style={{
          backgroundColor: color,
          color: "#fff",
          // border: `1px solid ${color}`,
          boxShadow: `0 4px 6px rgba(0,0,0,0.2)`,
          ...style,
        }}
        className="
        relative
        inline-flex
        items-center
        justify-center
        px-4 py-2
        rounded-xl
        text-sm
        font-medium
        transition-all
        active:scale-95
        hover:opacity-90
        before:absolute
        before:inset-0
        before:rounded-xl
        before:border-t
        before:border-white/40
        before:bg-gradient-to-b
        before:from-white/20
        before:to-transparent
        overflow-hidden
        cursor-pointer
      "
      >
        {children}
      </button>
    );
  },
);

RaisedButton.displayName = "RaisedButton";

export default RaisedButton;
