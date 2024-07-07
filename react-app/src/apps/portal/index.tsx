import { useState } from "react";
import { createPortal } from "react-dom";

export default function Portal() {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <div>Portal</div>
      <button
        type="button"
        onClick={() => {
          setModal(true);
        }}
      >
        Toggle
      </button>
      {modal && (
        <AppModal
          onClose={() => {
            setModal(false);
          }}
        >
          Some context
        </AppModal>
      )}
    </div>
  );
}

type Props = {
  children: React.ReactNode;
  onClose?: () => void;
};

function AppModal(props: Props) {
  const { children, onClose } = props;

  return createPortal(
    <div>
      <button type="button" onClick={onClose}>
        X
      </button>
      {children}
    </div>,
    document.body
  );
}
