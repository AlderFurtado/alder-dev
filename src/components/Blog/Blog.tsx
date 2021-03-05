import React from "react";
import styles from "./Blog.module.css";

const Blog = (): JSX.Element => {
  return (
    <section className={styles.wrapper}>
      <h2>
        Estamos trabalhando nisso.
        <br /> Sabemos que software não são feitos do dia para noite.
        <br /> Em breve sairá essa novidade 😅
      </h2>
    </section>
  );
};

export default Blog;
