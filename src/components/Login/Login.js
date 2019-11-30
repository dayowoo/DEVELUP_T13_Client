import React, { Component } from "react";
import { Signin, Wrapper, Desc, FindPw, Register } from "./StyleLogin";

class Login extends Component {
  render() {
    return (
      <Signin>
        <Wrapper>
          <h1>로그인</h1>
          <p>고객님의 소중한 정보를 위해 주소창을 체크해주세요</p>
          {/* <div className="c-signin__wrapper--info">
            <div className="c-signin__wrapper--info__wrapper">
              <Lock />
              <span>https://domain.co.kr</span>
              <strong>자물쇠를 확인해주세요.</strong>
            </div>
          </div> */}
          <form >
            {/* onSubmit={this.onSubmit} */}
            <input
              name="id"
              type="id"
              placeholder="EMAIL"
              // value={this.state.id}
              // onChange={this.onChange}
            />
            <input
              name="password"
              type="password"
              placeholder="PASSWORD"
              // value={this.state.password}
              // onChange={this.onChange}
            />
            <button type="submit">로그인</button>
          </form>
          <Desc>
            <FindPw />
            <Register
              className="c-signin__wrapper--desc__regist"
              style={{cursor: "pointer"}}
            >
              <span style={{
                color: "black"
              }}>계정이 없으신가요?</span> 회원가입
            </Register>
          </Desc>
        </Wrapper>
      </Signin>
    );
  }
}

export default Login;
