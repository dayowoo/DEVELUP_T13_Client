import React, { Component } from "react";
import { Wrapper, Inner } from "./StyleGroupCard";

class GroupCard extends Component {
  render() {
    return (
      <Wrapper>
        <Inner>
          <img src={require('./card.png')} />
          <div>
            <h1>title</h1>
            <span>name</span>
            <h2 />
            <p>00시간 남음</p>
          </div>
        </Inner>
      </Wrapper>
    );
  }
}

export default GroupCard;
