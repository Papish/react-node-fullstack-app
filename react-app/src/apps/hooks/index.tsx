import HookUseEffect from "./UseEffect";
import HookUseImperitiveHandle from "./UseImperitiveHandle";
import HookUseMemo from "./UseMemo";
import HookUserReducer from "./UseReducer";
import HookUseRef from "./UseRef";
import HookUseState from "./UseState";

function HookUseTransition() {
  return <div></div>;
}

export default function Hooks() {
  return (
    <div>
      <h1>React Hooks</h1>
      <HookUserReducer />
      <br />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <HookUseState />
      <br />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <HookUseEffect />
      <br />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <HookUseRef />
      <br />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <HookUseImperitiveHandle />
      <br />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <HookUseMemo />
      <br />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <HookUseTransition />
    </div>
  );
}
