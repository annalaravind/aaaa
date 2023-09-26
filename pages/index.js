import React, { useState } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";

function Home() {
  const [idSelect, setIdSelect] = useState([]);
  const [moving, setMoving] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  console.log(idSelect);

  const label1 = "U";
  const label2 = "R";
  const label3 = "S";
  const label4 = "N";

  // Indiviual Selection.....
  const onClickHandler = (id) => {
    if (idSelect.includes(id)) {
      setIdSelect(idSelect.filter((value) => value !== id));
    } else {
      setIdSelect([...idSelect, id]);
    }
  };

  // Column Group Selection....
  const onColumnHandler = (id) => {
    let array = [
      `A${id}`,
      `B${id}`,
      `C${id}`,
      `D${id}`,
      `E${id}`,
      `F${id}`,
      `G${id}`,
      `H${id}`,
    ];
    let columnArray = [...idSelect];
    for (let i = 0; i < array.length; i++) {
      if (columnArray.includes(array[i])) {
        columnArray = columnArray.filter((value) => value !== array[i]);
      } else {
        columnArray.push(array[i]);
      }
    }
    setIdSelect(columnArray);
  };

  // Rows Group Selection....
  const onRowsHandler = (id) => {
    let array = [
      `${id}1`,
      `${id}2`,
      `${id}3`,
      `${id}4`,
      `${id}5`,
      `${id}6`,
      `${id}7`,
      `${id}8`,
      `${id}9`,
      `${id}10`,
      `${id}11`,
      `${id}12`,
    ];
    let rowArray = [...idSelect];
    for (let i = 0; i < array.length; i++) {
      if (rowArray.includes(array[i])) {
        rowArray = rowArray.filter((value) => value !== array[i]);
      } else {
        rowArray.push(array[i]);
      }
    }
    setIdSelect(rowArray);
  };

  // Moving Ball....
  const onMovingBall = () => {
    setMoving(!moving);
  };

  const circleStyle = {
    width: "25px",
    height: "25px",
    backgroundColor: "white",
    borderRadius: "50%",
    transition: "transform 0.5s ease",
    cursor: "pointer",
    transform: moving ? "translateX(25px)" : "translateX(0px)",
  };

  //Radio buttons
  const onRadioHandler = (option) => {
    setSelectedOption(option);
  };

  //Empty
  const onEmptyHandler = () => {
    setSelectedOption("Empty");
    setIdSelect([]);
  };

  const div_1Element = [
    { id: "A1" },
    { id: "A2" },
    { id: "A3" },
    { id: "A4" },
    { id: "A5" },
    { id: "A6" },
    { id: "A7" },
    { id: "A8" },
    { id: "A9" },
    { id: "A10" },
    { id: "A11" },
    { id: "A12" },
  ];

  const div_2Element = [
    { id: "B1" },
    { id: "B2" },
    { id: "B3" },
    { id: "B4" },
    { id: "B5" },
    { id: "B6" },
    { id: "B7" },
    { id: "B8" },
    { id: "B9" },
    { id: "B10" },
    { id: "B11" },
    { id: "B12" },
  ];

  const div_3Element = [
    { id: "C1" },
    { id: "C2" },
    { id: "C3" },
    { id: "C4" },
    { id: "C5" },
    { id: "C6" },
    { id: "C7" },
    { id: "C8" },
    { id: "C9" },
    { id: "C10" },
    { id: "C11" },
    { id: "C12" },
  ];

  const div_4Element = [
    { id: "D1" },
    { id: "D2" },
    { id: "D3" },
    { id: "D4" },
    { id: "D5" },
    { id: "D6" },
    { id: "D7" },
    { id: "D8" },
    { id: "D9" },
    { id: "D10" },
    { id: "D11" },
    { id: "D12" },
  ];

  const div_5Element = [
    { id: "E1" },
    { id: "E2" },
    { id: "E3" },
    { id: "E4" },
    { id: "E5" },
    { id: "E6" },
    { id: "E7" },
    { id: "E8" },
    { id: "E9" },
    { id: "E10" },
    { id: "E11" },
    { id: "E12" },
  ];

  const div_6Element = [
    { id: "F1" },
    { id: "F2" },
    { id: "F3" },
    { id: "F4" },
    { id: "F5" },
    { id: "F6" },
    { id: "F7" },
    { id: "F8" },
    { id: "F9" },
    { id: "F10" },
    { id: "F11" },
    { id: "F12" },
  ];

  const div_7Element = [
    { id: "G1" },
    { id: "G2" },
    { id: "G3" },
    { id: "G4" },
    { id: "G5" },
    { id: "G6" },
    { id: "G7" },
    { id: "G8" },
    { id: "G9" },
    { id: "G10" },
    { id: "G11" },
    { id: "G12" },
  ];

  const div_8Element = [
    { id: "H1" },
    { id: "H2" },
    { id: "H3" },
    { id: "H4" },
    { id: "H5" },
    { id: "H6" },
    { id: "H7" },
    { id: "H8" },
    { id: "H9" },
    { id: "H10" },
    { id: "H11" },
    { id: "H12" },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.content}>
        <div className={styles.plate}>Plate Setup</div>
        <div className={styles.setup}>
          <div className={styles.grid}>
            <div className={styles.grid_container}>
              <div className={styles.grid_child}>
                <div></div>
                <button
                  id="1"
                  className={styles.access}
                  onClick={() => onColumnHandler("1")}
                >
                  1
                </button>
                <button
                  id="2"
                  className={styles.access}
                  onClick={() => onColumnHandler("2")}
                >
                  2
                </button>
                <button
                  id="3"
                  className={styles.access}
                  onClick={() => onColumnHandler("3")}
                >
                  3
                </button>
                <button
                  id="4"
                  className={styles.access}
                  onClick={() => onColumnHandler("4")}
                >
                  4
                </button>
                <button
                  id="5"
                  className={styles.access}
                  onClick={() => onColumnHandler("5")}
                >
                  5
                </button>
                <button
                  id="6"
                  className={styles.access}
                  onClick={() => onColumnHandler("6")}
                >
                  6
                </button>
                <button
                  id="7"
                  className={styles.access}
                  onClick={() => onColumnHandler("7")}
                >
                  7
                </button>
                <button
                  id="8"
                  className={styles.access}
                  onClick={() => onColumnHandler("8")}
                >
                  8
                </button>
                <button
                  id="9"
                  className={styles.access}
                  onClick={() => onColumnHandler("9")}
                >
                  9
                </button>
                <button
                  id="10"
                  className={styles.access}
                  onClick={() => onColumnHandler("10")}
                >
                  10
                </button>
                <button
                  id="11"
                  className={styles.access}
                  onClick={() => onColumnHandler("11")}
                >
                  11
                </button>
                <button
                  id="12"
                  className={styles.access}
                  onClick={() => onColumnHandler("12")}
                >
                  12
                </button>
              </div>
              <div className={styles.grid_child}>
                <button
                  id="A"
                  className={styles.accessY}
                  onClick={() => onRowsHandler("A")}
                >
                  A
                </button>
                {div_1Element.map(({ id }) => (
                  <div
                    key={id}
                    id={id}
                    className={styles.access1}
                    style={{
                      backgroundColor: idSelect.includes(id)
                        ? "white"
                        : "transparent",
                    }}
                    onClick={() => onClickHandler(id)}
                  >
                    {selectedOption === "Unknown" && idSelect.includes(id)
                      ? label1
                      : ""}
                    {selectedOption === "Reference" && idSelect.includes(id)
                      ? label2
                      : ""}
                    {selectedOption === "Standards" && idSelect.includes(id)
                      ? label3
                      : ""}
                    {selectedOption === "ntc" && idSelect.includes(id)
                      ? label4
                      : ""}
                  </div>
                ))}
              </div>
              <div className={styles.grid_child}>
                <button
                  id="B"
                  className={styles.accessY}
                  onClick={() => onRowsHandler("B")}
                >
                  B
                </button>
                {div_2Element.map(({ id }) => (
                  <div
                    key={id}
                    id={id}
                    className={styles.access1}
                    style={{
                      backgroundColor: idSelect.includes(id)
                        ? "white"
                        : "transparent",
                    }}
                    onClick={() => onClickHandler(id)}
                  >
                    {selectedOption === "Unknown" && idSelect.includes(id)
                      ? label1
                      : ""}
                    {selectedOption === "Reference" && idSelect.includes(id)
                      ? label2
                      : ""}
                    {selectedOption === "Standards" && idSelect.includes(id)
                      ? label3
                      : ""}
                    {selectedOption === "ntc" && idSelect.includes(id)
                      ? label4
                      : ""}
                  </div>
                ))}
              </div>
              <div className={styles.grid_child}>
                <button
                  id="C"
                  className={styles.accessY}
                  onClick={() => onRowsHandler("C")}
                >
                  C
                </button>
                {div_3Element.map(({ id }) => (
                  <div
                    key={id}
                    id={id}
                    className={styles.access1}
                    style={{
                      backgroundColor: idSelect.includes(id)
                        ? "white"
                        : "transparent",
                    }}
                    onClick={() => onClickHandler(id)}
                  >
                    {selectedOption === "Unknown" && idSelect.includes(id)
                      ? label1
                      : ""}
                    {selectedOption === "Reference" && idSelect.includes(id)
                      ? label2
                      : ""}
                    {selectedOption === "Standards" && idSelect.includes(id)
                      ? label3
                      : ""}
                    {selectedOption === "ntc" && idSelect.includes(id)
                      ? label4
                      : ""}
                  </div>
                ))}
              </div>
              <div className={styles.grid_child}>
                <button
                  id="D"
                  className={styles.accessY}
                  onClick={() => onRowsHandler("D")}
                >
                  D
                </button>
                {div_4Element.map(({ id }) => (
                  <div
                    key={id}
                    id={id}
                    className={styles.access1}
                    style={{
                      backgroundColor: idSelect.includes(id)
                        ? "white"
                        : "transparent",
                    }}
                    onClick={() => onClickHandler(id)}
                  >
                    {selectedOption === "Unknown" && idSelect.includes(id)
                      ? label1
                      : ""}
                    {selectedOption === "Reference" && idSelect.includes(id)
                      ? label2
                      : ""}
                    {selectedOption === "Standards" && idSelect.includes(id)
                      ? label3
                      : ""}
                    {selectedOption === "ntc" && idSelect.includes(id)
                      ? label4
                      : ""}
                  </div>
                ))}
              </div>
              <div className={styles.grid_child}>
                <button
                  id="E"
                  className={styles.accessY}
                  onClick={() => onRowsHandler("E")}
                >
                  E
                </button>
                {div_5Element.map(({ id }) => (
                  <div
                    key={id}
                    id={id}
                    className={styles.access1}
                    style={{
                      backgroundColor: idSelect.includes(id)
                        ? "white"
                        : "transparent",
                    }}
                    onClick={() => onClickHandler(id)}
                  >
                    {selectedOption === "Unknown" && idSelect.includes(id)
                      ? label1
                      : ""}
                    {selectedOption === "Reference" && idSelect.includes(id)
                      ? label2
                      : ""}
                    {selectedOption === "Standards" && idSelect.includes(id)
                      ? label3
                      : ""}
                    {selectedOption === "ntc" && idSelect.includes(id)
                      ? label4
                      : ""}
                  </div>
                ))}
              </div>
              <div className={styles.grid_child}>
                <button
                  id="F"
                  className={styles.accessY}
                  onClick={() => onRowsHandler("F")}
                >
                  F
                </button>
                {div_6Element.map(({ id }) => (
                  <div
                    key={id}
                    id={id}
                    className={styles.access1}
                    style={{
                      backgroundColor: idSelect.includes(id)
                        ? "white"
                        : "transparent",
                    }}
                    onClick={() => onClickHandler(id)}
                  >
                    {selectedOption === "Unknown" && idSelect.includes(id)
                      ? label1
                      : ""}
                    {selectedOption === "Reference" && idSelect.includes(id)
                      ? label2
                      : ""}
                    {selectedOption === "Standards" && idSelect.includes(id)
                      ? label3
                      : ""}
                    {selectedOption === "ntc" && idSelect.includes(id)
                      ? label4
                      : ""}
                  </div>
                ))}
              </div>
              <div className={styles.grid_child}>
                <button
                  id="G"
                  className={styles.accessY}
                  onClick={() => onRowsHandler("G")}
                >
                  G
                </button>
                {div_7Element.map(({ id }) => (
                  <div
                    key={id}
                    id={id}
                    className={styles.access1}
                    style={{
                      backgroundColor: idSelect.includes(id)
                        ? "white"
                        : "transparent",
                    }}
                    onClick={() => onClickHandler(id)}
                  >
                    {selectedOption === "Unknown" && idSelect.includes(id)
                      ? label1
                      : ""}
                    {selectedOption === "Reference" && idSelect.includes(id)
                      ? label2
                      : ""}
                    {selectedOption === "Standards" && idSelect.includes(id)
                      ? label3
                      : ""}
                    {selectedOption === "ntc" && idSelect.includes(id)
                      ? label4
                      : ""}
                  </div>
                ))}
              </div>
              <div className={styles.grid_child}>
                <button
                  id="H"
                  className={styles.accessY}
                  onClick={() => onRowsHandler("H")}
                >
                  H
                </button>
                {div_8Element.map(({ id }) => (
                  <div
                    key={id}
                    id={id}
                    className={styles.access1}
                    style={{
                      backgroundColor: idSelect.includes(id)
                        ? "white"
                        : "transparent",
                    }}
                    onClick={() => onClickHandler(id)}
                  >
                    {selectedOption === "Unknown" && idSelect.includes(id)
                      ? label1
                      : ""}
                    {selectedOption === "Reference" && idSelect.includes(id)
                      ? label2
                      : ""}
                    {selectedOption === "Standards" && idSelect.includes(id)
                      ? label3
                      : ""}
                    {selectedOption === "ntc" && idSelect.includes(id)
                      ? label4
                      : ""}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.options}>
            <div className={styles.gradient}>
              <div className={styles.gradient_text}>Gradient</div>
              <div className={styles.on_off}>
                <div className={styles.switch}>
                  <div style={circleStyle} onClick={onMovingBall}></div>
                </div>
              </div>
            </div>
            <div className={styles.check_box}>
              <div className={styles.check_list}>
                <div className={styles.input_label}>
                  <input
                    className={styles.check_check}
                    type="radio"
                    name="options"
                    id="Unknown"
                    checked={selectedOption === "Unknown"}
                    onChange={() => onRadioHandler("Unknown")}
                  />
                  <div>Unknown</div>
                </div>
                <div className={styles.input_label}>
                  <input
                    className={styles.check_check}
                    type="radio"
                    name="options"
                    id="Reference"
                    checked={selectedOption === "Reference"}
                    onChange={() => onRadioHandler("Reference")}
                  />
                  <div>Reference</div>
                </div>
                <div className={styles.input_label}>
                  <input
                    className={styles.check_check}
                    type="radio"
                    name="options"
                    id="Standards"
                    checked={selectedOption === "Standards"}
                    onChange={() => onRadioHandler("Standards")}
                  />
                  <div>Standards</div>
                </div>
                <div className={styles.input_label}>
                  <input
                    className={styles.check_check}
                    type="radio"
                    name="options"
                    id="ntc"
                    checked={selectedOption === "ntc"}
                    onChange={() => onRadioHandler("ntc")}
                  />
                  <div>NTC</div>
                </div>
                <div className={styles.input_label}>
                  <input
                    className={styles.check_check}
                    type="radio"
                    name="options"
                    id="Empty"
                    checked={selectedOption === "Empty"}
                    onChange={onEmptyHandler}
                  />
                  <div>Empty</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
