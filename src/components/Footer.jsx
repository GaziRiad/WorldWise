import Styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={Styles.footer}>
      <p className={Styles.copyright}>
        &copy; Copyrights {new Date().getFullYear()} by WoldWise Inc.
      </p>
    </footer>
  );
}

export default Footer;
