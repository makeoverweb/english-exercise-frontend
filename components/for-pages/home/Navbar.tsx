import styles from "../../../styles/navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.root}>
      <div className={styles.item}>Grammar</div>
      <div className={styles.item}>Listening</div>
      <div className={styles.item}>Reading</div>
      <div className={styles.item}>Use of English</div>
      <div className={styles.item}>Writing</div>
    </div>
  );
};

export default Navbar;
