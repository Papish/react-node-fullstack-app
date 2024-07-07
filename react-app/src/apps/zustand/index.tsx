import { useBearStore } from "./state";

export default function Zustand() {
  return (
    <>
      <h1>zustand</h1>
      <Display />
      <hr />
      <Action />
    </>
  );
}

function Display() {
  const bears = useBearStore((state) => state.bears);
  return <>Bears: {bears}</>;
}

function Action() {
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  return (
    <>
      <button type="button" onClick={increasePopulation}>
        Inc Bears
      </button>
    </>
  );
}
