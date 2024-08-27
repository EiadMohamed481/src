import React, { useEffect, useState } from "react";

import Arrow2Image from "./Arrow_2.png";

import Arrow3Image from "./Arrow_3.png";

import Arrow4Image from "./Arrow_4.png";

import Ellipse1Image from "./Dashboard_Ellipse_1.svg";

import Arrow1Image from "./Arrow_1.png";

import { styled } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const Dashboard1 = styled("div")({
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
  top: `40px`
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
const ControlUsersMenu = styled("div")({
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
  top: `100px`
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
const ControlUsers = styled("div")({
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
const AdminDashboard = () => {
  const [isCustomersMenuOpen, setCustomersMenuOpen] = useState(false);
  const [isControlMenuOpen, setControlMenuOpen] = useState(false);
  const [isDirectLeadMenuOpen, setDirectLeadMenuOpen] = useState(null);
  const [username, setUsername] = useState(null);
  const [status, setStatus] = useState(null);
  const [freshLeadNumbers, setFreshLeadNumbers] = useState(null);
  const [directLeadNumbers, setDirectLeadNumbers] = useState(null);
  const [doneDealsNumbers, setDoneDealsNumbers] = useState(null);


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

    
  })
  
  
  }, []);


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
      if (isDirectLeadMenuOpen == true) {
      document.getElementById("arrow_3").style.transform = "rotate(360deg)";}
      else {
        document.getElementById("arrow_3").style.transform = "rotate(-180deg)";
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
    </Dashboard1>
  );
};

export { AdminDashboard };
