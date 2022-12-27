import React from "react";

export default function Background() {
  return (
    <div className="bg-gray-50" style={{ height: 600 }}>
      <div style={{ height: 120 }} className="bg-sky-500/100 bg-yellow-100/">
        <div style={{ height: "inherit" }} className="bg-sky-500/100"></div>
        <div style={{ height: "inherit" }} className="bg-sky-500/75"></div>
        <div style={{ height: "inherit" }} className="bg-sky-500/50"></div>
        <div style={{ height: "inherit" }} className="bg-sky-500/5"></div>
      </div>
    </div>
  );
}
