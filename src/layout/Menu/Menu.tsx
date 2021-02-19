import React, { useState } from "react";
import styles from "./Menu.module.css";

import Image from "next/image";

const Menu: React.FC = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const toogleMenu = (): void => {
    setIsActiveMenu(!isActiveMenu);
  };

  return (
    <>
      <nav className={styles.wrapper}>
        <div>
          <Image src="/logo.png" width="60" height="43" layout="fixed" />
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
          <Image src="/menu_white.svg" width="24" height="24" layout="fixed" />
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
