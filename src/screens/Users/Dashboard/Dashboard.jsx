import React, { useState, useEffect } from "react";

import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";
import Ellipse1Image from "./Dashboard_Ellipse_1.svg";
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import Arrow1Image from "./Arrow_1.png";
import Arrow2Image from "./Arrow_1.png";
import { styled } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { DataGrid } from "@mui/x-data-grid";

const Dashboard1 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `30px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `1920px`,
  height: `1080px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`
});
const Button2 = styled("div")({
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
  left: `720px`,
  top: `610px`,
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

const Dashboard3 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `48px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `514px`,
  height: `89px`,
  position: `absolute`,
  left: `295px`,
  top: `56px`
});

const Analytics = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `918px`,
  height: `538px`,
  left: `444px`,
  top: `197px`
});

const FreshLeadNumber = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `384px`,
  height: `212px`,
  left: `0px`,
  top: `0px`
});

const Rectangle4 = styled("div")({
  backgroundColor: `rgba(217, 217, 217, 1)`,
  borderRadius: `25px`,
  width: `384px`,
  height: `204px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`
});

const FreshLeadCustomers = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 60, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `278px`,
  height: `67px`,
  position: `absolute`,
  left: `53px`,
  top: `22px`
});

const Q000 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `64px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `25px`,
  textTransform: `none`,
  width: `144px`,
  height: `110px`,
  position: `absolute`,
  left: `120px`,
  top: `102px`
});

const DealsDone = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `384px`,
  height: `212px`,
  left: `270px`,
  top: `326px`
});

const Rectangle5 = styled("div")({
  backgroundColor: `rgba(217, 217, 217, 1)`,
  borderRadius: `25px`,
  width: `384px`,
  height: `204px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`
});

const DealsDoneThisMonth = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 60, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `278px`,
  height: `67px`,
  position: `absolute`,
  left: `53px`,
  top: `30px`
});

const Q0001 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `64px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `25px`,
  textTransform: `none`,
  width: `144px`,
  height: `110px`,
  position: `absolute`,
  left: `120px`,
  top: `102px`
});

const DirectLeadNumber = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `384px`,
  height: `212px`,
  left: `534px`,
  top: `0px`
});

const Rectangle3 = styled("div")({
  backgroundColor: `rgba(217, 217, 217, 1)`,
  borderRadius: `25px`,
  width: `384px`,
  height: `204px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`
});

const DirectLeadCustomers = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 60, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `278px`,
  height: `67px`,
  position: `absolute`,
  left: `53px`,
  top: `22px`
});

const menusContainer = styled("div")({});
const Q0002 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `64px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `25px`,
  textTransform: `none`,
  width: `144px`,
  height: `110px`,
  position: `absolute`,
  left: `120px`,
  top: `102px`,
});
const UserDashboard = () => {
  const [isCustomersMenuOpen, setCustomersMenuOpen] = useState(false);
  const [isControlMenuOpen, setControlMenuOpen] = useState(false);
  const [isDirectLeadMenuOpen, setDirectLeadMenuOpen] = useState(false);
  const [isFreshLeadMenuOpen, setFreshLeadMenuOpen] = useState(false);
  const [username, setUsername] = useState(null);
  const [status, setStatus] = useState(null);
  const [freshLeadNumbers, setFreshLeadNumbers] = useState(null);
  const [directLeadNumbers, setDirectLeadNumbers] = useState(null);
  const [doneDealsNumbers, setDoneDealsNumbers] = useState(null);
  const [isRemind, setRemind] = useState(false);
  const [pop, setpop] = useState(false);
  const [tableData, setTableData] = useState([])
  const [selectedRadioButton, setSelectedRadioButton] = useState(null);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=UTF-8';
  const fileExtension = '.xlsx';
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
  const columns = [
    { field: 'type', headerName: '', width: 20 },
    { field: 'datetime', headerName: 'Schedules', width: 80 },
    { field: 'customer_name', headerName: '', width: 5 },
  ];
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
  const handleSubmit = (event) => {
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

  function setNumbers(status, username)  {
    const formData2 = new FormData();
    formData2.append('status', status);
    formData2.append('username', username);
    fetch('http://192.168.1.11/api.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(Object.fromEntries(formData2)),
  })
  .then(response => {
    if (response.ok) {
      // Check if the response status is in the 200 range (e.g., 200 OK)
      return response.json();
    } 
  })
  .then(data => {
    setFreshLeadNumbers(data.freshLead);
    setDirectLeadNumbers(data.directLead);
    setDoneDealsNumbers(data.doneDeals);
    console.log(data.freshLead);
    console.log(data.directLead);
    console.log(data.doneDeals);
  })
  }
  



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
    setNumbers(data.status, data.username);
    set_schedules(data.username);
    

    
  })
  
  
  }, []);


  const controlPage = () => {
    const formData = new FormData();
  formData.append('action_type', "send_username");
  formData.append('username', username);
  
  // Now you can use this formData to send the request
  fetch('http://localhost/api.php', {
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
      <Dashboard1>
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
          <Link to="/users/dashboard/"><Dashboard2>{`Dashboard`}</Dashboard2></Link>
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
         
        </Sidebar>
        <Button2 id="BUTTON"><button className="button" onClick={() => setpop(!pop)} style={{
          borderColor: `rgba(0, 0, 0, 1)`,
          fontSize: `30px`,
          backgroundColor: `rgba(0, 60, 116, 1)`,
          color: `rgba(108, 170, 226, 1)`,
        }}> Report </button></Button2>
        {pop && (
          <Pop>
            <form method="POST" onSubmit={handleSubmit}>
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
        <Arrow1 src={Arrow1Image} loading='lazy' alt={"Arrow 1"}/>
      </ProfileMenu>
        <Dashboard3>{`Dashboard`}</Dashboard3>
        <Analytics>
          <FreshLeadNumber>
            <Rectangle4></Rectangle4>
            <FreshLeadCustomers>{`Fresh Lead Customers`}</FreshLeadCustomers>
            <Q000>{freshLeadNumbers}</Q000>
          </FreshLeadNumber>
          <DealsDone>
            <Rectangle5></Rectangle5>
            <DealsDoneThisMonth>{`Deals Done This Month`}</DealsDoneThisMonth>
            <Q0001>{doneDealsNumbers}</Q0001>
          </DealsDone>
          <DirectLeadNumber>
            <Rectangle3></Rectangle3>
            <DirectLeadCustomers>{`Direct Lead Customers`}</DirectLeadCustomers>
            <Q0002>{directLeadNumbers}</Q0002>
          </DirectLeadNumber>
          
        </Analytics>
        <div style={{ height: '50vh', width: '20vw', position: 'absolute', alignItems: 29, top: 530, left: 1150, backgroundColor: 'white', borderRadius: 25}}>
      <DataGrid
          rows={tableData}
          columns={columns}
        />
      </div>
      
    
      </Dashboard1>
    );
}
  
  export {  UserDashboard };
