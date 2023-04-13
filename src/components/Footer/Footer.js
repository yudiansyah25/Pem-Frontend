import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <h1 className={styles.footer__title}>IndoXXI App</h1>
        <p className={styles.footer__author}>Created by Yudiyansyah</p>
      </footer>
    </div>
  );
}

export default Footer;
