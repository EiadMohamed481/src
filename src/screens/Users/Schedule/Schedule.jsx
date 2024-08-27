import React, { useState, useEffect } from "react";

import Arrow2Image from "./Arrow_2.png";
import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";

import Ellipse1Image from "./Dashboard_Ellipse_1.svg";
import axios from "axios";
import { DatePicker } from '@mui/x-date-pickers';
import { DataGrid } from '@mui/x-data-grid';
import { DateTimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import ReactHowler from 'react-howler'

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';
dayjs.extend(utc);
dayjs.extend(timezone);

import { styled } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const TableContainer = styled("div")({
  marginTop: `50px`,
  alignItems: `center`
});
const Button = styled("div")({
  width: `183px`,
  height: `61px`,
  position: `absolute`,
  left: `130px`,
  top: `300px`,
  outline: `none`,
  fontSize: `80px`,
  backgroundColor: `transparent`,

})
const Pop = styled("div") ({
    backgroundColor: `rgba(40,40,40,1)`,
    borderRadius: `25px`,
    width: `959px`,
    height: `700px`,
    position: `absolute`,
    left: `409px`,
    top: `153px`,
    zIndex: `9999`,
  
})
const DirectLeadOption = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `230px`,
  top: `50px`,
});

const FreshLeadOption = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `230px`,
  top: `80px`,
});
const Rectangle11 = styled("div")({
  backgroundColor: `rgba(0, 60, 116, 1)`,
  borderRadius: `30px`,
  width: `183px`,
  height: `61px`,
  position: `absolute`,
  left: `700px`,
  top: `600px`,
});
const Submit2 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(217, 217, 217, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `36px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `113px`,
  height: `43px`,
  position: `absolute`,
  left: `720px`,
  top: `610px`,
});

const Schedule = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `30px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `1440px`,
  height: `1024px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`
});

const Sidebar = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `362px`,
  height: `997px`,
  left: `0px`,
  top: `0px`
});

const Rectangle1 = styled("div")({
  backgroundColor: `rgba(0, 60, 116, 1)`,
  borderRadius: `30px`,
  width: `362px`,
  height: `997px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`
});

const Customers = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `256px`,
  height: `799.35px`,
  left: `53px`,
  top: `85px`
});

const Control = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `256px`,
  height: `799.35px`,
  left: `53px`,
  top: `200px`
});




const Arrow2 = styled("img")({
  height: `auto`,
  width: `auto`,
  position: `absolute`,
  left: `230px`,
  top: `18px`
});





const DirectLeadMenu = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `256px`,
  height: `366.09px`,
  left: `0px`,
  top: `80px`
});
const FreshLeadMenu = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `256px`,
  height: `366.09px`,
  left: `0px`,
  top: `50px`
});
const ControlCustomersMenu = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `256px`,
  height: `366.09px`,
  left: `0px`,
  top: `70px`
});

const Arrow3 = styled("img")({
  height: `auto`,
  width: `auto`,
  position: `absolute`,
  left: `231px`,
  top: `18px`
});

const DirectLead = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(108, 170, 226, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `256px`,
  height: `18.5px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`
});
const FreshLead = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(108, 170, 226, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `256px`,
  height: `18.5px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`
});


const ControlCustomers = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(108, 170, 226, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `256px`,
  height: `18.5px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`
});


const CustomersMenu = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `256px`,
  height: `21.42px`,
  left: `0px`,
  top: `0px`
});

const ControlMenu = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `256px`,
  height: `21.42px`,
  left: `0px`,
  top: `0px`
});

const Customers1 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(108, 170, 226, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `36px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `256px`,
  height: `18.5px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`
});

const Control1 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(108, 170, 226, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `36px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `256px`,
  height: `18.5px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`
});

const Arrow4 = styled("img")({
  height: `auto`,
  width: `auto`,
  position: `absolute`,
  left: `253px`,
  top: `21px`,
});

const Dashboard2 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(217, 217, 217, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `256px`,
  height: `18.5px`,
  position: `absolute`,
  left: `50px`,
  top: `40px`
});

const ProfileMenu = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `251px`,
  height: `58px`,
  left: `1133px`,
  top: `27px`
});

const Ellipse1 = styled("img")({
  height: `58px`,
  width: `58px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`
});

const ProfileName = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `161px`,
  position: `absolute`,
  left: `74px`,
  top: `16px`
});

const Arrow1 = styled("img")({
  height: `0px`,
  width: `3px`,
  position: `absolute`,
  left: `253px`,
  top: `31px`
});
const ProfileStatus = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `161px`,
  position: `absolute`,
  left: `-100px`,
  top: `16px`
});

const Rectangle2 = styled("div")({
  backgroundColor: `rgba(217, 217, 217, 1)`,
  borderRadius: `25px`,
  width: `959px`,
  height: `350px`,
  position: `absolute`,
  left: `409px`,
  top: `380px`,
});
const Type = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `590px`,
  top: `400px`,
});
const Rectangle3 = styled("img")({
  backgroundColor: `rgba(108, 170, 226, 1)`,
  borderRadius: `40px`,
  width: `225px`,
  height: `54px`,
  position: `absolute`,
  left: `525px`,
  top: `445px`,
});




const Time = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `900px`,
  top: `500px`,
});


const Customer_id = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `600px`,
  top: `600px`,
});
const Rectangle6 = styled("img")({
  backgroundColor: `rgba(108, 170, 226, 1)`,
  borderRadius: `40px`,
  width: `225px`,
  height: `54px`,
  position: `absolute`,
  left: `525px`,
  top: `640px`,
});
const Rectangle7 = styled("div")({
  backgroundColor: `rgba(0, 60, 116, 1)`,
  borderRadius: `30px`,
  width: `183px`,
  height: `61px`,
  position: `absolute`,
  left: `1100px`,
  top: `400px`,
});

const Submit = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(217, 217, 217, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `36px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `113px`,
  height: `43px`,
  position: `absolute`,
  left: `1130px`,
  top: `400px`,
});



const UserSchedule = () => {
    const [isCustomersMenuOpen, setCustomersMenuOpen] = useState(false);
    const [isControlMenuOpen, setControlMenuOpen] = useState(false);
    const [isDirectLeadMenuOpen, setDirectLeadMenuOpen] = useState(false);
    const [isFreshLeadMenuOpen, setFreshLeadMenuOpen] = useState(false);
    const [tableData, setTableData] = useState([]);
    const [username, setUsername] = useState(null);
    const [status, setStatus] = useState(null);
    const [id , setId] = useState(null);
    const [selectedDateTime, setSelectedDateTime] = useState(null);
    const [isRemind, setRemind] = useState(false);
    const [pop, setpop] = useState(false);
    const [selectedRadioButton, setSelectedRadioButton] = useState(null);
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=UTF-8';
  const fileExtension = '.xlsx';
    
    function checkReminder() {
      const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1
    const day = new Date().getDate()
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    const currentdate = year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;
      const formData = new FormData();
    formData.append('action_type', "check_reminders");
    formData.append('username', username);
      fetch('http://192.168.1.11/api.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    })
    .then(response => {
      
      if (response.ok) {
        // Check if the response status is in the 200 range (e.g., 200 OK)
        return response.json();
      } 
    })
    .then(data => {
      
      if (data.date == currentdate) {
        setRemind(true)
        
      }
    
      
    })
    }
    setInterval(checkReminder, 100000)
    const isStartDateValid = (Date) => Date !== null;
  const isEndDateValid = (Date) => Date !== null;
  const handleStartDateChange = (Date) => {
    setSelectedStartDate(Date);
  };
  const handleEndDateChange = (Date) => {
    setSelectedEndDate(Date);
  };
  const handleSubmit2 = (event) => {
    event.preventDefault();
    if (isStartDateValid(selectedStartDate) & isEndDateValid(selectedEndDate)) {
      // Perform your action
      const customerTypeValue = document.getElementById(selectedRadioButton).value;
      const startDateValue = selectedStartDate.toISOString();
      const endDateValue = selectedEndDate.toISOString();
      const formData = new FormData();
      formData.append("action_type", "create_report");
      formData.append("customers_type", customerTypeValue);
      formData.append("start_date", startDateValue);
      formData.append("end_date", endDateValue);
      formData.append("username", username);
      console.log(JSON.stringify(Object.fromEntries(formData)));
      fetch('http://192.168.1.11/api.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(Object.fromEntries(formData)),
})
.then(response => {
  if (response.ok) {
    // Check if the response status is in the 200 range (e.g., 200 OK)
    return response.json();
  } 
})
.then(data => {
  console.log(data);
  report(data)
  

  
})
     } else {
      alert('Please select a valid Date.');
    }


  };
  const report =  async (excelData) => {
    alert("report Started");
    
    const ws = XLSX.utils.json_to_sheet(excelData);
    
     const wb = { Sheets: { 'data': ws}, SheetNames: ['data'] };
     console.log(wb);
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs (data, "Report" + fileExtension);
  }
  
    function getId() {
      const formData = new FormData();
    formData.append('action_type', "get_id");
  
  // Now you can use this formData to send the request
  fetch('http://192.168.1.11/api.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } 
  })
  .then(data => {
      console.log(data.id);
     setId(data.id)
     alert("The customer ID is: "+ data.id)
    })
    }
    
  const isDateTimeValid = (DateTime) => DateTime !== null;

  // Step 3: Set error based on validation result
  const hasError2 = !isDateTimeValid(selectedDateTime);


  const handleDateTimeChange = (DateTime) => {
    setSelectedDateTime(DateTime);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isDateTimeValid(selectedDateTime)) {
      // Perform your action
      const typeValue = document.getElementById('Type').value;
      const idValue = document.getElementById('Customer_id').value;
      const dateTimeValue = selectedDateTime.toISOString();
      const formData = new FormData();
      formData.append("type", typeValue);
      formData.append("customer_id", idValue);
      formData.append("datetime", dateTimeValue);
      formData.append("username", username);
      console.log(JSON.stringify(Object.fromEntries(formData)));
      fetch('http://192.168.1.11/api.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(Object.fromEntries(formData)),
})
.then(response => {
  if (response.ok) {
    // Check if the response status is in the 200 range (e.g., 200 OK)
    return response.json();
  } 
})
.then(data => {
  // Handle the JSON data received from the server
  // You can access the data using the "data" variable
  if (data.nstatus == "success") {
    alert("schedule has created");
    set_schedules(username);
  }
  else {
    alert("schedule hasn't created");
  }

  
})
     } else {
      alert('Please select a valid Date & Time.');
    }


  };
    const columns = [
      { field: 'type', headerName: 'Schedule Type', width: 200 },
      { field: 'datetime', headerName: 'Date & Time', width: 250 },
      { field: 'customer_name', headerName: 'Customer Name', width: 200 },
    ];

  
    useEffect(() => {
      
      console.log("ok");
      const formData = new FormData();
      formData.append('action_type', "get_username");
    
    // Now you can use this formData to send the request
    fetch('http://192.168.1.11/api.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    })
    .then(response => {
      if (response.ok) {
        // Check if the response status is in the 200 range (e.g., 200 OK)
        return response.json();
      } 
    })
    .then(data => {
      // Handle the JSON data received from the server
      // You can access the data using the "data" variable
      setUsername(data.username);
      setStatus(data.status);
      set_schedules(data.username);
      getId()
      checkReminder()
      
  
      
    })
    
    
    }, []);

    function set_schedules(username) {
      console.log("ok");
      const formData = new FormData();
      formData.append('action_type', "get_schedules");
      formData.append('username', username);
    
    // Now you can use this formData to send the request
    fetch('http://192.168.1.11/api.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    })
    .then(response => {
      
      if (response.ok) {
        // Check if the response status is in the 200 range (e.g., 200 OK)
        return response.json();
      } 
    })
    .then(data => {
      console.log(data);
      setTableData(data);
    
      
    })
    
    }
  
    
  
    const controlPage = () => {
      const formData = new FormData();
    formData.append('action_type', "send_username");
    formData.append('username', username);
    
    // Now you can use this formData to send the request
    fetch('http://192.168.1.11/api.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    })
    };
    const arrowClicked = (clicked) => {
      
      
        if (clicked == "direct_lead") {
        setDirectLeadMenuOpen(!isDirectLeadMenuOpen);
        document.getElementById("arrow_3").style.transition = "ease";
        document.getElementById("arrow_3").style.transitionDuration = "0.5s";
        document.getElementById("BUTTON").style.transition = "ease";
        document.getElementById("BUTTON").style.transitionDuration = "0.5s";
        if (isDirectLeadMenuOpen == true) {
        document.getElementById("arrow_3").style.transform = "rotate(360deg)";}
        else {
          document.getElementById("arrow_3").style.transform = "rotate(-180deg)";
        }
        
      }
      else if (clicked == "fresh_lead") {
        setFreshLeadMenuOpen(!isFreshLeadMenuOpen);
        document.getElementById("arrow_6").style.transition = "ease";
        document.getElementById("arrow_6").style.transitionDuration = "0.5s";
        if (isFreshLeadMenuOpen == true) {
        document.getElementById("arrow_6").style.transform = "rotate(360deg)";}
        else {
          document.getElementById("arrow_6").style.transform = "rotate(-180deg)";
        }
        
      }
      else if (clicked == "customers"){
        console.log("ok")
        setCustomersMenuOpen(!isCustomersMenuOpen);
        document.getElementById("arrow_4").style.transition = "ease";
        document.getElementById("arrow_4").style.transitionDuration = "0.5s";
        if (isCustomersMenuOpen == true) {
          console.log("2ok")
        document.getElementById("arrow_4").style.transform = "rotate(360deg)";
      }
        else {
          document.getElementById("arrow_4").style.transform = "rotate(-180deg)";
        }
        
      }
      else if (clicked == "control"){
        console.log("ok")
        setControlMenuOpen(!isControlMenuOpen);
        document.getElementById("arrow_5").style.transition = "ease";
        document.getElementById("arrow_5").style.transitionDuration = "0.5s";
        if (isControlMenuOpen == true) {
          console.log("2ok")
        document.getElementById("arrow_5").style.transform = "rotate(360deg)";
      }
        else {
          document.getElementById("arrow_5").style.transform = "rotate(-180deg)";
        }
        
      }
    
    }
    
  
      return (
        <Schedule>
          {isRemind && (
            <ReactHowler
            src='http://192.168.1.11:3000/reminder.mp3'
            playing={true}
            onPlay={() => alert("A reminder is comming")}
            onEnd={() => setRemind(false)}
          />
          )}
          <Sidebar>
            <Rectangle1></Rectangle1>
            <Customers>
            
                <Customers1
                onClick={() => arrowClicked("customers")}>
                  {`Customers`}
                  </Customers1>
            <Arrow4
                    id="arrow_4"
                    src={Arrow2Image}
                    loading="lazy"
                    alt={"Arrow 4"} />
            
                
             
            {isCustomersMenuOpen && ( 
                <CustomersMenu>
              <FreshLeadMenu>
                    
                    
                    <Link to="/users/fresh-lead/">
                      <FreshLead onClick={() => controlPage()}>{`Fresh Lead`}</FreshLead></Link>
  
                  </FreshLeadMenu>
                  <DirectLeadMenu>
                    
                    
                    <Link to="/users/direct-lead/">
                      <DirectLead onClick={() => controlPage()}>{`Direct Lead`}</DirectLead></Link>
  
                  </DirectLeadMenu>
              
                  </CustomersMenu>
               )}
                
            </Customers>
            <Control>
            
                <Control1
                onClick={() => arrowClicked("control")}>
                  {`Control`}
                  </Control1>
            <Arrow4
                    id="arrow_5"
                    src={Arrow2Image}
                    loading="lazy"
                    alt={"Arrow 5"} />
            
                
             
            {isControlMenuOpen && ( 
                <ControlMenu>
                    <ControlCustomersMenu>
                    
                    
                    <Link to="/users/control-customers">
                      <ControlCustomers onClick={() => controlPage()}>{`Control Customers`}</ControlCustomers></Link>
  
                  </ControlCustomersMenu>
  
                </ControlMenu>
                
                
                )}</Control>
            <Dashboard2>{`Dashboard`}</Dashboard2>
          </Sidebar>
          <Button id="BUTTON"><button className="button" onClick={() => setpop(!pop)} style={{
          borderColor: `rgba(0, 0, 0, 1)`,
          fontSize: `30px`,
          backgroundColor: `rgba(0, 60, 116, 1)`,
          color: `rgba(108, 170, 226, 1)`,
        }}> Report </button></Button>
        {pop && (
          <Pop>
            <form method="POST" onSubmit={handleSubmit2}>
            <input type="radio" id="direct_lead" name="Customers_type" value={"direct_lead"} onClick={() => setSelectedRadioButton('direct_lead')} style={{
        left: `200px`,
        top: `50px`,
        width: `auto`,
        height: `auto`,
        position: `absolute`,}}>
      </input>
      <DirectLeadOption>{`Direct_Lead_Customers`}</DirectLeadOption>
      <input type="radio" id="fresh_lead" name="Customers_type" value={"fresh_lead"} onClick={() => setSelectedRadioButton('fresh_lead')} style={{
        left: `200px`,
        top: `80px`,
        width: `auto`,
        height: `auto`,
        position: `absolute`,}}>
      </input>
      <FreshLeadOption>{`Fresh_Lead_Customers`}</FreshLeadOption>
      <LocalizationProvider dateAdapter={AdapterDayjs} >
          <DemoContainer components={['DatePicker']}></DemoContainer>
          <div style={{ height: 'auto', width: 'auto', position: 'absolute', alignItems: 29, top: 200, left: 180, backgroundColor: 'white', borderRadius: 25}}>
          <DatePicker label="Start Date "
          value={selectedStartDate}
          timezone="UTC"
          onChange={handleStartDateChange}
          renderInput={(params) => (
            <TextField {...params} error={hasError} helperText={hasError ? 'Start Date is required' : ''} />
          )} /></div>
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs} >
          <DemoContainer components={['DatePicker']}></DemoContainer>
          <div style={{ height: 'auto', width: 'auto', position: 'absolute', alignItems: 29, top: 200, left: 500, backgroundColor: 'white', borderRadius: 25}}>
          <DatePicker label="End Date "
          value={selectedEndDate}
          timezone="UTC"
          onChange={handleEndDateChange}
          renderInput={(params) => (
            <TextField {...params} error={hasError} helperText={hasError ? 'Start Date is required' : ''} />
          )} /></div>
          </LocalizationProvider>
          <Rectangle11>
            <button
              type="submit"
              style={{
                border: `none`,
                outline: `none`,
                background: `transparent`,
                width: `180px`,
                height: `70px`,
              }}
            ></button>
          </Rectangle11>
          <Submit>{`Submit`}</Submit>
          </form>
          </Pop>
        )}
          <ProfileMenu>
            
          <Ellipse1 src={Ellipse1Image} loading='lazy' alt={"Ellipse 1"}/>
          <ProfileName>
            {username}
          </ProfileName>
          <ProfileStatus>
            {status}
          </ProfileStatus>
          </ProfileMenu>
          <form method="POST" onSubmit={handleSubmit}> 
        <Rectangle2>
        </Rectangle2>
          <input
            id="Type"
            name="type"
            type="text"
            placeholder="Type"
            required
            autoFocus
            style={{
              background: `transparent`,
              zIndex: `2`,
              marginTop: `-25px`,
              marginLeft: `25px`,
              border: `none`,
              outline: `none`,
              height: `110px`,
              width: `200px`,
              fontStyle: `normal`,
              fontFamily: `Inter`,
              fontWeight: `700`,
              fontSize: `30px`,
              textAlign: `center`,
              color: `rgba(0, 60, 100, 1)`,
              position: `absolute`,
              left: `500px`,
              top: `440px`,
            }}
          />
          <Type>{`Type`}</Type>
          <Rectangle3></Rectangle3>
          <LocalizationProvider dateAdapter={AdapterDayjs} >
          <DemoContainer components={['DateTimePicker']}></DemoContainer>
          <div style={{ height: 'auto', width: 'auto', position: 'absolute', alignItems: 29, top: 550, left: 840, backgroundColor: 'white', borderRadius: 25}}>
          <DateTimePicker label="Date & Time"
          value={selectedDateTime}
          timezone="UTC"
          onChange={handleDateTimeChange}
          renderInput={(params) => (
            <TextField {...params} error={hasError} helperText={hasError ? 'Date & Time is required' : ''} />
          )} /></div>
          </LocalizationProvider>
          <Time>{`Date & Time`}</Time>
          <input
            id="Customer_id"
            name="custoemr_id"
            type="number"
            placeholder="ID"
            required
            autoFocus
            style={{
              background: `transparent`,
              zIndex: `2`,
              marginTop: `-25px`,
              marginLeft: `25px`,
              border: `none`,
              outline: `none`,
              height: `110px`,
              width: `200px`,
              fontStyle: `normal`,
              fontFamily: `Inter`,
              fontWeight: `700`,
              fontSize: `30px`,
              textAlign: `center`,
              color: `rgba(0, 60, 100, 1)`,
              position: `absolute`,
              left: `500px`,
              top: `640px`,
            }}
          />
          <Customer_id>{`ID`}</Customer_id>
          <Rectangle6></Rectangle6>
          <Rectangle7></Rectangle7>
          <button
              type="submit"
              style={{
                border: `none`,
                outline: `none`,
                background: `transparent`,
                width: `180px`,
                height: `70px`,
              }}
            ></button>
            <Submit>{`Submit`}</Submit>
            </form>
          <TableContainer>
          <div style={{ height: '25vh', width: 'auto', position: 'absolute', alignItems: 29, top: 100, left: 400, backgroundColor: 'white', borderRadius: 25}}>
      <DataGrid
          rows={tableData}
          columns={columns}
        />
      </div></TableContainer>
          </Schedule>
          );
  };
  
  export {  UserSchedule };
