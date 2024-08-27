import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Popup from "reactjs-popup";

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
  top: `397px`,
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
  top: `451px`,
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
  top: `524px`,
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
  top: `578px`,
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
  top: `647px`,
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
  top: `698px`,
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
  top: `752px`,
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
  top: `798px`,
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
  top: `849px`,
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
  left: `1180px`,
  top: `165px`,
});

const SendTo = styled("div")({
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
  top: `280px`,
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
  top: `694px`,
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

const Notes = styled("div")({
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
const Rectangle14 = styled("div")({
  backgroundColor: `rgba(108, 170, 226, 1)`,
  borderRadius: `40px`,
  width: `258px`,
  height: `54px`,
  position: `absolute`,
  left: `1100px`,
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

const Rectangle12 = styled("div")({
  backgroundColor: `rgba(108, 170, 226, 1)`,
  borderRadius: `30px`,
  width: `183px`,
  height: `61px`,
  position: `absolute`,
  left: `1162px`,
  top: `200px`
});
const Rectangle13 = styled("div")({
  backgroundColor: `rgba(108, 170, 226, 1)`,
  borderRadius: `30px`,
  width: `210px`,
  height: `61px`,
  position: `absolute`,
  left: `1162px`,
  top: `320px`
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

function Admins_Control_Customers() {
  const [isFreshLeadMenuOpen, setFreshLeadMenuOpen] = useState(null);
  const [isDirectLeadMenuOpen, setDirectLeadMenuOpen] = useState(null);
  const [selectedRadioButton, setSelectedRadioButton] = useState(null);
  const [selectedCustomersTypes, setSelectedCustomersTypes] = useState(null);
  const [selectedInteresting, setSelectedInteresting] = useState(null);
  const [selectedAnswering, setSelectedAnswering] = useState(null);
  const [isCustomersMenuOpen, setCustomersMenuOpen] = useState(null);
  const [isControlMenuOpen, setControlMenuOpen] = useState(null);
  const [username, setUsername] = useState(null);
  const [status, setStatus] = useState(null);
  function teleport(number, table) {
    const formData = new FormData();
    formData.append('action_type', "teleport");
    formData.append('phone_number', number);
    formData.append('table', table);
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
    const jsonData = response.data;

      console.log(jsonData);
      setReportData(jsonData);
  })
  }
  function handleSubmit(event) {
    
    
    event.preventDefault();
    console.log(selectedRadioButton)
    const actioninput = document.getElementById(selectedRadioButton);
    const customersTypeInput = document.getElementById(selectedCustomersTypes);
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
    const notesInput = document.getElementById('notes');
    

    const actionvalue = actioninput.value;
    const customersTypeValue = customersTypeInput.value;
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
    const notesvalue = notesInput.value;

    

    const formData = new FormData();
    
    formData.append('action', actionvalue);
    formData.append('customers_type', customersTypeValue);
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
    formData.append('notes', notesvalue);
    if (actionvalue == 'EDIT' | actionvalue == 'REMOVE') {
      formData.append('id', document.getElementById("id").value);

    };
    if (actionvalue == 'EDIT' | actionvalue == 'ADD') {
      formData.append('send_to', document.getElementById("send_to").value);

    };
    
   
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
    console.log(data.nstatus);
    if (data.nstatus == "success") {
      alert("Customer Has Creates Succesfully")
      if (AnsweringValue == "_no_answer_customers") {
      teleport(phoneNumbervalue, customersTypeInput);}
      
    else {
      alert("Customer Hasn't Created")
    }
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

                  
                  
                  
                    <ControlCustomers>{`Control Customers`}</ControlCustomers>

                </ControlCustomersMenu>
                <ControlUsersMenu>
                  
                  
                <Link to="/control-users">
                    <ControlCustomers onClick={() => controlPage()}>{`Control Users`}</ControlCustomers></Link>

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
      <input type="radio" id="fresh_lead" name="customer_type" value={"fresh_lead"}  onClick={() => setSelectedCustomersTypes("fresh_lead")} style={{
        left: `780px`,
        top: `210px`,
        width: `auto`,
        height: `auto`,
        position: `absolute`,}}></input>
        
      <FreshLead1>
        {`Fresh Lead`}
      </FreshLead1>
      <input type="radio" id="direct_lead" name="customer_type" value={"direct_lead"} onClick={() => setSelectedCustomersTypes("direct_lead")} style={{
        left: `780px`,
        top: `270px`,
        width: `auto`,
        height: `auto`,
        position: `absolute`,}}></input>
      <DirectLead1>
        {`Direct Lead`}
      </DirectLead1>
      <input type="radio" id="interested" name="Interesting" value={"_interested_customers"} onClick={() => setSelectedInteresting("interested")} style={{
        left: `1100px`,
        top: `400px`,
        width: `auto`,
        height: `auto`,
        position: `absolute`,}}></input>
      <Interested2>
        {`Interested`}
      </Interested2>
      <input type="radio" id="not_interested" name="Interesting" value={"_not_interested_customers"} onClick={() => setSelectedInteresting("not_interested")} style={{
        left: `1100px`,
        top: `450px`,
        width: `auto`,
        height: `auto`,
        position: `absolute`,}}></input>
      <NotInterested2>
        {`Not Interested`}
      </NotInterested2>
      <input type="radio" id="answer" name="answering" value={"_answer_customers"} onClick={() => setSelectedAnswering("answer")} style={{
        left: `1100px`,
        top: `530px`,
        width: `auto`,
        height: `auto`,
        position: `absolute`,}}></input>
      <Answer2>
        {`Answer`}
      </Answer2>
      <input type="radio" id="no_answer" name="answering" value={"_no_answer_customers"} onClick={() => setSelectedAnswering("no_answer")} style={{
        left: `1100px`,
        top: `580px`,
        width: `auto`,
        height: `auto`,
        position: `absolute`,}}></input>
      <NoAnswer2>
        {`No Answer`}
      </NoAnswer2>
      
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
              left: `1162px`,
              top: `200px`,
            }} /><ID>
              {`ID`}
            </ID>
            <Rectangle12>
      </Rectangle12></>
      )}
      {selectedRadioButton == 'UPDATE' | selectedRadioButton == 'INSERT'  && (
      <><input
            id="send_to"
            name="send_to"
            type="text"
            placeholder="Send To"
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
              width: `220px`,
              fontStyle: `normal`,
              fontFamily: `Inter`,
              fontWeight: `700`,
              fontSize: `30px`,
              textAlign: `center`,
              color: `rgba(0, 60, 100, 1)`,
              position: `absolute`,
              left: `1110px`,
              top: `320px`,
            }} /><SendTo>
              {`Send To`}
            </SendTo>
            <Rectangle13>
      </Rectangle13></>
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
              top: `740px`,
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
            id="notes"
            name="notes"
            type="text"
            placeholder="Notes"
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
      <Notes>
        {`Notes`}
      </Notes>
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
          <Popup trigger={<button> Trigger</button>} position="right center">
           <div>Popup content here !!</div>
          </Popup>
          <Submit>{`Submit`}</Submit>
      </form>
    </Control_Users1>);

  }

export { Admins_Control_Customers };

  