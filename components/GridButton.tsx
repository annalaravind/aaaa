import styles from "../styles/Home.module.css";
import React from "react";

type ColumnButtonsProps = {
  id: string;
  onClickHandler: any;
};

export default function GridButton({ id, onClickHandler }: ColumnButtonsProps) {
  return (
    <button id={id} className={styles.access} onClick={onClickHandler}>
      {id}
    </button>
  );
}
// onClick={onclick}
