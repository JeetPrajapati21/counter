import { useEffect, useState } from "react";
import { UpdateValue } from "../../api/Api";
import { FetchValue } from "../../api/Api";
import { Value } from "../value/Value";
import './counter.css';

function Counter() {
  let [load, setLoad] = useState(false);
  const [val, setVal] = useState(1);
  const [maxVal, setMax] = useState(1000);

  useEffect(() => {
    FetchValue().then((res) => {
      if (res === null) {
        setVal(1);
        setMax(1000);
      } else {
        let n = Number(res);
        setVal(n);
        setMax(n);
      }
    });
  }, []);

  function handleChange(e) {
    setLoad(true);
    let newVal = Number(e.target.value);
    setVal(newVal);
    UpdateValue({ jeet: newVal }).then(() => {
      setLoad(false);
      setMax(newVal);
    });
  }

  return (
    <div className="container">
      {load && (
        <>
          <div className="loader"></div>
          <div className="load">Saving counter value</div>
        </>
      )}

      <div className="counter">
        <input
          type="text"
          className="value-input"
          value={val}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <button
        className="decrease"
        onClick={() => {
          setVal(val - 1);
        }}
      >
        {" "}
        -{" "}
      </button>
      <button
        className="increase"
        onClick={() => {
          val < maxVal && setVal(val + 1)
        }}
      >
        {" "}
        +{" "}
      </button>
      <Value maxVal={maxVal} />
    </div>
  );
}

export default Counter;
