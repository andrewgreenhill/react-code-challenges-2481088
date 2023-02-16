import { useState, useEffect } from "react";

export default function DarkMode() {
  const [pageTheme, setPageTheme] = useState("light");

  useEffect(() => console.log(pageTheme), [pageTheme]);

  return (
    <div className="page" id="thePage">
      <button className="dark-mode-button" onClick={() => setTheme("dark")}>
        Dark Mode
      </button>
      <button className="light-mode-button" onClick={() => setTheme("light")}>
        Light Mode
      </button>
    </div>
  );

  function setTheme(themeName) {
    switch (themeName) {
      case "dark":
        setPageTheme("dark");
        document.getElementById("thePage").className = "page dark-mode";
        break;
      default:
        setPageTheme("light");
        document.getElementById("thePage").className = "page";
    }
  }
}
