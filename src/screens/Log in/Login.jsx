import React from 'react';

import Rectangle2Image from './Rectangle 2.png';

import Rectangle3Image from './Rectangle 3.png';

import Ellipse1Image from './Ellipse 1.png';

import Ellipse2Image from './Ellipse 2.png';


import {
  styled
} from '@mui/material/styles';

const LogIn1 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 1)`,
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
  
  const Rectangle1 = styled("div")({
    backgroundColor: `rgba(217, 217, 217, 1)`,
    borderRadius: `25px`,
    width: `767px`,
    height: `660px`,
    position: `absolute`,
    left: `576px`,
    top: `210px`,
  });
  
  const User = styled("div")({
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
    position: `absolute`,
    left: `734px`,
    top: `317px`,
  });
  
  const Admin = styled("div")({
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
    position: `absolute`,
    left: `734px`,
    top: `376px`,
  });
  
  const LogIn2 = styled("div")({
    textAlign: `left`,
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
    width: `161px`,
    height: `170px`,
    position: `absolute`,
    left: `879px`,
    top: `264px`,
  });
  
  const Rectangle2 = styled("img")({
    height: `63px`,
    width: `562px`,
    position: `absolute`,
    left: `684px`,
    top: `516px`,
  });

  const Rectangle3 = styled("img")({
    height: `59px`,
    width: `562px`,
    position: `absolute`,
    left: `684px`,
    top: `641px`,
  });
  
  const Ellipse1 = styled("img")({
    height: `24px`,
    width: `24px`,
    position: `absolute`,
    left: `694px`,
    top: `378px`,
  });
  
  const Ellipse2 = styled("img")({
    height: `24px`,
    width: `24px`,
    position: `absolute`,
    left: `694px`,
    top: `319px`,
  });
  
  const Rectangle4 = styled("div")({
    backgroundColor: `rgba(0, 60, 116, 1)`,
    borderRadius: `30px`,
    width: `183px`,
    height: `61px`,
    position: `absolute`,
    left: `868px`,
    top: `742px`,
  });
  
  const Login = styled("div")({
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
    left: `909px`,
    top: `751px`,
  });
  
  const UserName = styled("div")({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(0, 0, 0, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `700`,
    fontSize: `36px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    textTransform: `none`,
    position: `absolute`,
    left: `694px`,
    top: `464px`,
  });
  
  const Password = styled("div")({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(0, 0, 0, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `700`,
    fontSize: `36px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    textTransform: `none`,
    position: `absolute`,
    left: `695px`,
    top: `597px`,
  });
  


function LogIn() {
    function handleSubmit(event) {
        event.preventDefault();
      
        const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Get the values from the input elements
const usernameValue = usernameInput.value;
const passwordValue = passwordInput.value;

// Create a FormData object and set the values
const formData = new FormData();
formData.append('username', usernameValue);
formData.append('password', passwordValue);

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
      console.log(response.json); // Parse the response body as JSON
    } else {
      // Handle non-successful responses (e.g., 404 Not Found)
      throw new Error('Authentication failed');
    }
  })
  .then(data => {
    console.log(data);
    if (data.status === 'success') {
      if (data.user_status == "user") {
        window.location.href = '/users/dashboard';
      }
      else if (data.user_status == "admin") {
      // Handle authentication failure (stay on the same page)
      // You can display an error message or perform other actions here
      console.log(data.user_status);
      window.location.href = '/admins/dashboard';
      }
      else {
      console.log(data.user_status);
      }}

  })
  .catch(error => {
    // Handle any errors here
    alert('Username or Password is Incorrect');
    console.error('Error:', error);
  });






      }
      
      return (
        <LogIn1>
          <Rectangle1>
          </Rectangle1>
          <form method="POST" onSubmit={handleSubmit}>
          <LogIn2>
            {`Log in`}
          </LogIn2>
        
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            placeholder="UserName"
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
              width: `562px`,
              fontStyle: `normal`,
              fontFamily: `Inter`,
              fontWeight: `700`,
              fontSize: `30px`,
              color: `rgba(0, 60, 100, 1)`,
              position: `absolute`,
              left: `684px`,
              top: `516px`,
            }}
          />
          <Rectangle2 src={Rectangle2Image} loading="lazy" alt={"Rectangle 2"} />
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="password"
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
              width: `562px`,
              fontStyle: `normal`,
              fontFamily: `Inter`,
              fontWeight: `700`,
              fontSize: `30px`,
              color: `rgba(0, 60, 100, 1)`,
              position: `absolute`,
              left: `684px`,
              top: `641px`,
            }}
          />
          <Rectangle3 src={Rectangle3Image} loading="lazy" alt={"Rectangle 3"} />
          <Rectangle4>
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
          </Rectangle4>
          <Login>{`Login`}</Login>
          <UserName>{`UserName.`}</UserName>
          <Password>{`Password.`}</Password>
          </form>
        </LogIn1>
      );
            };
            export default LogIn;