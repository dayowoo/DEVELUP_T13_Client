import React, { Component } from "react";
import {
  Positioner,
  WhiteBackground,
  HeaderContent,
  Item,
  User,
  UserItem,
  Spacer,
  Logo
} from "./StyleHeader";
import { Link } from 'react-router-dom'
import ImageLogo from "../../assets/logo.png";
class Header extends Component {
  render() {
    return (
      <Positioner>
        <WhiteBackground>
          <HeaderContent>
            <Spacer />
            <Item>모임 둘러보기</Item>
            <Item><Link to="/CreaGrp" style={{textDecoration: "none", color: "black"}}>모임 만들기</Link></Item>
            <Spacer />
            <Link to="/"><Logo src="https://lh6.googleusercontent.com/15FVyWEAZtPFBUMxTL4f_x9JPF0rYFSsG5SS1VJo7_LNXOrjDiE51j6K0H3s6lPrO7gZYcKOK70APtFoX4eNAj6ze5Tz6cABzGxUN0D4SpJvIYxqo3SW3RpVsQutA3T7Snl_ORbCrSE" width="120" /></Link>
            <Spacer />
            <Item style={{marginRight: 10}}><Link to="/login" style={{textDecoration: "none", color: "black"}}>로그인</Link></Item>
            <span style={{fontWeight: 700}}>/</span>
            <Item style={{marginLeft: 10}}>회원가입</Item>
            <Spacer />
          </HeaderContent>
        </WhiteBackground>
      </Positioner>
    );
  }
}

export default Header;
