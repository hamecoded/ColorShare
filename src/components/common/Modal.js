import React, {Component} from 'react';
import styled from 'styled-components';

export default class Modal extends Component {
  render() {
    const {isOpen, children, toggleModal} = this.props;

    return (
      <Overlay isOpen={isOpen}>
        <Inner>
          <CloseButton onClick={toggleModal}>
            <i className="fa fa-close"/>
          </CloseButton>
          {children}
        </Inner>
      </Overlay>
    );
  }
}

const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.3);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 500ms;
  visibility: ${(props) => props.isOpen ? 'visible' : 'hidden'};
  opacity: ${({isOpen}) => isOpen ? '1' : '0'};
  pointer-events: none;
`;

const Inner = styled.div`
  width: 400px;
  height: 300px;
  background: #fff;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 50px;
  pointer-events: all;
  position: relative;
`;


const CloseButton = styled.div`
  width: 20px;
  height: 20px;
  background: #fff;
  box-sizing: border-box;
  pointer-events: all;
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 20px;
  cursor: pointer;
  
`;