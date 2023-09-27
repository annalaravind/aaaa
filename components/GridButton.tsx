import React from "react";
import styles from "../styles/Home.module.css";

type ColumnButtonsProps = {
  id: string;
  onClickHandler: any;
};

const GridButton = ({ id, onClickHandler }: ColumnButtonsProps) => {
  return (
    <button id={id} className={styles.access} onClick={onClickHandler}>
      {id}
    </button>
  );
};

export default GridButton;
