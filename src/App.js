import React, {Component} from 'react';
import styled from 'styled-components';
import Navigation from './components/common/Navigation';
import Main from './components/common/Main';
import ColorModal from './components/common/ColorModal';
/**\
 * added redux and did connect:
 * ColorModal: connect so we could dispatch add action
 * Main: connect so we can read entire state and dispatch remove coming in from Main
 */
import {Provider} from 'react-redux';
import store from './redux/store';


export default class App extends Component {
  state = {
    open: false
  };

  toggleModal = () => {
    this.setState({open: !this.state.open})
  };

  render() {
    const {open} = this.state;
    return (
      <Provider store={store}>
        <Container>
          <Navigation toggleModal={this.toggleModal}/>
          <Main/>
          <ColorModal isOpen={open} toggleModal={this.toggleModal}/>
        </Container>
      </Provider>
    );
  }
}

const Container = styled.div`
  background: #e0e0e0;
`;
