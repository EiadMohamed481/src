import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { DataGrid } from '@mui/x-data-grid';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";

import Arrow2Image from "./Arrow_2.png";
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';


import Ellipse1Image from "./Ellipse_1.png";

import Arrow1Image from "./Arrow_1.png";
import { styled } from "@mui/material/styles";

const TableContainer = styled("div")({
  marginTop: `200px`,
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
const Fresh_Lead = styled("div")({
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
  alignContent: `29`
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
  top: `0px`,
});

const Rectangle1 = styled("div")({
  backgroundColor: `rgba(0, 60, 116, 1)`,
  borderRadius: `30px`,
  width: `362px`,
  height: `997px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
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
  top: `85px`,
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

const Arrow2 = styled("img")({
  height: `auto`,
  width: `auto`,
  position: `absolute`,
  left: `230px`,
  top: `18px`,
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
  top: `80px`
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


const SubMenus = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `256px`,
  height: `322.27px`,
  left: `0px`,
  top: `37px`,
});

const Interested = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(108, 170, 226, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `256px`,
  height: `18.5px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const NotInterested = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(108, 170, 226, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `256px`,
  height: `18.5px`,
  position: `absolute`,
  left: `0px`,
  top: `38px`,
});

const Answer = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(108, 170, 226, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `256px`,
  height: `18.5px`,
  position: `absolute`,
  left: `0px`,
  top: `76px`,
});

const NoAnswer = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(108, 170, 226, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `256px`,
  height: `18.5px`,
  position: `absolute`,
  left: `0px`,
  top: `114px`,
});

const FollowUp = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(108, 170, 226, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `256px`,
  height: `18.5px`,
  position: `absolute`,
  left: `0px`,
  top: `152px`,
});

const Reservations = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(108, 170, 226, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `256px`,
  height: `18.5px`,
  position: `absolute`,
  left: `0px`,
  top: `190px`,
});

const Visits = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(108, 170, 226, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `256px`,
  height: `18.5px`,
  position: `absolute`,
  left: `0px`,
  top: `228px`,
});

const Meetings = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(108, 170, 226, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `256px`,
  height: `18.5px`,
  position: `absolute`,
  left: `0px`,
  top: `266px`,
});

const DoneDeals = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(108, 170, 226, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `256px`,
  height: `18.5px`,
  position: `absolute`,
  left: `0px`,
  top: `304px`,
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
  top: `40px`,
});

const Arrow3 = styled("img")({
  height: `auto`,
  width: `auto`,
  position: `absolute`,
  left: `231px`,
  top: `18px`,
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
  top: `0px`,
});

const SubMenus1 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `256px`,
  height: `322.27px`,
  left: `0px`,
  top: `44px`,
});

const Interested1 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(108, 170, 226, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `256px`,
  height: `18.5px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const NotInterested1 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(108, 170, 226, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `256px`,
  height: `18.5px`,
  position: `absolute`,
  left: `0px`,
  top: `38px`,
});

const Answer1 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(108, 170, 226, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `256px`,
  height: `18.5px`,
  position: `absolute`,
  left: `0px`,
  top: `76px`,
});

const NoAnswer1 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(108, 170, 226, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `256px`,
  height: `18.5px`,
  position: `absolute`,
  left: `0px`,
  top: `114px`,
});

const FollowUp1 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(108, 170, 226, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `256px`,
  height: `18.5px`,
  position: `absolute`,
  left: `0px`,
  top: `152px`,
});

const Reservations1 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(108, 170, 226, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `256px`,
  height: `18.5px`,
  position: `absolute`,
  left: `0px`,
  top: `190px`,
});

const Visits1 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(108, 170, 226, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `256px`,
  height: `18.5px`,
  position: `absolute`,
  left: `0px`,
  top: `228px`,
});

const Meetings1 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(108, 170, 226, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `256px`,
  height: `18.5px`,
  position: `absolute`,
  left: `0px`,
  top: `266px`,
});

const DoneDeals1 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(108, 170, 226, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `256px`,
  height: `18.5px`,
  position: `absolute`,
  left: `0px`,
  top: `304px`,
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
  top: `0px`,
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
  top: `0px`,
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
  top: `40px`,
});

const InterestedB = styled("div")({
  backgroundColor: `rgba(217, 217, 217, 1)`,
  borderRadius: `25px`,
  width: `151.27px`,
  height: `80px`,
  position: `absolute`,
  left: `412px`,
  top: `158px`,
});

const NotInterestedB = styled("div")({
  backgroundColor: `rgba(217, 217, 217, 1)`,
  borderRadius: `25px`,
  height: `80px`,
  width: `181px`,
  position: `absolute`,
  left: `569px`,
  top: `157px`,
});

const AnswerB = styled("div")({
  backgroundColor: `rgba(217, 217, 217, 1)`,
  borderRadius: `25px`,
  height: `80px`,
  width: `151.27px`,
  position: `absolute`,
  left: `756px`,
  top: `157px`,
});

const ALLB = styled("div")({
  backgroundColor: `rgb(76,130,181)`,
  borderRadius: `25px`,
  height: `80px`,
  width: `151.27px`,
  position: `absolute`,
  left: `831px`,
  top: `66px`,
});

const NoAnswerB = styled("div")({
  backgroundColor: `rgba(217, 217, 217, 1)`,
  borderRadius: `25px`,
  height: `80px`,
  width: `151.27px`,
  position: `absolute`,
  left: `913px`,
  top: `157px`,
});

const FollowUPB = styled("div")({
  backgroundColor: `rgba(217, 217, 217, 1)`,
  borderRadius: `25px`,
  height: `80px`,
  width: `151.27px`,
  position: `absolute`,
  left: `1070px`,
  top: `157px`,
});

const VisitsB = styled("div")({
  backgroundColor: `rgba(217, 217, 217, 1)`,
  borderRadius: `25px`,
  height: `80px`,
  width: `151.27px`,
  position: `absolute`,
  left: `838px`,
  top: `254px`,
});

const MeetingsB = styled("div")({
  backgroundColor: `rgba(217, 217, 217, 1)`,
  borderRadius: `25px`,
  height: `80px`,
  width: `151.27px`,
  position: `absolute`,
  left: `681px`,
  top: `254px`,
});

const DoneDealsB = styled("div")({
  backgroundColor: `rgba(217, 217, 217, 1)`,
  borderRadius: `25px`,
  height: `80px`,
  width: `151.27px`,
  position: `absolute`,
  left: `995px`,
  top: `254px`,
});

const ReservationsB = styled("div")({
  backgroundColor: `rgba(217, 217, 217, 1)`,
  borderRadius: `25px`,
  height: `80px`,
  width: `174px`,
  position: `absolute`,
  left: `1227px`,
  top: `157px`,
});

const Interested2 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(76, 130, 181, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `295px`,
  height: `38px`,
  position: `absolute`,
  left: `341px`,
  top: `178px`,
});

const NotInterested2 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(76, 130, 181, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `253.11px`,
  height: `19px`,
  position: `absolute`,
  left: `532px`,
  top: `178px`,
});

const Answer2 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(76, 130, 181, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `253.11px`,
  height: `19px`,
  position: `absolute`,
  left: `705px`,
  top: `178px`,
});

const NoAnswer2 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(76, 130, 181, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `253.11px`,
  height: `19px`,
  position: `absolute`,
  left: `862px`,
  top: `178px`,
});

const FollowUp2 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(76, 130, 181, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `253.11px`,
  height: `19px`,
  position: `absolute`,
  left: `1019px`,
  top: `178px`,
});

const Reservations2 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(76, 130, 181, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `253.11px`,
  height: `19px`,
  position: `absolute`,
  left: `1187px`,
  top: `178px`,
});

const Visits2 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(76, 130, 181, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `253.11px`,
  height: `19px`,
  position: `absolute`,
  left: `786px`,
  top: `270px`,
});

const All = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(217, 217, 217, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `253.11px`,
  height: `19px`,
  position: `absolute`,
  left: `780px`,
  top: `85px`,
});

const Meetings2 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(76, 130, 181, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `253.11px`,
  height: `19px`,
  position: `absolute`,
  left: `630px`,
  top: `275px`,
});

const DoneDeals2 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(76, 130, 181, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `253.11px`,
  height: `19px`,
  position: `absolute`,
  left: `943px`,
  top: `275px`,
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
  top: `27px`,
});

const Ellipse1 = styled("img")({
  height: `58px`,
  width: `58px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
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
  top: `16px`,
});

const Arrow1 = styled("img")({
  height: `auto`,
  width: `auto`,
  position: `absolute`,
  left: `253px`,
  top: `31px`,
});

const FreshLead1 = styled("div")({
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
  top: `56px`,
});
const Users_Fresh_Lead = () => {
  // Define a state variable to track the open/closed state of submenus
  const [isCustomersMenuOpen, setCustomersMenuOpen] = useState(false);
  const [isControlMenuOpen, setControlMenuOpen] = useState(null);
  const [isFreshLeadMenuOpen, setFreshLeadMenuOpen] = useState(null);
  const [username, setUsername] = useState(null);
  const [isDirectLeadMenuOpen, setDirectLeadMenuOpen] = useState(null);
  const [selectedRectangle, setSelectedRectangle] = useState(null);
  const [tableData, setTableData] = useState([]);
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
  
  setInterval(checkReminder, 100000)
  const [buttonColors, setButtonColors] = useState({
    1: "rgb(217,217,217)",
    2: "rgb(217,217,217)",
    3: "rgb(217,217,217)",
    4: "rgb(217,217,217)",
    5: "rgb(217,217,217)",
    6: "rgb(217,217,217)",
    7: "rgb(217,217,217)",
    8: "rgb(217,217,217)",
    9: "rgb(217,217,217)",
    10: "rgb(217,217,217)",
  });
  const [textColors, settextColors] = useState({
    1: "rgb(76,130,181)",
    2: "rgb(76,130,181)",
    3: "rgb(76,130,181)",
    4: "rgb(76,130,181)",
    5: "rgb(76,130,181)",
    6: "rgb(76,130,181)",
    7: "rgb(76,130,181)",
    8: "rgb(76,130,181)",
    9: "rgb(76,130,181)",
    10: "rgb(76,130,181)",
  });

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'first_name', headerName: 'First Name', width: 100 },
    { field: 'last_name', headerName: 'Last Name', width: 100 },
    { field: 'age', headerName: 'Age', type: 'number', width: 90 },
    { field: 'country', headerName: 'Country', width: 150 },
    { field: 'city', headerName: 'City', width: 150 },
    { field: 'zip_code', headerName: 'Zip Code', type: 'number', width: 90 },
    { field: 'phone_number', headerName: 'Phone Number', type: 'number', width: 150 },
    { field: 'phone_number_2', headerName: 'Phone Number 2', type: 'number', width: 150 },
    { field: 'email', headerName: 'Email', width: 255 },
    { field: 'comments', headerName: 'Comments', width: 255 },
  ];
  
const fetchData = (table) => {
  
  axios.get(`http://192.168.1.11/api.php?table=${table}`)
    .then(response => {
      const jsonData = response.data;

        // Set the data to the state
        setTableData(jsonData);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};
 
  const handleButtonClick = (buttonId, table) => {
    
      // Function to fetch data from the API based on the selected table
      
  
    setButtonColors((prevColors) => ({
      ...prevColors,
      [buttonId]: "rgb(76,130,181)",
      [selectedRectangle]: "rgb(217,217,217)",
    }));
    settextColors((prevColors) => ({
      ...prevColors,
      [buttonId]: "rgb(217,217,217)",
      [selectedRectangle]: "rgb(76,130,181)",
    }));
    setSelectedRectangle(buttonId);
    fetchData(table)
    };

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
    const arrowClicked = (clicked) => {
      
      
        
        
      
      if (clicked == "fresh_lead") {
       setFreshLeadMenuOpen(!isFreshLeadMenuOpen);
       document.getElementById("arrow_2").style.transition = "ease";
       document.getElementById("arrow_2").style.transitionDuration = "0.5s";
       document.getElementById("control").style.transition = "ease";
       document.getElementById("control").style.transitionDuration = "0.5s";
       document.getElementById("BUTTON").style.transition = "ease";
       document.getElementById("BUTTON").style.transitionDuration = "0.5s";
       if (isFreshLeadMenuOpen == true) {
       document.getElementById("arrow_2").style.transform = "rotate(360deg)";
       document.getElementById("control").style.top = "200px";
       document.getElementById("BUTTON").style.top = "300px";
     }
       else {
         document.getElementById("arrow_2").style.transform = "rotate(-180deg)";
         document.getElementById("control").style.top = "530px";
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
       if (isFreshLeadMenuOpen == true) {
         document.getElementById("control").style.top = "200px";
       }
       
       
     }
       else {
         if (isFreshLeadMenuOpen == true) {
           document.getElementById("control").style.top = "530px";
         }
         
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
        <Fresh_Lead>
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
            
            
          
  
  
                  
  
            <DirectLeadMenu name="fresh_lead">
                  
                  
                  <Link to="/admins/direct-lead">
                    <FreshLead onClick={() => controlPage()}>{`Direct Lead`}</FreshLead></Link>

                </DirectLeadMenu>
              
                <FreshLeadMenu id="fresh_lead">
                    <FreshLead
                    onClick={() => {
                      handleButtonClick("4", "fresh_lead");
                    }}>{`Fresh Lead`}</FreshLead>
                    <Arrow2
                  id="arrow_2"
                  src={Arrow2Image}
                  loading="lazy"
                  alt={"Arrow 3"} 
                  onClick={() => arrowClicked("fresh_lead")}/>



                  {isFreshLeadMenuOpen && ( // Render submenu items only if isSubMenuOpen is true
                    <SubMenus1 id="sub_menus1">
                      <Interested1
                      onClick={() => {
                        handleButtonClick("1", "fresh_lead_interested_customers");
                      }}>{`Interested`}</Interested1>
                      <NotInterested1
                      onClick={() => {
                        handleButtonClick("2", "fresh_lead_not_interested_customers");
                      }}>{`Not Interested`}</NotInterested1>
                      <Answer1
                      onClick={() => {
                        handleButtonClick("3", "fresh_lead_answer_customers");
                      }}>{`Answer`}</Answer1>
                      <NoAnswer1
                      onClick={() => {
                        handleButtonClick("5", "fresh_lead_no_answer_customers");
                      }}>{`No Answer`}</NoAnswer1>
                      <FollowUp1
                      onClick={() => {
                        handleButtonClick("6", "fresh_lead_follow_up_customers");
                      }}>{`Follow UP1`}</FollowUp1>
                      <Reservations1
                      onClick={() => {
                        handleButtonClick("10", "fresh_lead_reservations_customers");
                      }}>{`Reservations`}</Reservations1>
                      <Visits1
                      onClick={() => {
                        handleButtonClick("8", "fresh_lead_meetings_customers");
                      }}>{`Visits`}</Visits1>
                      <Meetings1
                      onClick={() => {
                        handleButtonClick("8", "fresh_lead_visits_customers");
                      }}>{`Meetings`}</Meetings1>
                      <DoneDeals1
                      onClick={() => {
                        handleButtonClick("9", "fresh_lead_deals_done_customers");
                      }}>{`Done Deals`}</DoneDeals1>
                    </SubMenus1>
                  )}
                </FreshLeadMenu>
            
                </CustomersMenu>
             )}
              
          </Customers>
          <Control id="control">
          
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
          <Link to="/admins/dashboard">
        <Dashboard2 onClick={() => controlPage()}>{`Dashboard`}</Dashboard2></Link>
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
      <TableContainer>
      <InterestedB
        id="1"
        onClick={() => {
          handleButtonClick("1", "fresh_lead_interested_customers");
        }}
        style={{ backgroundColor: buttonColors["1"] }}
      ></InterestedB>
      <NotInterestedB
        id="2"
        onClick={() => {
          handleButtonClick("2", "fresh_lead_not_interested_customers");
        }}
        style={{ backgroundColor: buttonColors["2"] }}
      ></NotInterestedB>
      <AnswerB
        id="3"
        onClick={() => {
          handleButtonClick("3", "fresh_lead_answer_customers");
        }}
        style={{ backgroundColor: buttonColors["3"] }}
      ></AnswerB>
      <ALLB
        id="4"
        onClick={() => {
          handleButtonClick("4", "fresh_lead");
        }}
        style={{ backgroundColor: buttonColors["4"] }}
      ></ALLB>
      <NoAnswerB
        id="5"
        onClick={() => {
          handleButtonClick("5", "fresh_lead_no_answer_customers");
        }}
        style={{ backgroundColor: buttonColors["5"] }}
      ></NoAnswerB>
      <FollowUPB
        id="6"
        onClick={() => {
          handleButtonClick("6", "fresh_lead_follow_up_customers");
        }}
        style={{ backgroundColor: buttonColors["6"] }}
      ></FollowUPB>
      <VisitsB
        id="7"
        onClick={() => {
          handleButtonClick("7", "fresh_lead_visits_customers");
        }}
        style={{ backgroundColor: buttonColors["7"] }}
      ></VisitsB>
      <MeetingsB
        id="8"
        onClick={() => {
          handleButtonClick("8", "fresh_lead_meetings_customers");
        }}
        style={{ backgroundColor: buttonColors["8"] }}
      ></MeetingsB>
      <DoneDealsB
        id="9"
        onClick={() => {
          handleButtonClick("9", "fresh_lead_deals_done_customers");
        }}
        style={{ backgroundColor: buttonColors["9"] }}
      ></DoneDealsB>
      <ReservationsB
        id="10"
        onClick={() => {
          handleButtonClick("10", "fresh_lead_reservations_customers");
        }}
        style={{ backgroundColor: buttonColors["10"] }}
      ></ReservationsB>

      <Interested2
        id="1"
        style={{ color: textColors["1"] }}
      >{`Interested`}</Interested2>
      <NotInterested2
        id="2"
        style={{ color: textColors["2"] }}
      >{`Not Interested`}</NotInterested2>
      <Answer2 id="3" style={{ color: textColors["3"] }}>{`Answer`}</Answer2>
      <NoAnswer2
        id="5"
        style={{ color: textColors["5"] }}
      >{`No Answer`}</NoAnswer2>
      <FollowUp2
        id="6"
        style={{ color: textColors["6"] }}
      >{`Follow UP`}</FollowUp2>
      <Reservations2
        id="10"
        style={{ color: textColors["10"] }}
      >{`Reservations`}</Reservations2>
      <Visits2 id="7" style={{ color: textColors["7"] }}>{`Visits`}</Visits2>
      <All id="4" style={{ color: textColors["4"] }}>{`ALL`}</All>
      <Meetings2
        id="8"
        style={{ color: textColors["8"] }}
      >{`Meetings`}</Meetings2>
      <DoneDeals2
        id="9"
        style={{ color: textColors["9"] }}
      >{`Done Deals`}</DoneDeals2>
      return (
      <div style={{ height: '40vh', width: '60vw', position: 'absolute', alignItems: 29, top: 400, left: 400, backgroundColor: 'white', borderRadius: 25}}>
      <DataGrid
          rows={tableData}
          columns={columns}
        />
      </div>
  );
      </TableContainer>
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
      <FreshLead1>{`Fresh Lead`}</FreshLead1>
    </Fresh_Lead>
      );
    };
    
    export { Users_Fresh_Lead };
