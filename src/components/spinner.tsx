// components/Spinner.tsx
import React from "react";

export default function Spinner() {
  const spinnerStyle: React.CSSProperties = {
    width: "50px",
    height: "50px",
    border: "5px solid #ddd",
    borderTop: "5px solid #4fa94d",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  };

  const containerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  };

  return (
    <>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      <div style={containerStyle}>
        <div style={spinnerStyle}></div>
      </div>
    </>
  );
}
