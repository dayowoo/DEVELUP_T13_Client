import React, { Component } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import CreaGrop from '../components/CreaGrop/CreaGrop'

class CreaGrpContainer extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <CreaGrop />
                <Footer />
            </React.Fragment>
        )
    }
}

export default CreaGrpContainer
