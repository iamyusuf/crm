import React from "react";
import { Row, Col, Input, Form, Select } from "antd";

export default function LeadCreate() {
  const [form] = Form.useForm();
  const { Option } = Select;
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  return (
    <div>
      <Form
        onFinish={onFinish}
        form={form}
        layout="vertical"
        initialValues={{}}
      >
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
    </div>
  );
}
