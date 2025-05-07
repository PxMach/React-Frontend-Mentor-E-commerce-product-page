import styles from "./Header.module.css";
import sneakers from "../../../public/images/logo.svg";

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.leftContainer}>
        <img src={sneakers} alt="Logo Sneakers" />
        <nav>
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <div className={styles.rightContainer}>
        <img src="public/images/icon-cart.svg" alt="image cart" />
        <img src="images/image-avatar.png" alt="image avatar" />
      </div>
    </header>
  );
};
