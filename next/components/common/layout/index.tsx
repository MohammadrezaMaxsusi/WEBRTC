import styles from "./layout.module.scss";

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  const { children } = props;
  return (
    <div className={`${styles["wrapper"]}`}>
      <div className={`${styles["layout"]}`}>{children}</div>
    </div>
  );
}
