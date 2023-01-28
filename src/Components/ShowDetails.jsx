import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { getDoc, doc } from "firebase/firestore";
import { Table } from "antd";
import { toast } from "react-toastify";

function ShowDetails() {
  const { id } = useParams();
  const [data, setData] = useState({
    country: "",
    state: "",
    status: "",
    uuid: "",
  });

  useEffect(() => {
    (async () => {
      const docRef = doc(db, "barcodeDetails", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        toast.warning("No such document!");
      }
    })();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);
  const columns = [
    {
      title: "country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "state",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "uuid",
      dataIndex: "uuid",
      key: "uuid",
    },
  ];

  const details = [
    {
      country: data.country,
      state: data.state,
      status: data.status,
      uuid: data.uuid,
    },
  ];

  return <Table dataSource={details} columns={columns} pagination={false} />;
}

export default ShowDetails;
