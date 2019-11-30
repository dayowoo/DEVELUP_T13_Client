import React, { Component } from "react";
import { Wrapper, Inner, Box } from "./StyleEvent";
import { Link } from 'react-router-dom';

class Event extends Component {
  render() {
    return (
      <Wrapper>
        <Inner>
          <h1>현재 진행중인 이벤트</h1>
          <div>
          <Link to="/EventDesc">
            <Box>
              <div
                style={{
                  flex: 2,
                  marginLeft: "20px",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <h1 style={{ marginTop: "0px" }}>이벤트 이름</h1>
                <span
                  style={{
                    width: "20%",
                    height: 1,
                    borderBottom: "2.5px solid black",
                    marginRight: "auto"
                  }}
                />
                <span style={{ marginRight: "auto", marginTop: "15px" }}>
                  2019.00.00
                </span>
              </div>
              <img
                src="https://tumblbug-assets.imgix.net/collections/banner_images/000/000/280/original/banner_nekoze.png?w=352"
                width="176"
              />
            </Box>
            </Link>
            <Link to="/EventDesc"><Box>
              <div
                style={{
                  flex: 2,
                  marginLeft: "20px",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <h1 style={{ marginTop: "0px" }}>이벤트 이름</h1>
                <span
                  style={{
                    width: "20%",
                    height: 1,
                    borderBottom: "2.5px solid black",
                    marginRight: "auto"
                  }}
                />
                <span style={{ marginRight: "auto", marginTop: "15px" }}>
                  2019.00.00
                </span>
              </div>
              <img src={require('./event.png')} 
                width="176"
              />
            </Box>
            </Link>
          </div>
        </Inner>
      </Wrapper>
    );
  }
}

export default Event;
