import React, { Component } from "react";
import { Wrapper, Title, Inner, CardWrapper } from "./StyleLastedList";
import GroupCard from "../GroupCard/GroupCard";

class LastedList extends Component {
  render() {
    return (
      <Wrapper>
        <Inner>
          <Title>
            최근 올라온 모임
            <span>+ 더보기</span>
          </Title>
          <CardWrapper>
            <div>
              <GroupCard />
            </div>
            <div>
              <GroupCard />
            </div>
            <div>
              <GroupCard />
            </div>
            <div>
              <GroupCard />
            </div>
          </CardWrapper>
        </Inner>
      </Wrapper>
    );
  }
}

export default LastedList;
