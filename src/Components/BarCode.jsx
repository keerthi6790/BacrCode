import React from "react";
import QRCode from "react-qr-code";

const BarCode = React.forwardRef((props, ref) => {
  return <QRCode value={props.value} ref={ref} />;
});

export default BarCode;
