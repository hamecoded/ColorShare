import React, {Component} from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import {connect} from 'react-redux';
import {add as addColorAction} from '../../redux/actions/colorListActions';


class ColorModal extends Component {
  addNewColor = () => {
    const value = this.newColorInpEl.value;

    this.props.addColorAction(value);
    this.props.toggleModal();
  };

  render() {
    const {isOpen, toggleModal} = this.props;
    return (
      <Modal isOpen={isOpen} toggleModal={toggleModal}>
        <Inner>
          <Label>add new color</Label>
          <Body>
          <Input innerRef={(el) => this.newColorInpEl = el}/>
          <Button onClick={this.addNewColor}>add new</Button>
          </Body>
        </Inner>
      </Modal>
    );
  }
}

const Body = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 100%;
  flex-direction: column;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  flex: 4;  
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid #e0e0e0;
  padding: 0 20px;
  box-sizing: border-box;
  font-size: 16px;
  height: 40px;
  margin-bottom: 4px;
  transition: all 300ms;
  
  &:focus { 
    outline: none;
    border-color: #444;
  }
`;

const Label = styled.div`
  text-transform: uppercase;
  height:40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

const Button = styled.div`
  background: #444;
  width: 100%;
  height: 40px;
  text-transform: uppercase;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 300ms;
   
  &:hover {
    box-shadow: 0px 2px 12px -1px rgba(0,0,0,0.54);   
  }
`;

// we used second param is mapDispatchToProps
export default connect(undefined, {
  addColorAction
})(ColorModal);