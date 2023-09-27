import React from "react";
import styles from "../styles/Home.module.css";

type GridCellsProps = {
  ColId: string;
  bgColor: string;
  label: string;
  onClickHandler: any;
};
const GridCells = ({
  ColId,
  bgColor,
  label,
  onClickHandler,
}: GridCellsProps) => {
  return (
    <div
      key={ColId}
      id={ColId}
      className={styles.access1}
      style={{
        backgroundColor: bgColor,
      }}
      onClick={onClickHandler}
    >
      {label}
    </div>
  );
};

export default GridCells;
