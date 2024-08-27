import React, { useState, useEffect } from "react";

import Arrow2Image from "./Arrow_2.png";


import Ellipse1Image from "./Dashboard_Ellipse_1.svg";
import axios from "axios";
import { DataGrid } from '@mui/x-data-grid';
import { DateTimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';
dayjs.extend(utc);
dayjs.extend(timezone);

import { styled } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { arSA } from "@mui/material/locale";

const TableContainer = styled("div")({
  marginTop: `50px`,
  alignItems: `center`
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



const AdminsSchedule = () => {
    const [isCustomersMenuOpen, setCustomersMenuOpen] = useState(false);
    const [isControlMenuOpen, setControlMenuOpen] = useState(false);
    const [isDirectLeadMenuOpen, setDirectLeadMenuOpen] = useState(false);
    const [isFreshLeadMenuOpen, setFreshLeadMenuOpen] = useState(false);
    const [tableData, setTableData] = useState([]);
    const [username, setUsername] = useState(null);
    const [status, setStatus] = useState(null);
    const [selectedDateTime, setSelectedDateTime] = useState(null);

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
            <FreshLeadMenu name="fresh_lead">
                  
                  
                  <Link to="/admins/fresh-lead">
                    <FreshLead onClick={() => controlPage()}>{`Fresh Lead`}</FreshLead></Link>

                </FreshLeadMenu>
                
                <DirectLeadMenu id="direct_lead">
                  
                  
                  <Link to="/admins/direct-lead">
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
                  
                  
                  <Link to="/admins/control-customers">
                    <ControlCustomers onClick={() => controlPage()}>{`Control Customers`}</ControlCustomers></Link>

                </ControlCustomersMenu>
                <ControlUsersMenu>
                  
                  
                  <Link to="/control-users">
                    <ControlUsers onClick={() => controlPage()}>{`Control Users`}</ControlUsers></Link>

                </ControlUsersMenu>

              </ControlMenu>
              
              
              )}</Control>
        <Dashboard2>{`Dashboard`}</Dashboard2>
      </Sidebar>
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
  
  export {  AdminsSchedule };
