import { useState, useEffect, useCallback } from "react";
import WindowEvent from "./WindowEvent";

export default function ToggleWindowEvent() {
  const [windowEvent, setWindowEvent] = useState(false);

  const respondToDblClickEvent = useCallback((event) => {
    console.log(event);
  }, []);

  function toggleWE() {
    windowEvent
      ? window.addEventListener("dblclick", respondToDblClickEvent)
      : window.removeEventListener("dblclick", respondToDblClickEvent);
    console.log(`windowEvent = ${windowEvent}`);
  }

  useEffect(toggleWE, [windowEvent, respondToDblClickEvent]);

  return (
    <div>
      <button onClick={() => setWindowEvent((prevState) => !prevState)}>
        Toggle Window Event
      </button>
      {windowEvent && <WindowEvent />}
    </div>
  );
}
