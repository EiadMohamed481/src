import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Arrow2Image from './Arrow_1.png';
import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";
import Arrow3Image from './Arrow_3.png';

import Arrow4Image from './Arrow_4.png';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
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
const Rectangle15 = styled("div")({
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
  top: `70px`
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
  height: `1020px`,
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

const FreshLead1 = styled("div")({
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
  left: `823px`,
  top: `204px`,
});

const Interested2 = styled("div")({
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
  left: `1162px`,
  top: `200px`,
});

const NotInterested2 = styled("div")({
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
  left: `1124px`,
  top: `250px`,
});

const Answer2 = styled("div")({
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
  left: `1183px`,
  top: `350px`,
});

const NoAnswer2 = styled("div")({
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
  left: `1150px`,
  top: `400px`,
});

const FollowUp2 = styled("div")({
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
  left: `1158px`,
  top: `470px`,
});

const Reservations2 = styled("div")({
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
  left: `1133px`,
  top: `520px`,
});

const Visits2 = styled("div")({
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
  left: `1191px`,
  top: `570px`,
});

const Meetings2 = styled("div")({
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
  left: `1161px`,
  top: `620px`,
});

const DoneDeal = styled("div")({
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
  left: `1154px`,
  top: `670px`,
});

const DirectLead1 = styled("div")({
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
  left: `820px`,
  top: `266px`,
});

const Edit = styled("div")({
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
  left: `562px`,
  top: `243px`,
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
  left: `542px`,
  top: `301px`,
});

const ID = styled("div")({
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
  top: `165px`,
});


const FirstName = styled("div")({
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
  left: `532px`,
  top: `397px`,
});

const Country = styled("div")({
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
  left: `552px`,
  top: `550px`,
});

const ZipCode = styled("div")({
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
  left: `546px`,
  top: `695px`,
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

const City = styled("div")({
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
  left: `880px`,
  top: `550px`,
});

const PhoneNumber = styled("div")({
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
  left: `796px`,
  top: `694px`,
});
const PhoneNumber2 = styled("div")({
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
  left: `1100px`,
  top: `710px`,
});

const Email = styled("div")({
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
  left: `720px`,
  top: `803px`,
});

const Comments = styled("div")({
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
  left: `720px`,
  top: `920px`,
});

const LastName = styled("div")({
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
  left: `830px`,
  top: `396px`,
});

const Rectangle3 = styled("img")({
  height: `54px`,
  width: `225px`,
  position: `absolute`,
  left: `504px`,
  top: `444px`,
});

const Rectangle5 = styled("img")({
  height: `54px`,
  width: `225px`,
  position: `absolute`,
  left: `504px`,
  top: `598px`,
});

const Rectangle7 = styled("img")({
  height: `54px`,
  width: `225px`,
  position: `absolute`,
  left: `504px`,
  top: `752px`,
});

const Rectangle4 = styled("div")({
  backgroundColor: `rgba(108, 170, 226, 1)`,
  borderRadius: `40px`,
  width: `225px`,
  height: `54px`,
  position: `absolute`,
  left: `800px`,
  top: `444px`,
});

const Rectangle6 = styled("div")({
  backgroundColor: `rgba(108, 170, 226, 1)`,
  borderRadius: `40px`,
  width: `225px`,
  height: `54px`,
  position: `absolute`,
  left: `800px`,
  top: `598px`,
});

const Rectangle9 = styled("div")({
  backgroundColor: `rgba(108, 170, 226, 1)`,
  borderRadius: `40px`,
  width: `524px`,
  height: `54px`,
  position: `absolute`,
  left: `504px`,
  top: `846px`,
});
const Rectangle10 = styled("div")({
  backgroundColor: `rgba(108, 170, 226, 1)`,
  borderRadius: `40px`,
  width: `524px`,
  height: `80px`,
  position: `absolute`,
  left: `504px`,
  top: `980px`,
});

const Rectangle8 = styled("div")({
  backgroundColor: `rgba(108, 170, 226, 1)`,
  borderRadius: `40px`,
  width: `258px`,
  height: `54px`,
  position: `absolute`,
  left: `780px`,
  top: `745px`,
});

const Rectangle11 = styled("div")({
  backgroundColor: `rgba(0, 60, 116, 1)`,
  borderRadius: `30px`,
  width: `183px`,
  height: `61px`,
  position: `absolute`,
  left: `1100px`,
  top: `980px`,
});
const Rectangle14 = styled("div")({
  backgroundColor: `rgba(108, 170, 226, 1)`,
  borderRadius: `40px`,
  width: `258px`,
  height: `54px`,
  position: `absolute`,
  left: `1100px`,
  top: `760px`,
});

const Rectangle12 = styled("div")({
  backgroundColor: `rgba(108, 170, 226, 1)`,
  borderRadius: `30px`,
  width: `183px`,
  height: `61px`,
  position: `absolute`,
  left: `870px`,
  top: `200px`
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
  top: `990px`,
});

function Users_Control_Customers() {
  const [isFreshLeadMenuOpen, setFreshLeadMenuOpen] = useState(null);
  const [isDirectLeadMenuOpen, setDirectLeadMenuOpen] = useState(null);
  const [selectedRadioButton, setSelectedRadioButton] = useState(null);
  const [selectedInteresting, setSelectedInteresting] = useState(null);
  const [selectedAnswering, setSelectedAnswering] = useState(null);
  const [isFollowUP, setFollowUP] = useState(null);
  const [isVisits, setVisits] = useState(null);
  const [isMeetings, setMeetings] = useState(null);
  const [isReservations, setReservations] = useState(null);
  const [isDoneDeal, setDoneDeal] = useState(null);
  const [username, setUsername] = useState(null);
  const [isCustomersMenuOpen, setCustomersMenuOpen] = useState(null);
  const [isControlMenuOpen, setControlMenuOpen] = useState(null);
  const [status, setStatus] = useState(null);
  const [isRemind, setRemind] = useState(false);
  const [pop, setpop] = useState(false);
  const [selectedRadioButton2, setSelectedRadioButton2] = useState(null);
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
  setInterval(checkReminder, 100000);
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
      const customerTypeValue = document.getElementById(selectedRadioButton2).value;
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
  }
  function teleport(number) {
    const formData = new FormData();
    formData.append('action_type', "teleport");
    formData.append('phone_number', number);
    formData.append('status', status);
  
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
      console.log(data.nstatus);
      if (data.nstatus == "success") {
        window.location.href = '/users/schedules';
      }
      
    })
    }
  
  function handleSubmit(event) {
    
    
    event.preventDefault();
    console.log(selectedRadioButton)
    const actioninput = document.getElementById(selectedRadioButton);
    const Interesting = document.getElementById(selectedInteresting);
    const Answering = document.getElementById(selectedAnswering);
    const firstNameInput = document.getElementById('first_name');
    const lastNameInput = document.getElementById('last_name');
    const countryInput = document.getElementById('country');
    const cityInput = document.getElementById('city');
    const zipCodeInput = document.getElementById('first_name');
    const phoneNumberInput = document.getElementById('phone_number');
    const phoneNumber2Input = document.getElementById('phone_number_2');
    const emailInput = document.getElementById('email');
    const commentsInput = document.getElementById('comments');
    

    const actionvalue = actioninput.value;
    const InterestingValue = Interesting.value;
    const AnsweringValue = Answering.value;
    const firstNamevalue = firstNameInput.value;
    const lastNamevalue = lastNameInput.value;
    const countryvalue = countryInput.value;
    const cityvalue = cityInput.value;
    const zipCodevalue = zipCodeInput.value;
    const phoneNumbervalue = phoneNumberInput.value;
    const phoneNumber2value = phoneNumber2Input.value;
    const emailvalue = emailInput.value;
    const commentsvalue = commentsInput.value;

    

    const formData = new FormData();
    
    formData.append('user_action', actionvalue);
    formData.append('customers_type', "direct_lead");
    formData.append('interesting', InterestingValue);
    formData.append('Answering', AnsweringValue);
    formData.append('first_name', firstNamevalue);
    formData.append('last_name', lastNamevalue);
    formData.append('country', countryvalue);
    formData.append('city', cityvalue);
    formData.append('zip_code', zipCodevalue);
    formData.append('phone_number', phoneNumbervalue);
    formData.append('phone_number_2', phoneNumber2value);
    formData.append('email', emailvalue);
    formData.append('comments', commentsvalue);
    if (actionvalue == 'EDIT' | actionvalue == 'REMOVE') {
      formData.append('id', document.getElementById("id").value);

    };
    if (actionvalue == 'EDIT' | actionvalue == 'ADD') {
      formData.append('send_to', username);

    };
    
    if (isFollowUP) {
      formData.append('follow_up', true);
    }
    else {
      formData.append('follow_up', false);
    }
    if (isVisits) {
      formData.append('visits', true);
    }
    else {
      formData.append('visits', false);
    }
    if (isReservations) {
      formData.append('reservations', true);
    }
    else {
      formData.append('reservations', false);
    }
    if (isMeetings) {
      formData.append('meetings', true);
    }
    else {
      formData.append('meetings', false);
    }
    if (isDoneDeal) {
      formData.append('done_deal', true);
    }
    else {
      formData.append('done_deal', false);
    }
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
    return response.json();
  } 
})
.then(data => {
    console.log(data.nstatus);
    if (data.nstatus == "success") {
      alert("Customer Has Creates Succesfully")
      if (isFollowUP) {
      teleport(phoneNumbervalue);}
      if (isReservations) {
        teleport(phoneNumbervalue);}
        if (isMeetings) {
          teleport(phoneNumbervalue);}
          if (isReservations) {
            teleport(phoneNumbervalue);}
          }
      
    else {
      alert("Customer Hasn't Created")
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

  const controlPage1 = () => {
    const formData = new FormData();
  formData.append('action_type', "send_username");
  formData.append('username', username);
  formData.append('status', status);
  
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
            <DirectLeadMenu id="fresh_lead">
                  
                  
                  <Link to="/users/direct-lead/">
                    <DirectLead onClick={() => controlPage1()}>{`Direct Lead`}</DirectLead></Link>

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
      {isRemind && (
            <ReactHowler
            src='http://192.168.1.11:3000/reminder.mp3'
            playing={true}
            onPlay={() => alert("A reminder is comming")}
            onEnd={() => setRemind(false)}
          />
          )}
      <Button id="BUTTON"><button className="button" onClick={() => setpop(!pop)} style={{
          borderColor: `rgba(0, 0, 0, 1)`,
          fontSize: `30px`,
          backgroundColor: `rgba(0, 60, 116, 1)`,
          color: `rgba(108, 170, 226, 1)`,
        }}> Report </button></Button>
        {pop && (
          <Pop>
            <form method="POST" onSubmit={handleSubmit2}>
            <input type="radio" id="direct_lead" name="Customers_type" value={"direct_lead"} onClick={() => setSelectedRadioButton2('direct_lead')} style={{
        left: `200px`,
        top: `50px`,
        width: `auto`,
        height: `auto`,
        position: `absolute`,}}>
      </input>
      <DirectLeadOption>{`Direct_Lead_Customers`}</DirectLeadOption>
      <input type="radio" id="fresh_lead" name="Customers_type" value={"fresh_lead"} onClick={() => setSelectedRadioButton2('fresh_lead')} style={{
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
          <Rectangle15>
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
          </Rectangle15>
          <Submit2>{`Submit`}</Submit2>
          </form>
          </Pop>
        )}
      <ControlCustomers1>
        {`Control Customers`}
      </ControlCustomers1>
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
      <form method="POST" onSubmit={handleSubmit}> 
      <Rectangle2>
      </Rectangle2>
      
      <input type="radio" id="INSERT" name="Action" value={"ADD"} onClick={() => setSelectedRadioButton('INSERT')} style={{
        left: `530px`,
        top: `185px`,
        width: `auto`,
        height: `auto`,
        position: `absolute`,}}>
      </input>
      
      <Add>
        {`ADD`}
      </Add>
      <input type="radio" id="UPDATE" name="Action" value={"EDIT"} onClick={() => setSelectedRadioButton('UPDATE')} style={{
        left: `530px`,
        top: `240px`,
        width: `auto`,
        height: `auto`,
        position: `absolute`,}}></input>
      <Edit>
        {`Edit`}
      </Edit>
      <input type="radio" id="DELETE" name="Action" value={"REMOVE"} onClick={() => setSelectedRadioButton('DELETE')} style={{
        left: `500px`,
        top: `300px`,
        width: `auto`,
        height: `auto`,
        position: `absolute`,}}></input>
      <Delete>
        {`Delete`}
      </Delete>
      <input type="radio" id="interested" name="Interesting" value={"_interested_customers"} onClick={() => setSelectedInteresting("interested")} style={{
        left: `1100px`,
        top: `200px`,
        width: `auto`,
        height: `auto`,
        position: `absolute`,}}></input>
      <Interested2>
        {`Interested`}
      </Interested2>
      <input type="radio" id="not_interested" name="Interesting" value={"_not_interested_customers"} onClick={() => setSelectedInteresting("not_interested")} style={{
        left: `1100px`,
        top: `250px`,
        width: `auto`,
        height: `auto`,
        position: `absolute`,}}></input>
      <NotInterested2>
        {`Not Interested`}
      </NotInterested2>
      <input type="radio" id="answer" name="answering" value={"_answer_customers"} onClick={() => setSelectedAnswering("answer")} style={{
        left: `1100px`,
        top: `350px`,
        width: `auto`,
        height: `auto`,
        position: `absolute`,}}></input>
      <Answer2>
        {`Answer`}
      </Answer2>
      <input type="radio" id="no_answer" name="answering" value={"_no_answer_customers"} onClick={() => setSelectedAnswering("no_answer")} style={{
        left: `1100px`,
        top: `400px`,
        width: `auto`,
        height: `auto`,
        position: `absolute`,}}></input>
      <NoAnswer2>
        {`No Answer`}
      </NoAnswer2>
      <input type="checkbox" id="follow_up" onClick={() => setFollowUP(!isFollowUP)} style={{
        left: `1100px`,
        top: `470px`,
        width: `auto`,
        height: `auto`,
        position: `absolute`,}}></input>
      <FollowUp2>
        {`Follow UP`}
      </FollowUp2>
      <input type="checkbox" id="reservations" onClick={() => setReservations(!isReservations)}  style={{
        left: `1100px`,
        top: `520px`,
        width: `auto`,
        height: `auto`,
        position: `absolute`,}}></input>
      <Reservations2>
        {`Reservations`}
      </Reservations2>
      <input type="checkbox" id="visits" onClick={() => setVisits(!isVisits)}  style={{
        left: `1100px`,
        top: `570px`,
        width: `auto`,
        height: `auto`,
        position: `absolute`,}}></input>
      <Visits2>
        {`Visits`}
      </Visits2>
      <input type="checkbox" id="meetings" onClick={() => setMeetings(!isMeetings)}  style={{
        left: `1100px`,
        top: `620px`,
        width: `auto`,
        height: `auto`,
        position: `absolute`,}}></input>
      <Meetings2>
        {`Meetings`}
      </Meetings2>
      <input type="checkbox" id="done_deals" onClick={() => setDoneDeal(!isDoneDeal)} style={{
        left: `1100px`,
        top: `670px`,
        width: `auto`,
        height: `auto`,
        position: `absolute`,}}></input>
      <DoneDeal>
        {`Done Deal`}
      </DoneDeal>
      {selectedRadioButton == 'UPDATE' | selectedRadioButton == 'DELETE'  && (
      <><input
            id="id"
            name="id"
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
              left: `850px`,
              top: `200px`,
            }} /><ID>
              {`ID`}
            </ID>
            <Rectangle12>
      </Rectangle12></>
      )}
      
      <input
            id="first_name"
            name="first_name"
            type="text"
            placeholder="First Name"
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
      <FirstName>
        {`First Name`}
      </FirstName>
      
      
      <input
            id="last_name"
            name="last_name"
            type="text"
            placeholder="Last Name"
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
              left: `800px`,
              top: `440px`,
            }}
          />
      <LastName>
        {`Last Name`}
      </LastName>
      <input
            id="country"
            name="country"
            type="text"
            placeholder="Country"
            required
            style={{
              background: `transparent`,
              zIndex: `2`,
              marginTop: `-25px`,
              marginLeft: `25px`,
              border: `none`,
              outline: `none !important`,
              height: `110px`,
              width: `200px`,
              fontStyle: `normal`,
              fontFamily: `Inter`,
              fontWeight: `700`,
              backgroundClip: `none`,
              fontSize: `30px`,
              textAlign: `center`,
              color: `rgba(0, 60, 100, 1)`,
              position: `absolute`,
              left: `500px`,
              top: `590px`,
            }}
          />
      <Country>
        {`Country`}
      </Country>
      <input
            id="city"
            name="city"
            type="text"
            placeholder="City"
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
              left: `800px`,
              top: `590px`,
            }}
          />
      <City>
        {`City`}
      </City>
      <input
            id="zip_code"
            name="zip_code"
            type="text"
            placeholder="Zip Code"
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
              top: `750px`,
            }}
          />
      <ZipCode>
        {`Zip Code`}
      </ZipCode>
      <input
            id="phone_number"
            name="phone_number"
            type="text"
            placeholder="Phone Number"
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
              left: `800px`,
              top: `740px`,
            }}
          />
      <PhoneNumber>
        {`Phone Number`}
      </PhoneNumber>
      <input
            id="phone_number_2"
            name="phone_number_2"
            type="text"
            placeholder="Phone Number 2"
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
              left: `1100px`,
              top: `760px`,
            }}
          />
      <PhoneNumber2>
        {`Phone Number 2`}
      </PhoneNumber2>
      <input
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            autoFocus
            style={{
              background: `transparent`,
              zIndex: `2`,
              marginTop: `-25px`,
              marginLeft: `25px`,
              border: `none`,
              outline: `none`,
              height: `110px`,
              width: `300px`,
              fontStyle: `normal`,
              fontFamily: `Inter`,
              fontWeight: `700`,
              fontSize: `30px`,
              textAlign: `center`,
              color: `rgba(0, 60, 100, 1)`,
              position: `absolute`,
              left: `600px`,
              top: `840px`,
            }}
          />
      <Email>
        {`Email`}
      </Email>
      <input
            id="comments"
            name="comments"
            type="text"
            placeholder="comments"
            autoFocus
            style={{
              background: `transparent`,
              zIndex: `2`,
              marginTop: `-25px`,
              marginLeft: `25px`,
              border: `none`,
              outline: `none`,
              height: `110px`,
              width: `400px`,
              fontStyle: `normal`,
              fontFamily: `Inter`,
              fontWeight: `700`,
              fontSize: `30px`,
              textAlign: `center`,
              color: `rgba(0, 60, 100, 1)`,
              position: `absolute`,
              left: `550px`,
              top: `980px`,
            }}
          />
      <Comments>
        {`Comments`}
      </Comments>
      <Rectangle3 src={Rectangle3Image} loading='lazy' alt={"Rectangle 3"}/>
      <Rectangle5 src={Rectangle5Image} loading='lazy' alt={"Rectangle 5"}/>
      <Rectangle7 src={Rectangle7Image} loading='lazy' alt={"Rectangle 7"}/>
      <Rectangle4>
      </Rectangle4>
      <Rectangle6>
      </Rectangle6>
      <Rectangle9>
      </Rectangle9>
      <Rectangle8>
      </Rectangle8>
      <Rectangle10>
      </Rectangle10>
      <Rectangle14>
      </Rectangle14>
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
    </Control_Users1>);

  }


export { Users_Control_Customers };

  