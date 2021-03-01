import React, { useState } from "react";
import styles from "./Menu.module.css";

const Menu = (): JSX.Element => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const toogleMenu = (): void => {
    setIsActiveMenu(!isActiveMenu);
  };

  return (
    <>
      <nav className={styles.wrapper}>
        <div>
          <img src="/logo.png" width="60" height="43" />
        </div>
        <ul className={styles.menu_web}>
          <li>Inicio</li>
          <li>Blog</li>
          <li>Contato</li>
        </ul>
        {/* Part mobile */}
        <div
          className={styles.menu_container}
          onClick={() => {
            toogleMenu();
          }}
        >
          <img src="/menu_white.svg" width="24" height="24" />
        </div>
      </nav>
      {isActiveMenu && (
        <ul className={styles.menu_mobile}>
          <li>Inicio</li>
          <li>Blog</li>
          <li>Contato</li>
        </ul>
      )}
    </>
  );
};

export default Menu;
