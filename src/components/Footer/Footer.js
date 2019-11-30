  
import React, { Component } from "react";
import "./Footer.css";

export class Footer extends Component {
  render() {
    return (
      <div className="place" >
        <div className="footWrap" style={{paddingTop: "20px", paddingBottom: "20px"}}>
          <div className="footCenter">
            <div className="foot_menu">
              <section className="_ng">
                <div className="group">
                  <div className="tit">Front-end</div>
                  <li className="list">권희준</li>
                  <li>OOO</li>
                  <li>OOO</li>
                </div>
              </section>
              <section className="_ng">
                <div className="group">
                  <div className="tit">Designer</div>
                  <li>OOO</li>
                </div>
              </section>
              <section className="_ng">
                <div className="group">
                  <div className="tit">Back-end</div>
                  <li>김한비</li>
                </div>
              </section>
              <div className="na">
                <li>
                  <img src="https://lh6.googleusercontent.com/15FVyWEAZtPFBUMxTL4f_x9JPF0rYFSsG5SS1VJo7_LNXOrjDiE51j6K0H3s6lPrO7gZYcKOK70APtFoX4eNAj6ze5Tz6cABzGxUN0D4SpJvIYxqo3SW3RpVsQutA3T7Snl_ORbCrSE" style={{width: "200px",height: "100px"}} />
                </li>
              </div>
            </div>
            <div className="foot_address">
              <div className="foot-logo"></div>
              <div className="address">
                <hr></hr>
              </div>
              <p>© COPYRIGHT DEVELUP TEAM 13 _ NOMARD CODER</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;