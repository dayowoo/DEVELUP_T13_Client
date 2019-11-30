import React, { Component } from 'react'
import EventDescContainer from '../container/EventDescContainer'
import Notice from "../components/Notice"

class EventDesc extends Component {
    render() {
        return <EventDescContainer><Notice/></EventDescContainer>
    }
}

export default EventDesc;
