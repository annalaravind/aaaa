import React from "react";
import styles from "../styles/Home.module.css";

type RadioProps = {
  onChange: any;
  labelName: string;
};

export default function Radio({ onChange, labelName }: RadioProps) {
  return (
    <div className={styles.input_label}>
      <input
        className={styles.check_check}
        type="radio"
        name="options"
        id="Empty"
        // checked={selectedOption === "Empty"}
        onChange={onChange}
      />
      <div>{labelName}</div>
    </div>
  );
}
