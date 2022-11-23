import React, { useEffect, PureComponent } from "react";
import { Sidenav } from "../../sidenav/Sidenav";
// import Temperature from "../../FeaturesComponents/Modelbuilder/temperature"
import { useState } from "react";
import mbAnalytics from "../../../assests/squares.png";
import mbAnalytics1 from "../../../assests/squares1.png";
import heartrate from "../../../assests/heart_rate.gif"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faClock,
  faPageLines,
  faDollar,
  faFlag,
  faPersonHalfDress,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import ModalImage from "react-modal-image";


export const Mbresul = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("http://127.0.0.1:5000/api/mbresult");
    console.log(data);
    const items = await data.json();
    console.log(items);
    setItems(items);
  };
  let result_arr = items.slice(-1);
  console.log(result_arr);
  // let image = `data:image/png;base64,${result_arr.binary_field.imgdata.$binary}`;
  // console.log(image)
  // const base64fun = () =>{
  //   const base64Data = result_arr.map((imgdata) => imgdata.binary_field.imagedata.$binary.base64 );
  //   console.log(base64Data)
  //   return base64Data
  // }
  // const base64fun = result_arr.map((imgdata) => {
  //   return imgdata.binary_field.imagedata.$binary.base64;
  // });

  return (
    <div className="modelbuilder__parent">
      <Sidenav />
      <div className="MB_form__cont ">
        <div className="MB_form_cont__child">
          <div className="mb_result_heading">
            <h1 className="mb_heading">Predicted <span className="MB_Journey1">Result</span></h1>
          </div>

          <div className="flasktry overlapresult">
            {result_arr.map((item) => (
              <>
                <div >
                  <div className="result_container ">
                    <div className="result_header">
                      <ul>
                        <li>
                          <p className="result_dec-1_size">
                            <FontAwesomeIcon icon={faPersonHalfDress} /> Gender: {item.gender}
                          </p>
                        </li>
                        <li>
                          <p className="result_dec-1_size">
                            {" "}
                            <FontAwesomeIcon icon={faPageLines} />
                            Age: {item.age}
                          </p>
                        </li>
                        <li>
                          <p className="result_dec-1_size">
                            <FontAwesomeIcon icon={faClock} />
                            Height: {item.height}
                          </p>
                        </li>
                        <li>
                          <p className="result_dec-1_size">
                            <FontAwesomeIcon icon={faClock} />
                            Weight: {item.weight}
                          </p>
                        </li>
                        <li>
                          <p className="result_dec-1_size">
                            <FontAwesomeIcon icon={faClock} />
                            Duration: {item.duration}
                          </p>
                        </li>
                        <li>
                          <p className="result_dec-1_size">
                            <FontAwesomeIcon icon={faClock} />
                            Body Temperature: {item.bodytemp}
                          </p>
                        </li>
                        <li>
                          <p className="result_dec-1_size">
                            <FontAwesomeIcon icon={faClock} />
                            Heart rate: {item.heartrate}
                          </p>
                        </li>
                      </ul>








                      {/* <img src={`data:image/png;base64,${base64fun()}`} alt='vddsvsd' ></img> */}
                    </div>
                    <div className="result_cont">
                      <p className="result_dec-2_size">
                        The Calorie of the person{" "}
                        {/* <FontAwesomeIcon icon={faDollar} /> */}
                        {item.result.replace(/[\[\]']+/g, "")}

                      </p>
                    </div>

                  </div>
                </div>

              </>
            ))}
          </div>
          {/* <Temperature /> */}
          {/* <div className="mb_analytics_img_cont">
            <div className="mb_country_data">
              <p>Data from Diff country</p>
              <img
                      className="mb_analyticsimg_size"
                      src={mbAnalytics}
                      alt="fdsfs"
                    /> 
        
              <ModalImage
                className="mb_analyticsimg_size"
                small={mbAnalytics1}
                large={mbAnalytics1}
                alt="Data from Diff country!"
              /> 

              

            </div>
            <div className="mb_country_data">
              <p>mean Salary </p>
              <ModalImage
                className="mb_analyticsimg_size"
                small={mbAnalytics}
                large={mbAnalytics}
                alt="Data from Diff country!"
              />

            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
