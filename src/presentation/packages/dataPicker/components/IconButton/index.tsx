import styles from "./IconButton.module.css";

const IconButton = (props: any) => {
  return <button {...props} className={styles.main}></button>;
};
export default IconButton;
