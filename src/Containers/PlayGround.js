import React from "react";
import "antd/dist/antd.css";
import Uploader from "../Components/Uploader";
import { Col, Row, Button } from "antd";
import { ArrowRightOutlined, DownloadOutlined } from "@ant-design/icons";
import { uploadVideo, getNgrokEndpoint } from "../Services/upload";

const PlayGround = () => {
  const [loading, setLoading] = React.useState(false);
  const [output, setOutput] = React.useState("");

  const handleUpload = async (data) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", data.inputFile);
      const path = await uploadVideo(formData);
      setOutput(path);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <Row justify="space-around" align="middle">
      <Col span={11}>
        <Uploader handleUpload={handleUpload} loading={loading} />
      </Col>
      <Col span={2} className="playground__arrow">
        <ArrowRightOutlined className="arrow" />
      </Col>
      <Col span={11} className="playground__output-container">
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          size="large"
          href={`${getNgrokEndpoint()}/api/download?path=${output}`}
          loading={loading}
        >
          Download output video
        </Button>
      </Col>
    </Row>
  );
};

export default PlayGround;
