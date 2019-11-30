import React, { Component } from 'react'
import { Wrapper } from './StyleSubHeader'

export class SubHeader extends Component {
    render() {
        return (
            <Wrapper>
                <img src={require('./main.png')} />
                <div>
                    <h2>NOMARD CODER</h2>
                    <span>- 더 이상은 혼자가 아닙니다.</span>
                </div>
            </Wrapper>
        )
    }
}

export default SubHeader
