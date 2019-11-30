  
import React, { Component } from "react";
import "./Description.css";

export class Description extends Component {
  render() {
    return (
    <div className="Wrapper">
        <div className='img'></div>
        <div className='info'>
            <a href="#" className="btn2 btn-rounded">진행중</a>
            <h1>Front-End</h1>
            <h4>리액트 개발</h4>
            <h1>한성민</h1>
            <p>기술스택</p>
            <h5>React</h5>
            <p>참여자 수</p>
            <h5>16명</h5>
            <p>위치</p>
            <h5>판교역 4번 출구 OO카페</h5>
            <p>시간</p>
            <h5>00:00 ~ 00:00</h5>
            <a href="#" className="btn btn-rounded">참여하기</a>
        </div>
    </div>
    );
  }
}

export default Description;