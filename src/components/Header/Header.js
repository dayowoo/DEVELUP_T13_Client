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
import ImageLogo from "../../assets/logo.png";
class Header extends Component {
  render() {
    return (
      <Positioner>
        <WhiteBackground>
          <HeaderContent>
            <Spacer />
            <Item>모임 둘러보기</Item>
            <Item>모임 만들기</Item>
            <Spacer />
            <Logo src={ImageLogo} />
            <Spacer />
            <Item style={{marginRight: 10}}>로그인</Item>
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
