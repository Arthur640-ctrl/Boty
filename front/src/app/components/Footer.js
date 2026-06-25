import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_grid}>
        <div className={styles.footer_column}>
          <span className={styles.footer_title}>PRODUCT</span>
          <div className={styles.footer_links}>
            <a href="#">Home</a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
          </div>
        </div>

        <div className={styles.footer_column}>
          <span className={styles.footer_title}>COMPANY</span>
          <div className={styles.footer_links}>
            <a href="#">About</a>
            <a href="#">Status</a>
          </div>
        </div>

        <div className={styles.footer_column}>
          <span className={styles.footer_title}>LEGAL</span>
          <div className={styles.footer_links}>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Cookies</a>
          </div>
        </div>

        <div className={styles.footer_column}>
          <span className={styles.footer_title}>SOCIAL</span>
          <div className={styles.footer_links}>
            <a href="#">Discord</a>
            <a href="#">Github</a>
          </div>
        </div>
      </div>

      <span className={styles.footer_bottom}>© 2026 Boty · Made in France 🇫🇷</span>
    </footer>
  );
}