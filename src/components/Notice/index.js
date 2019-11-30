import React, { Component } from 'react'
import './notice.css'

const Notice = () => (
    <div style= {{
        backgroundColor: "#f1f9ff",
    }}>
        <div style={{
            flex: 2,
            marginLeft: "20px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <img style={{
                paddingTop: "80px",
                paddingBottom: "10px",
                display: "table",
                marginLeft: "auto",
                marginRight: "auto",
            }} 
            src="https://tumblbug-assets.imgix.net/collections/banner_images/000/000/280/original/banner_nekoze.png?w=352" 
            width="600px 280px" />
        </div>
        <div style={{
            display: "table",
            marginLeft: "auto",
            marginRight: "auto",
        }}>
            <h1>온라인에서 만나는 네코제, 네코장 할 사람 모여라!!</h1>
        </div>
        <div style={{
            display: "block",
            marginLeft: "1100px",
            marginRight: "auto",
            marginTop: "0px",
            maginBottom: "0px",
        }}>
            <h5>2019-12-01.AM 3:40</h5>
        </div>
        <div>
            <p style={{
                display: "table",
                marginLeft: "auto",
                marginRight: "auto",
            }}>
            네코제 가는 방법이 궁금해?
            넥슨 무료셔틀버스 타고 넥슨사옥으로 놀러와!!
            <br/>
            셔틀버스 시간표 --> 
            <a href = "https://i.nx.com/6eX ">https://i.nx.com/6eX</a>
            <br/>
            네코제8은 무료입장이야
            넥슨사옥 던전 오픈 임박!
            <br/>
            #네코제 #네코제_QUEST
            #네코제8_넥슨사옥
            </p>
        </div>
    </div>
);

export default Notice;

