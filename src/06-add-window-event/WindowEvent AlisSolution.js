import { useEffect } from "react";

export default function WindowEvent() {
  function respondToDblClickEvent(event) {
    console.log(event);
  }

  useEffect(() => {
    window.addEventListener("dblclick", respondToDblClickEvent);

    return () => window.removeEventListener("dblclick", respondToDblClickEvent);
  }, []);

  return <h2>Window event active</h2>;
}
