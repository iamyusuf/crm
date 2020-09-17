import React from "react";
import { Row, Col, Input, Form, Select } from "antd";

const style = { padding: "8px 0" };

function MyFormPage() {
  const [form] = Form.useForm();
  const { Option } = Select;
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  return (
    <Form onFinish={onFinish} form={form} layout="vertical" initialValues={{}}>
      <Row justify="space-around" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
          <Form.Item label="Name *" name="name">
            <Input placeholder="Leads name" />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6}>
          <Form.Item label="Company *">
            <Input placeholder="Compapny Name" />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6}>
          <Form.Item label="Phone">
            <Input placeholder="Phone Number" />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6}>
          <Form.Item label="Status">
            <Select>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

export default MyFormPage;
