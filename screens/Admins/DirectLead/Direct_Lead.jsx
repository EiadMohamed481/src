import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { DataGrid } from '@mui/x-data-grid';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import Arrow2Image from "./Arrow_2.png";

import Arrow3Image from "./Arrow_3.png";

import Arrow4Image from "./Arrow_4.png";

import Ellipse1Image from "./Ellipse_1.png";

import Arrow1Image from "./Arrow_1.png";
import { styled } from "@mui/material/styles";

const TableContainer = styled("div")({
  marginTop: `200px`,
  alignItems: `center`
});

const Direct_Lead = styled("div")({
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
  top: `40px`
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
  top: `70px`,
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
  top: `0px`,
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

const DirectLead1 = styled("div")({
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
const AdminsDirect_Lead = () => {
  const [isCustomersMenuOpen, setCustomersMenuOpen] = useState(false);
  const [isControlMenuOpen, setControlMenuOpen] = useState(null);
  const [isFreshLeadMenuOpen, setFreshLeadMenuOpen] = useState(null);
  const [username, setUsername] = useState(null);
  const [isDirectLeadMenuOpen, setDirectLeadMenuOpen] = useState(null);
  const [selectedRectangle, setSelectedRectangle] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [status, setStatus] = useState(null);
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
    { field: 'notes', headerName: 'Notes', width: 255 },
    { field: 'comments', headerName: 'Comments', width: 255 },
  ];
  
const fetchData = (table) => {
  
  axios.get(`http://192.168.1.11/api.php?table=${table}&action_type=admin`)
    .then(response => {
      const jsonData = response.data;

        console.log(jsonData);
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
      
      
        
        
      
      if (clicked == "direct_lead") {
       setDirectLeadMenuOpen(!isDirectLeadMenuOpen);
       document.getElementById("arrow_3").style.transition = "ease";
       document.getElementById("arrow_3").style.transitionDuration = "0.5s";
       document.getElementById("control").style.transition = "ease";
       document.getElementById("control").style.transitionDuration = "0.5s";
       if (isDirectLeadMenuOpen == true) {
       document.getElementById("arrow_3").style.transform = "rotate(360deg)";
       document.getElementById("control").style.top = "200px";
     }
       else {
         document.getElementById("arrow_3").style.transform = "rotate(-180deg)";
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
       if (isDirectLeadMenuOpen == true) {
         document.getElementById("control").style.top = "200px";
       }
       
       
     }
       else {
         if (isDirectLeadMenuOpen == true) {
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
    <Direct_Lead>
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
              
                <DirectLeadMenu id="fresh_lead">
                  
                  
                  
                    <DirectLead
                    onClick={() => {
                      handleButtonClick("4", "direct_lead");
                    }}>{`Direct Lead`}</DirectLead>
                    <Arrow2
                  id="arrow_3"
                  src={Arrow2Image}
                  loading="lazy"
                  alt={"Arrow 3"} 
                  onClick={() => arrowClicked("direct_lead")}/>
                  {isDirectLeadMenuOpen && ( // Render submenu items only if isSubMenuOpen is true
                    <SubMenus1 id="sub_menus1">
                      <Interested1
                      onClick={() => {
                        handleButtonClick("1", "direct_lead_interested_customers");
                      }}>{`Interested`}</Interested1>
                      <NotInterested1
                      onClick={() => {
                        handleButtonClick("2", "direct_lead_not_interested_customers");
                      }}>{`Not Interested`}</NotInterested1>
                      <Answer1
                      onClick={() => {
                        handleButtonClick("3", "direct_lead_answer_customers");
                      }}>{`Answer`}</Answer1>
                      <NoAnswer1
                      onClick={() => {
                        handleButtonClick("5", "direct_lead_no_answer_customers");
                      }}>{`No Answer`}</NoAnswer1>
                      <FollowUp1
                      onClick={() => {
                        handleButtonClick("6", "direct_lead_follow_up_customers");
                      }}>{`Follow UP1`}</FollowUp1>
                      <Reservations1
                      onClick={() => {
                        handleButtonClick("10", "direct_lead_reservations_customers");
                      }}>{`Reservations`}</Reservations1>
                      <Visits1
                      onClick={() => {
                        handleButtonClick("8", "direct_lead_meetings_customers");
                      }}>{`Visits`}</Visits1>
                      <Meetings1
                      onClick={() => {
                        handleButtonClick("8", "direct_lead_visits_customers");
                      }}>{`Meetings`}</Meetings1>
                      <DoneDeals1
                      onClick={() => {
                        handleButtonClick("9", "direct_lead_deals_done_customers");
                      }}>{`Done Deals`}</DoneDeals1>
                    </SubMenus1>
                  )}
                </DirectLeadMenu>
            
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
      <TableContainer>
      <InterestedB
        id="1"
        onClick={() => {
          handleButtonClick("1", "direct_lead_interested_customers");
        }}
        style={{ backgroundColor: buttonColors["1"] }}
      ></InterestedB>
      <NotInterestedB
        id="2"
        onClick={() => {
          handleButtonClick("2", "direct_lead_not_interested_customers");
        }}
        style={{ backgroundColor: buttonColors["2"] }}
      ></NotInterestedB>
      <AnswerB
        id="3"
        onClick={() => {
          handleButtonClick("3", "direct_lead_answer_customers");
        }}
        style={{ backgroundColor: buttonColors["3"] }}
      ></AnswerB>
      <ALLB
        id="4"
        onClick={() => {
          handleButtonClick("4", "direct_lead");
        }}
        style={{ backgroundColor: buttonColors["4"] }}
      ></ALLB>
      <NoAnswerB
        id="5"
        onClick={() => {
          handleButtonClick("5", "direct_lead_no_answer_customers");
        }}
        style={{ backgroundColor: buttonColors["5"] }}
      ></NoAnswerB>
      <FollowUPB
        id="6"
        onClick={() => {
          handleButtonClick("6", "direct_lead_follow_up_customers");
        }}
        style={{ backgroundColor: buttonColors["6"] }}
      ></FollowUPB>
      <VisitsB
        id="7"
        onClick={() => {
          handleButtonClick("7", "direct_lead_visits_customers");
        }}
        style={{ backgroundColor: buttonColors["7"] }}
      ></VisitsB>
      <MeetingsB
        id="8"
        onClick={() => {
          handleButtonClick("8", "direct_lead_meetings_customers");
        }}
        style={{ backgroundColor: buttonColors["8"] }}
      ></MeetingsB>
      <DoneDealsB
        id="9"
        onClick={() => {
          handleButtonClick("9", "direct_lead_deals_done_customers");
        }}
        style={{ backgroundColor: buttonColors["9"] }}
      ></DoneDealsB>
      <ReservationsB
        id="10"
        onClick={() => {
          handleButtonClick("10", "direct_lead_reservations_customers");
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
      <DirectLead1>{`Direct Lead`}</DirectLead1>
    </Direct_Lead>
  );
};

export { AdminsDirect_Lead };
