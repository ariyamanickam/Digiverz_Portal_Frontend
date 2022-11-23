import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Table } from "antd";
import { Loading, Text } from "@nextui-org/react";
import { Sidenav } from "../../sidenav/Sidenav";
export const MBhistory = () => {
  const [state, setstate] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await Axios.get("http://127.0.0.1:5000/api/mbresult").then((res) => {
      setloading(false);

      setstate(
        res.data.map((row) => ({
          gender: row.gender,
          age: row.age,
          height: row.height,
          weight: row.weight,
          duration: row.duration,
          heartrate: row.heartrate,
          bodytemp: row.bodytemp,
          result: row.result,
        }))
      );
      console.log(res);
      console.log(state);
    });
  };

  const columns = [
    {
      title: "Gender",
      dataIndex: "gender",
      width: 150,
    
    },
    {
      title: "Age",
      dataIndex: "age",
      width: 150,
    },
    {
      title: "Height",
      dataIndex: "height",
      width: 150,
    },
    {
      title: "Weight",
      dataIndex: "weight",
      width: 150,
    },
    {
      title: "Duration",
      dataIndex: "duration",
      width: 150,
    },
    {
      title: "Heart Rate",
      dataIndex: "heartrate",
      width: 150,
    },
    {
      title: "Body Temperature",
      dataIndex: "bodytemp",
      width: 150,
    },
    {
      title: "Result",
      dataIndex: "result",
      width: 150,
    },
  ];

  return (
    <div>
      {loading ? (
        <>
          <Loading color="primary" textColor="primary">
            Loading..!
          </Loading>
        </>
      ) : (
        <div className="modelbuilder__parent">
          <Sidenav />
          <div className="MB_form__cont histable__cont">
            <div className="MB_form_cont__child">
              <Text
                h1
                size={40}
                className=" hist_head"
                css={{
                  // textGradient: "45deg, #FF4500 40%, $white 80%",
                  color: "white"
                }}
                weight="bold"
              >
                Calories prediction <span className="MB_Journey1">result</span>
              </Text>
              <div className="histtable___cont_child">
                <Table
                  className="hist_table"
                  size="small"
                  columns={columns}
                  dataSource={state}
                  /*  pagination={{ pageSize: 50 }} */
                  pagination={{
                    defaultPageSize: 10,
                    showSizeChanger: true,
                    pageSizeOptions: ["10", "20", "30"],
                  }}
                  scroll={{ y: 510 }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
