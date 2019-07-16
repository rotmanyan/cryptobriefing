import React, {Component} from 'react';
import './projectProfile.scss'
import {connect} from "react-redux";
import * as selectors from 'data/dashboard/selectors'
import * as selector from 'data/signUser/selectors'
import ProjectProfileHeader from "./components/projectProfileHeader/ProjectProfileHeader";
import ProjectProfileBody from "./components/projectProfileBody/ProjectProfileBody";
import {Redirect} from "react-router-dom";

class ProjectProfile extends Component {
  render() {
    const {coin, description, news, loadingPage, isAuthenticated} = this.props

    if (loadingPage === 'success') {
      return <>
        <div className="wrapper--projectProfile">
          <ProjectProfileHeader
            coin={coin}
            isAuthenticated={isAuthenticated}
          />
          <div className='wrapper--default'>
            <div className="container projectAbout__container">
              <ProjectProfileBody description={description} news={news} coin={coin}/>
            </div>
          </div>
        </div>
      </>
    }
    if (loadingPage === 'fetching') {
      return <div className='minHeightRoller'>
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    }
    if (loadingPage === 'default') {
      return <Redirect to='/dashboard'/>
    } else {
      return <Redirect to='/dashboard'/>
    }
  }
}

const mapStateToProps = state => ({
  coin: selectors.coin(state),
  news: selectors.news(state),
  description: selectors.description(state),
  keyStatistics: selectors.keyStatistics(state),
  loadingPage: selectors.loadingDetails(state),
  isAuthenticated: selector.isAuthenticated(state)
})

export default connect(mapStateToProps)(ProjectProfile)