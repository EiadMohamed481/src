import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Arrow2Image from './Arrow_1.png';

import Arrow3Image from './Arrow_3.png';

import Arrow4Image from './Arrow_4.png';

import Ellipse1Image from './Dashboard_Ellipse_1.svg';

import Arrow1Image from './Arrow_1.png';

import Rectangle3Image from './Rectangle_3.png';

import Rectangle5Image from './Rectangle_5.png';

import Rectangle7Image from './Rectangle_7.png';

import {
  styled
} from '@mui/material/styles';

const Control_Users1 = styled("div")({
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
  overflow: `hidden`,
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

const ControlCustomers1 = styled("div")({
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
  left: `359px`,
  top: `49px`,
});

const Rectangle2 = styled("div")({
  backgroundColor: `rgba(217, 217, 217, 1)`,
  borderRadius: `25px`,
  width: `959px`,
  height: `650px`,
  position: `absolute`,
  left: `409px`,
  top: `153px`,
});

const Add = styled("div")({
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
  left: `558px`,
  top: `185px`,
});
const Delete = styled("div")({
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
    left: `700px`,
    top: `185px`,
  });

const User = styled("div")({
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
    top: `185px`,
  });
const Admin = styled("div")({
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
      left: `1000px`,
      top: `185px`,
  });


const Username = styled("div")({
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
  left: `630px`,
  top: `360px`,
});

const Password = styled("div")({
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
  left: `630px`,
  top: `560px`,
});



const Rectangle3 = styled("div")({
  backgroundColor: `rgba(108, 170, 226, 1)`,
  borderRadius: `40px`,
  width: `500px`,
  height: `54px`,
  position: `absolute`,
  left: `650px`,
  top: `400px`,
});
const Rectangle4 = styled("div")({
    backgroundColor: `rgba(108, 170, 226, 1)`,
    borderRadius: `40px`,
    width: `500px`,
    height: `54px`,
    position: `absolute`,
    left: `650px`,
    top: `600px`,
  });

const Rectangle11 = styled("div")({
  backgroundColor: `rgba(0, 60, 116, 1)`,
  borderRadius: `30px`,
  width: `183px`,
  height: `61px`,
  position: `absolute`,
  left: `800px`,
  top: `700px`,
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
  left: `843px`,
  top: `710px`,
});

function Control_Users() {
  const [isDirectLeadMenuOpen, setDirectLeadMenuOpen] = useState(null);
  const [selectedRadioButton, setSelectedRadioButton] = useState(null);
  const [selectedUserTypes, setSelectedUserTypes] = useState(null);
  const [isCustomersMenuOpen, setCustomersMenuOpen] = useState(null);
  const [isControlMenuOpen, setControlMenuOpen] = useState(null);
  const [username, setUsername] = useState(null);
  const [status, setStatus] = useState(null);

  function handleSubmit(event) {
    
    
    event.preventDefault();
    console.log(selectedRadioButton)
    const actioninput = document.getElementById(selectedRadioButton);
    const userTypeInput = document.getElementById(selectedUserTypes);
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    

    const actionvalue = actioninput.value;
    const userTypeValue = userTypeInput.value;
    const usernamevalue = usernameInput.value;
    const passwordvalue = passwordInput.value;

    

    const formData = new FormData();
    
    formData.append('action', actionvalue);
    formData.append('user_type', userTypeValue);
    formData.append('username', usernamevalue);
    formData.append('password', passwordvalue);
   
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
      console.log(response.json); // Parse the response body as JSON
    } else {
      // Handle non-successful responses (e.g., 404 Not Found)
      throw new Error('Authentication failed');
    }
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
    <Control_Users1>
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
                <ControlCustomers>{`Control Customers`}</ControlCustomers></Link>

            </ControlCustomersMenu>
            <ControlUsersMenu>
              
              
                <ControlCustomers onClick={() => controlPage()}>{`Control Users`}</ControlCustomers>

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
      <ControlCustomers1>
        {`Control Customers`}
      </ControlCustomers1>
      <form method="POST" onSubmit={handleSubmit}> 
      <Rectangle2>
      </Rectangle2>
      
      <input type="radio" id="INSERT" name="Action" value={"ADD"} onClick={() => setSelectedRadioButton('INSERT')} style={{
        left: `570px`,
        top: `235px`,
        width: `auto`,
        height: `auto`,
        position: `absolute`,}}>
      </input>
      
      <Add>
        {`ADD`}
      </Add>
      <input type="radio" id="DELETE" name="Action" value={"REMOVE"} onClick={() => setSelectedRadioButton('DELETE')} style={{
        left: `743px`,
        top: `235px`,
        width: `auto`,
        height: `auto`,
        position: `absolute`,}}></input>
      <Delete>
        {`Delete`}
      </Delete>
      <input type="radio" id="User" name="User_type" value={"user"} onClick={() => setSelectedUserTypes('User')} style={{
        left: `930px`,
        top: `235px`,
        width: `auto`,
        height: `auto`,
        position: `absolute`,}}>
      </input>
      
      <User>
        {`User`}
      </User>
      <input type="radio" id="Admin" name="User_type" value={"admin"} onClick={() => setSelectedUserTypes('Admin')} style={{
        left: `1030px`,
        top: `235px`,
        width: `auto`,
        height: `auto`,
        position: `absolute`,}}></input>
      <Admin>
        {`Admin`}
      </Admin>
      
      
      <input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
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
              width: `450px`,
              fontStyle: `normal`,
              fontFamily: `Inter`,
              fontWeight: `700`,
              fontSize: `30px`,
              textAlign: `center`,
              color: `rgba(0, 60, 100, 1)`,
              position: `absolute`,
              left: `665px`,
              top: `400px`,
            }}
          />
      <Username>
        {`Username`}
      </Username>
      <input
            id="password"
            name="password"
            type="text"
            placeholder="Password"
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
              width: `450px`,
              fontStyle: `normal`,
              fontFamily: `Inter`,
              fontWeight: `700`,
              fontSize: `30px`,
              textAlign: `center`,
              color: `rgba(0, 60, 100, 1)`,
              position: `absolute`,
              left: `665px`,
              top: `600px`,
            }}
          />
      <Password>
        {`Password`}
      </Password>
      <Rectangle3>
      </Rectangle3>
      <Rectangle4>
      </Rectangle4>
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
          <Submit>{`Login`}</Submit>
      </form>
    </Control_Users1>);

  }

export { Control_Users };

  