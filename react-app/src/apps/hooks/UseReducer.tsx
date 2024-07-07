import { useReducer } from "react";

type State = {
  age: number;
};

type Action = {
  type: "INCREASE_AGE";
};

export default function HookUserReducer() {
  const [state, dispatch] = useReducer(
    (state: State, action: Action) => {
      if (action.type === "INCREASE_AGE") {
        return {
          age: state.age + 1,
        };
      }
      throw Error("no action found");
    },
    {
      age: 1,
    }
  );

  return (
    <div>
      <h4>UseReducer</h4>
      Age: {state.age}
      <button
        type="button"
        onClick={() => {
          dispatch({ type: "INCREASE_AGE" });
        }}
      >
        Set age
      </button>
    </div>
  );
}
