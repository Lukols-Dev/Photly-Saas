import "./galleries.page.css";

import { FC, ChangeEvent } from "react";
import {
  DatabaseOutlined,
  LockOutlined,
  PictureOutlined,
  UnlockOutlined,
} from "@ant-design/icons";
import type { Dayjs } from "dayjs";
import { useState } from "react";
import { Button, DatePicker, Input, Modal, Result, Spin, Switch } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { Gallery } from "../../types/gallery.types";

export const AuthGalleriesPage: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [values, setValues] = useState<Gallery>({
    name: "",
    description: "",
    password: "",
    date: "",
  });
  const [isPrivate, setPrivate] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<"success" | "error" | "" | undefined>(
    ""
  );

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (!name) return;
    setValues({ ...values, [name]: value });
  };

  const onChangeDate = (date: Dayjs) => {
    if (!date) return;
    setValues({ ...values, date: date });
  };

  const onChangeSwitch = (checked: boolean) => {
    setPrivate(checked);
  };

  const showModal = () => {
    setIsModalOpen(true);
    setLoading(false);
  };

  const handleOk = async () => {
    setTimeout(() => setLoading(true), 0);
    try {
    } catch (err) {
      setLoading(false);
      setStatus("error");
    } finally {
      setLoading(false);
      setStatus("success");
      setTimeout(() => setIsModalOpen(false), 5000);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setLoading(false);
    setStatus("");
  };

  const gallery = true;

  return (
    <>
      <div className="authGalleriesPage">
        <div className="authGalleriesPage__header">
          <PictureOutlined className="icon" />
          <h1>Your Galleries</h1>
        </div>
        <div className="authGalleriesPage__container">
          <div className="authGalleriesPage__container__navigation">
            <Button type="primary" onClick={showModal}>
              Add gallery
            </Button>
          </div>
          {!gallery ? (
            <div></div>
          ) : (
            <div className="authGalleriesPage__emptyGallery">
              <h3>Your gallery is empty</h3>
              <DatabaseOutlined className="icon" />
            </div>
          )}
        </div>
      </div>
      <Modal
        title={!status ? "Create Galerry" : ""}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={600}
        okButtonProps={{ disabled: loading }}
      >
        <Spin size="large" spinning={loading}>
          {status && loading ? (
            <Result
              status={status}
              title={
                status === "error" ? "Error" : "Gallery created successfully"
              }
            />
          ) : (
            <div className="modal__content">
              <div className="modal__content__input">
                <label>Name</label>
                <Input
                  name="name"
                  placeholder="Name"
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="modal__content__input">
                <label>Date</label>
                <DatePicker onChange={() => onChangeDate} />
              </div>
              <div className="modal__content__input">
                <label>Description</label>
                <TextArea
                  name="description"
                  autoSize={{ minRows: 3, maxRows: 3 }}
                  placeholder="Description"
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="modal__content__row">
                <Switch
                  checked={isPrivate}
                  checkedChildren={<LockOutlined />}
                  unCheckedChildren={<UnlockOutlined />}
                  onChange={onChangeSwitch}
                />
                <p>Set password</p>
              </div>
              {isPrivate ? (
                <div className="modal__content__input">
                  <label>Password</label>
                  <Input.Password
                    name="password"
                    placeholder="Password"
                    onChange={(e) => onChange(e)}
                  />
                </div>
              ) : (
                <></>
              )}
            </div>
          )}
        </Spin>
      </Modal>
    </>
  );
};
