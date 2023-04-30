import { ReactNode } from "react";

interface Props {
  onClose: () => void;
}

const Alert = ({ onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      My alert
      <button
        type="button"
        onClick={onClose}
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
