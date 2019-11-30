import React, { Component } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Notice from "../components/Notice"

class EventDescContainer extends Component {
    render() {
        return (
            <div>
                <Header />
                <Notice/>
                <Footer />
            </div>
        )
    }
}

export default EventDescContainer;
