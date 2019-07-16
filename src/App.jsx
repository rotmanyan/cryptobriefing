import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as selectors from './data/signUser/selectors';
import * as selector from './data/dashboard/selectors';
import './styles/global.scss';

import LoginPage from './pages/loginPage/LoginPage';
import SignUp from './pages/signUp/SignUp';
import TickerNews from './components/tickerNews/TickerNews';
import Footer from './components/footer/Footer';
import Header from './pages/header/Header';
import Body from './pages/body/Body';
import ForgotPassword from './components/forgotPassword/ForgotPassword';
import ForgotNewPassword from './components/forgotNewPassword/ForgotNewPassword';
import SendMessage from './components/sendMessage/SendMessage';
import { getNewsTicker } from './data/dashboard/operation';

class App extends Component {
  state = {
    isVisible: this.props.isResetPassword ? 'forgotNewPassword' : null,
    coinLastPrices: [],
  };

  componentDidMount() {
    const { getNews } = this.props;
    getNews();
  }

  handleVisible = event => {
    this.setState({
      isVisible:
        event && event.target && event.target.value ? event.target.value : null,
    });
  };

  redirectSingUp = () => {
    this.setState({ isVisible: 'signUp' });
  };

  redirectForgot = () => {
    this.setState({ isVisible: 'forgot' });
  };

  loginForm = () => {
    if (this.state.isVisible === 'login')
      return (
        <LoginPage
          redirectForgot={this.redirectForgot}
          redirectSingUp={this.redirectSingUp}
          handleVisible={this.handleVisible}
        />
      );
    if (this.state.isVisible === 'signUp')
      return <SignUp handleVisible={this.handleVisible} />;
    if (this.state.isVisible === 'forgot')
      return <ForgotPassword handleVisible={this.handleVisible} />;
    if (this.state.isVisible === 'forgotNewPassword')
      return <ForgotNewPassword handleVisible={this.handleVisible} />;
    if (this.state.isVisible === 'sendMessage')
      return <SendMessage handleVisible={this.handleVisible} />;
    if (this.state.isVisible === 'buyCoin') return '';
    if (this.state.isVisible === 'sellCoin') return '';
  };

  render() {
    return (
      <div className='wrapper'>
        <TickerNews />
        {this.loginForm()}
        <Header handleVisible={this.handleVisible} />
        <Body />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isResetPassword: selectors.isResetPassword(state),
  loader: selector.loader(state),
});

const mapDispatchToProps = {
  getNews: getNewsTicker,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false },
)(App);
