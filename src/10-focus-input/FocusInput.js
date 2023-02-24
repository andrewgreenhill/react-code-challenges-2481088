import { useEffect, useRef } from "react";

export default function FocusInput() {
  const inputFieldRef = useRef(null);

  useEffect(() => inputFieldRef.current.focus(), []); // Using useEffect to do the focussing upon page load :-)

  return (
    <div>
      <label htmlFor="focused-input">Focus me on page load!</label>
      <input ref={inputFieldRef} name="focused-input"></input>
    </div>
  );
}
