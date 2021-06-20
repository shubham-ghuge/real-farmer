import { useEffect, useState } from "react";
import { Correct, Warning } from "../Icons";

type AlertProps = {
  type: string;
  heading?: string;
  message?: string;
};

function Alert({ type, heading, message }: AlertProps) {
  const [expire, setExpiry] = useState(true);
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
    setTimeout(() => {
      setExpiry((curr) => !curr);
    }, 3000);
  }, []);

  return expire ? (
    <div className={`alert-${type} outline-${type} w-sm-30 pos-top-right`}>
      <span>{setIcon(type)}</span>
      <div className="alert-content">
        <h3 style={{ fontWeight: 500 }}>{heading}</h3>
        <p className="text-capitalize">{message}</p>
      </div>
    </div>
  ) : null;
}
export { Alert };
