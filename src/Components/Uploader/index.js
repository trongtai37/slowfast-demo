import { InboxOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Dragger from "antd/lib/upload/Dragger";
import React from "react";

const ALLOWED_FILE_EXTENSIONS = [".mp4", ".avi", ".mpg", ".m4v"];

const Uploader = (props) => {
  const { loading, handleUpload } = props;
  const [inputFile, setInputFile] = React.useState([]);

  return (
    <>
      <Dragger
        multiple={false}
        onRemove={() => setInputFile([])}
        beforeUpload={(file) => {
          const isValidFile = ALLOWED_FILE_EXTENSIONS.some((ext) =>
            String(file.name).endsWith(ext)
          );
          if (isValidFile) {
            setInputFile([file]);
          }
          return false;
        }}
        fileList={inputFile}
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
      </Dragger>
      <Button
        type="primary"
        style={{ marginTop: 16 }}
        onClick={() =>
          handleUpload({
            inputFile: inputFile[0],
          })
        }
      >
        {loading ? "Processing" : "Start Upload"}
      </Button>
    </>
  );
};

export default Uploader;
