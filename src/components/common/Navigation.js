import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

class Navigation extends Component {

  render() {
    const {toggleModal, name} = this.props;

    return (
      <Container>
        <div>Colorshare</div>
        <RightArea>
          <div>Hello {name}</div>
          <AddButton onClick={toggleModal}>Add</AddButton>
        </RightArea>
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

const RightArea = styled.div`
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
  margin-left: 20px;
  
  &:hover {
    box-shadow: 0px 2px 12px -1px rgba(0,0,0,0.54);   
  }
`;


const mapStateToProps = (state, ownProps) => ({
  name: state.user.name
});

//first call receives mapStateToProps and mapDispatchToProps
export default connect(mapStateToProps)(Navigation);

