import PropTypes from "prop-types";
import React from "react";

export const PlaceboxInfo = ({ className, text = "Md" }) => {
  return (
    <div className={`relative w-[330px] h-[50px] bg-secondary rounded-[4px] ${className}`}>
      <div className="absolute top-[12px] left-[16px] opacity-50 font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-text-2 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
        {text}
      </div>
    </div>
  );
};

PlaceboxInfo.propTypes = {
  text: PropTypes.string,
};
