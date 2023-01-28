import { Button, Form, Input, Select } from "antd";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "../firebase";

function EditDetails() {
  const { id } = useParams();
  const [data, setData] = useState();
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
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onFinish = async (data) => {
    const taskDocRef = doc(db, "barcodeDetails", id);
    try {
      await updateDoc(taskDocRef, data);

      toast.success("updated Successfully...");
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      <Form
        style={{ margin: "5% auto", width: "98%", maxWidth: "1020px" }}
        name="basic"
        initialValues={{
          state: data?.state,
          country: data?.country,
          status: data?.status,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h1 style={{ marginBottom: "10px" }}>Edit Details</h1>

        <div className="flex justify-between m-width">
          <Form.Item name="state" className="w-48">
            <Input placeholder={data?.state} />
          </Form.Item>
          <Form.Item name="country" className="w-48">
            <Input placeholder={data?.country} />
          </Form.Item>
        </div>
        <Form.Item name="status">
          <Select placeholder="Status">
            <Select.Option value="A"></Select.Option>
            <Select.Option value="B"></Select.Option>
            <Select.Option value="C"></Select.Option>
            <Select.Option value="D"></Select.Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Update Details
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default EditDetails;
