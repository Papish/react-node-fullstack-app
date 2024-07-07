import { forwardRef, Ref, useImperativeHandle, useRef } from "react";

type Props = {
  name?: string;
};

type ChildRef = {
  update: () => void;
};

export default function HookUseImperitiveHandle() {
  const inputRef = useRef<ChildRef>();

  return (
    <div>
      <h4>UseImperitiveHandle</h4>
      <button
        onClick={() => {
          inputRef.current?.update();
        }}
      >
        Focus
      </button>
      <ChildRef ref={inputRef} />
    </div>
  );
}

const Child = (props: Props, ref: Ref<ChildRef | undefined>) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const update = () => {
    console.log("child method called");
    inputRef.current?.focus();
  };

  // this hook expose method to parent by using forwardRef
  useImperativeHandle(ref, () => ({ update }));

  return (
    <div>
      {props.name}
      <input type="text" ref={inputRef} />
    </div>
  );
};

const ChildRef = forwardRef(Child);
