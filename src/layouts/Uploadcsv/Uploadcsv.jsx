import React from "react";

import { StarOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import { Text } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
export const Uploadcsv = () => {
  const navigate = useNavigate();
  const props = {
    action: "http://127.0.0.1:5000/api/file",

    onChange({ file, fileList }) {
      if (file.status === "done") {
        console.log(file, fileList);
        navigate("/dataQuality");
      } else {

      }
    },


  };
  return (
    <div className="upload_csv_parent bg">
      <div className="dataquality_head">
        <Text
          h1
          size={60}
          className="home__main_cont_hed csv_uploadpage"
          css={{
            color: "black"
          }}

          weight="bold"
        >
          Data Quality Reporter
        </Text>
      </div>
      <div className="data_quality_desc">
          <Text h3>Drag and Drop the CSV to perfome EDA</Text>
      </div>
      
      <div className="csv_upload_head">

        <div className="ant_csv_cont">

          <Upload.Dragger {...props} progress={{
            strokeWidth: 3,
            strokeColor: {
              "0%": "blue",
              "100%": "black"
            }
          }}
            listType="picture">
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload.Dragger>
        </div>
      </div>
    </div>
  );
};
