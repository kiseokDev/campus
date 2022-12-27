import React from "react";
export default function PromiseTest() {
  function timeoutPromise(message, interval) {
    return new Promise((resolve, reject) => {
      if (message === "" || typeof message !== "string") {
        reject("Message is empty or not a string");
      } else if (interval < 0 || typeof interval !== "number") {
        reject("Interval is negative or not a number");
      } else {
        setTimeout(function () {
          resolve(message);
        }, interval);
      }
    });
  }

  return <div>PromiseTest</div>;
}
