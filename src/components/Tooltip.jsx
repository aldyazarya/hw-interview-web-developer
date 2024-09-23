import React, { useRef } from "react";

function Tooltip({ text, children }) {
  const tooltipRef = useRef();
  const container = useRef();

  return (
    <div
      ref={container}
      onMouseEnter={({ clientX }) => {
        if (!tooltipRef.current) return;
        const { left } = container.current.getBoundingClientRect();
        tooltipRef.current.style.left = clientX - left + "px";
      }}
      className=" group relative inline-block"
    >
      {children}
      <span className=" invisible group-hover:visible opacity-0 group-hover:opacity-100 transition bg-gray-50 text-black text-[12px] p-1 rounded absolute top-full mt-2 whitespace-nowrap z-100">
        {text}
      </span>
    </div>
  );
}

export default Tooltip;
