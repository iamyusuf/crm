import React from "react";
import { Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";

export default function AddNewButton({ path, text }) {
  return (
    <Link className="ant-btn ant-btn-primary" to={path}>
      <PlusOutlined style={{ fontSize: 16 }} /> {text}
    </Link>
  );
}
