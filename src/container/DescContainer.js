import React, { Component } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Description from '../components/Description/Description'
import Map from '../components/Map/Map'

class DescContainer extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Description />
                <Map />
                <Footer />
            </React.Fragment>
        )
    }
}

export default DescContainer
