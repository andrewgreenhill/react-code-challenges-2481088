import { useReducer } from "react";

export default function DarkMode() {
  const initialState = { themeName: "page" };
  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect(() => console.log(state.themeName), [state.themeName]);

  function reducer(state, action) {
    switch (action.type) {
      case "dark":
        return { ...state, themeName: "page dark-mode" };
      default:
        return { ...state, themeName: "page" };
    }
  }

  return (
    <div className={state.themeName} id="thePage">
      <button className="dark-mode-button" onClick={() => dispatch({ type: "dark" })}>
        Dark Mode
      </button>
      <button className="light-mode-button" onClick={() => dispatch({ type: "light" })}>
        Light Mode
      </button>
    </div>
  );
}
