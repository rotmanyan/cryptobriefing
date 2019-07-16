import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';

import {NavigationView} from './NavigationView';

class Navigation extends Component {


  render() {
    const {location: {state}} = this.props;
    return (
      <>
        {
          state && state.hideNavigation ? <Link className='admin__back-btn'
                                                to={`${state.redirectToUsers
                                                  ? '/admin/users'
                                                  : '/admin/article'}`}>Back</Link> :
            <NavigationView props={this.props}/>
        }
      </>
    );
  }
}

export default withRouter(Navigation);