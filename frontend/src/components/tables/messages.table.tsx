import "./messages.table.css";

import { DeleteOutlined, SendOutlined } from "@ant-design/icons";
import { Space } from "antd";
import Table, { ColumnsType } from "antd/lib/table";
import { FC } from "react";
import { Messages } from "../../types/user-data.types";
import { Link } from "react-router-dom";

interface TableMessagesProps {
  data: Messages[];
}

export const TableMessages: FC<TableMessagesProps> = (props) => {
  return (
    <Table
      {...props}
      className="tableMessages"
      columns={columns}
      dataSource={props.data}
      pagination={false}
      scroll={{ y: 644 }}
    />
  );
};

const columns: ColumnsType<Messages> = [
  {
    title: "Email",
    dataIndex: "",
    render: (data) => (
      <Link to={`messages?id=${data.id_doc}`}>{data.email}</Link>
    ),
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Category",
    key: "category_photo",
    dataIndex: "category_photo",
  },
  {
    title: "Phone",
    key: "phone",
    dataIndex: "phone",
  },
  {
    title: "Date",
    key: "timestamp",
    dataIndex: "timestamp",
  },
  {
    title: "Action",
    key: "action",
    render: (data) => (
      <Space size="middle">
        <a href={`mailto: ${data.email}`} title={`Send to: ${data.email}`}>
          <SendOutlined />
        </a>
        <a>
          <DeleteOutlined />
        </a>
      </Space>
    ),
  },
];
