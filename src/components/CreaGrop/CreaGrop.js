import React, { Component } from "react";
import {
  Wrapper,
  Header,
  Content,
  HeaderWrapper,
  ContentWrapper
} from "./StyleCreaGrop";

class CreaGrop extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <HeaderWrapper>
            <h2>모임 시작하기</h2>
            <span style={{ marginBottom: "20px" }}>
              모임 시작 전 반드시 확인해주세요
            </span>
            <rp />
            <p>NomadCoder는 공개 검토 절차를 통해 창작자님이 작성한 모임이</p>
            <p>NomadCoder의 정책을 준수하는지 확인하고 있습니다.</p>
            <p>아래 사항들을 확인한 후 프로젝트를 올려 주세요</p>
          </HeaderWrapper>
        </Header>
        <Content>
          <ContentWrapper>
            <p>새로운 아이디어를 실현하기 위한 프로젝트이다.</p>
            <p>
              모임 대표는 전화번호, 이메일 등 연락 가능한 본인 연락처가
              있습니다.
            </p>
            <p>모임 대표는 19세 이상 성인입니다.</p>
            <rp />
            <button>생성 진행하기</button>
          </ContentWrapper>
        </Content>
      </Wrapper>
    );
  }
}

export default CreaGrop;
