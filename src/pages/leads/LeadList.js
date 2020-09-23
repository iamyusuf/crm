import React from "react";
import { Row, Col } from "antd";
import AddNewButton from "../../components/atomic/AddNewButton";

export default function LeadList() {
  return (
    <>
      <Row>
        <Col span={6}>
          <AddNewButton path="/leads/create" text="New Lead" />
        </Col>
      </Row>
    </>
  );
}
