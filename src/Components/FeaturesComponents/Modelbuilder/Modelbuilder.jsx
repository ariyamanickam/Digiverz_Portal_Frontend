import React, { useState, useEffect } from "react";
import Multiselect from "multiselect-react-dropdown";
import axios from "axios";
import { Button, Text } from "@nextui-org/react";

import { Sidenav } from "../../sidenav/Sidenav";
import { Input, Select, Slider } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Item from "antd/lib/list/Item";
import phone1 from  "../../../assests/phone1.png"
// import { phone1 } from '../../../assests'



export const Modelbuilder = () => {
  const navigate = useNavigate();
  const gender_array = [
    { value: "Male", text: "Male" },
    { value: "Female", text: "Female" },

  ];
  // "Less than a Bachelors",
  // "Bachelor’s degree",
  // "Master’s degree",
  // "Post grad",
  // const qualification_array = [
  //   {value:"Less than a Bachelors", text:"Less than a Bachelors"},
  //   {value:"Bachelor’s degree", text:"Bachelor’s degree"},
  //   {value:"Master’s degree", text:"Master’s degree"},
  //   {value:"Post grad", text:"Post grad"},
  // ]
  const [gender, setgender] = useState('Male');
  const [age, setage] = useState(42);
  const [height, setheight] = useState(174.0);
  const [weight, setweight] = useState(74.0);
  const [duration, setduration] = useState(15.0);
  const [heartrate, setheartrate] = useState(95.0);
  const [bodytemp, setbodytemp] = useState(40.0);


  const handleChange = (selectedoption) => {

    setgender(selectedoption)

  };
  // const handleChangeQ = (selectedoption) => {
  //   setdegree(selectedoption)
  // };
  // const onSliderChange = (selectedoption) => {
  //   setexp(selectedoption)
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // let file = e.target.files[0];

    const res = await fetch("http://127.0.0.1:5000/api/modelBuilder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        gender,
        age,
        height,
        weight,
        duration,
        heartrate,
        bodytemp,

      }),
    });
    await res.json();
    navigate('/mbresult')
  };



  return (
    <div className="modelbuilder__parent">
        
      <Sidenav />
     
      <div className="MB_form__cont">
        <div className="MB_form_cont__child">
          {/* <div className="MB_icon_images"></div> */}
          <h1>Calorie Prediction view your daily budget</h1>
          <h3 className="subtitleMB">Enter some information to <span className="MB_Journey">Start your Pro Journey</span></h3>
          <div className="item_head1">
            <form onSubmit={handleSubmit}>


              <label className="MB__form_lable" htmlFor="select">
                Select Gender
              </label>
              <Select
                size="large"
                placeholder="Gender"
                onChange={handleChange}
                className="country_inp"
                options={gender_array}
                style={{ color: 'black'}}
              >
              </Select>
              <label className="MB__form_lable" htmlFor="select">
                Select Age
              </label>
              {/* <Select
  size="large"
  placeholder="select Qualification"
  onChange={handleChangeQ}
  className="country_inp"
  options={qualification_array}
>
</Select> */}
              <input type="text" className="input-text1" id="" placeholder="Age" name="age" onChange={(e) => setage(e.target.value)} />
              <label className="MB__form_lable" htmlFor="select">
                Select Height
              </label>
              <input type="text" className="input-text1" id="" placeholder="Height" name="height" onChange={(e) => setheight(e.target.value)} />

              <label className="MB__form_lable" htmlFor="select">
                Select weight
              </label>
              <input type="text" className="input-text1" id="" placeholder="Weight" name="Weight" onChange={(e) => setweight(e.target.value)} />
              <div className="divideMain">
                <label className="MB__form_lable" htmlFor="select">
                  Select Duration
                </label>
                <input type="text" className="input-text1" id="" placeholder="Workout Duration" name="Duration" onChange={(e) => setduration(e.target.value)} />

                <label className="MB__form_lable" htmlFor="select">
                  Select Heart rate
                </label>
                <input type="text" className="input-text1" id="" placeholder="Heart rate" name="heartrate" onChange={(e) => setheartrate(e.target.value)} />

                <label className="MB__form_lable" htmlFor="select">
                  Select Body Temperature
                </label>
                <input type="text" className="input-text1" id="" placeholder="Body Temperature" name="bodytemp" onChange={(e) => setbodytemp(e.target.value)} />

              </div>


              <Button className="MB_pred_btn" style={{ backgroundColor: '#FF4500' }} onPre type="submit"> Prediction</Button>
            </form>
          </div>


        </div>
        <img className="logo_phone" src={phone1} alt="" />
      </div>
    </div>
  );
};
