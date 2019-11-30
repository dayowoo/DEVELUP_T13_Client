  
import React, { Component } from "react";
import "./Map.css";

export class Map extends Component {
  render() {
    return (
    <div className="Map">
        <div className='Map_info'>
            <h1>장소</h1>
            <h4>어글리 스토브 라스트리트점</h4>
            <h2>상세주소</h2>
            <h5>경기 성남시 분당구 판교역로 145 라스트리트 2동 2층</h5>
            <div className="road">
            <a href="#" className="btn btn-rounded">지번</a>
            <p>백현동 530 (우) 13530</p>
            </div>
        </div>
        <div className='img2'></div>
    </div>
    );
  }
}

export default Map;