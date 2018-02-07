import React, {Component} from 'react';
import styled from 'styled-components';
import Color from './Color';

export default class Main extends Component {
  render() {
    const {colors, deleteColor} = this.props;
    return (
      <Container>
        {colors.map((color) => <Color key={color.id} deleteColor={deleteColor} {...color}/>)}
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

