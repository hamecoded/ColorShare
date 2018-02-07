import React, {Component} from 'react';
import styled from 'styled-components';
import Color from './Color';
import {connect} from 'react-redux';
import {remove as removeColorAction} from '../../redux/actions/colorListActions';


class Main extends Component {
  render() {
    const {colors, removeColorAction} = this.props;
    return (
      <Container>
        {colors.map((color) => <Color key={color.id} deleteColor={removeColorAction} {...color}/>)}
      </Container>
    );
  }
}

const Container = styled.div`
  box-sizing: border-box;
  padding: 100px 100px 0 100px;
  min-height: calc( 100vh - 60px );
  flex-flow: row wrap;
  justify-content: space-between;
  display: flex;
  align-content: flex-start;
`;

const mapStateToProps = (state, ownProps) => ({
  colors: state.color.colors
});


//first call receives mapStateToProps and mapDispatchToProps
export default connect(mapStateToProps, {
  removeColorAction
})(Main);
