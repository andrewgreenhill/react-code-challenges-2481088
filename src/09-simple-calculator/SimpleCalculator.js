import { useReducer, useEffect } from "react";

const initialState = { number1: null, number2: null, operand: null, result: null };

function reducer(state, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "setNum1":
      return { ...state, number1: action.number, result: null };
    case "setNum2":
      return { ...state, number2: action.number, result: null };
    case "selectOperation":
      if (action.operand === "+")
        return {
          ...state,
          operand: "+",
          result: state.number1 != null && state.number2 != null && state.number1 + state.number2,
        };
      if (action.operand === "-")
        return {
          ...state,
          operand: "-",
          result: state.number1 != null && state.number2 != null && state.number1 - state.number2,
        };
      if (action.operand === "c") return { ...initialState };
  }
  return state;
}

export default function SimpleCalculator() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => console.dir(state), [state]);

  return (
    <>
      <>
        <h2>Number 1</h2>
        {numbers.map((number) => (
          <button
            style={state.number1 === number ? { fontWeight: "bold" } : { fontWeight: "normal" }}
            onClick={() => dispatch({ type: "setNum1", number })}
            key={number}
          >
            {number}
          </button>
        ))}
      </>
      <>
        <h2>Number 2</h2>
        {numbers.map((number) => (
          <button
            onClick={() => dispatch({ type: "setNum2", number })}
            style={state.number2 === number ? { fontWeight: "bold" } : { fontWeight: "normal" }}
            key={number}
          >
            {number}
          </button>
        ))}
      </>
      <>
        <h2>Actions</h2>
        <button
          onClick={() => dispatch({ type: "selectOperation", operand: "+" })}
          style={
            state.number1 != null && state.number2 != null && state.operand === "+"
              ? { fontWeight: "bold" }
              : { fontWeight: "normal" }
          }
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: "selectOperation", operand: "-" })}
          style={
            state.number1 != null && state.number2 != null && state.operand === "-"
              ? { fontWeight: "bold" }
              : { fontWeight: "normal" }
          }
        >
          -
        </button>
        <button onClick={() => dispatch({ type: "selectOperation", operand: "c" })}>c</button>
      </>
      <>
        <h2>Result: {state.result}</h2>
      </>
    </>
  );
}
