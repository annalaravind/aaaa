import React from "react";
import styles from "../styles/Home.module.css";

type RadioProps = {
  onChange: any;
  labelName: string;
};

const Radio = ({ onChange, labelName }: RadioProps) => {
  return (
    <div className={styles.input_label}>
      <input
        className={styles.check_check}
        type="radio"
        name="options"
        id="Empty"
        checked={false}
        onChange={onChange}
      />
      <div>{labelName}</div>
    </div>
  );
};

export default Radio;
