import React, { useRef } from "react";
import BackspaceIcon from "@mui/icons-material/Backspace";

export const Button = ({
  value,
  btnClick,
  onEqual,
  onClear,
  onAllClear,
  color,
}) => {
  const audioRef = useRef(null);

  function onBtnClick() {
  

    if (audioRef.current) {
      audioRef.current.volume = 0.2;
      audioRef.current.playbackRate = 1.5;
      audioRef.current.play();
    }

    if (value == "=") {
      onEqual();
    } else if (value == "C") {
      onClear();
    } else if (value === "AC") {
      onAllClear();
    } else {
      btnClick(value);
    }
  }

  return (
    <div className="toggle">
     <audio ref={audioRef} src="/keypress2.mp3" />
      <input onClick={onBtnClick} value={value} type="checkbox" />
      {value == "=" ? (
        <span className="equal-btn button"></span>
      ) : (
        <span className="button"></span>
      )}

      {typeof value === "number" || value === "00" || value === "." ? (
        <span className="label number">{value}</span>
      ) : value === "C" ? (
        <span style={{ color: "red" }} className="label">
          <BackspaceIcon />
        </span>
      ) : value === "=" ? (
        <span style={{ color: "white" }} className="label">
          {value}
        </span>
      ) : value === "AC" ? (
        <span style={{ color: "cyan" }} className="label">
          {value}
        </span>
      ) : (
        <span className="label">{value}</span>
      )}
    </div>
  );
};
