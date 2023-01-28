import { Button, Form, Input, Select } from "antd";
import React, { useState } from "react";
import { db } from "../firebase";
import { Timestamp, setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
function ProductDetails({ uuid, setShow }) {
  const onFinish = async (values) => {
    try {
      await setDoc(doc(db, "barcodeDetails", uuid), {
        ...values,
        uuid: uuid,
        timestamp: Timestamp.now(),
      });

      toast.success("Inserted Successfully");
      setShow(true);
    } catch (err) {
      console.log(err);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      style={{ marginTop: "5%", width: "98%" }}
      name="basic"
      initialValues={{
        state: "",
        country: "",
        status: "",
        timestamp: "",
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div className="flex justify-between m-width">
        <Form.Item name="state" className="w-48">
          <Input placeholder="state" />
        </Form.Item>
        <Form.Item name="country" className="w-48">
          <Input placeholder="country" />
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

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Generate BarCode
        </Button>
      </Form.Item>
    </Form>
  );
}

export default ProductDetails;
