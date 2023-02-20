import { useState } from "react";
import WindowEvent from "./WindowEvent";

export default function ToggleWindowEvent() {
  const [windowEvent, setWindowEvent] = useState(false);

  // This commented-out code is what I wrote initially but removeEventListener didn't work!
  // function respondToDblClickEvent(event) {
  //   console.log(event);
  // }

  // function toggleWE() {
  //   windowEvent
  //     ? window.addEventListener("dblclick", respondToDblClickEvent)
  //     : window.removeEventListener("dblclick", respondToDblClickEvent);
  //   console.log(`windowEvent = ${windowEvent}`);
  // }

  // useEffect(toggleWE, [windowEvent]);

  return (
    <div>
      <button onClick={() => setWindowEvent((prevState) => !prevState)}>
        Toggle Window Event
      </button>
      {windowEvent && <WindowEvent />}
    </div>
  );
}
