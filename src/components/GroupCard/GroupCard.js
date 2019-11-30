import React, { Component } from "react";
import { Wrapper, Inner } from "./StyleGroupCard";

class GroupCard extends Component {
  render() {
    return (
      <Wrapper>
        <Inner>
          <img src="https://tumblbug-pci.imgix.net/690c9f262a25131d07655e5589af183e6e51bf02/faab4d86866b9724aa317df74b61ff7942adf8e7/b046f3ff62b06057b143e4318d0d9fbe5756e919/46f059ad-d52d-4e99-8893-b4879d616c72.jpg?ixlib=rb-1.1.0&w=620&h=465&auto=format%2Ccompress&lossless=true&fit=crop&s=e113daaae48ce72ed93734823d829346" />
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
