import React from "react";

import styles from "./ResumeItem.module.css";
import Image from "next/image";

interface StepProps {
  id: string;
  name: string;
  activity: string;
  period: string;
}

const ResumeItem = ({ name, activity, period }: StepProps) => {
  return (
    <div className={styles.container}>
      <h3>{name}</h3>
      <p>{activity}</p>
      <div className={styles.container_period}>
        <Image src="/clock.svg" width="16" height="16" />
        &nbsp; &nbsp;
        <span>{period}</span>
      </div>
    </div>
  );
};

export default ResumeItem;
