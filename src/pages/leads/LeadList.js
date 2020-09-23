import React from "react";
import { Row, Col } from "antd";
import AddNewButton from "../../components/atomic/AddNewButton";
import { Empty } from "antd";

export default function LeadList() {
  const leads = [];
  return (
    <>
      <Row>
        <Col span={6}>
          <AddNewButton path="/leads/create" text="New Lead" />
        </Col>
      </Row>
      {leads.length === 0 ? <Empty /> : null}
    </>
  );
}
