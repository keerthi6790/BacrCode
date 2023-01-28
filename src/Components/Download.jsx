import { Button, Input, Select, Switch } from "antd";
import React, { useEffect, useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import BarCode from "./BarCode";
function Download({ value, setUrlMethod, urlMethod }) {
  const [state, setState] = useState();
  const [dimension, setDimension] = useState({ height: "24", width: "24" });
  useEffect(() => {
    state ? setUrlMethod("public") : setUrlMethod("private");
  }, [state]);
  const ref = useRef();
  return (
    <>
      <BarCode value={value} ref={ref} />
      <div style={{ marginTop: "30px" }}>
        <div className="flex items-center gap">
          <div style={{ marginTop: " 30px" }}>
            <Switch
              defaultChecked
              onChange={() => setState(!state)}
              style={{ marginRight: "10px" }}
            />
            {urlMethod}
          </div>
          <div className="flex gap" style={{ alignItems: "baseline" }}>
            <Input
              placeholder="w"
              style={{ width: "100px" }}
              value={dimension.width}
              onChange={(e) => {
                setDimension({ ...dimension, width: e.target.value });
              }}
            />{" "}
            x
            <Input
              placeholder="h"
              style={{ width: "100px" }}
              value={dimension.height}
              onChange={(e) => {
                setDimension({ ...dimension, height: e.target.value });
              }}
            />
          </div>
        </div>
        <ReactToPrint
          trigger={() => (
            <Button
              onClick={() => window.print()}
              style={{ width: "100%", marginTop: "5%" }}
              type="primary"
            >
              Print
            </Button>
          )}
          content={() => ref.current}
        ></ReactToPrint>
      </div>
    </>
  );
}

export default Download;
