// import { CircularProgress } from "@mui/material";
// import { Loading } from "../index";
import styles from "./button.module.scss";

type Props = {
  title: String;
  onClick: Function;
  className?: String;
  loading?: Boolean;
  disabled?: boolean;
  children?: React.ReactNode;
};

export default function Button(props: Props) {
  const { title, onClick, className, loading, disabled = false, children } = props;
  const child = loading ? <></> : title;
  return (
    <button
      className={`${styles["button"]} ${className}`}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {loading ? <></> : child}
      {children}
    </button>
  );
}