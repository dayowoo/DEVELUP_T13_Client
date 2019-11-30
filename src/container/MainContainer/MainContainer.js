import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Login from '../../components/Login/Login'
import SubHeader from '../../components/SubHeader/SubHeader'
import LastedList from '../../components/LastedList/LastedList'
import Event from '../../components/Event/Event'
import Footer from '../../components/Footer/Footer'

class MainContainer extends Component {
    render() {
        return (
           <React.Fragment>
               <Header />
               <SubHeader />
               <LastedList />
               <Event />
               <LastedList />
               <LastedList />
               <Footer />
           </React.Fragment>
        )
    }
}

export default MainContainer
