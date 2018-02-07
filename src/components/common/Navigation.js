import React, {Component} from 'react';
import styled from 'styled-components';

export default class Navigation extends Component {

  render() {
    const {toggleModal} = this.props;

    return (
      <Container>
        <div>Colorshare</div>
        <AddButton onClick={toggleModal}>Add</AddButton>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100vw;
  height: 60px;
  box-shadow: 0px 2px 12px -1px rgba(0,0,0,0.2);   
  box-sizing: border-box;
  padding: 20px 100px; 
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AddButton = styled.div`
  width: 100px;
  height: 40px;
  background: #444;
  color: white;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 300ms;
  
  &:hover {
    box-shadow: 0px 2px 12px -1px rgba(0,0,0,0.54);   
  }
`;


