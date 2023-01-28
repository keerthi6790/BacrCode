import React, { useEffect, useRef, useState } from "react";
import QRCode from "react-qr-code";
import NavBar from "./Components/NavBar";
import ProductDetails from "./Components/ProductDetails";
import UUID from "./Components/UUID";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Download from "./Components/Download";

function App() {
  const [state, setState] = useState(false);
  const [uuid, setUuid] = useState();
  const [show, setShow] = useState(false);
  const url = window.location.href;
  const [urlMethod, setUrlMethod] = useState("private");

  return (
    <div>
      <NavBar />
      <div className="formContainer flex col items-center">
        <UUID id={uuid} setState={setState} setid={setUuid} />
        {state && (
          <>
            <ProductDetails uuid={uuid} setShow={setShow} />{" "}
          </>
        )}
        {show && (
          <>
            <Download
              value={`${url}${urlMethod}/${uuid}`}
              setUrlMethod={setUrlMethod}
              urlMethod={urlMethod}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
