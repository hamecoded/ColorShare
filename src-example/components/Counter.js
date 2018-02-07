import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add, subtract as sub } from '../redux/actions/counterActions';

class Counter extends Component {
  render() {
    const { counterValue, userName } = this.props;

    return (
      <div>
        counter: {counterValue}
        the user name is { userName }
        <div onClick={() => this.props.add()}>add</div>
        <div onClick={() => this.props.sub()}>sub</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counterValue: state.counter,
  userName: state.user.name
});

export default connect(mapStateToProps, {
  add,
  sub
})(Counter);