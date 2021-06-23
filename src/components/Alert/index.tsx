import { useEffect } from "react";
import { Close, Correct, Warning } from "../Icons";

type AlertProps = {
  type: string;
  heading?: string;
  message?: string;
  onClose: Function;
};

function Alert({ type, heading, message, onClose }: AlertProps) {
  function setIcon(type: string) {
    switch (type) {
      case "danger":
        return <Warning />;

      case "success":
        return <Correct />;

      default:
        return null;
    }
  }
  useEffect(() => {
    setTimeout(() => onClose(false), 2000);
  }, [onClose]);

  return (
    <div className={`alert-${type} outline-${type} w-sm-30 pos-top-right`}>
      <span className="close" onClick={() => onClose()}>
        <Close />
      </span>
      <span>{setIcon(type)}</span>
      <div className="alert-content">
        <h3 style={{ fontWeight: 500 }}>{heading}</h3>
        <p className="text-capitalize">{message}</p>
      </div>
    </div>
  );
}
export { Alert };
