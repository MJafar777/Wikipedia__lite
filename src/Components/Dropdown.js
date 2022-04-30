import React, { useState, useEffect, useRef } from "react";

const Dropdown = (props) => {
  const [selection, setSelection] = useState(props.data[0]);
  const [check, setCheck] = useState(true);
  const renderData = () => {
    return props.data.map((val) => {
      if (val.value === selection.value) {
        return;
      }
      return (
        <div
          onClick={() => {
            setSelection(val);
          }}
          className="item"
          data-value="jenny"
          key={val.value}
        >
          {val.label}
        </div>
      );
    });
  };
  useEffect(() => {
    document.querySelector("body").addEventListener("click", (e) => {
      if (!e.target.contains(ref.current)) {
        return;
      }
      setCheck(false);
    });
  });
  const ref = useRef();

  return (
    <div ref={ref} className="ui container">
      <h1 style={{ textAlign: "center" }}>Dropdown</h1>
      <div
        onClick={() => setCheck(!check)}
        className={`ui fluid selection dropdown ${
          check ? "active visible" : ""
        }`}
      >
        <input type="hidden" name="user" />
        <i className="dropdown icon"></i>
        <div className="default text">{selection.label}</div>
        <div className={`menu ${check ? "transition visible" : ""}`}>
          {renderData()}
        </div>
      </div>
      <h1 style={{ color: `${selection.value}` }}>HELLO WORLD</h1>
    </div>
  );
};

export default Dropdown;
