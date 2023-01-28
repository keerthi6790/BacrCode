import { Button, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function UUID({ setState, setid, id }) {
  return (
    <div className="flex gap " style={{ width: "98%" }}>
      <input
        type="text"
        name="UUID"
        className="UUID"
        value={id}
        placeholder="UUID"
      />
      <Button
        type="primary"
        onClick={() => {
          setid(uuidv4());
          setState(true);
        }}
      >
        Generate UUID
      </Button>
    </div>
  );
}

export default UUID;
