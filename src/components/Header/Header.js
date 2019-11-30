import React, { Component } from 'react'
import { Positioner, WhiteBackground, HeaderContent } from './StyleHeader'

class Header extends Component {
    render() {
        return (
            <Positioner>
                <WhiteBackground>
                    <HeaderContent>
                        헤더
                    </HeaderContent>
                </WhiteBackground>
            </Positioner>
        )
    }
}

export default Header
